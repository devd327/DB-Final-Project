document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/reservations');
        if (!response.ok) throw new Error('Failed to fetch reservations');
        const reservations = await response.json();
        const tableBody = document.querySelector('#reservationstable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        reservations.forEach(reservation => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${reservation.reservation_id}</td>
                <td>${reservation.customer_id}</td>
                <td>${reservation.table_id}</td>
                <td>${reservation.reservation_date}</td>
                <td>${reservation.reservation_time}</td>
                <td>${reservation.num_guests}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching reservations:', error);
    }
});