const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const adminRoutes = require('./routes/adminRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

app.use('/api/admin', adminRoutes);
app.use('/api/borrow', borrowRoutes);
