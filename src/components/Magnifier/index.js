import React,{ forceUpdate } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import smallImgURL from './img/small.jpg';
import bigImgURL from './img/big.png';


class Magnifier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            mask:{
                left:0,
                top:0,
            },
            rate:1,
        };
    }

    handleMouseOver(){
        this.setState({
            isShow: true,
            mask:{
                left:0,
                top:0,
            }
        });
    }

    handleMouseOut(){
        this.setState({
            isShow: false,
        });
    }

    handleMouseMove = event =>{
        let left = event.clientX - this.refs.demo.offsetLeft - this.small.offsetLeft - this.mask.offsetWidth/2;
        let top = event.clientY -  this.refs.demo.offsetTop - this.small.offsetTop - this.mask.offsetHeight/2;
        if(left<0){
            left = 0;
        }else if(left>this.small.offsetWidth-this.mask.offsetWidth){
            left = this.small.offsetWidth-this.mask.offsetWidth;
        }
        if(top<0){
            top = 0;
        }else if(top>this.small.offsetHeight-this.mask.offsetHeight){
            top = this.small.offsetHeight-this.mask.offsetHeight;
        }
        this.setState({
            mask:{
                left:left,
                top:top,
            },
            rate:this.refs.bigImg.offsetWidth/this.small.offsetWidth
        });
    }


    render() {
        return (
            <div id="demo" ref="demo">
            <div id="small-box"
                ref={r => this.small = r}
                onMouseOver={()=>this.handleMouseOver()}
                onMouseOut={()=>this.handleMouseOut()}
                onMouseMove={this.handleMouseMove}
            >
            <div
                className="mask"
                style={{
                    display:this.state.isShow==true?'block':'none',
                    left:this.state.mask.left,
                    top:this.state.mask.top
                }}
                ref={r => this.mask = r}
            ></div>
            <img src={smallImgURL} alt=""/>
            </div>
            <div
                id="big-box"
                style={{
                    display:this.state.isShow==true?'block':'none',
                }}
                ref = {r => this.big = r}
            >
                <img ref="bigImg" src={bigImgURL}
                style={{
                    left:this.state.mask.left*-(this.state.rate),
                    top:this.state.mask.top*-(this.state.rate)
                }}
                alt=""/>
            </div>
            </div>
        )
    };
}

export default Magnifier;