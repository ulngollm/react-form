import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false
        };
        // this.onSubmit = this.onSubmit.bind(this);
        // this.resetForm = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this);
        this.setState({
            isSubmit: true
        });
    }
    resetForm(){
        this.setState({
            isSubmit: false
        });
    }
    render() {
        if (!this.state.isSubmit) {
            return (
                <form action="" onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="name">Имя</label> <input type="text" id="name" name="name" placeholder="Имя" required/>
                </form>
            );
        } else {
            return (
                <div>
                    <h1>Success</h1>
                    <p>Повторить?</p>
                    <button onClick={this.resetForm.bind(this)}>Reset form</button>
                </div>
            );
        }
    }
}

export default Form;