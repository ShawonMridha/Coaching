import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Data from './components/Data/Data';
import Show from './components/Show/Show';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import Seba from './components/Seba/Seba';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Router>
       <Links></Links>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/service">
           <Service></Service>
         </Route>
         <Route path="/show">
           <Show></Show>
         </Route>
         <Route path="/showservice">
           <Seba></Seba>
         </Route>
         <Route path="/contact">
          <Contact></Contact>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
