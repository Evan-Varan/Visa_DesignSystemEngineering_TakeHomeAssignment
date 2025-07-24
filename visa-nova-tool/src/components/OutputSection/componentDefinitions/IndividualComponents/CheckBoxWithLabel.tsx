import React from "react";

export const CheckBoxWithLabel = ({text}: { text: string}) => (
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <input
      id="checkbox-remember"
      type="checkbox"
      style={{
        accentColor: '#0047ba',
        width: 18,
        height: 18,
        marginRight: 8,
        marginTop: 2,
      }}
    />
    <div>
      <label htmlFor="checkbox-remember" style={{ fontWeight: 500, fontSize: 15, color: '#222' }}>
        {text}
      </label>
      <div style={{ fontSize: 13, color: '#666', marginTop: 0 }}>
      </div>
    </div>
  </div>
);

export const CheckBoxWithLabelCode = (labelText: string): string => `
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