import React from "react";

export const InputWithMaskedField: React.FC = () => (
  <div>
    <label htmlFor="input-masked" style={{ fontSize: 12, color: '#666' }}>
      Password
    </label>
    <input
      id="input-masked"
      type="password"
      defaultValue="password"
      style={{
        display: 'block',
        width: '100%',
        marginTop: 2,
        padding: '6px 10px',
        fontSize: 16,
        border: '1px solid #ccc',
        borderRadius: 4,
        boxSizing: 'border-box',
      }}
    />
  </div>
);

export const InputWithMaskedFieldCode = `
import { VisaPasswordHideTiny, VisaPasswordShowTiny } from '@visa/nova-icons-react';
import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'input-mask-button';

export const MaskButtonInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" defaultValue="password" id={id} type={showPassword ? 'text' : 'password'} />
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
