import { useState } from "react"
import emailjs from '@emailjs/browser'

const Contact = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("")
  const [role, setRole] = useState("role");

  const clearForm = () => { 
    setName(""); 
    setComment(""); 
    setEmail(""); 
    setRole("---"); 
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if(email && name && comment){
      
    }

    emailjs.sendForm('service_1au3h13','template_93eud3q','#myform', '2_HnGR0qPrdrYw7Mp' )

      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert(`Thanks ${name} for submitting the form, we will get in touch with you soon!`)
        clearForm();
      }, function(error) {
         console.log('FAILED...', error);
         alert('Oops! something went wrong!')
      });
  }

  return (
    <section id="contact" >
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">Contact Me</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Leave a message to get in touch with me.</p>
        </div>

        <form 
          className="lg:w-1/2 md:w-2/3 mx-auto bg-[#c8b8db] border rounded-md px-5 py-7" 
          onSubmit={handleSubmit}
          id="myform"
        >
          
            <div className="p-2 w-full  ">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm ">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={name} 
                  onChange={(e) => {setName(e.target.value)}}
                  className="w-full bg-[#04151f] rounded border border-[#da4167] focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  aria-required:border-red-800"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full ">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                <input 
                  type="email"
                  name='email'
                  value={email} 
                  onChange={(e) => {setEmail(e.target.value)}}
                  className="w-full bg-[#04151f] rounded border border-[#da4167] focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  aria-required:border-red-800" 
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <label className="leading-7 text-sm ">
                Type of enquiry
              </label>
              <select 
                value={role}
                name="role"
                onChange={(e) => {setRole(e.target.value)}}
                className="w-full bg-[#04151f] rounded border border-[#da4167] focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                aria-required:border-red-800"
                required
              >
                <option>---</option>
                <option >Freelance project proposal</option>
                <option >Open source consultancy session</option>
                <option >Business Offer</option>
              </select>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                <textarea 
                  name="comment"
                  rows={6}
                  value={comment}
                  onChange={(e) => {setComment(e.target.value)}}
                  className="w-full bg-[#04151f] rounded border  border-[#da4167] focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  aria-required:border-red-800"
                  required
                />
              </div>
            </div>
            <div className="p-2 flex justify-center">
              <button 
                className="text-center bg-[#04151f] border-0 py-2 px-12 rounded text-lg hover:bg-[#da4167]" 
                type="submit"
              >
                Submit
              </button>
            </div>

        </form>

        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-900 text-center">
          <a className="text-gray-400" href="mailto:sarmadirfan78@gmail.com">sarmadirfan78@gmail.com</a>
          <p>Sarmad Irfan | © 2023</p>
        </div>

      </div>
    </section>
  )
}

export default Contact
