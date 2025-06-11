document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/reviews');
        if (!response.ok) throw new Error('Failed to fetch reviews');
        const reviews = await response.json();
        const tableBody = document.querySelector('#reviewstable tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        reviews.forEach(review => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${review.review_id}</td>
                <td>${review.customer_id}</td>
                <td>${review.review_text}</td>
                <td>${review.rating}</td>
                <td>${review.review_date}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
});