import React, { Component } from 'react';

export class RegisterSubscriber_old extends Component {
    displayName = RegisterSubscriber.name

    constructor(properties) {
        super(properties);
        this.state = {
            username: '',
            password: '',
            error: null,
            loading: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value });    // Sets state property, for example username: 'adrian' 
    }

    sendForm() {
        var url = 'api/SubscriberServices/RegisterSubscriber';   
        var formData = new FormData();
        formData.append('username', this.state.username);   
        formData.append('password', this.state.password);

        this.setState({ loading: true });
            // POST the data, and check the response
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(data => {
                this.setState({ error: data, loading: false });
            })
            .catch((servererror) => {
                // This isn't right. Need to research how to properly handle true exceptions
                console.log("ERROR " + servererror);
            });
    }

    render() {
        /*
         * Need to map out all the possible states here: 
         * -- display a blank form the first time through
         * -- display a message while waiting for the server to respond
         * -- display a successful response (no form but a button to proceed to the current food offers)
         * -- re-display the form when you get an error and allow the user to correct it.
         *      -- don't know how to do a focus() call 
         *      -- don't know how to re-use the entered data in the case where a correction is asked for
         *      -- this would be done with script while displaying the error node
         * -- how/when does a Cancel or 'Go Somewhere Else' get displayed
         * 
         * https://blog.logrocket.com/an-imperative-guide-to-forms-in-react-927d9670170a
         * https://www.robinwieruch.de/react-fetching-data/
         * 
         */

            // The state.exists check is simply to make sure that the DOM has been established (there is probably a better way to do this.) If it hasn't then all the const's below evaluate to false.

            // If (state exists and not loading and error object is null) this is the first time through
            // OR (state exists and not loading and error object exists and errorcode is nonzero) this is an error return and the form needs to be re-displayed to allow corrections along with the error message
        const displayForm = (this.state && !this.state.loading && (this.state.error === null)) || (this.state && !this.state.loading && (this.state.error !== null) && (this.state.error.errorCode !== 0));

            // If state exists and loading then we are waiting for the server to respond
        const displayWaiting = this.state && this.state.loading;

            // If state exists and not loading and error object exists and error code is nonzero then we have an error to display
        const displayError = this.state && !this.state.loading && (this.state.error !== null) && (this.state.error.errorCode !== 0);

            // If state exists and not loading and error object exists and error code is zero then we have a successful registration
        const displaySuccess = this.state && !this.state.loading && (this.state.error !== null) && (this.state.error.errorCode === 0);

        return (
          <div>
                <h1>Register Subscriber</h1>
                <p>This component registers a new subscriber account</p>
                {displayForm &&
                    <form>
                        <p>Username: <input type='text' name='username' id='username' onChange={this.handleInputChange} /></p>
                        <p>Password: <input type='password' name='password' id='password' onChange={this.handleInputChange} /></p>
                        <button onClick={this.sendForm.bind(this)}>Make Me a Subscriber!</button>
                    </form>
                }
                {displayWaiting && <span>Registering you as a Last Call subscriber...</span>}
                {displayError && <span>Error: {this.state.error.errorMessage}</span>}
                {displaySuccess && <span>Welcome to Last Call {this.state.username}!</span>}
           </div>
        );
    }
}

