import { Route, Routes, BrowserRouter } from "react-router";
import Services from "../../pages/services/Services"
import Home from "../../pages/home/Home";
import { APP_ROUTE } from "../../const";
import DefaultLayout from "../../layouts/DefaultLayout";
import Signin from "../../pages/signin/Signin";
import ServicePage from "../../pages/servicePage/ServicePage";
import Profile from "../../pages/profile/Profile";
import { Responses404 } from '@consta/uikit/Responses404';
import CheckAuth from "../check_auth/CheckAuth";

const App = function(){
  return(
    <>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={APP_ROUTE.main} element={<Home/>}/>
            <Route path={APP_ROUTE.services} element={<CheckAuth><Services/></CheckAuth>}>
            </Route>
            <Route path={APP_ROUTE.services + ":serviceId"} element={<CheckAuth><ServicePage/></CheckAuth>}></Route>
            <Route path={APP_ROUTE.signin} element={<Signin/>}/>
            <Route path={APP_ROUTE.profile} element={<CheckAuth><Profile/></CheckAuth>}/>
            <Route path="*" element={<Responses404/>}/>
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </>
  )
}

export default App;