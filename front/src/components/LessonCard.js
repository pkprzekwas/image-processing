import React, { Component } from 'react';

class LessonCard extends Component {
  render() {
    const lesson = this.props.product;

    const style = {
      marginBottom: '2%',
    };

    const imgStyle = {
      width: '348px',
      marginBottom: '2%',
    };

    const sampleImg = <img
      className='card-img-top'
      style={imgStyle}
      src={lesson.img}
      alt=''
    />;

    return(
      <div className='container'>
        <div className='card text-center'
             style={style}>
          <h5 className='card-header'>{lesson.name}</h5>
          <div className='card-body'>
            {sampleImg}
            <p className='card-text text-justify'>
              {lesson.description}
            </p>
            <a
              href={lesson.url}
              target='_blank'
              className='btn btn-secondary btn-lg'>
              Jupyter Notebook
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default LessonCard;