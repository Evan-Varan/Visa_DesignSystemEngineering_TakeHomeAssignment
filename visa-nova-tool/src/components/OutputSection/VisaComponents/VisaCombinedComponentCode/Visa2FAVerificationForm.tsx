
import React from 'react';
import { Button, Input, InputContainer, Label, Utility, Link } from '@visa/nova-react';

const TwoFactorAuth = () => {
  const inputId = 'input-initial-value';

  return (
    <Utility vFlex vFlexCol vGap={16} style={{ maxWidth: 400, margin: '0 auto' }}>
      {/* Input Section */}
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={inputId}>Label (required)</Label>
        <InputContainer>
          <Input aria-required="true" defaultValue="Initial value" id={inputId} type="text" />
        </InputContainer>
      </Utility>

      {/* Button */}
      <Button>Primary action</Button>

      {/* Link */}
      <Link href="./link" target="_blank" style={{ marginTop: '8px' }}>
        Destination label
      </Link>
    </Utility>
  );
};
export default TwoFactorAuth;



export const TwoFactorAuthCode = `
import { Input, InputContainer, Label, Utility, Link, Button } from '@visa/nova-react';

const inputId = 'otp-code';

export const TwoFactorAuthForm = () => {
  return (
    <Utility
      vFlex
      vFlexCol
      vGap={4}
      style={{
        maxWidth: '340px',
        margin: '0 auto',
        padding: '16px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      {/* OTP Input */}
      <Utility vFlex vFlexCol vGap={2}>
        <Label htmlFor={inputId}>Enter OTP</Label>
        <InputContainer>
          <Input id={inputId} type="text" placeholder="XXXXXX" />
        </InputContainer>
      </Utility>

      {/* Resend Link */}
      <Link href="#" colorScheme="primary" style={{ textAlign: 'center', marginTop: '8px' }}>
        Resend OTP
      </Link>

      {/* Verify Button */}
      <Button colorScheme="primary" style={{ width: '100%', marginTop: '12px' }}>
        Verify
      </Button>
    </Utility>
  );
};
`.trim();
