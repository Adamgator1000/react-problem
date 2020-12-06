import React from "react"

class Avatar extends React.Component{
    render(){
        const props = this.props
        const image = props.image


        return(
            <div className="Avatar">
                <img src={image}/>
            </div>
        )
    }
}

export default Avatar;