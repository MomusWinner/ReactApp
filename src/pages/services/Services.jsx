import Service from "../../components/service/Service";
import { useEffect,useState } from "react";
import { getServiceListAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";
import { useSelector, useDispatch } from "react-redux";
import { setServicesState } from "../../store/servicesSlice";

const Services = function(){
    const dispatch = useDispatch()
    const [services, setServices] = useState(useSelector(state => state.services.value));

    useEffect(() => {
        getServiceListAction().then(resp=>{
            setServices(resp)
            dispatch(setServicesState(resp))
        })
    }, []);

    if (!services || services.length === 0) return  <Loader size="m" />

    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns : "repeat(3, 1fr)",
                gridAutoRows: "200px"
                // grid-auto-rows: 200px;
            }}>
                {services.map(service => <Service id={service.id} name={service.name} description={service.description} img={service.image}/>)}
            </div>
        </>
    )
}

export default Services