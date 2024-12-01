import { Card } from '@consta/uikit/Card';
import {Text} from '@consta/uikit/Text'

export const News = function({name, description, createdAt}){
    return(
        <Card verticalSpace="xs" horizontalSpace="xs" style={{marginBottom: "20px"}}>
            <Text><b>{name}</b></Text>
            <hr/>
            <Text>{description}</Text>
            <Text>{createdAt}</Text>
        </Card>
    )
}