import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { Button, Input, InputContainer, Label, Utility, Checkbox, InputMessage } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize these IDs, pass them as props, or auto-generate them with useId() from @react


export const PaymentCardForm = () => {
  const firstInputId = 'input-first';
  const secondInputId = 'input-second';
  const passwordInputId = 'input-mask-button';
  const checkboxId = 'checkbox-remember';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{maxWidth: '340px', margin: '0 auto', padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}}>
      <Utility vFlex vFlexCol vGap={16}>
        {/* First Input */}
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={firstInputId}>Card Number</Label>
          <InputContainer>
            <Input
              aria-required="true"
              placeholder="XXXX XXXX XXXX XXXX"
              id={firstInputId}
              type="text"
            />
          </InputContainer>
        </Utility>

        {/* Second Input */}
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={secondInputId}>Expiration Date</Label>
          <InputContainer>
            <Input
              aria-required="true"
              placeholder="MM/YY"
              id={secondInputId}
              type="text"
            />
          </InputContainer>
        </Utility>

        {/* CVC Input */}
        <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={passwordInputId}>CVC</Label>
        <InputContainer>
          <Input
            aria-required="true"
            id={passwordInputId}
            type={showPassword ? 'text' : 'password'}
            defaultValue="***"
          />
          <Button
            aria-label={showPassword ? 'hide text' : 'show text'}
            buttonSize="small"
            colorScheme="tertiary"
            iconButton
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisaPasswordHideTiny /> : <VisaPasswordShowTiny />}
          </Button>
        </InputContainer>
      </Utility>

        {/* Checkbox */}
        <Utility vFlex vGap={8}>
          <Checkbox id={checkboxId} />
          <Label htmlFor={checkboxId}>Save this card for future payments</Label>
        </Utility>

        {/* Submit Button */}
        <Button>Submit</Button>
      </Utility>
    </div>
  );
};


export const PaymentCardFormCode = `import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { Button, Input, InputContainer, Label, Utility, Checkbox, InputMessage } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize these IDs, pass them as props, or auto-generate them with useId() from @react


export const CombinedForm = () => {
  const firstInputId = 'input-first';
  const secondInputId = 'input-second';
  const passwordInputId = 'input-mask-button';
  const checkboxId = 'checkbox-remember';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{maxWidth: '340px', margin: '0 auto', padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}}>
      <Utility vFlex vFlexCol vGap={16}>
        {/* First Input */}
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={firstInputId}>Card Number</Label>
          <InputContainer>
            <Input
              aria-required="true"
              placeholder="XXXX XXXX XXXX XXXX"
              id={firstInputId}
              type="text"
            />
          </InputContainer>
        </Utility>

        {/* Second Input */}
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={secondInputId}>Expiration Date</Label>
          <InputContainer>
            <Input
              aria-required="true"
              placeholder="MM/YY"
              id={secondInputId}
              type="text"
            />
          </InputContainer>
        </Utility>

        {/* CVC Input */}
        <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={passwordInputId}>CVC</Label>
        <InputContainer>
          <Input
            aria-required="true"
            id={passwordInputId}
            type={showPassword ? 'text' : 'password'}
            defaultValue="***"
          />
          <Button
            aria-label={showPassword ? 'hide text' : 'show text'}
            buttonSize="small"
            colorScheme="tertiary"
            iconButton
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisaPasswordHideTiny /> : <VisaPasswordShowTiny />}
          </Button>
        </InputContainer>
      </Utility>

        {/* Checkbox */}
        <Utility vFlex vGap={8}>
          <Checkbox id={checkboxId} />
          <Label htmlFor={checkboxId}>Save this card for future payments</Label>
        </Utility>

        {/* Submit Button */}
        <Button>Submit</Button>
      </Utility>
    </div>
  );
};`.trim();

