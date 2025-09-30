# Employee Management System
## Screenshot

### Homepage

![Homepage](client/public/assets/homepageEmplocore.png)

A full-stack web application for managing employees, built with Node.js, Express, React, and MySQL.

## Features

- User authentication and registration
- Role-based access control (Admin, HR, Employee)
- Employee management (CRUD operations)
- User management (for admins)
- Audit logging
- Responsive user interface

## Technology Stack

- **Backend:** Node.js, Express.js, JWT, bcryptjs, MySQL
- **Frontend:** React, React Router, Axios, React Hot Toast
- **Other:** CORS, dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Employee-Management-System
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

4. Configure environment variables:
   - Create a `.env` file in the `backend` directory with your database credentials, JWT secret, and other necessary environment variables.

5. Set up the database:
   - Run the SQL scripts located in `backend/sql/` to create the necessary tables.

## Running the Application

1. Start the backend server:
   ```bash
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to the application.

## Project Structure

- `backend/` - Node.js and Express backend code, including routes, controllers, models, and middleware.
- `client/` - React frontend application.
- `client/public/assets/homepageEmplocore.png` - Homepage image displayed on the landing page.



## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## License

This project is licensed under the ISC License.
