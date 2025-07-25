import { Button } from '@visa/nova-react';

export const DefaultButton = (text:string) => {
  return <Button>{text}</Button>;
};

export const DefaultButtonCode = (text:string) : string =>
`import { Button } from '@visa/nova-react';

export const DefaultButton = () => {
  return <Button>${text}</Button>;
};`.trim()
