import logo from './logo.svg';
import './App.css';
import { Component } from 'react'; 

class App extends Component {
  //all class components can access, keep track of state, helping modification
  constructor() {
    super();
    //call constrcutor() first, initailize all variables, react renders
    // when variables change later, react will rerender the page
    this.state = { // a json object
      monsters: []
    }
  }

  //lifecycle method to get data from API
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // a promise, can be passed to next 
    .then((response) => response.json()) // callback function
    .then((users) => {
      this.setState(
        () => {
          return {monsters: users};
        },
        () => {
          console.log(this.state);
        }
      )
    }) // pass reponse as users

  }
  //render function in component class, what to render
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
          <div key = {monster.id}>
            <h1>{monster.name}</h1>
            </div>);
        })}
          
          {/*use curly braces to access JS variable in JSX/HTML */}
          
          {/*onclick event handler 
          = {} also use curly braces to access JS blocks in JSX/HTML
          callback function: it will be called back during the process(when clicked)
          why use setState? setState: shallow merge, find the key in state and update its value,
          this creates a new object in state, so react can detect it and rerender the page.
          Otherwise, this.state.name = newName, it's the same object and react can't detect.
          React rerender when state object is a diffrent object in memory. (eg.equals but !=)
          
          <button 
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: {first:'Andrew', last:'Green'},
                  };
                },
                () => {
                  console.log(this.state);
                }
              )
            }}>
            change name
          </button>
          {/*setState(name: {first:'Andrew', last:'Green'}) is async, to make it sync, 
          return a fucntion instead of an object. The second callback will be processed 
          after the first one finished/all states are updated
          the second callback isn't necessary
          */}
        
      </div>
    );
  }
  
}

export default App;
