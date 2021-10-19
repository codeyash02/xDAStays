import React,{useState} from "react";
import "../../styles/components/BookingBody.css";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
function BookingBody() {

  const nextdate = new Date()
  nextdate.setDate(nextdate.getDate() + 1)
  const [startDate,setStartDate] = useState(new Date())
  const [endDate,setEndDate] = useState(nextdate)
  console.log(startDate)

  return (
    <div className="booking_body">
      <div className="booking_heading">
        <h2>xDA exclusive Stays and Activities</h2>
      </div>
      <div className="booking_content">
        <form>
          <div className="form_input">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={startDate}  onChange={setStartDate}/>
            </MuiPickersUtilsProvider>
          </div>
          <div className="form_input">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={endDate} onChange={setEndDate} />
            </MuiPickersUtilsProvider>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingBody;
