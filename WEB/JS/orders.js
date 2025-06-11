document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/orders');
        if (!response.ok) throw new Error('Failed to fetch orders');
        const orders = await response.json();
        const tableBody = document.querySelector('#orderstable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.order_id}</td>
                <td>${order.customer_id}</td>
                <td>${order.table_id}</td>
                <td>${order.order_date}</td>
                <td>${order.total_amount}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
});