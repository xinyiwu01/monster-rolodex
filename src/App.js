import CardList from './components/card-list/card-list.component';
import './App.css';
import { Component } from 'react'; 
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  //all class components can access, keep track of state, helping modification
  constructor() {
    super();
    //call constrcutor() first, initailize all variables, react renders
    // when variables change later, react will rerender the page
    this.state = { // a json object
      monsters: [],
      searchFeild: ''
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

  onSearchChange = (event) => { //change handler, just like onClick(), invoked each time input changes
    const searchFeild = event.target.value.toLocaleLowerCase();
  
    this.setState(
      () => {
        return {searchFeild}; //key and value of the var searchFeild will match
      }
    );
  }

  //render function in component class, what to render
  render() {
    const {monsters, searchFeild} = this.state; //pull from this and cast to constant
    const {onSearchChange} = this;

    // if want to modify an array, create a new array for react to detect the change
    const filteredMonsters = monsters.filter((monster) => {return monster.name.toLocaleLowerCase()
      .includes(searchFeild)});//should be a boolean value

    return ( //return html components
      <div className="App">
        {/** 
        <input
          className='search-box'
          type='search'
          placeholder='search monsters' //placeholder when nonting typed
          onChange={onSearchChange}
        />
        */}
        <h1 className='app-title'>My Monsters Rolodex</h1>
        <SearchBox 
          className='monsters-search-box' 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'/>

        <CardList monsters={filteredMonsters} />

        {/** 
        {filteredMonsters.map((monster) => {
          return (
          <div key = {monster.id}>
            <h1>{monster.name}</h1>
            </div>);
        })}
      */}
          
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
