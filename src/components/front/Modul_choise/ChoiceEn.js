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

    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.fullname) newErrors.fullname = 'Please enter your full name';
    if (!formData.phone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain 10 to 15 digits and start with "+"';
    }
    if (!formData.childFullname) newErrors.childFullname = 'Please enter your child\'s full name';
    if (!formData.childAge) {
      newErrors.childAge = 'Please enter your child\'s age';
    } else if (isNaN(formData.childAge) || formData.childAge <= 0) {
      newErrors.childAge = 'Please enter a valid age for your child';
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

    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfe7WPSGoeZ4yzZigJDK02SIoHR_Onbm_xg1i47fdWnwIo6Ag/formResponse';
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
        <span className="closez" onClick={onClose}>&times;</span>
        {formStatus === 'success' ? (
          <div className="success-messagec">Thank you! Your form has been submitted.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>REGISTER FOR THE MASTER CLASS</h2>
            <div className="form-groupc">
              <select name="coursec" value={formData.course} onChange={handleInputChange} required>
                <option value="" disabled>Select a course</option>
                <option value="java">Java</option>
                <option value="web">Web Development</option>
              </select>
              {errors.course && <span className="errorc">{errors.course}</span>}
            </div>
            <div className="form-groupc">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
              {errors.fullname && <span className="errorc">{errors.fullname}</span>}
            </div>
            <div className="form-groupc">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
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
                placeholder="Child's Full Name"
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
                placeholder="Child's Age (in years)"
                value={formData.childAge}
                onChange={handleInputChange}
                required
              />
              {errors.childAge && <span className="errorc">{errors.childAge}</span>}
            </div>
            <button type="submit" className="submit-btnc">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Choice;
