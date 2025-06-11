document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/customers');
        if (!response.ok) throw new Error('Failed to fetch customers');
        const customers = await response.json();
        const tableBody = document.querySelector('#customerstable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.customer_id}</td>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.email}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching customers:', error);
    }
});