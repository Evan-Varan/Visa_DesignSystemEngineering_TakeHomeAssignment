//This is the combined Visa Components to create an example Search Bar

import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';

const inputId = 'search-bar-input';

export const SearchBar = () => {
  return (
    <Utility style={{display: 'flex', alignItems: 'center', gap: '8px',padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}} >
      {/* Input Field */}
      <Utility vFlex vFlexCol vGap={2} style={{ flex: 1 }}>
        <Label htmlFor={inputId}></Label>
        <InputContainer>
          <Input
            aria-required="true"
            placeholder="Enter your query"
            id={inputId}
            type="text"
          />
        </InputContainer>
      </Utility>

      {/* Search Button */}
      <Button>Search</Button>
    </Utility>
  );
};

export const SearchBarCode = `
import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';

const inputId = 'search-bar-input';

export const SearchBar = () => {
  return (
    <Utility style={{display: 'flex', alignItems: 'center', gap: '8px',padding: '16px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px'}} >
      {/* Input Field */}
      <Utility vFlex vFlexCol vGap={2} style={{ flex: 1 }}>
        <Label htmlFor={inputId}></Label>
        <InputContainer>
          <Input
            aria-required="true"
            placeholder="Enter your query"
            id={inputId}
            type="text"
          />
        </InputContainer>
      </Utility>

      {/* Search Button */}
      <Button>Search</Button>
    </Utility>
  );
};
`.trim();
