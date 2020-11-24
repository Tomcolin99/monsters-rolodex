import './App.css';
import React, { Component } from "react"
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';


class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
      
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="search monster" 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
