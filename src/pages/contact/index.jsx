import  { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle the form submission, like sending the data to the server
    };
    return(
        <div className="container">
            <h2 className="contact-tag">Contact Us</h2>
            <form onSubmit={handleSubmit}>
            <div className="name-tag">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name='name' value={formData.name} onChange={handleChange} required/> <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/> <br />
                <label htmlFor="message">Message:</label> <br />
                <textarea className="message-tag" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;