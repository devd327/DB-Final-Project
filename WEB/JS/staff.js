document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/staff');
        if (!response.ok) throw new Error('Failed to fetch staff');
        const staff = await response.json();
        const tableBody = document.querySelector('#stafftable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        staff.forEach(staffMember => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${staffMember.staff_id}</td>
                <td>${staffMember.name}</td>
                <td>${staffMember.role}</td>
                <td>${staffMember.phone}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching staff:', error);
    }
});