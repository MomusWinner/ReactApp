import { Card } from '@consta/uikit/Card';
import {Text} from '@consta/uikit/Text'
import { NavLink } from 'react-router';


const Service = function({id, name, description}){
    return(
        <Card verticalSpace="xs" horizontalSpace="xs"  style={{margin: "10px"}}>
            <NavLink to={id}>{name}</NavLink>
            <hr/>
            <Text>{description}</Text>
        </Card>
    )
}

export default Service