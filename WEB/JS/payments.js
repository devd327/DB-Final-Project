document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/payments');
        if (!response.ok) throw new Error('Failed to fetch payments');
        const payments = await response.json();
        const tableBody = document.querySelector('#paymentstable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        payments.forEach(payment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payment.payment_id}</td>
                <td>${payment.order_id}</td>
                <td>${payment.amount}</td>
                <td>${payment.payment_method}</td>
                <td>${payment.payment_date}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching payments:', error);
    }
});