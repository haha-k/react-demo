import React,{ forceUpdate } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Box extends React.Component {
    constructor(props){
        super(props);
        this.saveRef = ref =>{this.refDom = ref};
        this.state = {
            left : 0,
        }
    }


    render() {
        return (
        <div ref={this.saveRef} className="box" style={{background: this.props.color,height:this.props.height,top:this.props.top,left:this.props.left}}>
            {this.props.index}
        </div>);
    }
}

class Waterfall extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        };
    }

    // resize = () => forceUpdate()

    resize = () => this.setState({
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    });

    componentDidMount(){
        window.addEventListener('resize',this.resize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.resize);
    }

    render(){
        var gap = 20;
        var arr = new Array(90).fill();
        var array = [];
        const boxes = arr.map((item,index) => {
            let height = Math.floor(Math.random()*(301)+150);
            arr[index] = height;
            let color = '#'+(Math.random()*0xffffff<<0).toString(16);
            let pageWidth = this.state.width;
            let columns = parseInt(pageWidth/(300));
            gap = (pageWidth - (columns)*300)/columns;
            if(index < columns) {
                array.push(height);
                return (
                <Box key={index} color={color} height={height} index={index+1} top={0} left={(300+gap)*index}></Box>
                )
            }else {
                let minHeight = Math.min(...array);
                let minHeightIndex = array.indexOf(minHeight);
                let tmpBox = <Box key={index} color={color} height={height} index={index+1} top={array[minHeightIndex]+gap} left={(300+gap)*minHeightIndex}></Box>;
                array[minHeightIndex] =array[minHeightIndex] + height + gap;
                return tmpBox;
            }
        })
        return (
            <div id="container">
                {boxes}
            </div>
        )
    }
}


export default Waterfall;