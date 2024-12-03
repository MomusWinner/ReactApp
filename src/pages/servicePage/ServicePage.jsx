import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getServiceAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { APP_ROUTE } from "../../const";

const ServicePage = () => {
    let { serviceId } = useParams();
    const [service, setService] = useState(useSelector(state => state.services.value)?.find(s => s.id == serviceId));
    const navigate = useNavigate()

    useEffect(() => {
        if(service == null)
            getServiceAction(serviceId).then(service=>{
                console.log("request")
                setService(service)
            }).catch(_=>{navigate(APP_ROUTE.services)})
    }, []);

    if(service == null){
        return <Loader/>
    }

    return (
        <>
            <h1>{service?.name}</h1>
            <img src={service?.image}/>
            <p>{service?.description}</p>
        </>
    )
}

export default ServicePage