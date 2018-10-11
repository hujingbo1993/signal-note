import React, { Component } from 'react';
import Algorithm from './algorithm';

export default class Laboratory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithmType: 'bubbleSort',
    };
  }

  selectAlgorithmType = e => {
    this.setState({
      algorithmType: e.target.value,
    });
    this.refs.getAlgorithm.switchAlgorithm(e.target.value);
  };

  render() {
    return (
      <div>
        <Algorithm ref="getAlgorithm" />
        <div>
          <select defaultValue="" onChange={this.selectAlgorithmType}>
            <option disabled />
            <option value="bubbleSort">bubbleSort</option>
            <option value="selectSort">selectSort</option>
          </select>
        </div>
      </div>
    );
  }
}
