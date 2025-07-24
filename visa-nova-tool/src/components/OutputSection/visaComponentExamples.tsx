import React from "react";
import { LoginFormCode } from "./componentDefinitions/VisaComponentCode/VisaLoginForm";
import { InputWithInitialValue, InputWithInitialValueCode } from "./componentDefinitions/IndividualComponents/InputWithInitialValue";
import { InputWithMaskedField, InputWithMaskedFieldCode } from "./componentDefinitions/IndividualComponents/InputWithMaskedField";
import { CheckBoxWithLabel, CheckBoxWithLabelCode } from "./componentDefinitions/IndividualComponents/CheckBoxWithLabel";
import { SubmitButton, SubmitButtonCode } from "./componentDefinitions/IndividualComponents/SubmitButton";
import { SearchBarCode } from "./componentDefinitions/VisaComponentCode/VisaSearchBar";
import { NewsLetterCode } from "./componentDefinitions/VisaComponentCode/VisaNewsLetter";
import { PaymentCardFormCode} from "./componentDefinitions/VisaComponentCode/VisaPaymentCardForm";
import { LinkWithLabel, LinkWithLabelCode } from "./componentDefinitions/IndividualComponents/LinkWithLabel";
import {TwoFactorAuthCode} from "./componentDefinitions/VisaComponentCode/Visa2FAVerificationForm"

export type Component = {
    name: string;
    preview: React.FC;
    code: string;
}

export type CombindedComponent = {
name: string,
    combindedPreview: React.FC,
    combindedCode: string,
    individualComponents: Component[]
}

export const CombindedComponents: CombindedComponent[] = [
    //Login
    {
      name: "responsive login form with remember me",
      combindedPreview: () => (
        <form style={{ maxWidth: 340, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <InputWithInitialValue text = "Username" placeholder="Enter your username"/>
          <InputWithMaskedField />
          <CheckBoxWithLabel text = "Remember Me" />
          <div style={{ marginTop: 12 }}>
            <SubmitButton text = "Login"/>
          </div>
        </form>
      ),
      combindedCode: LoginFormCode,
      individualComponents: [
        { name: "InputWithInitialValue", preview: () => <InputWithInitialValue text="Username" placeholder="Enter your username" />, code: InputWithInitialValueCode("Username", "Enter your username") },
        { name: "InputWithMaskedField", preview: InputWithMaskedField, code: InputWithMaskedFieldCode },
        { name: "CheckBoxWithRememberMe", preview: () => <CheckBoxWithLabel text = "Remember me"/>, code: CheckBoxWithLabelCode("Remember me") },
        { name: "SubmitButton", preview: () => <SubmitButton text = "Login"/>, code: SubmitButtonCode("Login") }
      ]
    },

    //Search Bar
    {
      name: "search bar",
      combindedPreview: () => 
    <div
  style={{
    display: "flex",
    alignItems: "flex-end",
    gap: "12px",
    maxWidth: "500 px",
    margin: "0 auto",
    padding: "12px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
  }}
>
  <div style={{ flex: 1 }}>
    <InputWithInitialValue text="Search" placeholder="Enter your query" />
  </div>
  <div>
    <SubmitButton text="Search" />
  </div>
</div>,
      combindedCode: SearchBarCode,
      individualComponents: [
        { name: "InputWithInitialValue", preview: () => <InputWithInitialValue text="Search" placeholder="Enter your query"/>, code: InputWithInitialValueCode("Search", "Enter your query")  },
        { name: "SubmitButton", preview: () => <SubmitButton text = "Search"/>, code: SubmitButtonCode("Search") }
      ]
    },
    //News Letter
    {
      name: "news letter",
      combindedPreview: () => 
        <form
      style={{
        maxWidth: 340,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 12, 
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}
    >
      <InputWithInitialValue text = "Email"/>
      <CheckBoxWithLabel text = "Subscribe to our newsletter" />
      <div style={{ marginTop: 12 }}>
        <SubmitButton text = "Subscribe"/>
      </div>
    </form>,
      combindedCode: NewsLetterCode,
      individualComponents: [
        { name: "InputWithInitialValue", preview: () => <InputWithInitialValue text="Email" />, code: InputWithInitialValueCode("Email", "Enter email")},
        { name: "CheckBoxWithRememberMe", preview: () => <CheckBoxWithLabel text = "Subscribe to our news letter"/>, code: CheckBoxWithLabelCode("Subscribe to our news letter") },
        { name: "SubmitButton", preview: () => <SubmitButton text = "Subscribe"/>, code: SubmitButtonCode("Subscribe") }
      ]
    },
    //Payment Card Form
    {
        name: "payment card form",
      combindedPreview: () => 
      <form style={{ maxWidth: 340, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <InputWithInitialValue text = "Card Number" placeholder = "XXXX XXXX XXXX XXXX"/>
      <InputWithInitialValue text = "Expiration Date" placeholder = "MM/YY" />
      <InputWithMaskedField />
      <CheckBoxWithLabel text = "Save this card for future payments" />
      <div style={{ marginTop: 12 }}>
        <SubmitButton text = "Pay now"/>
      </div>
    </form>,
      combindedCode: PaymentCardFormCode,
      individualComponents: [
        { name: "InputWithInitialValue", preview: () => <InputWithInitialValue text="Card number" />, code: InputWithInitialValueCode("Card Number", "XXXX XXXX XXXX XXXX")  },
        { name: "CheckBoxWithRememberMe", preview: () => <CheckBoxWithLabel text = "Save payment data"/>, code: CheckBoxWithLabelCode("Save payment data") },
        { name: "SubmitButton", preview: () => <SubmitButton text = "Pay Now"/>, code: SubmitButtonCode("Pay Now") }
      ]
    },
    //2FA Verification Form
    {
        name: "2FA verification form",
      combindedPreview: () => 
      <form style={{ maxWidth: 340, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <InputWithInitialValue text = "Enter OTP" placeholder = "XXXXXX" />
      <LinkWithLabel text = "Resend OTP"/>
      <div style={{ marginTop: 12 }}>
        <SubmitButton text = "Verify"/>
      </div>
    </form>,
      combindedCode: TwoFactorAuthCode,
      individualComponents: [
        { name: "InputWithInitialValue", preview: () => <InputWithInitialValue text="Enter OTP" />, code: InputWithInitialValueCode("Enter OTP", "XXXXXX")  },
        { name: "LinkWithLabel", preview: () => <LinkWithLabel text = "Resend OTP"/>, code: LinkWithLabelCode("Resend OTP") },
        { name: "SubmitButton", preview: () => <SubmitButton text = "Verify"/>, code: SubmitButtonCode("Verify") }
      ]
    },
  ];
  
