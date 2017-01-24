import React from 'react';

import CourseItem from './course-item.js';

const CourseList = () => {
  return (
    <ul>
      <CourseItem title="React & Redux" />
      <CourseItem title="AngularJS" />
      <CourseItem title="BackboneJS" />
    </ul>
  );
}

export default CourseList;
