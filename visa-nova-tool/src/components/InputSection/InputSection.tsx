import { useState } from "react";
import OutputSection from "../OutputSection/OuputSection";

function InputSelection(){
    const [textEntry, setTextEntry] = useState("");
    const [errorText, setErrorText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleTextEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextEntry(e.target.value);
    }

    const handleSubmitButton = () => {
        if(textEntry.trim() === ""){
            setErrorText("Please fill out the text box before submitting.")
        }
        else{
            setSearchTerm(textEntry)
            setTextEntry("");
            setErrorText("");
        }
    }

    return(
        <div className="visa-input-container">
            <div className="visa-form-card">
                <div className="visa-form-section">
                    <label htmlFor="input" className="visa-label">
                        What do you want to build?
                    </label>
                    
                    <div className="visa-input-group">
                        <div className="visa-input-wrapper">
                            <input
                                id="input"
                                type="text"
                                value={textEntry}
                                onChange={handleTextEntry}
                                placeholder="Type Something here"
                                className="visa-input"
                            />
                        </div>
                        
                        <button 
                            onClick={handleSubmitButton}
                            className="visa-button visa-button--primary"
                        >
                            Generate
                        </button>
                    </div>
                </div>
                
                {errorText && (
                    <div className="visa-error-message">
                        {errorText}
                    </div>
                )}
                
                <OutputSection searchTerm={searchTerm} />
            </div>
        </div>
    )
}

export default InputSelection;