import { Component, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getUsers } from './utils/data.utils';

import './App.css';

export interface IMonster {
  id: string;
  name: string;
  email: string;
};

interface IProps {
}

interface IState {
  monsters: IMonster[];
  searchField: string;
};

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };
  };

  componentDidMount() {
    const fetchMonsters = async () => {
      const users = await getUsers<IMonster[]>('https://jsonplaceholder.typicode.com/users'); 
      this.setState({ monsters: users }); 
    }

    fetchMonsters();
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monster Rolodex</h1>
        
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
          className='monsters-search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
