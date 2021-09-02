// import logo from './logo.svg';
// // import './App.css';
import React from "react"
import {useRoutes} from "react-router-dom"
import appRoutes from "./routes";
import  Snackbar from "./components/Snackbar";
import {useSelector} from "react-redux"
function App() {
  const showLayout = useSelector((data)=>data.auth && data.auth.isLoggedIn)
  const routing = useRoutes(appRoutes(showLayout))
  return (
    <div className="App">
      {routing}
      <Snackbar />
    </div>
  );
}

export default App;
