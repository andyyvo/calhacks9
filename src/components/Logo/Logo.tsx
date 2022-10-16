import React from "react";
import logo from "./logo.svg";

/** MOODZ LOGO */

export interface LogoProps {
  /** accessible name for logo */
  'aria-label'?: string;
  /** class name of logo */
  classname?: string;
}

export const Logo: React.FunctionComponent<LogoProps> = ({
  'aria-label': ariaLabel = 'Logo',
  classname = 'logo',
  ...props
}: LogoProps) => {
  return (
    <img
      src={logo}
      alt="moodz logo"
      {...props}
      className={
        classname
      }
    />
  );
}
