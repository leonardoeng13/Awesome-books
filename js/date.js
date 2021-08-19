/* eslint-disable no-undef */
const dateField = document.querySelector('.date');
const getTime = () => {
  const { DateTime } = luxon;
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  dateField.innerHTML = time;
};

getTime();