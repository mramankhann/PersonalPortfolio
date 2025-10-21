import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {

    const [name , setName ] = useState('');
    const [email , setEmail ] = useState('');
    const [message , setMessage ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // EmailJS integration
        const serviceID = 'service_y8262vq';
        const templateID = 'template_icsaevh';
        const publicKey = '4Qsx_KHaW2PqcG4HE';

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        } ;

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
               setName('');
        setEmail('');
        setMessage('');
        alert('Message sent successfully!');

            })
        .catch ((err)=>{
            console.log('FAILED...', err);
            alert('Failed to send the message, please try again.');
        }
        )};

  return (
   <div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}   
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    rows="5"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
                Send Message
            </button>
        </form>
   </div>
  )
}

export default Form