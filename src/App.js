import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { CreateVariables, Login, Variables } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="w-full h-[90vh] flex items-center justify-center">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Variables />} />
          <Route path="/new" element={<CreateVariables />} />
          <Route path="/:variableID" element={<CreateVariables edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
