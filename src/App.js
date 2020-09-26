import React, { Component } from 'react' ;
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';



class App extends Component {
  state={
    username : 'Super sucheta' ,
    placeHolder : 'place holder'

  }


  usernameChangedHandler = (event) => {
    this.setState({username : event.target.value});
  }  

  render() {

    return (
      <div className="App">
        <ol>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ol>
        <UserInput changed={this.usernameChangedHandler} placeHolder= {this.state.placeHolder}/>
        <UserOutput name={this.state.username}/>
        <UserOutput/>
        <UserOutput/>
      </div>
  );
  }
}


export default App;