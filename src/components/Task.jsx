import React from 'react';

export default class Task extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => alert('click')}>
          {this.props.value}
        </button>
      );
    }
   }
