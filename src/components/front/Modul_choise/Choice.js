import React from 'react';
import './Choice.css';

const Choice = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>&times;</span>
        <form>
          <h2>ЗАРЕЄСТРУВАТИСЯ НА МАСТЕР-КЛАС</h2>
          <div className="form-group">
            <select>
              <option value="java">Java</option>
              <option value="web">Web-розробка</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" name="fullname" placeholder="Прізвище та ім'я" />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Телефон" />
          </div>
          <div className="form-group">
            <input type="text" name="childFullname" placeholder="Прізвище та ім'я дитини" />
          </div>
          <div className="form-group">
            <input type="number" name="childAge" placeholder="Вік дитини (повних років)" />
          </div>
          <button type="submit" className="submit-btn">Надіслати</button>
        </form>
      </div>
    </div>
  );
};

export default Choice;
