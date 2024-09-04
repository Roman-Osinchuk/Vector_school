import React, { useState } from 'react';
import '../mainWeb/Modalww.css';

const Modal1 = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, comment }),
      });

      const result = await response.json();
      console.log('Response from server:', result);

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
        <span className="close" onClick={onClose}>&times;</span>
        
        <form onSubmit={handleSubmit}>
        
          <div className="form-group">
          <h2 className="modal-header">ВИНИКЛИ ЗАПИТАННЯ?</h2>
            <label htmlFor="name" className="visually-hidden"></label>
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
            <label htmlFor="phone" className="visually-hidden"></label>
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
            <label htmlFor="email" className="visually-hidden"></label>
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
            <label htmlFor="comment" className="visually-hidden"></label>
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

export default Modal1;
