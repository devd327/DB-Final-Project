document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/menuitems');
        if (!response.ok) throw new Error('Failed to fetch menu items');
        const menuitems = await response.json();
        const tableBody = document.querySelector('#menuitemstable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        menuitems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.item_id}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching menu items:', error);
    }
});