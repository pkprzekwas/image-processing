import React, {Component} from 'react';
import LessonCard from './LessonCard';

class LessonTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];

    this.props.lessons.forEach((lesson) => {
      if (lesson.name.indexOf(filterText) === -1) {
        return
      }
      if (inStockOnly && !lesson.simple) {
        return
      }
      rows.push(
        <LessonCard
          product={lesson}
          key={lesson.name} />
      );
    });

    return (
      <div>
       {rows}
      </div>
    )
  }
}

export default LessonTable;