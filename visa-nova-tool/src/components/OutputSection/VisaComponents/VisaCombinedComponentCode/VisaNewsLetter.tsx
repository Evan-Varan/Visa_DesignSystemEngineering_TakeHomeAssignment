//This is the combined Visa Components to create an example News Letter Form
import { Input, InputContainer, Label, Utility, Checkbox, Button } from '@visa/nova-react';

const inputId = 'newsletter-email';
const checkboxId = 'newsletter-checkbox';

export const NewsLetter = () => {
  return (
    <Utility vFlex vFlexCol vGap={16} style={{maxWidth: '340px', margin: '0 auto', padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}}>
      {/* Email Input */}
      <Utility vFlex vFlexCol vGap={2}>
        <Label htmlFor={inputId}>Email</Label>
        <InputContainer>
          <Input id={inputId} type="email" placeholder="Enter your email" />
        </InputContainer>
      </Utility>

      {/* Checkbox */}
      <fieldset aria-labelledby={`${checkboxId}-message`}>
      <Utility vFlex vGap={2}>
        <Checkbox id={checkboxId} />
        <Utility vFlex vFlexCol vGap={2} vMarginVertical={10}>
          <Label htmlFor={checkboxId}>Subscribe to our newsletter</Label>
        </Utility>
      </Utility>
    </fieldset>

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

export const NewsLetter = () => {
  return (
    <Utility vFlex vFlexCol vGap={16} style={{maxWidth: '340px', margin: '0 auto', padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}}>
      {/* Email Input */}
      <Utility vFlex vFlexCol vGap={2}>
        <Label htmlFor={inputId}>Email</Label>
        <InputContainer>
          <Input id={inputId} type="email" placeholder="Enter your email" />
        </InputContainer>
      </Utility>

      {/* Checkbox */}
      <fieldset aria-labelledby={\`\${checkboxId}-message\`}>
      <Utility vFlex vGap={2}>
        <Checkbox id={checkboxId} />
        <Utility vFlex vFlexCol vGap={2} vMarginVertical={10}>
          <Label htmlFor={checkboxId}>Subscribe to our newsletter</Label>
        </Utility>
      </Utility>
    </fieldset>

      {/* Button */}
      <Button style={{ width: '100%' }}>
        Subscribe
      </Button>
    </Utility>
  );
};
`.trim();
