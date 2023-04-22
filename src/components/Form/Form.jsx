import React, { useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
  async function handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target

    const formData = new FormData(form)
    const salary = formData.get("salary");
    const countWorkHours = formData.get("countWorkHours")
    const date = formData.get("month").split("-")

    const year = date[0]
    const month = date[1]

    props.onFormSubmitted(salary, countWorkHours, year, month)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form__input_label} htmlFor="salary">
        Зарплата:
      </label>
      <input
        className={styles.form__input}
        type="number"
        name="salary"
        id="salary"
        min="1"
        defaultValue="1"
        required
      />
      <label className={styles.form__input_label} htmlFor="countWorkHours">
        Количество рабочих часов в сутки:
      </label>
      <input
        className={styles.form__input}
        type="number"
        name="countWorkHours"
        id="countWorkHours"
        min="1"
        max="24"
        defaultValue="8"
        required
      />
      <label className={styles.form__input_label} htmlFor="month">
        Месяц и год:
      </label>
      <input
        className={styles.form__input}
        type="month"
        name="month"
        id="month"
        defaultValue="2022-04"
        min="1980-01"
        max="2033-01"
        required
      />

      <input
        className={styles.form__btn_submit}
        type="submit"
        value="Расчитать"
      />
    </form>
  );
}

export default Form;
