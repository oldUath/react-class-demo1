import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      x:0
    }
  };
  add=()=>{
    this.setState({
        x:this.state.x+1
    })
  };
  render(){
    return(
      <div>
        APP
         <button onClick={()=>this.add()}>+1</button>
          <B name={this.state.x} />
      </div>
    )};
}
class B extends React.Component{
    //每次props改变时，就会启用这个钩子
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('老props')
        console.log(this.props)
        console.log('new')
        console.log(nextProps)
    }

    render() {
        return(
            <div>{this.props.name}</div>
        )
    }
}

export default App;
