import React, { useState } from "react";

const venues = [
  { address: 'Empire State Building, 20 W 34th St, New York, NY 10001' },
  { address: 'Times Square, Manhattan, NY 10036' },
  { address: 'Statue of Liberty, New York, NY 10004' },
  { address: 'Brooklyn Bridge, New York, NY 10038' },
  { address: 'The Metropolitan, 1000 5th Ave, New York, NY 10028' },
  { address: 'Grand Central Terminal, 89 E 42nd St, New York, NY 10017' },
  { address: 'Central Park, 59th St to 110th St, New York, NY 10022' },
  { address: 'The High Line, New York, NY 10011' },
  { address: 'Rockefeller Center, 45 Rockefeller Plaza, New York, NY 10111' },
  { address: 'Museum of Modern Art (MoMA), 11 W 53rd St, New York, NY 10019' },
  { address: 'One World Observatory, 285 Fulton St, New York, NY 10007' },
  { address: 'Brooklyn Botanic Garden, 990 Washington Ave, Brooklyn, NY 11225' },
  { address: 'Chelsea Market, 75 9th Ave, New York, NY 10011' },
  { address: 'The Plaza Hotel, 768 5th Ave, New York, NY 10019' },
  { address: 'Katz\'s Delicatessen, 205 E Houston St, New York, NY 10002' },
  { address: 'Joe\'s Pizza, 7 Carmine St, New York, NY 10014' },
  { address: 'The St. Regis New York, Two East 55th Street at Fifth Avenue, New York, NY 10022' },
  { address: 'Serendipity 3, 225 E 60th St, New York, NY 10022' },
  { address: 'Gramercy Tavern, 42 E 20th St, New York, NY 10003' },
];


const Popup = ({ venuesList, handleVenueSelection, handleClosePopup }) => (
  <div className="popup-venue-list">
    {venuesList.map((venue, index) => (
      <div key={index} onClick={() => handleVenueSelection(venue)}>
        <p>{venue.address}</p>
      </div>
    ))}
    {/* <button onClick={handleClosePopup}>Close</button> */}
  </div>
);

const VenuePicker = ({ onVenueChange }) => {
  const [venuesList, setVenuesList] = useState(venues);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePickVenue = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleVenueSelection = (venue) => {
    setSelectedVenue(venue);
    // onVenueChange(venue.address); 
    setPopupOpen(false);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="setVenue">
      <input
        className="date"
        type=""
        placeholder="Choose Venue"
        value={selectedVenue ? selectedVenue.address : ''}
        readOnly
        onClick={handlePickVenue}
      />
      <div className='Apps'>
        {isPopupOpen && (
          <Popup
            venuesList={venuesList}
            handleVenueSelection={handleVenueSelection}
            handleClosePopup={handleClosePopup}
          />
        )}
      </div>
      <span className="calander-icon" onClick={handlePickVenue}>
        <i className="fa-solid fa-location-dot fa-xl" style={{ color: "#B197FC" }}></i>
      </span>
    </div>
  );
};

export default VenuePicker;
