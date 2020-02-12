import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface FormProps {
    title: string
}

var dateSelected: Date | null | undefined = null;

function handleChange(date: Date | null | undefined) {
    dateSelected = date;
    console.log(dateSelected);
};

class Form extends Component<FormProps> {
    state = {
        startDate: null
    };

    handleChange(date: Date | null | undefined) {
        this.setState({
            startDate: date
          });
        console.log(this.state.startDate);
    };
    render() {
        return (
            <form className="barber-form">
                <h3 className="barber-form__title">{this.props.title}</h3>
                <div className="input-wrapper">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <p>Please enter your full name</p>
                </div>

                <div className="input-wrapper">
                    <input type="email" placeholder="Email" />
                    <p>Please enter a valid email</p>
                    <input type="number" placeholder="Contact Number" />
                    <p>Please enter phone number</p>
                </div>

                <div className="input-wrapper">
                    <select className="barber-select">
                        <option value="default">Select Barber</option>
                    </select>
                    <p>Please select a barber</p>

                    <select className="service-select">
                        <option value="default">Select Service</option>
                    </select>
                    <p>Please select a service</p>
                </div>

                <div className="input-wrapper">
                    <DatePicker  selected={this.state.startDate}  onChange={(date: Date | null) => handleChange(date)} placeholderText="Select Date" />
                    <p>Please pick a date</p>

                    <select className="time-select">
                        <option value="default">Select Time</option>
                    </select>
                    <p>Please pick a time</p>
                </div>

                <div className="input-wrapper input-wrapper--f-w">
                    <input type="text" readOnly placeholder="Select any service." />
                </div>

                <button className="barber-form__button"><span className="show-on-tablet">Book</span><span>book appointment</span></button>
            </form>
        );
    }
}

export default Form;

