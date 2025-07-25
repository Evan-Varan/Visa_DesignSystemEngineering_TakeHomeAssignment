import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { Button, Input, InputContainer, Label, Utility, Checkbox, InputMessage } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize these IDs, pass them as props, or auto-generate them with useId() from @react


const CombinedForm = () => {
  const firstInputId = 'input-first';
  const secondInputId = 'input-second';
  const checkboxId = 'checkbox-remember';

  return (
    <form style={{ maxWidth: 400, margin: '0 auto' }}>
      <Utility vFlex vFlexCol vGap={16}>
        {/* First Input */}
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={firstInputId}>First Input</Label>
          <InputContainer>
            <Input
              aria-required="true"
              placeholder="Enter first value"
              id={firstInputId}
              type="text"
            />
          </InputContainer>
        </Utility>

        {/* Second Input */}
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={secondInputId}>Second Input</Label>
          <InputContainer>
            <Input
              aria-required="true"
              placeholder="Enter second value"
              id={secondInputId}
              type="text"
            />
          </InputContainer>
        </Utility>

        {/* Checkbox */}
        <Utility vFlex vGap={8}>
          <Checkbox id={checkboxId} />
          <Label htmlFor={checkboxId}>Remember Me</Label>
        </Utility>

        {/* Submit Button */}
        <Button>Submit</Button>
      </Utility>
    </form>
  );
};

export default CombinedForm;


export const PaymentCardFormCode = `import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { Button, Input, InputContainer, Label, Utility, Checkbox, InputMessage } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize these IDs, pass them as props, or auto-generate them with useId() from @react
const cardNumberId = 'card-number';
const expiryId = 'expiry-date';
const cvvId = 'card-cvv';
const saveCardId = 'save-card';

export const PaymentCardForm = () => {
  const [showCVV, setShowCVV] = useState(false);

  return (
    <Utility vFlex vFlexCol vGap={6}>
      {/* Card Number Input */}
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={cardNumberId}>Card Number</Label>
        <InputContainer>
          <Input
            aria-required="true"
            placeholder="XXXX XXXX XXXX XXXX"
            id={cardNumberId}
            type="text"
          />
        </InputContainer>
      </Utility>

      {/* Expiry Date Input */}
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={expiryId}>Expiry Date</Label>
        <InputContainer>
          <Input
            aria-required="true"
            placeholder="MM/YY"
            id={expiryId}
            type="text"
          />
        </InputContainer>
      </Utility>

      {/* CVV Input with Toggle */}
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={cvvId}>CVV</Label>
        <InputContainer>
          <Input
            aria-required="true"
            placeholder="***"
            id={cvvId}
            type={showCVV ? 'text' : 'password'}
          />
          <Button
            aria-label={showCVV ? 'hide CVV' : 'show CVV'}
            buttonSize="small"
            colorScheme="tertiary"
            iconButton
            onClick={() => setShowCVV(!showCVV)}
          >
            {showCVV ? <VisaPasswordHideTiny /> : <VisaPasswordShowTiny />}
          </Button>
        </InputContainer>
      </Utility>

      {/* Save Card Checkbox */}
      <fieldset aria-labelledby={\`\${saveCardId}-message\`}>
        <Utility vFlex vGap={2}>
          <Checkbox id={saveCardId} />
          <Utility vFlex vFlexCol vGap={2} vMarginVertical={10}>
            <Label htmlFor={saveCardId}>Save this card for future payments</Label>
            <InputMessage id={\`\${saveCardId}-message\`}>
              We'll keep this information securely for faster checkout next time.
            </InputMessage>
          </Utility>
        </Utility>
      </fieldset>

      {/* Submit Button */}
      <Button variant="primary">Pay Now</Button>
    </Utility>
  );
};
`.trim();

