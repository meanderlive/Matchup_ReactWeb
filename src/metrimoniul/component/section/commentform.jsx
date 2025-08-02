import React, { Component } from "react";

const title = "Leave a Comment";

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            respondName: '',
            respondEmail: '',
            respondSubject: '',
            respondMessage: '',
            errors: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { respondName, respondEmail, respondSubject, respondMessage } = this.state;
        const errors = {};
        let hasErrors = false;

        if (!respondName.trim()) {
            errors.name = 'Name is required';
            hasErrors = true;
        }

        if (!respondEmail.trim()) {
            errors.email = 'Email is required';
            hasErrors = true;
        }

        if (!respondSubject.trim()) {
            errors.subject = 'Subject is required';
            hasErrors = true;
        }

        if (!respondMessage.trim()) {
            errors.message = 'Message is required';
            hasErrors = true;
        }

        if (hasErrors) {
            this.setState({ errors });
        } else {
            // Proceed with form submission
            // For example, you can call a function passed down via props to handle form submission
            this.props.onSubmit({
                name: respondName,
                email: respondEmail,
                subject: respondSubject,
                message: respondMessage
            });
            // Clear form fields
            this.setState({
                respondName: '',
                respondEmail: '',
                respondSubject: '',
                respondMessage: '',
                errors: {}
            });
        }
    };

    render() { 
        const { errors } = this.state;
        return (
            <div className="comment-respond">
                <h4>{title}</h4>
                <div className="add-comment">
                    <form onSubmit={this.handleSubmit} className="comment-form">
                        <input
                            type="text"
                            name="name"
                            id="item01"
                            value={this.state.respondName}
                            onChange={(e)=>{this.setState({respondName: e.target.value});}}
                            placeholder="Your Name *"
                            style={{ border: errors.name ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        <input 
                            type="text"
                            name="email"
                            id="item02"
                            value={this.state.respondEmail}
                            onChange={(e)=>{this.setState({respondEmail: e.target.value});}}
                            placeholder="Your email *" 
                            style={{ border: errors.email ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        <input 
                            type="text"
                            name="subject"
                            id="item03"
                            className="w-100"
                            value={this.state.respondSubject}
                            onChange={(e)=>{this.setState({respondSubject: e.target.value});}}
                            placeholder="Write a Subject"
                            style={{ border: errors.subject ? '1px solid red' : '1px solid #ccc' }}
                        />
                        {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
                        <textarea 
                            rows="7" 
                            type="text"
                            id="item04"
                            name="message"
                            value={this.state.respondMessage}
                            onChange={(e)=>{this.setState({respondMessage: e.target.value});}}
                            placeholder="Your Message"
                            style={{ border: errors.message ? '1px solid red' : '1px solid #ccc' }}
                        ></textarea>
                        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                        <button type="submit" className="default-btn reverse"><span>Send Comment</span></button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default CommentForm;
