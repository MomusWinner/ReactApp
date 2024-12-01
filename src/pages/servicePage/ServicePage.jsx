import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getServiceAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";

const ServicePage = () => {
    const [service, setService] = useState(null);
    let { serviceId } = useParams();

    useEffect(() => {
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