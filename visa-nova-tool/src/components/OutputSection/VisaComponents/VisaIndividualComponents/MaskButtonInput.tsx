import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'input-mask-button';

export const MaskButtonInput = (label: string, placeholder: string) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>
        <Input aria-required="true" placeholder={placeholder} id={id} type={showPassword ? 'text' : 'password'} />
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
  );
};

export const MaskButtonInputCode = (label: string, placeholder: string) : string =>
`
import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'input-mask-button';

export const MaskButtonInput = (label: string, placeholder: string) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>${label}</Label>
      <InputContainer>
        <Input aria-required="true" placeholder=${placeholder} id={id} type={showPassword ? 'text' : 'password'} />
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
  );
};`.trim()
