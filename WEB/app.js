document.getElementById('customer-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const customer_id = document.getElementById('customer_id').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/customers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customer_id, name, phone, email })
        });
        if (!response.ok) throw new Error('Failed to add customer');
        fetchCustomers(); // Refresh the list
        document.getElementById('customer-form').reset();
    } catch (error) {
        document.getElementById('customer-error').textContent = error.message;
    }
});