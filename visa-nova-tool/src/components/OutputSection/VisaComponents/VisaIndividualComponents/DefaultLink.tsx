//This is the Visa default link component

import { Link } from '@visa/nova-react';

export const DefaultLink = () => {
  return <Link href="#">Resend OTP?</Link>; //dummy link
};

export const DefaultLinkCode = `
import { Link } from '@visa/nova-react';
export const DefaultLink = () => {
  return <Link href="./link">Resend OTP?</Link>;
};`.trim()
