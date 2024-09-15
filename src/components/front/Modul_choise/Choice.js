import React, { useState } from 'react';
import './Choice.css';

const Choice = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    course: '',
    fullname: '',
    phone: '',
    childFullname: '',
    childAge: '',
  });

  const [formStatus, setFormStatus] = useState(''); 
  const [errors, setErrors] = useState({}); 

  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.course) newErrors.course = 'Оберіть курс';
    if (!formData.fullname) newErrors.fullname = 'Заповніть прізвище та ім\'я';
    if (!formData.phone) {
      newErrors.phone = 'Введіть номер телефону';
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Номер телефону має містити від 10 до 15 цифр і починатися з "+"';
    }
    if (!formData.childFullname) newErrors.childFullname = 'Заповніть прізвище та ім\'я дитини';
    if (!formData.childAge) {
      newErrors.childAge = 'Введіть вік дитини';
    } else if (isNaN(formData.childAge) || formData.childAge <= 0) {
      newErrors.childAge = 'Введіть коректний вік дитини';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; 

    const formURL = '#';
    const submissionData = new URLSearchParams();
    submissionData.append('entry.391883702', formData.course); 
    submissionData.append('entry.2026171853', formData.fullname); 
    submissionData.append('entry.1901843193', formData.phone); 
    submissionData.append('entry.1249828669', formData.childFullname); 
    submissionData.append('entry.1142540656', formData.childAge); 

    try {
      const response = await fetch(formURL, {
        method: 'POST',
        body: submissionData,
      });

      if (response.ok) {
       
        setFormStatus('success');

       
        setFormData({
          course: '',
          fullname: '',
          phone: '',
          childFullname: '',
          childAge: '',
        });

       
        setTimeout(() => {
          setFormStatus('');
          onClose();
        }, 2000); 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlayc" onClick={onClose}>
      <div className="modalc" onClick={(e) => e.stopPropagation()}>
        
        {formStatus === 'success' ? (
          <div className="success-messagec">Дякуємо! Вашу форму відправлено.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>ЗАРЕЄСТРУВАТИСЯ НА МАСТЕР-КЛАС</h2>
            
            <div className="form-groupc">
            <span className="closez" onClick={onClose}>&times;</span>
              <select name="course" value={formData.course} onChange={handleInputChange} required>
                <option value="" disabled>Вибір напрямку</option>
                <option value="java">Java</option>
                <option value="web">Web-розробка</option>
              </select>
              {errors.course && <span className="errorc">{errors.course}</span>}
            </div>
            <div className="form-groupc">
              <input
                type="text"
                name="fullname"
                placeholder="Прізвище та ім'я"
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
              {errors.fullname && <span className="error">{errors.fullname}</span>}
            </div>
            <div className="form-groupc">
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="errorc">{errors.phone}</span>}
            </div>
            <div className="form-groupc">
              <input
                type="text"
                name="childFullname"
                placeholder="Прізвище та ім'я дитини"
                value={formData.childFullname}
                onChange={handleInputChange}
                required
              />
              {errors.childFullname && <span className="errorc">{errors.childFullname}</span>}
            </div>
            <div className="form-groupc">
              <input
                type="number"
                name="childAge"
                placeholder="Вік дитини (повних років)"
                value={formData.childAge}
                onChange={handleInputChange}
                required
              />
              {errors.childAge && <span className="errorc">{errors.childAge}</span>}
            </div>
            <button type="submitc" className="submit-btnc">Надіслати</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Choice;
