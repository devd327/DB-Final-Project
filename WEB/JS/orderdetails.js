document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/orderdetails');
        if (!response.ok) throw new Error('Failed to fetch order details');
        const orderdetails = await response.json();
        const tableBody = document.querySelector('#orderdetailstable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        orderdetails.forEach(detail => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${detail.order_detail_id}</td>
                <td>${detail.order_id}</td>
                <td>${detail.item_id}</td>
                <td>${detail.quantity}</td>
                <td>${detail.price}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching order details:', error);
    }
});