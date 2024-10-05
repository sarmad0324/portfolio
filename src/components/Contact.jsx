import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';  // For popups, make sure to install this package
import 'sweetalert2/dist/sweetalert2.min.css';

const Contact = (props) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [role, setRole] = useState("Select an Option");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // New loading state

  const clearForm = () => { 
    setName(""); 
    setComment(""); 
    setEmail(""); 
    setRole("Select an Option"); 
    setErrors({});
  }; 

  // Validate inputs
  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";
    if (!comment.trim()) formErrors.comment = "Message is required";
    if (role === "---") formErrors.role = "Please select an enquiry type";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => { 
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true); // Set loading to true when form is submitted

    // Send form using EmailJS
    emailjs.sendForm('service_aiipe2d', 'template_93eud3q', form.current, '2_HnGR0qPrdrYw7Mp')
      .then(response => {
        Swal.fire({
          title: 'Success!',
          text: `Thanks ${name} for submitting the form, we will get in touch with you soon!`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        clearForm();
        setLoading(false); // Reset loading state after successful submission
      }, error => {
        Swal.fire({
          title: 'Error!',
          text: 'Oops! Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        setLoading(false); // Reset loading state after error
      });
  };

  return (
    <section id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Contact Me</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Leave a message to get in touch with me.</p>
        </div>

        <form 
          className="lg:w-1/2 md:w-2/3 mx-auto bg-btnHover  rounded-xl px-5 py-10"
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm pb-10">Name</label>
              <input 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background rounded border border-gray-600 focus:border-btnColor focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm">Email</label>
              <input 
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background rounded border border-gray-600 focus:border-btnColor  focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="p-2 w-full">
            <label className="leading-7 text-sm">Type of enquiry</label>
            <select 
              value={role}
              name="role"
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-background rounded border border-gray-600 focus:border-btnColor  focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            >
              <option value="Select an option">-Select an option-</option>
              <option>Freelance Project Inquiry</option>
              <option>Job Opportunity</option>
              <option>Consultancy Session</option>
              <option>Business Proposal</option>
              <option>Partnership Offer</option>
            </select>
            {errors.role && <p className="text-red-500">{errors.role}</p>}
          </div>

          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm">Message</label>
              <textarea 
                name="comment"
                rows={6}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-background rounded border border-gray-600 focus:border-btnColor  focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              {errors.comment && <p className="text-red-500">{errors.comment}</p>}
            </div>
          </div>

          <div className="p-2 flex justify-center">
            <button 
              className="text-center bg-btnColor border-0 py-2 px-12 rounded-sm text-lg  flex items-center justify-center"
              type="submit"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <div className="loader"></div> // Display loader
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
        <hr className="w-4/5 m-auto border-textSecondary mt-10" />
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-900 text-center">
          <span>
            Email: <a className="text-gray-400" href="mailto:sarmadirfan78@gmail.com"> sarmadirfan78@gmail.com</a>
          </span>
          <p>Sarmad Irfan | © 2024</p>
        </div>
      </div>

      {/* Add styles for the loader */}
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;