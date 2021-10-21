import React, { useState, useEffect } from "react";
import "../../styles/components/BookingBody.css";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import fetchFunction from "../../fetch/index";
function BookingBody() {
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    getAllPlaces();
  }, []);
  const getAllPlaces = async () => {
    fetchFunction("get", "places/getplaces")
      .then((data) => setPlacesList(data.data))
      .catch((error) => console.log(error));
  };

  const nextdate = new Date();
  nextdate.setDate(nextdate.getDate() + 1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(nextdate);

  return (
    <div className="booking_body">
      <div className="booking_heading">
        <h2>xDA exclusive Stays and Activities</h2>
      </div>
      <div className="booking_content">
        <form className="form_content">
          <div className="form_left">
            <div className="form_input">
              <select>
                <option value="none" selected>
                  Select Destination{" "}
                </option>
                {placesList?.map((place) => (
                  <option value={place.Name}>{place.Name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="right">
            <div className="form_input">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  value={startDate}
                  onChange={setStartDate}
                  color="white"
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="form_input">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={endDate} onChange={setEndDate} />
              </MuiPickersUtilsProvider>
            </div>
          </div>
          <div className="form_button">
            <button>Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingBody;
