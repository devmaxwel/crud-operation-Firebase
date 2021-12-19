import React from 'react'
import {Route}  from 'react-router-dom'
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Search from "./pages/Search";
import "./App.css";

const Home = () => {
    return (
        <>
       
         <Header />

         <ToastContainer />

         <div className='App'> 
            
                <Route exact path="/" component={Home} />

                <Route path="/add" component={AddEdit} />

                <Route path="/update/:id" component={AddEdit} />

                <Route path="/view/:id" component={View} />

                <Route path="/about" component={About} />

                <Route path="/search" component={Search} />
            
      </div> 

      </>
        
    )
}

export default Home;
