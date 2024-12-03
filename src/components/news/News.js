import { Card } from '@consta/uikit/Card';
import {Text} from '@consta/uikit/Text'

export const News = function({name, description, createdAt}){
    return(
        <Card verticalSpace="xs" horizontalSpace="xs" style={{marginBottom: "20px"}}>
            <Text align='center'><b>{name}</b></Text>
            <hr/>
            <Text style={{padding:"10px"}}>{description}</Text>
            <div style={{display:"flex", justifyContent: "flex-end"}}>
                <Text view='ghost'>{createdAt}</Text>
            </div>
        </Card>
    )
}