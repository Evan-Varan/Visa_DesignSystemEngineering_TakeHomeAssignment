import React from "react";
import { LoginFormCode } from "./VisaCombinedComponentCode/VisaLoginForm";
import { InitialValueInput, InitialValueInputCode } from "./VisaIndividualComponents/InitialValueInput";
import { MaskButtonInput, MaskButtonInputCode } from "./VisaIndividualComponents/MaskButtonInput";
import { DefaultCheckbox, DefaultCheckboxCode } from "./VisaIndividualComponents/DefaultCheckbox";
import { DefaultButton, DefaultButtonCode } from "./VisaIndividualComponents/DefaultButton";
import { SearchBarCode } from "./VisaCombinedComponentCode/VisaSearchBar";
import { NewsLetterCode } from "./VisaCombinedComponentCode/VisaNewsLetter";
import { PaymentCardFormCode } from "./VisaCombinedComponentCode/VisaPaymentCardForm";
import { DefaultLink, DefaultLinkCode } from "./VisaIndividualComponents/DefaultLink";
import { TwoFactorAuthCode } from "./VisaCombinedComponentCode/Visa2FAVerificationForm";
import  {SearchBar}  from "./VisaCombinedComponentCode/VisaSearchBar";
import  {NewsLetter}  from "./VisaCombinedComponentCode/VisaNewsLetter";
import  {PaymentCardForm}  from "./VisaCombinedComponentCode/VisaPaymentCardForm";
import  {LoginForm}  from "./VisaCombinedComponentCode/VisaLoginForm";
import  {TwoFactorAuth}  from "./VisaCombinedComponentCode/Visa2FAVerificationForm";

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
      { name: "MaskButtonInput", preview: () => MaskButtonInput("Password", "Enter your password"), code: MaskButtonInputCode("Password", "Enter your password") },
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
      { name: "InitialValueInput", preview: () => InitialValueInput("Email", "Enter your email"), code: InitialValueInputCode("Email", "Enter your email") },
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
      { name: "InitialValueInput", preview: () => InitialValueInput("Card number", "XXXX XXXX XXXX XXXX"), code: InitialValueInputCode("Card Number", "XXXX XXXX XXXX XXXX") },
      { name: "MaskButtonInput", preview: () => MaskButtonInput("CVC", "***"), code: MaskButtonInputCode("CVC", "***") },
      { name: "CheckBoxWithRememberMe", preview: () => DefaultCheckbox("Save this card for future payments"), code: DefaultCheckboxCode("Save this card for future payments") },
      { name: "DefaultButton", preview: () => DefaultButton("Pay Now"), code: DefaultButtonCode("Pay Now") }
    ]
  },

  // 2FA Verification Form
  {
    name: "2FA verification form",
    combinedPreview: TwoFactorAuth,
    combinedCode: TwoFactorAuthCode,
    individualComponents: [
      { name: "InitialValueInput", preview: () => InitialValueInput("Enter OTP", "XXXXXX"), code: InitialValueInputCode("Enter OTP", "XXXXXX") },
      { name: "DefaultLink", preview: DefaultLink, code: DefaultLinkCode},
      { name: "DefaultButton", preview: () => DefaultButton("Verify"), code: DefaultButtonCode("Verify") }
    ]
  },
];
  
