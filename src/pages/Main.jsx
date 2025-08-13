import React from "react";
import { useTheme } from "../components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Main() {
  const { theme,setTheme } = useTheme();
  return (
    <div>
        {theme === "dark" ? (
          <Button variant="svg" onClick={() => setTheme("light")}>
            <Sun className="mr-2" />
          </Button>
        ) : (
          <Button variant="svg" onClick={() => setTheme("dark")}>
            <Moon className="mr-2" />
          </Button>
        )}

      <h1 className="mt-4">Welcome to the Main Page</h1>
      <p>This is the main content area.</p>
    </div>
  );
}
