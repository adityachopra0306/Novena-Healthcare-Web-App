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