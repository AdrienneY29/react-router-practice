import React, {Component} from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      foodList:[],
      foodName:"",
      
    }
  }
  handleNameInput=(event)=>{
    this.setState({foodName:event.target.value});
  }
  
  handleClick=()=>{
    let foodObj = {foodName:this.state.foodName};
    this.setState({foodList: [...this.state.foodList, foodObj], foodName:""});
  }
  





  render(){
    let foodElementArr = this.state.foodList.map((animal, index)=>{
      return(
        <div key={index}>
          <div>Name: {animal.foodName}</div>
         
        </div>
      )
    })
    return(
      <div>


        <h4>Your Favorite Food List</h4>
        {foodElementArr}
        <input value={this.state.foodName} onChange={this.handleNameInput} placeholder="Favorite Dish"/>
       
        <button onClick={this.handleClick}>Add Favorite Food</button>
      </div>
    )
  }
}

export default App;