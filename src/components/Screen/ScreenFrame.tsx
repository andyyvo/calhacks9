import React from "react";

export interface ScreenFrameProps {
  /** renders content inside screen */
  children?: React.ReactNode;
  /** class name of screen frame */
  classname?: string;
}

export const ScreenFrame: React.FunctionComponent<ScreenFrameProps> = ({
  children = null,
  classname = 'screenframe',
  ...props
}: ScreenFrameProps) => {
  return (
    <div
      {...props}
      className={classname}
    >
      {children}
    </div>
  );
}
