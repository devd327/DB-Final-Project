require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('../WEB'));

const PORT = process.env.PORT || 6006;

app.get('/', async (req, res) => {
  try {
    res.json('WELCOME TO RESTAURANT RESERVATION API');
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/customers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/tables', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tables');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/reservations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reservations');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/menuitems', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menuitems');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/orders', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/orderdetails', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orderdetails');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/staff', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM staff');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/payments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM payments');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reviews');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/discounts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM discounts');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

// POST endpoints for all tables
app.post('/customers', async (req, res) => {
    console.log('Received:', req.body); // Add this line
    try {
        const { customer_id, name, phone, email } = req.body;
        const result = await pool.query(
            'INSERT INTO customers (customer_id, name, phone, email) VALUES ($1, $2, $3, $4) RETURNING *',
            [customer_id, name, phone, email]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Database Error:', err); // Add this line
        res.status(500).json({ Error: err.message });
    }
});

app.post('/tables', async (req, res) => {
  try {
    const { table_id, table_number, capacity } = req.body;
    const result = await pool.query(
      'INSERT INTO tables (table_id, table_number, capacity) VALUES ($1, $2, $3) RETURNING *',
      [table_id, table_number, capacity]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.post('/reservations', async (req, res) => {
  try {
    const { reservation_id, customer_id, table_id, reservation_date, reservation_time, num_guests } = req.body;
    const result = await pool.query(
      'INSERT INTO reservations (reservation_id, customer_id, table_id, reservation_date, reservation_time, num_guests) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [reservation_id, customer_id, table_id, reservation_date, reservation_time, num_guests]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.post('/menuitems', async (req, res) => {
  try {
    const { item_id, name, description, price } = req.body;
    const result = await pool.query(
      'INSERT INTO menuitems (item_id, name, description, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [item_id, name, description, price]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.post('/orders', async (req, res) => {
  try {
    const { order_id, customer_id, table_id, order_date, total_amount } = req.body;
    const result = await pool.query(
      'INSERT INTO orders (order_id, customer_id, table_id, order_date, total_amount) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [order_id, customer_id, table_id, order_date, total_amount]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.post('/orderdetails', async (req, res) => {
  try {
    const { order_detail_id, order_id, item_id, quantity, price } = req.body;
    const result = await pool.query(
      'INSERT INTO orderdetails (order_detail_id, order_id, item_id, quantity, price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [order_detail_id, order_id, item_id, quantity, price]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.post('/staff', async (req, res) => {
  try {
    const { staff_id, name, role, phone } = req.body;
    const result = await pool.query(
      'INSERT INTO staff (staff_id, name, role, phone) VALUES ($1, $2, $3, $4) RETURNING *',
      [staff_id, name, role, phone]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.post('/payments', async (req, res) => {
  try {
    const { payment_id, order_id, amount, payment_method, payment_date } = req.body;
    const result = await pool.query(
      'INSERT INTO payments (payment_id, order_id, amount, payment_method, payment_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [payment_id, order_id, amount, payment_method, payment_date]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.post('/reviews', async (req, res) => {
  try {
    const { review_id, customer_id, review_text, rating, review_date } = req.body;
    const result = await pool.query(
      'INSERT INTO reviews (review_id, customer_id, review_text, rating, review_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [review_id, customer_id, review_text, rating, review_date]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.post('/discounts', async (req, res) => {
  try {
    const { discount_id, code, description, percentage } = req.body;
    const result = await pool.query(
      'INSERT INTO discounts (discount_id, code, description, percentage) VALUES ($1, $2, $3, $4) RETURNING *',
      [discount_id, code, description, percentage]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Connected Successfully....on PORT ${PORT}`);
});