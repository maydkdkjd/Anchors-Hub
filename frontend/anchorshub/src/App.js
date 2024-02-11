import Jobs from './Card'
import {Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import Signup from './Signup'
import Profile from './Profile'
function App() {
  return (
    <>
      <Routes>
        <Route exact path = '/' Component={Signup} />
        <Route path='/Dashboard' Component={Dashboard} />
        <Route path = '/Jobs' Component={Jobs} />
        <Route path = '/Profile' Component={Profile} />
      </Routes>
    </>
    
  );
}

export default App;
