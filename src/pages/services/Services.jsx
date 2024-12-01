import Service from "../../components/service/Service";
import { useEffect,useState } from "react";
import { getServiceListAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";

const Services = function(){
    const [services, setServices] = useState();

    useEffect(() => {
        async function loadData() {
            setServices(await getServiceListAction())
        }
        loadData()
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