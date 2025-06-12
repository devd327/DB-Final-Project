window.addEventListener("DOMContentLoaded", () => {
    const base = "https://friendly-robot-x5vpp74v6946c6w9j-6006.app.github.dev";

    fetch(`${base}/customers`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#customerstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.customer_id}</td><td>${item.name}</td><td>${item.phone}</td><td>${item.email}</td></tr>`;
        });
    });

    fetch(`${base}/tables`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#tablestable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.table_id}</td><td>${item.table_number}</td><td>${item.capacity}</td></tr>`;
        });
    });

    fetch(`${base}/reservations`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#reservationstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.reservation_id}</td><td>${item.customer_id}</td><td>${item.table_id}</td><td>${item.reservation_date}</td><td>${item.time}</td><td>${item.guests}</td></tr>`;
        });
    });

    fetch(`${base}/menuitems`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#menuitemstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.item_id}</td><td>${item.name}</td><td>${item.description}</td><td>${item.price}</td></tr>`;
        });
    });

    fetch(`${base}/orders`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#orderstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.order_id}</td><td>${item.customer_id}</td><td>${item.table_id}</td><td>${item.order_date}</td><td>${item.total_amount}</td></tr>`;
        });
    });

    fetch(`${base}/orderdetails`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#orderdetailstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.order_detail_id}</td><td>${item.order_id}</td><td>${item.item_id}</td><td>${item.quantity}</td><td>${item.price}</td></tr>`;
        });
    });

    fetch(`${base}/staff`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#stafftable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.staff_id}</td><td>${item.name}</td><td>${item.role}</td><td>${item.phone}</td></tr>`;
        });
    });

    fetch(`${base}/payments`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#paymentstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.payment_id}</td><td>${item.order_id}</td><td>${item.amount}</td><td>${item.method}</td><td>${item.date}</td></tr>`;
        });
    });

    fetch(`${base}/reviews`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#reviewstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.review_id}</td><td>${item.customer_id}</td><td>${item.text}</td><td>${item.rating}</td><td>${item.date}</td></tr>`;
        });
    });

    fetch(`${base}/discounts`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#discountstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr><td>${item.discount_id}</td><td>${item.code}</td><td>${item.description}</td><td>${item.percentage}</td></tr>`;
        });
    });
});
