import React from "react"

class Title extends React.Component {
    render(){
        const props = this.props
        const title = props.title
        
        return (
            <h1>{title}</h1>
        )
    }
}

export default Title;