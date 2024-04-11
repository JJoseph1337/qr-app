import "./App.css";
import { Calendar } from "./components/calendar/Calendar";

function App() {
  return (
    <div className="app">
      <Calendar state="days" type="doubleType" />
    </div>
  );
}

export default App;
