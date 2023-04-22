import React, { useState } from "react";
import Form from "./components/Form/Form";
import PricePerHour from "./components/PricePerHour/PricePerHour"
import "./styles/App.css";
import { getCountWorkDays, calculatePricePerHour } from "./api/api";

function App() {
  const [pricePerHour, setPricePerHour] = useState(null);

  async function handleFormSubmit(salary, countWorkHours, year, month) {
    const countWorkDays = await getCountWorkDays(year, month)
    const price = calculatePricePerHour(salary, countWorkHours, countWorkDays)
    setPricePerHour(price)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Расчёт стоимости часа сотрудника</h1>
      </header>
      <Form onFormSubmitted={handleFormSubmit} />
      <PricePerHour price={pricePerHour} />
    </div>
  );
}

export default App;
