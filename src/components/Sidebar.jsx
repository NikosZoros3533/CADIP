import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 flex flex-col p-4 border-r border-accent ">
      <h1 className="text-2xl font-bold mb-6">My App</h1>
      <nav className="flex flex-col gap-2">
        <Button variant="secondary" asChild>
          <Link to="/root1">Root 1</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/root2">Root 2</Link>
        </Button>
      </nav>
    </div>
  );
}
