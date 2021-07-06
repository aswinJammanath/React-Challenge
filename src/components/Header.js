import '../css/App.css'
import { Component } from 'react'

class Header extends Component{
    render(){
        return( <h1 className={'hello'}>Hello I am {this.props.data}</h1>
        )
    }
}
export default Header

// function Header(props){
//     return(
//         <h1 className={'hello'}>Hello I am {props.data}</h1>
//     )
// }
// export default Header