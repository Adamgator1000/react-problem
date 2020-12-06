import React from "react"
import Listitem from "./components/Listitem"
import ImageGallery from 'react-image-gallery'
import "./App"
import "react-image-gallery/styles/css/image-gallery.css"
import "semantic-ui-css"
import {Card} from "semantic-ui-react"
import userdata from "./data/usersdata"

const data = [{
  id: 1,
  name:"Adam",
  school: "ISD",
  image: "https://picsum.photos/id/7/60/60"
},{
  id: 2,
  name:"Eason",
  school: "CDEFLS",
  image: "https://picsum.photos/id/8/60/60"
}]

// class App extends React.Component{
//     render(){
       
//       return <div>

//           { data.map(function(it){
//             const id = it.id
//             const name = it.name
//             const school = it.school
//             const image = it.image
//             return <Listitem title={name} subtitle={school} image={image}/>
//           })}

//           </div>

//     }
// }


const images = [
  {
    original: 'https://picsum.photos/1000/600/',
    thumbnail: 'https://picsum.photos/1000/600/',
  },
  {
    original: 'https://picsum.photos/750/450/',
    thumbnail: 'https://picsum.photos/750/450/',
  },
  {
    original: 'https://picsum.photos/500/300/',
    thumbnail: 'https://picsum.photos/500/300/',
  },
]
 

// class MyGallery extends React.Component {
//   render() {
//     return <ImageGallery items={images} />
//   }
// }



class MyGallery extends React.Component {
  render() {
    return <div>
      <Card header="test title" description="test text" image="http://picsum.photos/200"/>
    </div>
  }
}

export default MyGallery