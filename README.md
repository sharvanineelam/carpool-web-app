# 🚗 CarPool – Ride Sharing Web Application

CarPool is a web-based ride sharing platform designed to help people traveling in the same direction share rides easily.  
Drivers can publish available seats in their vehicles while passengers can search and join rides based on their travel route.

This system helps reduce transportation costs, traffic congestion, and fuel consumption by encouraging shared mobility.

---

# 🌟 Key Features

• User Login & Signup system  
• Post a ride with source, destination, seats and price  
• Search available rides by location  
• Manage rides posted by drivers  
• User profile management  
• Ride dashboard with quick actions  
• Help & About sections for user guidance  
• Responsive and modern UI design

---

# 🖥️ Pages Included

• Login Page  
• Dashboard  
• Post Ride Page  
• Search Ride Page  
• My Rides Page  
• Profile Page  
• About Page  
• Help Page

---

# 💾 Data Storage

Currently this project uses **Browser LocalStorage** to store ride and user information.

In a production system, the application would connect to a backend database such as:

• MySQL  
• PostgreSQL  
• MongoDB

---

# 🗄️ Database Design

The platform is designed with the following main tables:

**Users Table**
- user_id
- name
- email
- phone
- password
- city
- profile_photo

**Rides Table**
- ride_id
- driver_id
- source
- destination
- seats
- price
- ride_date
- ride_time

**Bookings Table**
- booking_id
- ride_id
- passenger_id
- status

Detailed design is available in:

`database_design.md`

---

# 🚀 How to Run the Project

1. Download or clone the repository
2. Open the project folder in VS Code
3. Start Live Server
4. Open `index.html`

The application will run in your browser.

---

# 📷 Application Screens

Dashboard, Ride Posting, Ride Search, Profile Management and Ride Management interfaces are included.

---

# 🎯 Project Goal

The goal of this application is to create a simple and efficient ride sharing system that connects drivers and passengers traveling in the same direction.

The platform focuses on improving travel coordination, reducing travel costs and encouraging shared transportation.

---

# 👩‍💻 Developed By

**Neelam Sai Sharvani**  
Founder & CEO – CarPool Platform