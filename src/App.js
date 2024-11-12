import './App.css';
import Home from './pages/Home'
import PersonalCollection from './pages/PersonalCollection'
import Layout from './component/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path ="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path ="/personalcollection"  element={<PersonalCollection/>}/>
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
