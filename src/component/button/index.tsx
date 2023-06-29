
import React from 'react';
import { StyledButton } from './style';

function RhButton({
  onClick,
  text,
  classname,
  width,
  height,
  border,
  borderradius,
  backgroundcolor,
  fontsize,
  color,
  maxwidth,
  icon,
  buttontype,
  disabled
}: {
  onClick?: React.MouseEventHandler;
  text: string;
  classname?: string;
  width?: string;
  height?: string;
    border?: string;
    disabled?: any;
    borderradius?: string;
    backgroundcolor?: string;
    fontsize?: string;
  color?: string;
    maxwidth?: string;
  icon?: React.ReactNode;
    buttontype?: 'button' | 'submit' | 'reset';
}): JSX.Element {
  return (
      <StyledButton
        onClick={onClick}
        width={width}
        height={height}
        border={border}
        color={color}
        className={classname}
        borderradius={borderradius}
        backgroundcolor={backgroundcolor}
        fontsize={fontsize}
        maxwidth={maxwidth}
        type={buttontype ? buttontype : undefined}
        disabled={disabled}
      >
        <div className="buttonWithIcon">
          {icon && <div className="icon">
            {icon}
          </div>}
          <>{text}</>
        </div>
      </StyledButton>
  );
}

export default RhButton;
