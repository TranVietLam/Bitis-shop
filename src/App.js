import "./App.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./container/defaultLayout";
// import Login from "./pages/login/login";
// import Register from "./pages/register/register";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route> */}
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </div>
  );
}

export default App;
