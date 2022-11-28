import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import User from "../Layout/User";
import Home from "../Pages/Home/Home";
import AddedEvent from "../Pages/VolunteerCategory/AddedEvent";
import Categories from "../Pages/VolunteerCategory/Categories";
import EventDetails from "../Pages/VolunteerCategory/EventDetails";
import AddEvent from "../User/AddEvent";
import Login from "../User/Login";
import Register from "../User/Register";
import RegisterForDonate from "../User/RegisterForDonate";
import RequestToAdmin from "../User/RequestToAdmin";
import Users from "../User/Users";
import VolunteerTable from "../User/VolunteerTable";
import AdminRoute from "./AdminRoute";
export const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:"/events",element:<Categories></Categories>},
        {path:'/donateNow',element:<RegisterForDonate></RegisterForDonate>},
        {path:'/eventDetails/:id',
        loader:async({params})=>fetch(`http://localhost:5000/eventDetails/${params.id}`),
        element:<EventDetails></EventDetails>},
        {path:'/addedEvent',
        loader:async()=>fetch(`http://localhost:5000/addEvent`),
        element:<AddedEvent></AddedEvent>}
    ]
    },
    {path:"/user",
    element:<User></User>,
    children:[
        {path:"/user/register",element:<Register></Register>},
        {path:"/user/login",element:<Login></Login>},
        {path:'/user/requestToAdmin',element:<RequestToAdmin></RequestToAdmin>}
    ]
    },
    {path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
        {path:'/dashboard',element:<AddEvent></AddEvent>},
        {path:'/dashboard/volunteerList',element:<VolunteerTable></VolunteerTable>},
        {path:'/dashboard/addEvent',element:<AddEvent></AddEvent>},
        {path:'/dashboard/users',element:<AdminRoute><Users></Users></AdminRoute>}
    ]
    }
])

