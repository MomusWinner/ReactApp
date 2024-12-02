import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getServiceAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";
import { useSelector } from "react-redux";

const ServicePage = () => {
    let { serviceId } = useParams();
    const [service, setService] = useState(useSelector(state => state.services.value).find(s => s.id == serviceId));

    useEffect(() => {
            if(service)
            getServiceAction(serviceId).then(service=>{
                setService(service)
            })
    }, []);

    if(service === null){
        return <Loader/>
    }

    return (
        <>
            <h1>{service.name}</h1>
            <img src={service.image}/>
            <p>{service.description}</p>
        </>
    )
}

export default ServicePage