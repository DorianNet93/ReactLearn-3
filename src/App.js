import React, { Component } from 'react';
import Lists from './components/Lists';


class App extends Component {

  list = [
    {
      id: 1,
      title: `Task 1`
    },
    {
      id: 2,
      title: `Task 2`
    },
    {
      id: 3,
      title: `Task 3`
    },
    {
      id: 4,
      title: `Task 4`
    }
  ];

  list2=[];
  list3=[];

  render() {
    let {list=[], list2=[], list3=[]} = this

    return (
      <>
        <Lists listLeft={list} listRight={list2} listRemove={list3}/> 
      </>
    );
  }
}

export default App;
