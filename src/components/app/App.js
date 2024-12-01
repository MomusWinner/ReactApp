import { Route, Routes, BrowserRouter } from "react-router";
import Services from "../../pages/services/Services"
import Home from "../../pages/home/Home";
import { APP_ROUTE } from "../../const";
import DefaultLayout from "../../layouts/DefaultLayout";
import Signin from "../../pages/signin/Signin";
import ServicePage from "../../pages/servicePage/ServicePage";

const App = function(){
  return(
    <>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={APP_ROUTE.main} element={<Home/>}/>
            <Route path={APP_ROUTE.services} element={<Services/>}>
            </Route>
            <Route path={APP_ROUTE.services + ":serviceId"} element={<ServicePage/>}></Route>
            <Route path={APP_ROUTE.signin} element={<Signin/>}/>
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </>
  )
}

export default App;