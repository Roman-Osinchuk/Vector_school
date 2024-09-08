import React from 'react';
import './Choice.css';

const Choice = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
  <div className="modal">
    <span className="close" onClick={onClose}>&times;</span>
    <form>
      <h2>REGISTER FOR THE MASTER CLASS</h2>
      <div className="form-group">
        <select>
          <option value="java">Java</option>
          <option value="web">Web Development</option>
        </select>
      </div>
      <div className="form-group">
        <input type="text" name="fullname" placeholder="Full Name" />
      </div>
      <div className="form-group">
        <input type="tel" name="phone" placeholder="Phone" />
      </div>
      <div className="form-group">
        <input type="text" name="childFullname" placeholder="Child's Full Name" />
      </div>
      <div className="form-group">
        <input type="number" name="childAge" placeholder="Child's Age (in years)" />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
</div>
  );
};

export default Choice;
