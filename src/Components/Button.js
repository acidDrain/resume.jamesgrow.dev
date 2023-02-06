import styled from "styled-components";
import { getThemeFg, getThemeBg, getThemeBg2, getThemeBorder } from "../util";

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
  font-size: 0.4rem;
  color: ${getThemeFg};
  background-color: transparent;
  transition: color 0.5s linear, background-color 0.5s linear, visibility 0.3s ease-in;
  padding: 1.5em 1.55em;
  .tooltipText {
    visibility: hidden;
    background-color: ${getThemeBg};
    color: ${getThemeBorder};
    border-radius: 0.7em;
    position: absolute;
    width: 14em;
    margin-top: -0.5em;
    margin-left: -13.5em;
    z-index: 1;
    /*filter: drop-shadow(-0.15em 0.375em 0.145em ${getThemeBg2});
    filter: drop-shadow(-0.1em 0.125em 0.4875em )
    filter: drop-shadow(0 0.625em 0.375em ${getThemeFg});*/
  }
  &:hover .tooltipText {
    visibility: visible;
    opacity: 0.85;
    color: ${getThemeBg2};
    background-color: ${getThemeFg};
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
  color: ${(props) => props.theme.colors.fg};
  background-color: ${(props) => props.theme.colors.bg};
  border-color: ${(props) => props.theme.colors.borderColor};
  border-radius: 5px;
  border-style: solid;
  border-width: thin;
  transition: background-color 0.3s linear;
  outline: none;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
    background-color: ${(props) => props.theme.colors.link};
    border-color: ${(props) => props.theme.colors.borderColor};
  }
  @media print {
    display: none;
  }
`;

export default Button;
