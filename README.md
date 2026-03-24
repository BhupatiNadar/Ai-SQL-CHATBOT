# 🚀 AI SQL Chatbot

An AI-powered chatbot that converts **natural language into SQL queries** and fetches results from a database in real-time.

This project enables users to interact with databases using plain English, removing the need for SQL expertise.

---

## 📌 Features

- 💬 Interactive chat interface
- 🧠 Natural Language → SQL conversion
- ⚡ FastAPI backend for performance
- 🎨 Modern React (Vite) frontend
- 🗄️ SQLite/MySQL/PostgreSQL support
- 📜 Displays generated SQL queries
- 📊 Real-time query results
- 📂 Clean modular project structure

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- CSS

### Backend
- FastAPI
- SQLAlchemy

### Database
- SQLite (test.db)
- MySQL / PostgreSQL (optional)

### AI
- OpenAI API / LLM

---
## 📂 Project Structure
```
AI-SQL-CHATBOT/
│
├── Backend/
│ ├── test.db
│ ├── schemas.py
│ ├── database.py
│ ├── main.py
│ ├── models.py
│ ├── model.py
│ └── dummy_data.py
│
├── src/
│ ├── App.css
│ ├── index.css
│ ├── assets/
| |
│ ├── components/
│ │ ├── Contact/
│ │ ├── Features/
│ │ ├── How_it_work/
│ │ ├── Aboutme/
│ │ ├── Homepage/
│ │ ├── docsfolder/
│ │ └── Chatbot/
│
│ ├── main.jsx
│ └── App.jsx
│
├── index.html
├── vite.config.js
├── package.json
├── eslint.config.js
├── .gitignore
└── README.md


---
```
## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

bash
git clone https://github.com/BhupatiNadar/Ai-SQL-CHATBOT.git
cd Ai-SQL-CHATBOT

2️⃣ Backend Setup

cd Backend

Create .env file:
use your own keys

Run backend:

uvicorn main:app --reload

3️⃣ Frontend Setup
npm install
npm run dev

🚀 Usage
Start backend server
Start frontend server
Open browser (usually http://localhost:5173
)
Ask queries like:
Show all products in Electronics category

🧠 Example
Input:
Show top 5 expensive products
Generated SQL:
SELECT * FROM products
ORDER BY price DESC
LIMIT 5;

📈 Future Improvements
📊 Data visualization (charts)
🔍 Query optimization
🧾 Query history
🔐 Authentication system
🌐 Multi-database support

🤝 Contribution
1.Fork the repository
2.Create a new branch
3.Make your changes
4.Submit a pull request

👨‍💻 Author

Bhupati Nadar

GitHub: https://github.com/BhupatiNadar
