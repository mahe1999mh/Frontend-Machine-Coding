import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
// import { Documents } from "./pages/Documents";
// import { Messages } from "./pages/Messages";
// import { Settings } from "./pages/Settings";
// import Autocomplete from "../src/pages/Autocomplete/Autocomplete.js"
import { Autocomplete } from "./pages/Autocomplete/Autocomplete";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Autocomplete" element={<Autocomplete />} />
      {/* <Route path="/documents" element={<Documents />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  );
}
