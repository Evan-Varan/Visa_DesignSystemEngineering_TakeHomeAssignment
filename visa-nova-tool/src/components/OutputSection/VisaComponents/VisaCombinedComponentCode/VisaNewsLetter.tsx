import { Input, InputContainer, Label, Utility, Checkbox, Button } from '@visa/nova-react';

const inputId = 'newsletter-email';
const checkboxId = 'newsletter-checkbox';

export const NewsLetter = () => {
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
      {/* Email Input */}
      <Utility vFlex vFlexCol vGap={2}>
        <Label htmlFor={inputId}>Email</Label>
        <InputContainer>
          <Input id={inputId} type="email" placeholder="Enter your email" />
        </InputContainer>
      </Utility>

      {/* Checkbox */}
      <Checkbox id={checkboxId} label = "Subscribe to our newsletter"></Checkbox>

      {/* Button */}
      <Button style={{ width: '100%' }}>
        Subscribe
      </Button>
    </Utility>
  );
};


export const NewsLetterCode = `
import { Input, InputContainer, Label, Utility, Checkbox, Button } from '@visa/nova-react';

const inputId = 'newsletter-email';
const checkboxId = 'newsletter-checkbox';

export const NewsletterForm = () => {
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
      {/* Email Input */}
      <Utility vFlex vFlexCol vGap={2}>
        <Label htmlFor={inputId}>Email</Label>
        <InputContainer>
          <Input id={inputId} type="email" placeholder="Enter your email" />
        </InputContainer>
      </Utility>

      {/* Checkbox */}
      <Checkbox id={checkboxId}>Subscribe to our newsletter</Checkbox>

      {/* Button */}
      <Button colorScheme="primary" style={{ width: '100%' }}>
        Subscribe
      </Button>
    </Utility>
  );
};
`.trim();
