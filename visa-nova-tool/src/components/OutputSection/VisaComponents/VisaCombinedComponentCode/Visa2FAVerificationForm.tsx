
//This is the combined Visa Components to create an example 2FA Form

import { Button, Input, InputContainer, Label, Utility, Link } from '@visa/nova-react';

export const TwoFactorAuth = () => {
  const inputId = 'input-initial-value';

  return (
    <Utility vFlex vFlexCol vGap={16} style={{maxWidth: '340px', margin: '0 auto', padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}}>
      {/* Input Section */}
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={inputId}>Enter OTP</Label>
        <InputContainer>
          <Input
            aria-required="true"
            id={inputId}
            type="text"
            placeholder="XXXXXX"
          />
        </InputContainer>
      </Utility>

      {/* Button */}
      <Button>Verify</Button>

      {/* Link (dummy)*/}
      <Link href="#" style={{ marginTop: '4px' }}> 
        Resend OTP?
      </Link>
    </Utility>
  );
};




export const TwoFactorAuthCode = `import { Button, Input, InputContainer, Label, Utility, Link } from '@visa/nova-react';

export const TwoFactorAuth = () => {
  const inputId = 'input-initial-value';

  return (
    <Utility vFlex vFlexCol vGap={16} style={{maxWidth: '340px', margin: '0 auto', padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}}>
      {/* Input Section */}
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={inputId}>Enter OTP</Label>
        <InputContainer>
          <Input
            aria-required="true"
            id={inputId}
            type="text"
            placeholder="XXXXXX"
          />
        </InputContainer>
      </Utility>

      {/* Button */}
      <Button>Verify</Button>

      {/* Link */}
      <Link href="./link" target="_blank" style={{ marginTop: '4px' }}>
        Resend OTP?
      </Link>
    </Utility>
  );
};
`.trim();
