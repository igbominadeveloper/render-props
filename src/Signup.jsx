import React, { Component } from 'react';

import Form from './Form';

export default class Signup extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    };

    render() {
        return (
            <Form>
                {
                    ({ onChange }) => {
                        return (
                            <div>
                                <p>Signup Form</p>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" onChange={onChange} name="email" className="form-control" />
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="text" onChange={onChange} name="username" className="form-control"/>
                                <label htmlFor="username">
                                    Username
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
