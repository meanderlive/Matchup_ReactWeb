// import { Component } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { toast, ToastContainer } from "react-toastify";

// const title = "Leave a Comment";

// class CommentForm extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             respondName: '',
//             respondEmail: '',
//             respondSubject: '',
//             respondMassage: '',
//         };
//     }
//     render() { 
//         return (
//             <div className="comment-respond">
//                 <h4>{title}</h4>
//                 <div className="add-comment">
//                     <form action="#" className="comment-form">
//                         <input
//                             type="text"
//                             name="name"
//                             id="item01"
//                             value={this.state.respondName}
//                             onChange={(e)=>{this.setState({respondName: e.target.value});}}
//                             placeholder="Your Name *"
//                         />
//                         <input 
//                             type="text"
//                             name="email"
//                             id="item02"
//                             value={this.state.respondEmail}
//                             onChange={(e)=>{this.setState({respondEmail: e.target.value});}}
//                             placeholder="Your email *" 
//                         />
//                         <input 
//                             type="text"
//                             name="subject"
//                             id="item03"
//                             className="w-100"
//                             value={this.state.respondSubject}
//                             onChange={(e)=>{this.setState({respondSubject: e.target.value});}}
//                             placeholder="Write a Subject"
//                         />
//                         <textarea 
//                             rows="7" 
//                             type="text"
//                             id="item04"
//                             name="message"
//                             value={this.state.respondMassage}
//                             onChange={(e)=>{this.setState({respondMassage: e.target.value});}}
//                             placeholder="Your Messages"
//                         ></textarea>
//                         <button type="submit" className="default-btn reverse"><span>Send Comment</span></button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default CommentForm;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { toast, ToastContainer } from "react-toastify";
import toast from "react-hot-toast";

const title = "Leave a Comment";

const CommentForm = () => {
    const formik = useFormik({
        initialValues: {
            respondName: '',
            respondEmail: '',
            respondSubject: '',
            respondMessage: '',
        },
        validationSchema: Yup.object({
            respondName: Yup.string().required("Required"),
            respondEmail: Yup.string().email("Invalid email address").required("Required"),
            respondSubject: Yup.string(),
            respondMessage: Yup.string().required("Required"),
        }),
        onSubmit: (values, { resetForm }) => {
            // Simulate a successful form submission
            toast.success("Comment submitted successfully!");
            resetForm();
        },
    });

    return (
        <div className="comment-respond">
            <h4>{title}</h4>
            <div className="add-comment ">
                <form onSubmit={formik.handleSubmit} className="comment-form">
                <div className="col-md-10 col-12">
                    <input
                    
                        type="text"
                        name="respondName"
                        value={formik.values.respondName}
                        onChange={formik.handleChange}
                        placeholder="Your Name *"
                    />
                    {formik.touched.respondName && formik.errors.respondName ? (
                        <div style={{ color: 'red' }}>{formik.errors.respondName}</div>
                    ) : null}
                    </div>
                    <div className=" col-md-10 col-12">
                    <input
                        type="text"
                        name="respondEmail"
                        value={formik.values.respondEmail}
                        onChange={formik.handleChange}
                        placeholder="Your email *"
                    />
                    {formik.touched.respondEmail && formik.errors.respondEmail ? (
                        <div style={{ color: 'red' }}>{formik.errors.respondEmail}</div>
                    ) : null}
                    </div>
                    <div className="col-md-10 col-12">
                    <input
                        type="text"
                        name="respondSubject"
                        className="w-100"
                        value={formik.values.respondSubject}
                        onChange={formik.handleChange}
                        placeholder="Write a Subject"
                    />
                    </div>
                    <div className="col-md-12 col-12">
                    <textarea
                        rows="7"
                        type="text"
                        name="respondMessage"
                        value={formik.values.respondMessage}
                        onChange={formik.handleChange}
                        placeholder="Your Messages"
                    />
                    {formik.touched.respondMessage && formik.errors.respondMessage ? (
                        <div style={{ color: 'red' }}>{formik.errors.respondMessage}</div>
                    ) : null}
                    </div>
                    <div className="col-12">
                    <button type="submit" className="default-btn reverse " >
                        <span>Send Comment</span>
                    </button>
                    </div>
                </form>
            </div>
           
        </div>
    );
};


export default CommentForm;
