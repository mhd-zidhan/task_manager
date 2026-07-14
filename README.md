# Task Manager Application

A full-stack Task Manager web application built using **React (Vite)** for the frontend and **Django REST Framework** for the backend. The application allows users to securely register, login, and manage their tasks with complete CRUD operations through REST APIs.

## 🚀 Features

- User Registration and Login
- JWT-based Authentication
- Secure API access
- Create new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- User-specific task management
- REST API integration
- Responsive user interface

## 🛠️ Technologies Used

### Frontend
- React.js (Vite)
- JavaScript
- Axios
- HTML5
- CSS3
- React Router

### Backend
- Python
- Django
- Django REST Framework (DRF)
- Simple JWT Authentication

### Database
- PostgreSQL

### Tools
- Git & GitHub
- VS Code
- Postman

## 📂 Project Structure

```
task_manager/
│
├── backend/
│   ├── manage.py
│   ├── apps/
│   ├── settings.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/mhd-zidhan/task_manager.git

cd task_manager
```

---

# Backend Setup (Django)

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start Django server:

```bash
python manage.py runserver
```

Backend will run at:

```
http://127.0.0.1:8000/
```

---

# Frontend Setup (React)

Open another terminal.

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React development server:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173/
```

---

## 🔐 Authentication

The application uses JWT authentication.

Users receive an access token after login, which is used to access protected API endpoints.

Authentication flow:

```
User Login
     |
     |
JWT Token Generated
     |
     |
Access Protected APIs
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register/ | Register new user |
| POST | /api/auth/login/ | User login |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks/ | Get user tasks |
| POST | /api/tasks/ | Create task |
| PUT/PATCH | /api/tasks/<id>/ | Update task |
| DELETE | /api/tasks/<id>/ | Delete task |

---

## 🔮 Future Improvements

- Task categories
- Task priority levels
- Due date reminders
- Search and filtering
- Deployment with cloud services

---

## 👨‍💻 Author

**Muhammad Zidhan**

Full Stack Developer Intern

GitHub:
https://github.com/mhd-zidhan
