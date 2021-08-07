import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
// Add the following line:
import * as puppyAPI from '../../services/puppies-api';
import AddPuppy from '../AddPuppy/AddPuppy';
import PuppyList from '../PuppyList/PuppyList'

class App extends Component {
  state = {
    puppies: []
  };

  handleAddPuppy = async newPupData => {
    const newPup = await puppyAPI.create(newPupData);
    this.setState(state => ({
      puppies: [...state.puppies, newPup]
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const puppies = await puppyAPI.getAll();
    this.setState({puppies});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Puppies CRUD
          <nav>
            <NavLink exact to='/'>Puppy List</NavLink>
            <NavLink className='m-left' exact to='/add'>Add Puppy</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/add' render={() => 
          <AddPuppy
            handleAddPuppy = {this.handleAddPuppy}
          />
          } />
          <Route exact path='/' render={() => 
            <PuppyList
              puppies={this.state.puppies}
            />
          } />
        </main>
      </div>
    )
  }
}

export default App;