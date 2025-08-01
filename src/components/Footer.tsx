// src/components/Footer.tsx
import type{ FooterProps } from "../libs/types";

function Footer(props: FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {props.year} {props.fullName} {props.studentId}
    </footer>
  );
}

export default Footer;