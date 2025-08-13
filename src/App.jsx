import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg- p-4">
      <h1 className="text-2xl font-bold">Welcome to the App</h1>
      <Button  size="lg">
        Click Me
      </Button>
    </div>
  );
}

export default App;
