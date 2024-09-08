import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, text }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL = '#'; 
    const formData = new URLSearchParams();
    formData.append('entry.2005680554', name);  
    formData.append('entry.1166944658', phone);
    formData.append('entry.1045701291', email); 
    formData.append('entry.839336160', comment); 

    try {
      const response = await fetch(formURL, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      console.log('Form submitted successfully:', response);
      setName('');
      setPhone('');
      setEmail('');
      setComment('');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
    if (name === 'email') setEmail(value);
    if (name === 'comment') setComment(value);

    setIsFormValid(name !== '' && phone !== '' && email !== '' && comment !== '');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>{text}</h2>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ім'я:"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone"></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Телефон:"
              value={phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ваш email:"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment"></label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Коментар"
              value={comment}
              onChange={handleInputChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={!isFormValid}>Відправити</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
