# Food Delivery App Frontend

A React-based frontend for a food delivery application built with modern tools and libraries.

## Live Demo

The application is live at: [Food Delivery App](https://foodapp-frontend-seven.vercel.app/)

### Test Credentials
- **Admin Account**
  - Username: `admin`
  - Password: `admin123`

## Folder Structure
```
src/
├── components/           # Reusable components
│   ├── auth/            # Authentication components
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   └── PrivateRoute.jsx
│   ├── dashboard/       # Dashboard components
│   │   ├── AddMenuItem.jsx
│   │   └── MenuItemsList.jsx
│   ├── layout/         # Layout components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── menu/           # Menu components
│   │   ├── MenuItem.jsx
│   │   └── MenuList.jsx
│   └── orders/         # Order components
│       └── OrderItem.jsx
│
├── features/           # Redux slices
│   ├── auth/
│   │   └── authSlice.js
│   ├── cart/
│   │   └── cartSlice.js
│   ├── menu/
│   │   └── menuSlice.js
│   └── orders/
│       └── orderSlice.js
│
├── pages/             # Page components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Menu.jsx
│   ├── Cart.jsx
│   ├── Orders.jsx
│   └── NotFound.jsx
│
├── services/          # API services
│   └── api.js
│
├── store/            # Redux store configuration
│   └── store.js
│
├── styles/           # Global styles
│   └── index.css
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URI=https://foodappbackend-bice.vercel.app/api
```

## Features
- User Authentication (Login/Register)
- Menu Browsing and Filtering
- Cart Management
- Order Placement and History
- Admin Dashboard for Menu Management

## Tech Stack
- React
- Redux Toolkit
- React Router
- TailwindCSS
- Axios

## Design System
- Colors:
  - Primary: #3F72AF
  - Secondary: #DBE2EF
  - Accent: #F9F7F7
  - Background: #112D4E

- Typography:
  - Headings: Raleway
  - Body: Poppins

## Required Dependencies
```json
{
  "@reduxjs/toolkit": "^2.0.1",
  "axios": "^1.6.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^4.12.0",
  "react-redux": "^9.0.4",
  "react-router-dom": "^6.21.0"
}
```

## Setup Instructions

1. Clone repository

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with required variables

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## API Integration
The frontend interacts with the backend through these endpoints:

### Auth Endpoints
- Login: POST `/auth/login`
- Register: POST `/auth/register`

### Menu Endpoints
- Get Menu: GET `/menu`
- Add Item: POST `/menu`
- Update Item: PUT `/menu/:id`
- Delete Item: DELETE `/menu/:id`

### Order Endpoints
- Place Order: POST `/food/order`
- Get Orders: GET `/food/orders`

## Project Routes
- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/menu` - Menu display
- `/cart` - Shopping cart
- `/orders` - Order history
- `/dashboard` - Admin dashboard

## Author
Gyanesh Rao
