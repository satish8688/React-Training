import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';


import Home from './Home';
import Dribble from "./Dribble";
import Register from './Register';


class App extends Component {

  // state = {
  //   total: 0,
  //   name: "John",
  //   isSuccess: false,
  //   person: {},
  //   arr: []
  // }

  //  GENERAL FUNCTION
  // clickMe() {
  //   let a = 20;
  //   let b = a * 30;
  //   console.log(b);
  // }

  // ARROW FUNCTION
  // clickMe = () => {
  //   let a = 20;
  //   let b = a * 30;
  //   console.log(b);
  // }


  render() {

    return (<>
      {/* <Dribble />
      <Home /> */}
      <ul>
        <li>
          {/* <a href="/">Initial</a> */}
          <Link to="/">Initial</Link>
        </li>
        <li>
          {/* <a href="/home">Home</a> */}
          <Link to="/home">Home</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Dribble} />
        {/* <Route path="/home/:id" component={Dribble} /> */}
      </Switch>
    </>)
  }
}

export default App;



































// import logo from './logo.svg';
// import './App.css';
// import Login from './Views/Login/Login';
// import Home from './Views/Home/Home';
// import { Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       {/* <Login />  
//       <Home /> */}
//       <Switch>
//         <Route path="/" exact name="Login" component={Login} />
//         {/* <Route path="/home" name="Home" component={Home} /> */}
//         <Route path="/home" name="Home" render={(props) => <Home {...props} />} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
