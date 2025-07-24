import React from "react";

export const InputWithInitialValue = ({ text, placeholder }: { text: string, placeholder?:string }) => (
    <div>
      <label htmlFor="input-initial" style={{ fontSize: 12, color: "#666" }}>
        {text}
      </label>
      <input
        id="input-initial"
        type="text"
        placeholder={placeholder || ""}
        style={{
          display: "block",
          width: "100%",
          marginTop: 2,
          padding: "6px 10px",
          fontSize: 16,
          border: "1px solid #ccc",
          borderRadius: 4,
          boxSizing: "border-box",
        }}
      />
    </div>
  );

  export const InputWithInitialValueCode = (text: string, placeholder?: string): string => `
  import { Input, InputContainer, Label, Utility } from '@visa/nova-react';
  
  const id = 'input-initial-value';
  
  export const InitialValueInput = () => {
    return (
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={id}>${text}</Label>
        <InputContainer>
          <Input
            aria-required="true"
            defaultValue="${text}"
            placeholder="${placeholder || ""}"
            id={id}
            type="text"
          />
        </InputContainer>
      </Utility>
    );
  };
  `.trim();
