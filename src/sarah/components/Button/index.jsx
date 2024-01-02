import styled from "@emotion/styled";
import { useTheme } from "../";

const baseStyles = (props) => `
  width: 100px;
  height: 40px;
  border: none;
  margin: ${props.theme.spacing[2]};
  cursor: ${props.disabled ? "not-allowed" : "pointer"};
  background-color: ${props.theme.colors.brand.primary};
  color: ${props.theme.colors.surface.solid.white};
  border-radius: ${props.theme.border.radius[20]};
  &:hover {
    background-color: ${props.theme.colors.brand.secondary};
  }
  `;

const primaryButton = (props) => `
    ${baseStyles(props)};
  `;

const secondaryButton = (props) => `
    ${baseStyles(props)};
    background-color: ${props.theme.colors.surface.text.normal};
    &:hover {
      background-color: ${props.theme.colors.surface.text.disabled};
    }
  `;

const textButton = (props) => `
    ${baseStyles(props)};
    color: ${props.theme.colors.brand.secondary};
    background-color: ${props.theme.colors.surface.solid.white};
    &:hover {
      color: ${props.theme.colors.brand.primary};
      background-color: ${props.theme.colors.surface.solid.white};
    }
  `;

const StyledButton = styled.button`
  ${(props) =>
    props.variant === "secondary"
      ? secondaryButton(props)
      : props.variant === "text"
      ? textButton(props)
      : primaryButton(props)}
`;

function Button({ title, variant, onClick, disabled }) {
  const theme = useTheme();
  return (
    <StyledButton
      variant={variant}
      theme={theme}
      onClick={onClick}
      disabled={disabled}
    >
      {title ? title : "Button"}
    </StyledButton>
  );
}

export default Button;
