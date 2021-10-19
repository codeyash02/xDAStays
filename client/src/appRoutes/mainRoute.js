
import Layout from "../components/layout/index";
import Home from "../pages/LandingPage"
import Booking from '../pages/BookingPage'
export const homeRoute = [

    {
        path : '/' , 
        exact : true , 
        layout : Layout , 
        component: Home,
    },
    {
      path : '/booking' , 
      exact : true , 
      layout : Layout , 
      component: Booking,
  },
    
]



export const mainRoute = [ ...homeRoute ]