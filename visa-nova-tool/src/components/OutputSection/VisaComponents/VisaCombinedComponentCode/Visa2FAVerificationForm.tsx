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
