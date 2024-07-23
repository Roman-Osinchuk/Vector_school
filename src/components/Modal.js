import React, { useState } from 'react';
import './Modul.css';

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Форма відправлена з наступними даними:', { name, phone, email, comment });

    setName('');
    setPhone('');
    setEmail('');
    setComment('');
    onClose();
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
        <h2>ВИНИКЛИ <br></br>ЗАПИТАННЯ?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
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
