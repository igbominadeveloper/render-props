import { Component } from 'react';

export default class Form extends Component {
    state = {
        form: {}
    };

    onChangeHandler = ({ target }) => {
        console.log(target);
        this.setState({
            form: {
                ...this.state.form,
                [target.name]: target.value,
            }
        });
    }

    sharedProps = () => { 
        return {
            onChange: this.onChangeHandler 
        };
    }

    render() {
        return this.props.children(this.sharedProps())
    }
}
