import React, { useState } from 'react';
import '../Navigation_Modal_qesion/Modal.css';

const Modal1 = ({ isOpen, onClose, text }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const { name: fName, phone, email, comment } = formData;
    setIsFormValid(fName && phone && email && comment);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL = '#'; 
    const submissionData = new URLSearchParams();
    submissionData.append('entry.2005680554', formData.name);
    submissionData.append('entry.1166944658', formData.phone);
    submissionData.append('entry.1045701291', formData.email);
    submissionData.append('entry.839336160', formData.comment);

    try {
      const response = await fetch(formURL, {
        method: 'POST',
        body: submissionData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      console.log('Form submitted successfully:', response);
      setFormData({ name: '', phone: '', email: '', comment: '' });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlayz" onClick={onClose}>
      <div className="modalz" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="form-groupz">
            <span className="closez" onClick={onClose}>&times;</span>
            <h2>{text}</h2>
            <input
              type="text"
              name="name"
              placeholder="Ім'я:"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-groupz">
            <input
              type="tel"
              name="phone"
              placeholder="Телефон:"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-groupz">
            <input
              type="email"
              name="email"
              placeholder="Ваш email:"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-groupz">
            <textarea
              name="comment"
              placeholder="Коментар"
              value={formData.comment}
              onChange={handleInputChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btnz" disabled={!isFormValid}>
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal1;
