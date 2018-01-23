import React, { Component } from 'react';
import FilterableLessonTable from './FilterableLessonTable';
import { lessons, topic, course } from '../config';

class HomePage extends Component {
  render() {
    const style = {
      marginTop: '5%',
    };

    return(
      <div className='container' style={style}>
        <h1 className='display-3 text-center'>{course}</h1>
        <p className='lead text-center'>{topic}</p>
        <hr/>
        <FilterableLessonTable lessons={lessons}/>
      </div>
    )
  }
}

export default HomePage;