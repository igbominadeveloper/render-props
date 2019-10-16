import React, { Component } from 'react';
import Form from './Form';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <Form>
                {
                    ({ onChange }) => {
                        return (
                            <div>
                                <p>Login Form</p>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="text" onChange={onChange} name="email" className="form-control" />
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="text" onChange={onChange} name="password" className="form-control"/>
                            </div>
                        )

                    }
                }
                
            </Form>
        )
    }
}
