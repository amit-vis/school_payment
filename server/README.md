📚 School Payments and Dashboard Backend

🚀 Overview

This backend application serves as the API layer for the School Payments and Dashboard system. It handles transaction data, school-specific queries, and transaction status checks, providing secure and efficient endpoints for seamless integration with the React-based frontend.

🛠️ Tech Stack

Node.js: JavaScript runtime for server-side scripting.

Express.js: Web framework for building robust APIs.

MongoDB: NoSQL database for storing transaction and school data.

Mongoose: ODM for MongoDB to manage schemas and queries.

Axios: API communication testing.

Cors: Enable Cross-Origin Resource Sharing.

Dotenv: Manage environment variables.

📁 Folder Structure

/backend
├── config
│   ├── database.js       # Database connection
│   ├── logger.js         # Logging configuration
├── controllers
│   ├── transactionController.js # Handles transaction logic
│   ├── schoolController.js      # Handles school-specific logic
├── models
│   ├── Transaction.js    # Transaction schema
│   ├── School.js         # School schema
├── routes
│   ├── transactionRoutes.js # API routes for transactions
│   ├── schoolRoutes.js      # API routes for schools
├── middleware
│   ├── errorHandler.js    # Error handling middleware
├── .env                  # Environment variables
├── server.js             # Entry point
├── package.json          # Dependencies and scripts

🔑 Environment Variables

Create a .env file in the root directory and configure the following variables:

PORT=5000
MONGO_URI=mongodb://localhost:27017/school-payments
JWT_SECRET=your_secret_key

📊 Endpoints

1. Transaction Overview

GET /api/transactions

Fetch all transactions with pagination and filtering.

2. Transaction Details by School

GET /api/transactions/school/:schoolId

Fetch transactions filtered by schoolId.

3. Transaction Status Check

GET /api/transactions/status

Query parameter: custom_order_id

Fetch the current status of a transaction.

4. Error Handling

Proper status codes and error messages are returned for different scenarios (e.g., 404 Not Found, 500 Internal Server Error).

⚙️ Setup and Installation

Clone the repository:

git clone https://github.com/your-username/school-payments-backend.git

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Start the server:

npm run dev

API server will run at: http://localhost:5000

🧪 Testing APIs

Use tools like Postman or cURL to test endpoints.

Example: