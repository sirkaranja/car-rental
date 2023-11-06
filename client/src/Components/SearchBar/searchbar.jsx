import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBar() {
  const [whereTo, setWhereTo] = useState('');
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);

  return (
    <section id="hero">
      <div className="container">
        <div className="searchwrapper">
          <div className="searchbox">
            <div className="row">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Where to"
                  value={whereTo}
                  onChange={(e) => setWhereTo(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <DatePicker
                  selected={pickUpDate}
                  onChange={(date) => setPickUpDate(date)}
                  placeholderText="PickUp"
                  className="form-control"
                />
              </div>
              <div className="col-md-3">
                <DatePicker
                  selected={dropOffDate}
                  onChange={(date) => setDropOffDate(date)}
                  placeholderText="Drop Off"
                  className="form-control"
                />
              </div>
              <div className="col-md-1">
                <input type="button" className="btn btn-primary form-control" value="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
