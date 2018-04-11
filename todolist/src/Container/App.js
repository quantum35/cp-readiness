import React, { Component } from 'react';
import Input from '../Components/Input/Input';
import List from '../Components/List/List';
import ListDetails from '../Components/List/ListDetails/ListDetails'
import './App.css';

class App extends Component {
  state={
    term:'',
    items:[]
  }
  onChangeHandler=(event)=>{
    this.setState({term:event.target.value})
    console.log(event.target.value)
  }
  onSubmitClickedHandler=(event)=>{
    event.preventDefault()
    this.setState({
      term:'',
      items:[...this.state.items,this.state.term]
    })
  }
  render() {
    return (
      <div className='App'>
        <h3>{this.state.term}</h3>
        <Input value={this.state.term} onchange={this.onChangeHandler} onSubmit={this.onSubmitClickedHandler}/>
        <List items={this.state.items}/>
        <ListDetails/>
      </div>
    );
  }
}

export default App;
