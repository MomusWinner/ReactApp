import { Card } from '@consta/uikit/Card';
import {Text} from '@consta/uikit/Text'
import { NavLink } from 'react-router';


const Service = function({id, name, description, img}){
    return(
        <Card verticalSpace="xs" horizontalSpace="xs"  style={{margin: "10px"}}>
            <NavLink to={id}>{name}</NavLink>
            <hr/>
            <div style={{display: "flex"}}>
                <img style={{width: "100px", height:"100px", marginRight: "10px"}} src={img}/>
                <Text>{description}</Text>
            </div>
        </Card>
    )
}

export default Service