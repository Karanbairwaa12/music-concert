
import { topContainer } from './data.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Performer from './pages/Performer.jsx';
import EventPage from './pages/EventPage.jsx';
import EventSchedul from './pages/EventSchedul.jsx';
import AllProduct from './component/products/AllProduct.jsx';
import About from './pages/About.jsx'
import VanuePage from './pages/VanuePage.jsx';
import TicketPage from './pages/TicketPage.jsx';
import BlogPageOne from './pages/BlogPage1.jsx';
import BlogPageTwo from './pages/BlogPage2.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import ProductItemPage from './pages/ProductItem.jsx';
import { useEffect, useState } from 'react';
import { ArrowUpward } from '@mui/icons-material';
// import Navbar from './component/navbar/Navbar.jsx';



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  const [showButton, setShowButton] = useState(false);
  const handleTopToUp =()=> {
    window.scrollTo({top:0, left:0, behavior:"smooth"})
  } 
  
  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    // <Home/>
    // <Performer item={topContainer[0]}/>
    
    // <EventSchedul item={topContainer[2]}/>
    <>
      <Router>
          <ScrollToTop />
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/performer' element={<Performer item={topContainer[0]}/>}></Route>
              <Route exact path='/event' element={<EventPage item={topContainer[1]}/>}></Route>
              <Route exact path='/eventschedul' element={<EventSchedul item={topContainer[2]}/>}></Route>
              <Route exact path='/about' element={<About item={topContainer[3]}/>}></Route>
              <Route exact path='/product' element={<AllProduct item={topContainer[4]}/>}></Route>
              <Route exact path='/vanue' element={<VanuePage item={topContainer[5]}/>}></Route>
              <Route exact path='/ticket' element={<TicketPage item={topContainer[6]}/>}></Route>
              <Route exact path='/blog/page1' element={<BlogPageOne item={topContainer[7]}/>}></Route>
              <Route exact path='/blog/page2' element={<BlogPageTwo item={topContainer[7]}/>}></Route>
              <Route exact path='/contact' element={<ContactPage item={topContainer[8]}/>}></Route>
              <Route exact path='/blogdetail/:id' element={<BlogDetail/>}></Route>
              <Route exact path='/product/:id' element={<ProductItemPage item={topContainer[9]}/>}></Route>
          </Routes>
    </Router>
    {showButton && 
        (<button className="topToUp" onClick={handleTopToUp}>
          <ArrowUpward/>
        </button>
        )
      }
    </>
    
    
  );
}

export default App;





