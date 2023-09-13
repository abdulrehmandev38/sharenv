import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { CreateVariables, Login, Permissions, Variables } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="w-full h-[90vh] flex items-center justify-center">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/new" element={<CreateVariables />} />
          <Route path="/:variableID" element={<CreateVariables />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
