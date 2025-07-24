import React from "react";

export const LinkWithLabel = ({ text }: { text: string}) => (
  <a
    href=""
    style={{
      color: "blue",
      textDecoration: "underline",
      fontSize: "14px",
      fontWeight: 500,
    }}
  >
    {text}
  </a>
);

export const LinkWithLabelCode = (text:string) : string => `
import { Link } from '@visa/nova-react';
export const DefaultLink = () => {
  return <Link href="./link">Destination label</Link>;
};`.trim()
