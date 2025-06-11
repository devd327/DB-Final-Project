document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/discounts');
        if (!response.ok) throw new Error('Failed to fetch discounts');
        const discounts = await response.json();
        const tableBody = document.querySelector('#discountstable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        discounts.forEach(discount => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${discount.discount_id}</td>
                <td>${discount.code}</td>
                <td>${discount.description}</td>
                <td>${discount.percentage}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching discounts:', error);
    }
});