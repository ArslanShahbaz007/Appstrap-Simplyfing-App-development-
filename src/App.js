import Home from './Components/Home';
import Components from './Components/Components'
import Templates from './Components/Templates'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <section className='section'>
      <BrowserRouter>
        <div className="">
        <Routes>
           <Route exact path='/' element={<Home/>}></Route>
           <Route exact path='/components' element={<Components/>}></Route>
           <Route exact path='/templates' element={<Templates/>}></Route>        
        </Routes>
        </div>
        </BrowserRouter>    
    </section>
    </>
  );
}

export default App;
