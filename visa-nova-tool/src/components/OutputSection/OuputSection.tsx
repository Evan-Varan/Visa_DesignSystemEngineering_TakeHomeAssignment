import { visaComponents } from "./visaComponents";
import type { ComponentVariant } from "./visaComponents";
import { Component, useState, useEffect } from "react";
import { Button } from '@visa/nova-react';
type Props = {
    searchTerm: string;
  };

function OutputSection({searchTerm}: Props){

    const [matchedComponent, setMatchedComponent] = useState<ComponentVariant | null>(null);

    useEffect(() => { //we use useEffect so we only run each time after searchTerm renders
        const words = searchTerm.toLowerCase().split(/\s+/) //regex to split by each space character
        let foundComponent : ComponentVariant | null = null;

        
        visaComponents.forEach((component) => {
            // Top Level Search (ie button, table, panel )
            const componentMatch = words.some((word) =>
            component.keywords.some((k) => k.toLowerCase() === word)
            );

            // If user specifies a specific variant (ie icon button)
            const variantMatch = component.variants.find((v) =>
            words.some((word) =>
                v.keywords.some((vk) => vk.toLowerCase() === word)
            )
            );

            if (variantMatch) {
                foundComponent = variantMatch;
            } else if (componentMatch) {
                
            //if user isnt super specific and say "button" return the default 
            const defaultVariant = component.variants.find((v) => v.isDefault);
            if (defaultVariant) {
                foundComponent = defaultVariant;
            }
            }
        });
    setMatchedComponent(foundComponent);
    },[searchTerm]) //search term is the dependancy array.

    return (
        <div>
          {matchedComponent && (
            <>
              <p>
                Your search of "{searchTerm}" returned: <strong>{matchedComponent.secondaryName}</strong>
              </p>
              <div>
                <p>Code for the {matchedComponent.secondaryName}:</p>
                <pre className="bg-gray-100 p-2 rounded text-sm">
                  {matchedComponent.code}
                </pre>
              </div>
              <div>
                <p>Preview for the {matchedComponent.secondaryName}:</p>
                <div className="bg-gray-100 p-4 rounded flex justify-center items-center">
                    <matchedComponent.component />
                </div>

              </div>
            </>
          )}
        </div>
      );      
}
export default OutputSection