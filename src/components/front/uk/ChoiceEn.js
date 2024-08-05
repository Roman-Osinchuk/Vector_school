import React from 'react';
import '../Main/Choice.css';

const ChoiceEn = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form>
          <label>
            <h2>REGISTER FOR THE MASTER CLASS</h2>
            <select>
              <option value="java" placeholder="Field">Java</option>
              <option value="web">Web Development</option>
            </select>
          </label>
          <label>
            <input type="text" name="fullname" placeholder="Full Name"/>
          </label>
          <label>
            <input type="tel" name="phone" placeholder="Phone" />
          </label>
          <label>
            <input type="text" name="childFullname" placeholder="Child's Full Name" />
          </label>
          <label>
            <input type="number" name="childAge" placeholder="Child's Age (in years)" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ChoiceEn;
