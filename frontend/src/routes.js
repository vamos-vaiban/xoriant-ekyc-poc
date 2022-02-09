import React from "react";
import Layout  from "./layout"
import UserLayout from "./layout/User"

import Home from "./views/SignIn" 
import BasicDetails from "./views/BasicDetails"
import AddressDetails from "./views/AddressDetails";
import AadharValidation from "./views/AadharValidation";
import Review from "./views/Review"
import AdminLayout from "./layout/Admin";
import KYCRequests from "./views/KYCRequests";
import BankPersonnel from "../src/views/BankPersonnel/index"
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
                    path :"/home",
                    element:<BasicDetails />
                },
                {
                    path:'addressDetails',
                    element:<AddressDetails />
                },
                {
                    path:'aadharValidation',
                    element:<AadharValidation />
                },
                {
                    path:'review',
                    element:<Review />
                }
            ]

        }
        :null,
        data && data === true ?
            {
                path: "/kycRequests",
                element: <AdminLayout />,
                children: [
                    {
                        path: "",
                        element: <BankPersonnel />
                    }
                ]
            }
            : null
        
    ]
    return routes.filter(r=>r!==undefined || r!== "")
}

export default appRoutes;