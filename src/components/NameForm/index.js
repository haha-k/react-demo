import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : '',
            essayValue: '',
            selectValue:'c',
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }


    handleChange(event) {
        this.setState({
            inputValue:event.target.value.toUpperCase()
        });
    }

    handleChange1(event) {
        this.setState({
            essayValue:event.target.value.toUpperCase()
        });
    }

    handleChange2(event) {
        this.setState({
            selectValue:event.target.value
        });
    }

    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <label>
                    名字:
                    <input type="text" value={this.state.inputValue} onChange={(event)=>this.handleChange(event)}/>
                </label>
                <div>{this.state.inputValue}</div>
                <label>
                    文章:
                    <textarea value={this.state.essayValue} onChange={this.handleChange1}></textarea>
                </label>
                <select value={this.state.selectValue} onChange={this.handleChange2}>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                </select>
                <input type="submit" value="提交" />
            </form>
        );
    }
}


export default NameForm;