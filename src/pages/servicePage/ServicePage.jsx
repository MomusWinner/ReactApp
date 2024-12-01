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
            <p>{service.name}</p>
            <p>{service.description}</p>
            <p>{service.name}</p>
            <p>{service.name}</p>
        </>
    )
}

export default ServicePage