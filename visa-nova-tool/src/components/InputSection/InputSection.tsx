import { useState } from "react";
import OutputSection from "../OutputSection/OuputSection";
import {FiMessageSquare } from "react-icons/fi";
import {ReactTyped} from "react-typed"; // Correct import

function InputSelection() {
  const [textEntry, setTextEntry] = useState("");
  const [errorText, setErrorText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [typedStrings, setTypedStrings] = useState<string[]>([]);

  const handleTextEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextEntry(e.target.value);
  };

  const handleSubmitButton = () => {
    const newText = textEntry.trim().toLocaleLowerCase();
    if (textEntry.trim() === "") {
      setErrorText("Please fill out the text box before submitting.");
    } else {
        if(newText != "responsive login form with remember me" && newText != "search bar" && newText != "payment card form" && newText != "news letter" && newText != "2fa verification form"){
            setIsGenerating(true);
        setTypedStrings([
            "Visa Design Assistant is thinking...",
            `Visa Design Assistant could not find a match for ${textEntry}...`,
        ]);
        setTimeout(() => {
            setIsGenerating(false);
            setTextEntry("");
          }, 9000); // Matches the typing animation duration
        }
        else{
            setIsGenerating(true);
        setTypedStrings([
            "Visa Design Assistant is thinking...",
            `Here’s a simple ${textEntry} using Visa Nova design components...`,
        ]);
        setTimeout(() => {
            setSearchTerm(textEntry);
            setIsGenerating(false);
            setTextEntry("");
          }, 11000); // Matches the typing animation duration
        }
    }
  };

  return (
    <div className="visa-input-container">
      <div className="visa-form-card">
        <div className="visa-form-section">
          <h2 style={{ marginBottom: "12px", fontSize: "20px", fontWeight: 700, color: "#142787", display: "flex", alignItems: "center", gap: "8px" }}>
            Visa Design AI Assistant <FiMessageSquare  size={18}/>
          </h2>
          <p style={{ marginBottom: "24px", fontSize: "16px", color: "#666" }}>
            Build your own Visa components with the Visa Design AI Assistant. 
            Try these examples:
          </p>
          <ul className="visa-examples-list">
            <li>Responsive Login Form with Remember Me</li>
            <li>Search Bar</li>
            <li>Payment Card Form</li>
            <li>News Letter</li>
            <li>2FA Verification Form</li>
          </ul>
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
                placeholder="Type something here"
                className="visa-input"
              />
            </div>

            <button onClick={handleSubmitButton} className="visa-button visa-button--primary">
              Generate
            </button>
          </div>
        </div>

        {errorText && <div className="visa-error-message">{errorText}</div>}

        {isGenerating && (
          <div style={{ marginTop: "16px", fontSize: "18px", color: "#142787" }}>
            <ReactTyped
              strings={typedStrings}
              typeSpeed={40}
              backSpeed={0}
              showCursor={true}
              loop={false}
            />
          </div>
        )}

        {!isGenerating && searchTerm && <OutputSection searchTerm={searchTerm} />}
      </div>
    </div>
  );
}

export default InputSelection;
