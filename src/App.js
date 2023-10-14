import './App.css';
import Products from './components/products';
import Nav from './components/nav';
import Catogiries from './components/catogiries';
import Carosel from './components/carosel';
import Banner from './components/banner';
import Promotions from './components/Promotions';

function App() {
  return (
    <>
    <Nav/>
    <div className="container-fluid">
      <div className='row'>
        <div className='col-md-12'>
            <Catogiries/>
        </div>
        
        <div className='col-md-12 m-3'>
          <Carosel/>
        </div>
        <div>
          <Banner/>
        </div>
        <div className='row'>
          <Promotions/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Products/>
       
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
