import { Input, InputContainer, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'input-initial-value';

export const InitialValueInput = (text:string, placeholder?:string) => {
  return (
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" defaultValue={text} placeholder={placeholder} id={id} type="text" />
      </InputContainer>
    </Utility>
  );
};

  export const InitialValueInputCode = (text: string, placeholder?: string): string => `
  import { Input, InputContainer, Label, Utility } from '@visa/nova-react';
  
  const id = 'input-initial-value';
  
  export const InitialValueInput = () => {
    return (
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={id}>${text}</Label>
        <InputContainer>
          <Input
            aria-required="true"
            defaultValue="${text}"
            placeholder="${placeholder || ""}"
            id={id}
            type="text"
          />
        </InputContainer>
      </Utility>
    );
  };
  `.trim();
