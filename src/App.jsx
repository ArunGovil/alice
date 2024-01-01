import { Button, Toast, SarahProvider } from "./sarah/components";

function App() {
  const handleButton = () => {
    console.log("Welcome to Sarah");
  };
  return (
    <SarahProvider>
      <Button
        title="Click Me"
        variant="primary"
        disabled={false}
        onClick={handleButton}
      />
      <Toast status="success" message="Welcome to Sarah" />
    </SarahProvider>
  );
}

export default App;
