import React from "react"

class Subtitle extends React.Component{
    render(){
        const props = this.props
        const subtitle = props.subtitle

        return(
            <h2>{subtitle}</h2>
        )
    }
}

export default Subtitle; 