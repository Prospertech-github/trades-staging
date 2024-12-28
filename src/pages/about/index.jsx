import react, { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle the form submission, like sending the data to the server
    };
    return(
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmiti}>
            <div>
                <label htmlFor="name">Name:</label>
                <
                    input type="text" id="name" name='name' value={formData.name} onChange={handleChange} required 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <
                    input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required            
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea>
                <
                    input type="message" id="message" name="message" value={formData.message} onChange={handleCHanfe} required
                />
                </textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;