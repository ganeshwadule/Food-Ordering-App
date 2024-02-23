import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={ <Layout><HomePage/></Layout> }></Route>
            <Route path='/user-profile' element={ <span>USER PROFILE PAGE </span> }></Route>
            {/* this will navigate a user to homepage if in case he enters url which is not specified  */}
            <Route path='*' element={ <Navigate to='/' /> }></Route>
        </Routes>
    );
};

export default AppRoutes;