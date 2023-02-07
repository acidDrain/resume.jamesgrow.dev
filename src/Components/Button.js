import styled from "styled-components";
import { getThemeColor } from "../util";

const ToolTip = ({ children, className, toolTipText, ...props }) =>
  <div {...props} className={className}>
    {children}
    <span className={`${className} tooltipText`}>
      {toolTipText}
    </span>
  </div>;

const StyledToolTip = styled(ToolTip)`
  position: relative;
  display: inline-block;
  font-size: 0.5em;
  color: ${({ theme }) => getThemeColor(theme, "fg")};
  background-color: transparent;
  transition: color 0.5s linear, background-color 0.5s linear, visibility 0.3s ease-in;
  .tooltipText {
    visibility: hidden;
    background-color: ${({ theme }) => getThemeColor(theme)("bgH")};
    border: thin solid;
    border-color: ${({ theme }) => getThemeColor(theme)("bg2")};
    color: ${({ theme }) => getThemeColor(theme)("fg")};
    border-radius: 1.25em;
    position: absolute;
    overflow-wrap: never;
    margin-top: -0.5em;
    margin-left: -13.5em;
    z-index: 1;
    padding: 1.0em;
  }
  &:hover .tooltipText {
    visibility: visible;
    opacity: 0.85;
    padding: 1.0em;
    color: ${({ theme }) => getThemeColor(theme)("fg")};
    background-color: ${({ theme }) => getThemeColor(theme)("bg")};
    border: thin solid;
    border-color: ${({ theme }) => getThemeColor(theme)("fg2")};
    overflow-wrap: never;
  }
  @media print {
    display: none;
  }
`;


const ButtonComponent = ({ onClick, label, tooltipText, ...props }) => (
  <StyledToolTip className="tooltip" toolTipText={tooltipText}>
    <button
      type="button"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  </StyledToolTip>
);


const Button = styled(ButtonComponent)`
  color: ${(props) => getThemeColor(props.theme)("fg")};
  background-color: ${(props) => getThemeColor(props.theme)("bgS")};
  border-color: ${(props) => getThemeColor(props.theme)("orange")};
  border-radius: 5px;
  border-style: solid;
  border-width: thin;
  transition: background-color 0.3s linear;
  outline: none;
  padding: 0;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
    background-color: ${(props) => getThemeColor(props.theme)("bg2")};
    border-color: ${(props) => getThemeColor(props.theme)("orangeDim")};
  }
  @media print {
    display: none;
  }
`;

export default Button;
