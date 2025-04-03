# Novena: Hospital Management System

## Overview
This is a **full-stack** hospital management system built using **React (Frontend)** and **Django with PostgreSQL (Backend)**. It allows **admins, doctors, and patients** to log in and view their respective dashboards.

## Features
- **User Authentication:** Login system for admin, doctors, and patients.
- **Admin Dashboard:** Displays a list of all doctors and patients.
- **Doctor Dashboard:** Displays the list of patients assigned to a specific doctor.
- **Database Integration:** Uses **PostgreSQL** to store user data and relationships.

## Tech Stack
- **Frontend:** React, React Router, Axios, Bootstrap
- **Backend:** Django, Django REST Framework (DRF), PostgreSQL

---

## Installation & Setup

### 1️. Clone the Repository
```sh
git clone https://github.com/your-username/hospital-management.git
cd hospital-management
```

### 2. Backend Setup (Django + PostgreSQL)

#### Install Dependencies
```sh
pip install -r requirements.txt
```

#### Apply Migrations
```sh
python manage.py makemigrations authapp
python manage.py migrate
```

#### 🔹 Create a Superuser (Admin)
```sh
python manage.py createsuperuser
```

#### 🔹 Run the Server
```sh
python manage.py runserver
```
The backend will be available at `http://127.0.0.1:8000/`

---

### 3. Frontend Setup (React)

#### 🔹 Install Dependencies
```sh
cd frontend
npm install
```

#### 🔹 Start the React App
```sh
npm start
```
The frontend will be available at `http://localhost:3000/`

---

## Database Schema (PostgreSQL Tables)

#### (Going to be updated soon)

| **Table**          | **Columns**                               |
|-------------------|--------------------------------|
| `authapp_user`   | `id`, `role`, `user_id`, `password` |
| `authapp_doctor` | `id`, `specialization`, `user_id`  |
| `authapp_patient` | `id`, `medical_history`, `user_id`, `assigned_doctor_id` |

Example data:
```sql
SELECT * FROM authapp_user;
 id |  role   | user_id | password  
----+---------+---------+----------
  4 | patient | p123    | password
  5 | doctor  | d456    | password
  6 | admin   | a789    | password
```

---

## API Endpoints

| **Method** | **Endpoint**                 | **Description** |
|-----------|-----------------------------|----------------|
| `POST`    | `/api/login/`                | Authenticates a user |
| `GET`     | `/api/admin-dashboard/`      | Fetches doctors & patients |
| `GET`     | `/api/doctor-dashboard/:<doctorId>/` | Fetches patients assigned to a doctor |