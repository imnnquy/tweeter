import React from 'react';
import Layout from './Layout'


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Layout />
      </div>);
  }
}
