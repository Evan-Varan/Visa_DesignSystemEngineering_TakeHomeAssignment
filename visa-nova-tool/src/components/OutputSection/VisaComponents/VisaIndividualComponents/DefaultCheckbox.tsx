import { Checkbox, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'checkbox-default';

export const DefaultCheckbox = (text:string) => {
  return (
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox id={id} label={text} />
      <Label htmlFor={id}>{text}</Label>
    </Utility>
  );
};

export const DefaultCheckboxCode = (labelText: string): string => `
import { Checkbox, InputMessage, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'inline-message-checkbox';

export const InlineMessageCheckbox = () => {
  return (
    <fieldset aria-labelledby={\`\${id}-message\`}>
      <Utility vFlex vGap={2}>
        <Checkbox id={id} />
        <Utility vFlex vFlexCol vGap={2} vMarginVertical={10}>
          <Label htmlFor={id}>${labelText}</Label>
          <InputMessage id={\`\${id}-message\`}>
            Optional descriptive text here.
          </InputMessage>
        </Utility>
      </Utility>
    </fieldset>
  );
};
`.trim();