

# 🌟 **Login Authentication System** 🌟

### 🔒 **Secure User Authentication with React and Node.js**

This project is a **full-stack user authentication system** built with **React** and **Node.js**. It uses cookies for secure user session management, ensuring data integrity and user security. 🚀

---

## ✨ **Features**

✅ **Secure Login and Logout**  
✅ **Session Management with Cookies**  
✅ **Protected Routes**  
✅ **User-Friendly Interface**  
✅ **Scalable and Easy to Extend**

---

## 🛠️ **Technology Stack**

### **Frontend: React.js**  
- ⚛️ React.js  
- 🎨 CSS for styling  
- 🔗 Axios for API requests  
- 🚦 React Router for navigation  

### **Backend: Node.js**  
- 🖥️ Node.js  
- 🚀 Express.js for API creation  
- 🍪 Cookie-Parser for handling cookies  
- 🔒 JSON Web Tokens (JWT) for authentication  
- 🌐 CORS for secure cross-origin requests  

---

## 📂 **Project Structure**

```
User Authentication/
├── backend/              # Node.js backend code
│   ├── routes/           # API endpoints
│   ├── controllers/      # Business logic
│   ├── models/           # Database models
│   ├── server.js         # Server entry point
│
├── userauthentication/   # React frontend code
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Login and Dashboard pages
│   │   ├── App.js        # App entry point
│   │   ├── index.js      # React DOM render
```

---

## 🚀 **How to Run the Project**

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/IPCODE77/Log_in_Authenticattion.git
cd Log_in_Authenticattion
```

### 2️⃣ **Set Up the Backend**
- Navigate to the `backend` folder:
  ```bash
  cd backend
  npm install
  ```
- Create a `.env` file and configure:
  ```env
  PORT=5000
  JWT_SECRET=your_secret_key
  ```
- Start the backend server:
  ```bash
  npm start
  ```

### 3️⃣ **Set Up the Frontend**
- Navigate to the `userauthentication` folder:
  ```bash
  cd ../userauthentication
  npm install
  ```
- Create a `.env` file and configure:
  ```env
  REACT_APP_API_URL=http://localhost:5000/api
  ```
- Start the React development server:
  ```bash
  npm start
  ```

---

## 📸 **Screenshots**

### 🖥️ **Login Page**
![Login Page](https://via.placeholder.com/800x400?text=Login+Page)

### 🖥️ **Dashboard**
![Dashboard](https://via.placeholder.com/800x400?text=Dashboard)

---

## 🛡️ **Security Highlights**

🔒 **HTTP-Only Cookies**: Prevents access to tokens via JavaScript.  
🔑 **JWT Authentication**: Ensures secure user sessions.  
🚫 **CORS Enabled**: Protects against unauthorized API access.  

---

## 👨‍💻 **Contributing**

Contributions are welcome! 🤝 If you'd like to improve this project, please follow these steps:

1. Fork the repository. 🍴  
2. Create a new branch. 🌱  
3. Make your changes and commit them. ✍️  
4. Push to your branch and create a pull request. 🚀  

---

## 📄 **License**

This project is licensed under the **MIT License**. 📝

---


---

Let me know if you'd like to tweak it further! 🎉
