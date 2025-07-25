import { useState } from "react";
import OutputSection from "../OutputSection/OuputSection";
import { FiMessageSquare } from "react-icons/fi";
import { ReactTyped } from "react-typed";
import {
  ContentCard,
  ContentCardBody,
  Typography,
  Label,
  InputContainer,
  Input,
  Button,
  SectionMessage,
} from "@visa/nova-react";

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
        }, 9000);
      } else {
        setIsGenerating(true);
        setTypedStrings([
          "Visa Design Assistant is thinking...",
          `Here’s a simple ${textEntry} using Visa Nova design components...`,
        ]);
        setTimeout(() => {
          setSearchTerm(textEntry);
          setIsGenerating(false);
          setTextEntry("");
        }, 11000);
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 0" }}>
      <ContentCard style={{ maxWidth: 600, width: "100%" }}>
        <ContentCardBody>
          <Typography variant="headline-2" tag="h2" style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, color: "#142787", marginBottom: 12 }}>
            Visa Design AI Assistant <FiMessageSquare size={18} />
          </Typography>
          <Typography variant="body-1" style={{ marginBottom: 24, color: "#666" }}>
            Build your own Visa components with the Visa Design AI Assistant. Try these examples:
          </Typography>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li>Responsive Login Form with Remember Me</li>
            <li>Search Bar</li>
            <li>Payment Card Form</li>
            <li>News Letter</li>
            <li>2FA Verification Form</li>
          </ul>
          <Label htmlFor="input" style={{ marginBottom: 8, display: "block" }}>What do you want to build?</Label>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
            <InputContainer style={{ flex: 1 }}>
              <Input
                id="input"
                type="text"
                value={textEntry}
                onChange={handleTextEntry}
                placeholder="Type something here"

              />
            </InputContainer>
            <Button buttonSize="large" onClick={handleSubmitButton}>
              Generate
            </Button>
          </div>
          {errorText && (
            <SectionMessage messageType="error" style={{ marginTop: 16 }}>
              {errorText}
            </SectionMessage>
          )}
          {isGenerating && (
            <Typography variant="body-1" style={{ marginTop: 16, color: "#142787" }}>
              <ReactTyped strings={typedStrings} typeSpeed={40} backSpeed={0} showCursor={true} loop={false} />
            </Typography>
          )}
          {!isGenerating && searchTerm && <OutputSection searchTerm={searchTerm} />}
        </ContentCardBody>
      </ContentCard>
    </div>
  );
}

export default InputSelection;
