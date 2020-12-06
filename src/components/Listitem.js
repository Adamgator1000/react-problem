import React from "react"
import Avatar from "./Avatar"
import Title from "./Title"
import Subtitle from "./Subtitle"

class Listitem extends React.Component{
    render(){
        const props = this.props
        const image = props.image
        const title = props.title
        const subtitle = props.subtitle

        return(
            <div>
                <Avatar image={image}/>
                <Title title={title}/>
                <Subtitle subtitle={subtitle}/>
            </div>
        )
    }
}

export default Listitem;