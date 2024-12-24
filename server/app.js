const express = require('express');
const transactionRoutes = require('./routes/transaction');
const bodyParser = require('body-parser');
const cors = require('cors');
require("./config/database")

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
