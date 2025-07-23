import { useState } from "react";



function InputSelection(){
    const [textEntry, setTextEntry] = useState("");
    const [errorText, setErrorText] = useState("");

    const handleTextEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextEntry(e.target.value);
    }

    const handleSubmitButton = () => {
        if(textEntry.trim() === ""){
            setErrorText("Please fill out the text box before submitting.")
        }
        else{
            //call component fetcher
            console.log("Submitted:", textEntry);
            setTextEntry("");
            setErrorText("");
        }
    }

    return(
    <div className="flex flex-col gap-3 p-4 max-w-lg mx-auto">
        <label htmlFor="input" className="text-lg font-semibold">
            What component are you looking for?
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

    </div>
    )
    
}
export default InputSelection;