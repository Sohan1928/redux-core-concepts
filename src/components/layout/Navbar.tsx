import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center h-16 gap-3 px-5 mx-auto max-w-7xl">
      <div className="flex items-center gap-4">
        <Link to="/">
          <span className="text-xl font-bold text-green-500">Task</span>Master
        </Link>
        <Link to="/users">Users</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
