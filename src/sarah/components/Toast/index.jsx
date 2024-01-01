import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTheme } from "../";

const baseStyles = (props) => `
position: fixed;
width: 220px;
height: 60px;
align-items: center;
border-radius: ${props.theme.border.radius[20]};
color: ${props.theme.colors.surface.solid.white};
right: ${props.theme.spacing[16]};
bottom: ${props.theme.spacing[16]};
padding: ${props.theme.spacing[12]};
background-color: ${
  props.status === "success"
    ? props.theme.colors.feedback.success
    : props.theme.colors.feedback.error
};
display: ${props.show ? "flex" : "none"};
  `;

const StyledToast = styled.div`
  ${(props) => baseStyles(props)}
`;

function Toast({ message, status, duration }) {
  const theme = useTheme();
  const toastDuration = duration ? duration : 3000;
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, toastDuration);

    return () => clearTimeout(timer);
  }, [toastDuration]);

  return (
    <StyledToast theme={theme} status={status} show={show}>
      {message}
    </StyledToast>
  );
}

export default Toast;
