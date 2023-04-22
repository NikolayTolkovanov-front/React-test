import React, { useState } from "react";
import styles from "./PricePerHour.module.css";

function PricePerHour(props) {
  // const [result, setResult] = useState(0)
  return (
    <h3>Стоимость часа сотрудника: {props.price}</h3>
  )
}

export default PricePerHour