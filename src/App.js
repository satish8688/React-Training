import React, { Component } from "react";
import Home from './Home';
import Dribble from "./Dribble";


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
      {/* <Dribble /> */}
      <Home />
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
