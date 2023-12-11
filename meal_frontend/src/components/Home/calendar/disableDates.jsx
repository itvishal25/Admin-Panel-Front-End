import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import withNavbar from '../../HOC/withNavbar';

function DisableDate() {
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" name="date" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="Notes">Notes:</label>
          <textarea
            name="Notes"
            id="Notes"
            cols="30"
            className="form-control"
          ></textarea>
        </div>

        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          {/* Use Link for navigation instead of a regular button */}
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default withNavbar(DisableDate);
