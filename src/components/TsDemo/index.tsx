import * as React from "react";
import ReactDOM from "react-dom";

interface IProps {}

interface IState {}

class TsDemo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  canvas: HTMLCanvasElement | null = null;

  render() {
    return (
      <canvas
        ref={ref => {
          this.canvas = ref;
        }}
      ></canvas>
    );
  }

  coordinateX = (t: number) => 150 + 4 * (6 * Math.pow(Math.sin(t), 3));
  coordinateY = (t: number) => {
    return (
      75 -
      4 *
        (13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t))
    );
  };

  startRadian = 100;
  radian = 100;
  radianDecrement = 10000;

  componentDidMount() {
    const ctx = this.canvas!.getContext("2d");
    const dotToLine = () => {
      this.radian += this.radianDecrement;
      ctx!.lineTo(this.coordinateX(this.radian), this.coordinateY(this.radian));
      ctx!.stroke();
    };
    ctx!.strokeStyle = "#ff80ab";
    ctx!.lineWidth = 0.5;
    this.radian = this.startRadian;
    ctx!.moveTo(this.coordinateX(this.radian), this.coordinateY(this.radian));
    setInterval(() => {
      dotToLine();
    }, 5);
    // ctx!.fillStyle = "green";
    // ctx!.fillRect(10, 10, 150, 100);
  }
}

export default TsDemo;
