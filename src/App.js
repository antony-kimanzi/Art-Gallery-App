import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path ="/personalcollection"  element={<PersonalCollection/>}/>
          </Route>
       </Routes>
      </BrowserRouter>
    
  );
}

export default App;
