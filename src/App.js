import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      x:0
    }
  };
  add(){
    this.setState({
        x:this.state.x+1
    })
  };
  render(){
    return(
      <div>
        APP
         x:{this.state.x}
         <button onClick={()=>this.add()}>+1</button>
      </div>
    )};
}

export default App;
