fetch('/reservations')
  .then(response => response.json())
  .then(data => {
    const table = document.querySelector('table');
    data.forEach(res => {
      const row = table.insertRow();
      row.insertCell().textContent = res.reservation_id;
      row.insertCell().textContent = res.customer_id;
      row.insertCell().textContent = res.table_id;
      row.insertCell().textContent = res.reservation_date;
      row.insertCell().textContent = res.reservation_time;
    });
  });