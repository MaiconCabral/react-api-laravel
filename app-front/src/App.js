import './customcss/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar componentes
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App container">
      <div className="row">
      <div className="col-12 col-lg-8 offset-lg-4 col-xl-10 offset-xl-1 mt-3">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProducts/> } />
          <Route path='/create' element={ <CreateProduct/> } />
          <Route path='/edit/:id' element={ <EditProduct/> } />
        </Routes>
      </BrowserRouter> 
    </div>
    </div>
    </div>
  );
}

export default App;
