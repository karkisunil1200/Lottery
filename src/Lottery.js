import React, {Component} from 'react';
import Ball from './Ball';
import {tsImportEqualsDeclaration} from '@babel/types';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxBalls: 40
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({length: this.props.numBalls})
    };
  }

  generateNumber = () => {
    this.setState(prevState => ({
      nums: prevState.nums.map(num => Math.floor(Math.random() * 39) + 1)
    }));
  };

  clickHandler = event => {
    this.generateNumber();
  };

  render() {
    return (
      <div className='lottery'>
        <h1 className='heading bg-info'>{this.props.title}</h1>
        <div>
          {this.state.nums.map(num => (
            <Ball num={num} />
          ))}
        </div>
        <button type='button' className='btn btn-primary btn-lg' onClick={this.clickHandler}>
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery;
