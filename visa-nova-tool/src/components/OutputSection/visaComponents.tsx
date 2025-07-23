//Note that these are not ALL components from Visa's website. Only 3 variants per component type (button, accordian, banner, etc) were chosen
//Also for the sake of brevity, we are returning react components.
//Components in imported files are also mock designs and actual CSS wasnt avaliable

export type ComponentVariant = {
    secondaryName: string;
    keywords: string[]
    code: string;
    component: React.FC;
    isDefault?: boolean
}
export type NovaComponent = {
    primaryName: string;
    keywords: string[];
    variants : ComponentVariant[];
}

//Buttons
import { PrimaryButton, DestructiveButton, IconButton } from "./buttonDefinitions";
export const buttonVariants: ComponentVariant[] = [
    {
    secondaryName: "Primary Button",
      keywords: ["primary", "submit", "main"],
      code: `
  import { Button } from '@visa/nova-react';
  
  <Button variant="primary">Submit</Button>
  `.trim(),
  component: PrimaryButton,
      isDefault: true
    },
    {
    secondaryName: "Destructive Button",
      keywords: ["delete", "danger", "remove", "destructive"],
      code: `
  import { Button } from '@visa/nova-react';
  
  <Button variant="destructive">Delete</Button>
  `.trim(),
  component: DestructiveButton
    },
    {
    secondaryName: "Icon Button",
      keywords: ["icon", "settings", "gear", "symbol"],
      code: `
  import { Button } from '@visa/nova-react';
  
  <Button icon="settings">Settings</Button>
  `.trim(),
  component: IconButton
    }
  ];
  

  export const visaComponents: NovaComponent[] = [
    {
    primaryName: "Button",
      keywords: ["button", "click", "submit", "action"],
      variants: buttonVariants
    },
  ];
  