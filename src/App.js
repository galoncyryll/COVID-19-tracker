import React from 'react';
import './App.css';
import { Menu, Icon, Button } from 'semantic-ui-react';

// components
import GridHeader from './components/header/header';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          pointing 
          secondary
          inverted
        >
          <Menu.Item
            name='editorials'
          >
            <Button circular color='github' icon='github' size="medium"/>
          </Menu.Item>
        </Menu>
        <GridHeader />
      </header>
    </div>
  );
}

export default App;
