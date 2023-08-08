
import { topContainer } from './data.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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
// import Navbar from './component/navbar/Navbar.jsx';

function App() {
  return (
    // <Home/>
    // <Performer item={topContainer[0]}/>
    
    // <EventSchedul item={topContainer[2]}/>
    <Router>
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
          </Routes>
    </Router>
    
  );
}

export default App;





