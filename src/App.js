import "./App.css";
import Home from "./pages/Home";
import PersonalCollection from "./pages/PersonalCollection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import GalleryArt from "./pages/GalleryArt";
import CollectionArt from "./pages/CollectionArt";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personalcollection" element={<PersonalCollection />} />
          <Route path="/gallery/:id" element={<GalleryArt />} />
          <Route path="/personalcollection/:id" element={<CollectionArt />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
