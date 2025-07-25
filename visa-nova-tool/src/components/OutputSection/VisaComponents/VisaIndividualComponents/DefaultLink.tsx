import { Link } from '@visa/nova-react';

export const DefaultLink = () => {
  return <Link href="./link">Destination label</Link>;
};

export const DefaultLinkCode = (text:string) : string => `
import { Link } from '@visa/nova-react';
export const DefaultLink = () => {
  return <Link href="./link">Destination label</Link>;
};`.trim()
