import React from "react";

export interface ScreenProps {
  /** background color of screen */
  backgroundColor?: string;
  /** renders content inside screen */
  children?: React.ReactNode;
  /** class name of screen */
  classname?: string;
  /** side padding of screen */
  padding?: string;
  /** side of screen */
  type: 'auto' | 'full';
}

export const Screen: React.FunctionComponent<ScreenProps> = ({
  backgroundColor = 'cream',
  children = null,
  classname = 'screen',
  padding = '',
  type = 'auto',
  ...props
}: ScreenProps) => {
  const ScreenStyle = {
    padding: padding
  }
  return (
    <div
    {...props}
      className={
        classname
        +' backgroundcolor-'+ backgroundColor
        +' '+ type
      }
      style={ScreenStyle}
    >
      {children}
    </div>
  );
}
