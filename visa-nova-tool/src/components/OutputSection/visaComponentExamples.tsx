import React from "react";
import { LoginFormCode } from "./VisaComponents/VisaCombinedComponentCode/VisaLoginForm";
import { InitialValueInput, InitialValueInputCode } from "./VisaComponents/VisaIndividualComponents/InitialValueInput";
import { MaskButtonInput, MaskButtonInputCode } from "./VisaComponents/VisaIndividualComponents/MaskButtonInput";
import { DefaultCheckbox, DefaultCheckboxCode } from "./VisaComponents/VisaIndividualComponents/DefaultCheckbox";
import { DefaultButton, DefaultButtonCode } from "./VisaComponents/VisaIndividualComponents/DefaultButton";
import { SearchBarCode } from "./VisaComponents/VisaCombinedComponentCode/VisaSearchBar";
import { NewsLetterCode } from "./VisaComponents/VisaCombinedComponentCode/VisaNewsLetter";
import { PaymentCardFormCode } from "./VisaComponents/VisaCombinedComponentCode/VisaPaymentCardForm";
import { DefaultLink, DefaultLinkCode } from "./VisaComponents/VisaIndividualComponents/DefaultLink";
import { TwoFactorAuthCode } from "./VisaComponents/VisaCombinedComponentCode/Visa2FAVerificationForm";
import TwoFactorAuth from "./VisaComponents/VisaCombinedComponentCode/Visa2FAVerificationForm";
import  {SearchBar}  from "./VisaComponents/VisaCombinedComponentCode/VisaSearchBar";
import  {NewsLetter}  from "./VisaComponents/VisaCombinedComponentCode/VisaNewsLetter";
import  PaymentCardForm  from "./VisaComponents/VisaCombinedComponentCode/VisaPaymentCardForm";
import  {LoginForm}  from "./VisaComponents/VisaCombinedComponentCode/VisaLoginForm";

export type Component = {
  name: string;
  preview: React.FC;
  code: string;
};

export type CombinedComponent = {
  name: string;
  combinedPreview: React.FC;
  combinedCode: string;
  individualComponents: Component[];
};

export const CombinedComponents: CombinedComponent[] = [
  // Login
  {
    name: "responsive login form with remember me",
    combinedPreview: LoginForm,
    combinedCode: LoginFormCode,
    individualComponents: [
      { name: "InitialValueInput", preview: () => InitialValueInput("Username", "Enter your username"), code: InitialValueInputCode("Username", "Enter your username") },
      { name: "MaskButtonInput", preview: MaskButtonInput, code: MaskButtonInputCode },
      { name: "CheckBoxWithRememberMe", preview: () => DefaultCheckbox("Remember me"), code: DefaultCheckboxCode("Remember me") },
      { name: "DefaultButton", preview: () => DefaultButton("Login"), code: DefaultButtonCode("Login") }
    ]
  },

  // Search Bar
  {
    name: "search bar",
    combinedPreview: SearchBar,
    combinedCode: SearchBarCode,
    individualComponents: [
      { name: "InitialValueInput", preview: () => InitialValueInput("Search", "Enter your query"), code: InitialValueInputCode("Search", "Enter your query") },
      { name: "DefaultButton", preview: () => DefaultButton("Search"), code: DefaultButtonCode("Search") }
    ]
  },

  // News Letter
  {
    name: "news letter",
    combinedPreview: NewsLetter,
    combinedCode: NewsLetterCode,
    individualComponents: [
      { name: "InitialValueInput", preview: () => InitialValueInput("Email"), code: InitialValueInputCode("Email", "Enter email") },
      { name: "CheckBoxWithRememberMe", preview: () => DefaultCheckbox("Subscribe to our newsletter"), code: DefaultCheckboxCode("Subscribe to our newsletter") },
      { name: "DefaultButton", preview: () => DefaultButton("Subscribe"), code: DefaultButtonCode("Subscribe") }
    ]
  },

  // Payment Card Form
  {
    name: "payment card form",
    combinedPreview: PaymentCardForm,
    combinedCode: PaymentCardFormCode,
    individualComponents: [
      { name: "InitialValueInput", preview: () => InitialValueInput("Card number"), code: InitialValueInputCode("Card Number", "XXXX XXXX XXXX XXXX") },
      { name: "CheckBoxWithRememberMe", preview: () => DefaultCheckbox("Save payment data"), code: DefaultCheckboxCode("Save payment data") },
      { name: "DefaultButton", preview: () => DefaultButton("Pay Now"), code: DefaultButtonCode("Pay Now") }
    ]
  },

  // 2FA Verification Form
  {
    name: "2FA verification form",
    combinedPreview: TwoFactorAuth,
    combinedCode: TwoFactorAuthCode,
    individualComponents: [
      { name: "InitialValueInput", preview: () => InitialValueInput("Enter OTP"), code: InitialValueInputCode("Enter OTP", "XXXXXX") },
      { name: "DefaultLink", preview: DefaultLink, code: DefaultLinkCode("Resend OTP") },
      { name: "DefaultButton", preview: () => DefaultButton("Verify"), code: DefaultButtonCode("Verify") }
    ]
  },
];
  
