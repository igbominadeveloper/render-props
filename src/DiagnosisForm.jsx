import React, { Component } from 'react';

import Form from './Form';

export default class DiagnosisForm extends Component {
    state = {
        doctor: '',
        patient: '',
        diagnosis: ''
    };

    render() {
        return (
            <Form>
                {
                    ({ onChange }) => {
                        return (
                            <div>
                                <p>DiagnosisForm Form</p>
                                <label htmlFor="doctor">
                                    doctor
                                </label>
                                <input type="text" onChange={onChange} name="doctor" className="form-control" />
                                <label htmlFor="patient">
                                    patient
                                </label>
                                <input type="text" onChange={onChange} name="patient" className="form-control" />
                                <label htmlFor="diagnosis">
                                    diagnosis
                                </label>
                                <input type="text" onChange={onChange} name="diagnosis" className="form-control" />
                            </div>
                        )

                    }
                }
                
            </Form>
        )
    }
}
