import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : '',
            essayValue: '',
            selectValue:'c',
            isGoing:true,
            numberOfGuests:2,
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.name;
        this.setState({
            [name]:value
        });
    }

    render(){
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <label>
                    名字:
                    <input type="text" value={this.state.inputValue} onChange={(event)=>this.handleChange(event)}/>
                </label>
                <div>{this.state.inputValue}</div>
                <br/>
                <label>
                    文章:
                    <textarea value={this.state.essayValue} onChange={this.handleChange1}></textarea>
                </label>
                <br/>
                <label>
                    select框:
                <select value={this.state.selectValue} onChange={this.handleChange2}>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                </select>
                </label>
                {/* <select multiple={true} value={['b','c']}>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                </select> */}
                <br/>
                <label>
                    参与：
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    来宾人数：
                    <input
                    type="number"
                    name="numberOfGuests"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}
                    />
                </label>
                <br/>
                <input type="submit" value="提交" />
            </form>
        );
    }
}


export default NameForm;