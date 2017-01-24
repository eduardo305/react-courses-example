import React, { Component } from 'react';

class CourseItem extends Component {

  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  toggleCourseStatus() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    let active = this.state.active ? 'Disable' : 'Enable';

    return (
      <li>
        { this.props.title }
        <button onClick={ this.toggleCourseStatus.bind(this) }>{ active }</button>
      </li>
    );
  }
}

export default CourseItem;
