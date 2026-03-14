# CarPool Web Application – Database Design

## Overview
The CarPool platform connects drivers who have empty seats in their vehicles with passengers traveling in the same direction. The system manages user accounts, ride postings, and ride bookings.

---

# 1. Users Table

Stores information about registered users.

| Field Name | Type | Description |
|------------|------|-------------|
| user_id | INT (Primary Key) | Unique user ID |
| name | VARCHAR | User full name |
| email | VARCHAR | User email address |
| phone | VARCHAR | Contact number |
| password | VARCHAR | Account password |
| city | VARCHAR | User city |
| profile_photo | VARCHAR | Profile image path |

---

# 2. Rides Table

Stores rides created by drivers.

| Field Name | Type | Description |
|------------|------|-------------|
| ride_id | INT (Primary Key) | Unique ride ID |
| driver_id | INT (Foreign Key) | User who created the ride |
| source | VARCHAR | Starting location |
| destination | VARCHAR | Ending location |
| seats | INT | Available seats |
| price | DECIMAL | Price per seat |
| ride_date | DATE | Date of ride |
| ride_time | TIME | Time of ride |

---

# 3. Bookings Table

Stores passengers booking rides.

| Field Name | Type | Description |
|------------|------|-------------|
| booking_id | INT (Primary Key) | Unique booking ID |
| ride_id | INT (Foreign Key) | Ride being booked |
| passenger_id | INT (Foreign Key) | User booking the ride |
| status | VARCHAR | Booking status (Pending / Confirmed / Cancelled) |

---

# Database Relationships

- One **User** can create many **Rides**
- One **Ride** can have multiple **Bookings**
- Each **Booking** belongs to one **Ride** and one **User**

---

# Notes

In this prototype version, ride data is stored using **browser LocalStorage**.  
In a production environment, the system would use a backend database such as **MySQL or PostgreSQL** to store and manage ride and user data securely.