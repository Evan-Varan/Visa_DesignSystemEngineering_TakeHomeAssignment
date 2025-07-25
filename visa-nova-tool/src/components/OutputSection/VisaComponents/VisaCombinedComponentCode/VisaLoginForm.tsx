import { Button, Checkbox, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { useState } from 'react';

// TIP: Customize these IDs or auto-generate with useId()
const textInputId = 'input-initial-value';
const passwordInputId = 'input-mask-button';
const checkboxId = 'inline-message-checkbox';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <Utility vFlex vFlexCol vGap={16} style={{maxWidth: '340px', margin: '0 auto', padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}}>
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
              defaultValue="Enter your password"
            />
            <Button
              // type="button" //Add as the page would reload if we didn't add this
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
        <Button>Login</Button>
      </Utility>
  );
};

export const LoginFormCode = `import { Button, Checkbox, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { useState } from 'react';

// TIP: Customize these IDs or auto-generate with useId()
const textInputId = 'input-initial-value';
const passwordInputId = 'input-mask-button';
const checkboxId = 'inline-message-checkbox';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Utility vFlex vFlexCol vGap={16} style={{maxWidth: '340px', margin: '0 auto', padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}}>
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
            defaultValue="Enter your password"
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
      <Button>Login</Button>
    </Utility>
  );
};`.trim()