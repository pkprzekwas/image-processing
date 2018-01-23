import React, { Component } from 'react';

class LessonCard extends Component {
  render() {
    const lesson = this.props.product;

    const style = {
      marginBottom: '2%',
    };

    const sampleImg = <img
      className='card-img-top'
      style={{width: '348px'}}
      src={lesson.img}
      alt=''
    />;

    return(
      <div className='card text-center'
           style={style}>
        <h5 className='card-header'>{lesson.name}</h5>
        <div className='card-body'>

          {sampleImg}
          <p className='card-text'>
            {lesson.description}
          </p>
          <a
            href={lesson.url}
            target='_blank'
            className='btn btn-secondary'>
            Przykładowy Jupyter Notebook
          </a>
        </div>
      </div>
    )
  }
}

export default LessonCard;