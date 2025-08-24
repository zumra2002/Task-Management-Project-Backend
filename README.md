# Task-Management-Project-Backend
📌 Backend README (Node.js + Express + MongoDB)

```markdown
# Task Manager Backend

This is the **backend** of the Task Manager WebApp built with **Node.js, Express, and MongoDB**.  
It provides REST APIs for user authentication and task management.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- CORS

---

## 📂 Project Structure
backend/
┣ src/
┃ ┣ config/ # DB connection
┃ ┣ controllers/ # Business logic
┃ ┣ models/ # Mongoose schemas
┃ ┣ routes/ # API routes
┃ ┣ middleware/ # Auth middleware
┃ ┣ index.js # Entry point
┣ package.json
┣ .env

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager/backend
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Create .env file
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4️⃣ Run the server
bash
Copy
Edit
npm run dev
🌐 Deployment
Deploy on Railway or Fly.io
Railway:

Push repo to GitHub.

Create a new project on Railway.

Add environment variables (MONGO_URI, JWT_SECRET, PORT).

Deploy → Railway gives you a public API URL.

Fly.io:

Install Fly CLI → flyctl launch

Add env vars with flyctl secrets set MONGO_URI=... JWT_SECRET=...

Deploy → flyctl deploy

📝 API Endpoints
Auth
POST /api/auth/register → Register user

POST /api/auth/login → Login user

Tasks
GET /api/tasks/mytasks → Get user tasks

POST /api/tasks → Create task

PUT /api/tasks/:id → Update task

DELETE /api/tasks/:id → Delete task
