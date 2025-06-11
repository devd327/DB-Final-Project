document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/tables');
        if (!response.ok) throw new Error('Failed to fetch tables');
        const tables = await response.json();
        const tableBody = document.querySelector('#tablestable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        tables.forEach(table => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${table.table_id}</td>
                <td>${table.table_number}</td>
                <td>${table.capacity}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching tables:', error);
    }
});