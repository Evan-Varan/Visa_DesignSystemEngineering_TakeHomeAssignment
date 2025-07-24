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
    <div className="flex flex-col gap-3 p-4 max-w-lg mx-auto">
        <label htmlFor="input" className="text-lg font-semibold">
            What do you want to build?
        </label>

        <div className="flex gap-2">
            <input
                id = "input"
                type = "text"
                value = {textEntry}
                onChange={handleTextEntry}
                placeholder = "Type Something here"
                className="border border-gray-300 rounded p-2 w-full"
                >
            </input>

            <button
                id = "button"
                type = "button"
                onClick={handleSubmitButton}
                className="border border-gray-300 rounded p-2"
                > Submit
            </button>
        </div>
        {errorText ? <p className="text-red-500">{errorText}</p> : null}
        
      <OutputSection searchTerm={searchTerm} />

    </div>
    )
    
}
export default InputSelection;