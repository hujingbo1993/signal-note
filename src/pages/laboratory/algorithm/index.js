import React, { Component } from 'react';
import Algorithm from './algorithm';

export default class algorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasH: document.body.clientHeight * 0.6,
      canvasW: document.body.clientWidth * 0.6,
      min: 5,
      max: 55,
      l: 10,
      arr: this.randomArr(10, 5, 55),
      algorithmType: Algorithm,
      isPlaying: false,
    };
  }

  drawFrame(ctx, frame) {
    ctx.clearRect(0, 0, this.state.canvasW, this.state.canvasH);
    const fontSize = 22;
    let w = this.state.canvasW / frame.data.length;
    let h = (this.state.canvasH - fontSize) / Math.max(...frame.data);

    for (let i = 0; i < frame.data.length; i++) {
      if (i === frame.select) {
        ctx.fillStyle = 'yellow';
      } else if (i === frame.min || i === frame.index) {
        ctx.fillStyle = 'blue';
      } else {
        ctx.fillStyle = 'black';
      }
      ctx.fillRect(
        i * w,
        this.state.canvasH - frame.data[i] * h + 2,
        w,
        this.state.canvasH,
      );
      ctx.font = fontSize + 'px serif';
      ctx.fillText(
        frame.data[i],
        i * w + (w - fontSize) / 2,
        this.state.canvasH - frame.data[i] * h,
      );
    }
  }

  drawData(ctx, data, i) {
    this.drawFrame(ctx, data[i]);

    if (i < data.length - 1) {
      setTimeout(() => {
        this.drawData(ctx, data, i + 1);
      }, 300);
    } else {
      this.drawFrame(ctx, { data: data[i - 1].data });
      this.setState({
        isPlaying: false,
      });
    }
  }

  randomArr(l, max, min) {
    let arr = [];
    for (let i = 0; i < l; i++) {
      arr.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return arr;
  }

  getRandomArr = () => {
    if (this.state.isPlaying) return;

    let arr = this.randomArr(this.state.l, this.state.min, this.state.max);

    this.setState({
      arr: arr,
    });
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    this.drawFrame(ctx, { data: arr });
  };

  componentDidMount() {
    window.onresize = () => {
      this.setState({
        canvasH: document.body.clientHeight * 0.6,
        canvasW: document.body.clientWidth * 0.6,
      });
    };

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    this.drawFrame(ctx, { data: this.state.arr });
  }

  switchAlgorithm(type) {
    if (this.state.isPlaying) return;
    this.setState({
      isPlaying: true,
    });
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let data = this.state.algorithmType[type](this.state.arr);
    this.drawData(ctx, data, 0);
  }

  maxChange = e => {
    this.setState({
      max: parseInt(e.target.value),
    });
  };

  minChange = e => {
    this.setState({
      min: parseInt(e.target.value),
    });
  };

  lChange = e => {
    this.setState({
      l: parseInt(e.target.value),
    });
  };

  render() {
    return (
      <div>
        <canvas
          id="canvas"
          width={this.state.canvasW}
          height={this.state.canvasH}
        />
        <div>
          最大值
          <input onChange={this.maxChange} />
          最小值
          <input onChange={this.minChange} />
          长度
          <input onChange={this.lChange} />
          <button onClick={this.getRandomArr}>获得随机数列</button>
        </div>
      </div>
    );
  }
}
