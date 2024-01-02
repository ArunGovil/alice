import { useState } from "react";
import { Button, Toast, SarahProvider } from "./sarah/components";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const handleClick = (status) => {
    setOpen(true);
    setStatus(status);
  };

  return (
    <SarahProvider>
      <Button
        title="Accept"
        variant="primary"
        disabled={false}
        onClick={() => handleClick(true)}
      />

      <Button
        title="Reject"
        variant="secondary"
        disabled={false}
        onClick={() => handleClick(false)}
      />

      <Toast
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        status={status ? "success" : "error"}
        message={status ? "Request approved" : "Request rejected"}
      />
    </SarahProvider>
  );
}

export default App;
