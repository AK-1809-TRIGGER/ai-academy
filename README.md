# 📌 AI Academy Website  

## 📖 Description  
AI Academy is a Django-based web application designed as part of an internship project.  
It provides a simple **course listing platform** where learners can explore AI/ML courses and fill a **Join Form** to express their interest.  

The form submissions are handled using **`join.js`**, which sends data to the Django backend for secure storage and admin review.  

---

## 🚀 Features  
- 📚 **Course Listings**: Display available AI & ML courses  
- 📝 **Join Form**: Users can submit their details (name, email, area of interest)  
- 🔗 **AJAX Integration**: `join.js` sends user input to the backend seamlessly  
- 💾 **Backend Storage**: Submitted details stored in Django models  
- 🎨 **Frontend**: Responsive UI with simple layout  

---

## 🛠️ Tech Stack  
- **Backend**: Django (Python)  
- **Frontend**: HTML, CSS, JavaScript  
- **Database**: SQLite (default, easy setup)  
- **Form Handling**: Custom `join.js` script  

---

## 📂 Project Structure  
AI-Academy/
├── backend/ # Django backend app
├── frontend/ # Frontend files (HTML, CSS, join.js)
├── templates/ # HTML templates
├── db.sqlite3 # Database (ignored in .gitignore)
├── manage.py # Django management script
└── README.md # Documentation


---

## 📌 Future Improvements  
- 🔑 Add login & signup system  
- 📊 Dashboard for users & admin  
- 💳 Payment integration for premium courses  
- 🌍 Deploy on PythonAnywhere / Render  

---

## 📜 License  
This project is licensed under the **MIT License**.  
