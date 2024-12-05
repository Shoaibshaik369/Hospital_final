import React from 'react';
import './G_setting.css';

const G_setting = () => {
  return (
    <div className='ms'>
      <div className='he'>
        <h1>General Settings</h1>
        <div className="form-container">
          <form>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="hospitalName">Hospital Name</label>
                <input type="text" id="hospitalName" name="hospitalName" placeholder="Enter hospital name" />
              </div>
              <div className="form-group">
                <label htmlFor="hospitalCode">Hospital Code</label>
                <input type="text" id="hospitalCode" name="hospitalCode" placeholder="Enter hospital code" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" rows="3" placeholder="Enter hospital address"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <label htmlFor="hospitalLogo">Hospital Logo</label>
                <input type="file" id="hospitalLogo" name="hospitalLogo" />
              </div>
              <div className="form-group">
                <label htmlFor="language">Language</label>
                <select id="language" name="language">
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dateTime">Date & Time</label>
                <input type="datetime-local" id="dateTime" name="dateTime" />
              </div>
              <div className="form-group">
                <label htmlFor="timeZone">Time Zone</label>
                <select id="timeZone" name="timeZone">
                  <option value="utc">UTC</option>
                  <option value="gmt">GMT</option>
                  <option value="est">EST</option>
                  <option value="pst">PST</option>
                </select>
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default G_setting;
