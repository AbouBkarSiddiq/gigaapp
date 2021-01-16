
import './App.css';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Dropzone from './pages/dropzone'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile1 from './pages/profile1';
import Profile2 from './pages/profile2';
import MyDropzone from './pages/drop';


function App() {
  return (  
    <Router>
      <Switch>
        <Route path='/' exact component={Signin}/>
        <Route path='/register' component={Signup}/>
        <Route path='/profile'component={Profile1} />
        <Route path='/company' component={Profile2} />
        <Route path='/drop' component={Dropzone} />
        <Route path='/drop1' component={MyDropzone} />
      </Switch>
    </Router>
  );
}

export default App;
