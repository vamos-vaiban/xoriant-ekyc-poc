import React from "react";
import Layout  from "./layout"
import UserLayout from "./layout/User"

import Home from "./views/SignIn" 
import BasicDetails from "./views/BasicDetails"
import AddressDetails from "./views/AddressDetails";
const appRoutes = (data)=>{
    const routes =[
        data && data === true?
        {
            path:"/",
            element:<Layout />,
            children :[
                {
                    path:"/",
                    element:<Home />
                },
                {
                    path:"/signin",
                    element:<Home />
                },
            ]
        }:null,
        data && data === true?
        {
            path:"/home",
            element:<UserLayout />,
            children:[
                {
                    path :"/",
                    element:<BasicDetails />
                },
                {
                    path:'addressDetails',
                    element:<AddressDetails />
                }
            ]

        }
        :null
        
    ]
    return routes.filter(r=>r!==undefined || r!== "")
}

export default appRoutes;