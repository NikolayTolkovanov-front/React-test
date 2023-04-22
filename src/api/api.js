export const getCountWorkDays = async (year, month) => {
  const url = `https://isdayoff.ru/api/getdata?year=${year}&month=${month}`;
  const response = await fetch(url);
  const countWorkDays = (await response.text())
    .split("")
    .filter((el) => el === "0")
    .length

  return countWorkDays;
};

export const calculatePricePerHour = (salary, countWorkHours, countWorkDays) => {
  const pricePerHour = salary / (countWorkHours * countWorkDays)
  return pricePerHour.toFixed(3)
}