import React from "react";

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  link = 'link'
}

export interface ButtonProps {
  /** accessible name for button */
  'aria-label'?: string;
  /** color of button background */
  backgroundColor?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'gray' | 'black' | 'cream' | 'white';
  /** renders content inside button */
  children: React.ReactNode;
  /** class name of button */
  classname?: string;
  /** color of button text */
  color?: string;
  /** icon on button */
  icon?: React.ReactNode;
  /** icon position */
  iconPosition?: 'left' | 'right';
  /** onClick event */
  onClick: () => void;
  /** padding size of button */
  padding: 'large' | 'small' | 'even' | 'none';
  /** toggle state */
  toggle?: boolean;
  /** button variant */
  variant: 'primary' | 'secondary' | 'link';
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  'aria-label': ariaLabel = 'Button',
  backgroundColor = 'blue',
  children = null,
  classname = 'button',
  color = '#393A40',
  icon = null,
  iconPosition = 'left',
  onClick = () => {},
  padding = 'none',
  toggle,
  variant = ButtonVariant.primary,
  ...props
}: ButtonProps) => {
  const ButtonStyle = {
    color: color,
  }

  return (
    <button
      {...props}
      style={ButtonStyle}
      onClick={onClick}
      className={
        classname
        +' '+ variant
        +' background-' + backgroundColor
        +' padding-' + padding
        + (toggle ? ' toggle-on' : ' toggle-off')
      }
    >
      {children}
    </button>
  )
}