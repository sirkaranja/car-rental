import React, { useState } from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

function SearchBar() {
  const [showPickupPopover, setShowPickupPopover] = useState(false);
  const [showDropoffPopover, setShowDropoffPopover] = useState(false);

  const pickupPopover = (
    <Popover id="pickup-popover">
      <Popover.Header as="h3">Pickup Date/Time</Popover.Header>
      <Popover.Content>
        <input type="datetime-local" />
      </Popover.Content>
    </Popover>
  );

  const dropoffPopover = (
    <Popover id="dropoff-popover">
      <Popover.Header as="h3">Dropoff Date/Time</Popover.Header>
      <Popover.Content>
        <input type="datetime-local" />
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Where to" />
        </div>
        <div className="col-md-3">
          <input type="datetime-local" className="form-control" placeholder="Drop off" />
        </div>
        <div className="col-md-3">
          
        </div>
        <div className="col-md-3">
        <input type="datetime-local" className="form-control"  placeholder="Pick up"  />
          <button className="btn btn-primary ml-2">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
