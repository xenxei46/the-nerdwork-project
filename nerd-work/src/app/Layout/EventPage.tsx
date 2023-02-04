import React from 'react';
import About from './Events-page/About';
import Header from './Events-page/Header';


class EventPage extends React.Component {
  render() {
    return <>
      <div className="w-full">
        <Header></Header>
        <About></About>
      </div></> 
  }
}

export default EventPage;