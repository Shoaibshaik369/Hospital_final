import React, { useState } from 'react';
import "./Billing.css";
import "./appointment.css";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='appoint'>
      <h1>Appointment</h1>
      <div className='ch'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className='he'>Appointment Details</h3>
          {/* Add Appointment Button */}
          <button
            className='appointment-button'
            onClick={openModal}
          >
            Add Appointment
          </button>
        </div>
        <hr />
        <h3 className='hdd'>
          <pre>Patient Name        Appointment No.       Appointment Date        Phone        Gender       Doctor       Priority      Fee /-</pre>
        </h3>
      </div>

      {/* Modal for Form Filling */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>New Appointment</h2>
            <form>
              <label>Patient Name:</label>
              <input type="text" placeholder="Enter patient name" />
              
              <label>Appointment No:</label>
              <input type="text" placeholder="Enter appointment number" />

              <label>Appointment Date:</label>
              <input type="date" />

              <label>Phone:</label>
              <input type="tel" placeholder="Enter phone number" />

              <label>Gender:</label>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label>Doctor:</label>
              <input type="text" placeholder="Enter doctor's name" />

              <label>Priority:</label>
              <select>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <label>Fee:</label>
              <input type="number" placeholder="Enter fee amount" />

              <div className="modal-actions">
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
