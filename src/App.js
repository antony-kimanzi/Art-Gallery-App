import "./App.css";
import Home from "./pages/Home";
import PersonalCollection from "./pages/PersonalCollection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import SingleArt from "./pages/SingleArt";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personalcollection" element={<PersonalCollection />} />
          <Route path="/artwork/:id" element={<SingleArt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
