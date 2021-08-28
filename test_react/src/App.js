import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:null
    };
  }

  render() {
    const {menuName } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {menuName ? `DBLAB의 추천메뉴: ${menuName} ` : '등록된 메뉴가 없어요'}
        </header>
      </div>
    );
    ;
  }
}

export default App;
