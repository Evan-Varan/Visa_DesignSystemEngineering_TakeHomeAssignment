
export const LoginFormCode = `import { Button, Checkbox, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { useState } from 'react';

// TIP: Customize these IDs or auto-generate with useId()
const textInputId = 'input-initial-value';
const passwordInputId = 'input-mask-button';
const checkboxId = 'inline-message-checkbox';

export const CombinedLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form>
      {/* Username Input */}
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={textInputId}>Username</Label>
        <InputContainer>
          <Input
            aria-required="true"
            id={textInputId}
            type="text"
            placeholder="Enter your username"
          />
        </InputContainer>
      </Utility>

      {/* Password Input with Mask Button */}
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={passwordInputId}>Password</Label>
        <InputContainer>
          <Input
            aria-required="true"
            id={passwordInputId}
            type={showPassword ? 'text' : 'password'}
            defaultValue="password"
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

      {/* Remember Me Checkbox */}
      <fieldset>
        <Utility vFlex vGap={2}>
          <Checkbox id={checkboxId} />
          <Label htmlFor={checkboxId}>Remember Me</Label>
        </Utility>
      </fieldset>

      {/* Primary Action Button */}
      <Button colorScheme="primary">Login</Button>
    </form>
  );
};`.trim()