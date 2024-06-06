import "./App.css";
import { TheCalendar } from "./components/calendar/Calendar";

function App() {
  return (
    <div className="app">
      <TheCalendar calendarType="dualCalendar" />
    </div>
  );
}

export default App;
