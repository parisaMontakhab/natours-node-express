# 🌍 Natours

A production-ready full-stack tour booking application built with **Node.js**, **Express.js**, **MongoDB**, and **Pug**.

🚀 **Live Demo:** https://natours-node-express.onrender.com

---

## ✨ Features

- 🔐 User Authentication (JWT & Cookies)
- 👤 User Authorization (User, Guide, Lead Guide, Admin)
- 🏔️ Tour Management
- ⭐ Reviews & Ratings
- 🗺️ Interactive Maps (Mapbox)
- 💳 Stripe Payment Integration
- 📧 Email Notifications
- 📸 Image Upload
- 🔒 Security Best Practices
  - Helmet
  - Rate Limiting
  - Data Sanitization
  - XSS Protection
  - HTTP Parameter Pollution Protection
- 📱 Server-Side Rendering with Pug
- 📊 MongoDB Aggregation Pipeline
- 🌍 Geospatial Queries

---

## 🛠️ Tech Stack

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

### Authentication

- JWT
- Cookies

### Third-party Services

- Stripe
- Mapbox
- Mailtrap

### Deployment

- Render
- MongoDB Atlas

---

## 🚀 Live Demo

### Website

https://natours-node-express.onrender.com

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

Create a `config.env` file and configure your environment variables.

Run the application

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🔑 Environment Variables

Example:

```env
NODE_ENV=development
PORT=3000

DATABASE=your_mongodb_connection_string
DATABASE_PASSWORD=your_password

JWT_SECRET=your_secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

EMAIL_HOST=
EMAIL_PORT=
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_FROM=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

---

## 📂 Project Structure

```
controllers/
models/
routes/
views/
public/
utils/
dev-data/
server.js
app.js
```

---

## 📸 Screenshots

### Home Page

![Home](https://natours-node-express.onrender.com/img/logo-green.png)

---

## 📖 What I Learned

This project helped me gain hands-on experience with:

- RESTful API Design
- Authentication & Authorization
- MVC Architecture
- MongoDB Aggregation
- Geospatial Queries
- File Uploads
- Email Services
- Payment Integration
- Production Deployment
- Security Best Practices

---

## 👩‍💻 Author

**Parisa Montakhabi**

GitHub:
https://github.com/parisaMontakhab

LinkedIn:
https://www.linkedin.com/in/parisa-montakhabi-sani-44a563232/

---

## 📄 License

This project was built as part of Jonas Schmedtmann's **Node.js Bootcamp**, extended and deployed independently for learning purposes.
