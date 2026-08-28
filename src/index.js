// Import library dotenv
require('dotenv').config();
// Import library Express
const express = require('express');
// Import routes dari folder routes
const userRoutes = require('./routes/userRoute');

// Inisialisasi aplikasi Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing data JSON dari body request
app.use(express.json());
// Mengatur agar output JSON lebih rapi (spasi 2)
app.set('json spaces', 2);

// Route utama (root)
app.get('/', (req, res) => {
  res.send('Server berjalan dengan baik');
});

// Middleware untuk parsing data dari form (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Menggunakan route /users untuk semua rute pengguna
app.use('/users', userRoutes);

// Menjalankan server di port 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});