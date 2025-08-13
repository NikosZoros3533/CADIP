import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen p-4">
        <Main/>
      </div>
    </ThemeProvider>
  );
}

export default App;
