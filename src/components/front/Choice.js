import React, { useState } from 'react';
import './Choice.css';

const   Choice = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form>
          <label>
          <h2>ЗАРЕЄСТРУВАТИСЯ НА МАСТЕР-КЛАС</h2>
            <select>
              <option value="java" placeholder="Напрям">Java</option>
              <option value="web">Web-розробка</option>
            </select>
          </label>
          <label>
           
            <input type="text" name="fullname" placeholder="Прізвище та ім'я"/>
          </label>
          <label>
            
            <input type="tel" name="phone" placeholder="Телефон" />
          </label>
          <label>
           
            <input type="text" name="childFullname" placeholder=" Прізвище та ім'я дитини" />
          </label>
          <label>
            
            <input type="number" name="childAge"  placeholder="Вік дитини (повних років)"/>
          </label>
          <button type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
};

export default Choice;
