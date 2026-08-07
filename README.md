# 🌍 Natours API

A learning project built while completing **The Complete Node.js, Express, MongoDB & More Bootcamp** by Jonas Schmedtmann.

The project is a RESTful API and server-rendered web application for a fictional tour booking platform, covering authentication, authorization, payments, image uploads, email services, and security best practices.

---

## 🚀 Features

### Authentication

- User signup & login
- JWT Authentication
- Password reset
- Password update
- Cookie-based authentication

---

### Tours

- CRUD operations
- Geospatial queries
- Tour statistics
- Monthly plans
- Image upload
- Image resizing with Sharp

---

### Reviews

- Create, update and delete reviews
- One review per user per tour
- Automatic tour rating calculation

---

### Bookings

- Tour booking
- Stripe Checkout integration
- Stripe Webhook
- Booking management

---

### Users

- Update profile
- Upload profile image
- Update password
- Admin user management

---

### Email

- Welcome email
- Password reset email
- HTML emails using Pug

---

### Security

- Helmet
- CORS
- HPP
- Rate Limiting
- MongoDB Sanitization
- Data Validation

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- Pug
- HTML
- CSS
- JavaScript

### Payments

- Stripe Checkout
- Stripe Webhooks

### Image Upload

- Multer
- Sharp

### Authentication

- JWT
- bcryptjs

### Email

- Nodemailer
- Pug

---

## 📂 Project Structure

```
controllers/
models/
routes/
middleware/
utils/
views/
public/

app.js
server.js
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/parisaMontakhab/natours-node-express.git
```

Install dependencies

```bash
npm install
```

Create a `config.env` file

```env
DATABASE=
DATABASE_PASSWORD=

JWT_SECRET=
JWT_EXPIRES_IN=

STRIPE_SECRET_KEY=

EMAIL_HOST=
EMAIL_PORT=
EMAIL_USERNAME=
EMAIL_PASSWORD=
```

Run the project

```bash
npm run dev
```

---

## 📌 Main API Endpoints

### Tours

```
GET    /api/v1/tours
GET    /api/v1/tours/:id

POST   /api/v1/tours
PATCH  /api/v1/tours/:id
DELETE /api/v1/tours/:id
```

### Users

```
POST   /api/v1/users/signup
POST   /api/v1/users/login
GET    /api/v1/users/logout

PATCH  /api/v1/users/updateMe
PATCH  /api/v1/users/updateMyPassword
```

### Reviews

```
GET    /api/v1/reviews

POST   /api/v1/tours/:tourId/reviews

PATCH  /api/v1/reviews/:id

DELETE /api/v1/reviews/:id
```

### Bookings

```
GET /api/v1/bookings/checkout-session/:tourId
```

---

## 📚 Learning Goals

This project was built to practice:

- REST API Design
- Express.js
- MongoDB & Mongoose
- Authentication & Authorization
- File Uploads
- Payments with Stripe
- Security Best Practices
- MVC Architecture

---

## 🙏 Acknowledgements

This project was built while following the course:

**The Complete Node.js, Express, MongoDB & More Bootcamp**

by **Jonas Schmedtmann**

The implementation, exercises, and additional features were completed for learning purposes.

---

## 👩‍💻 Author

**Parisa Montakhabi**

GitHub:

https://github.com/parisaMontakhab

---

## 📄 License

Educational project created for learning purposes.
