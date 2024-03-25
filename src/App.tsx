import "./App.css";
import PaymentString from "./components/paymentString/PaymentString";

function App() {
  return (
    <div className="app">
      <PaymentString
        style="withdrawal"
        isPending={true}
        // review="negative"
        // reviewText="Замечательный официант, всё очень..."
        value={1230}
      />
    </div>
  );
}

export default App;
