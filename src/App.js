import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Hello = (props) =>(
<div>
  <strong>{props.username}!</strong>
</div>
);

const Hello2 = (props) => {
  const {username} = props;
  return(
    <div>
       <strong>{username || 'Kiezmi'}!</strong>
    </div>
  );
}

export class Counter extends Component{

  state= {count:0};

componentDidMount(){
  console.log('Component did mount')
};

componentDidUpdate(){
  console.log('Component did update');
};

handelClick = () => {this.setState({count: this.state.count +1});
};

render=() => {
  return(
    <div>
      <h2>Contador:{this.state.count}</h2>
      <button onClick={this.handelClick}>+1</button>
    </div>
  )
}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
          <Hello username={'Kiezmi'}/>
          <Hello username={'Juan'}/>
          <Hello2 />
          <Hello2 username={'Kiezmi'} />
          <Counter />
      
      </div>
    );
  }
}

export default App;
