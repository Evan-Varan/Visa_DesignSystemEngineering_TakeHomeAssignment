import React from "react";

export const SubmitButton = ({text}: {text:string}) => (
  <button
    style={{
      background: '#0047ba',
      color: '#fff',
      border: 'none',
      borderRadius: 16,
      padding: '10px 32px',
      fontWeight: 700,
      fontSize: 18,
      cursor: 'pointer',
      boxShadow: 'none',
      outline: 'none',
      margin: 0,
      display: 'inline-block',
    }}
  >
    {text}
  </button>
);

export const SubmitButtonCode = (text:string) : string =>
`import { Button } from '@visa/nova-react';

export const DefaultButton = () => {
  return <Button>${text}</Button>;
};`.trim()
