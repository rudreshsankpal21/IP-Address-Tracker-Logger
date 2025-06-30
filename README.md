## 📘 IP Address Tracker & Logger

A simple Node.js + MongoDB backend project that logs the IP address, user-agent (device/browser info), and timestamp of each incoming request. Useful as a lightweight analytics/logging tool or backend utility.

---

### 🚀 Features

- 📍 Logs the IP address of each visitor
- 🖥️ Captures the user-agent (browser/device)
- 🕒 Records timestamp of each visit
- 📄 View all logs (sorted by latest)
- 🧹 Clear all logs with a single request
- 🧱 Built with Express, MongoDB (Mongoose)

---

### 📂 Folder Structure

```
ip-tracker/
├── config/
│   └── db.js
├── controllers/
│   └── logController.js
├── models/
│   └── Log.js
├── routes/
│   └── logRoutes.js
├── .env
├── app.js
├── server.js
└── package.json
```

---

### 📦 Tech Stack

- **Node.js**
- **Express**
- **MongoDB** (via Mongoose)
- **dotenv**
- **CORS**

---

### 🔌 API Endpoints

#### `GET /api/track`

Logs the visitor’s IP, user-agent, and timestamp.

**Response:**

```json
{
  "success": true,
  "message": "Logged!"
}
```

---

#### `GET /api/logs`

Returns all stored logs sorted by most recent.

**Response:**

```json
[
  {
    "_id": "...",
    "ip": "::1",
    "userAgent": "Mozilla/5.0 ...",
    "timestamp": "2025-06-30T10:00:00.000Z"
  },
  ...
]
```

---

#### `DELETE /api/logs`

Deletes all logs from the database.

**Response:**

```json
{
  "success": true,
  "message": "All logs deleted"
}
```

---

### 🛠️ Getting Started

#### 1. Clone the repo

```bash
git clone https://github.com/your-username/ip-tracker.git
cd ip-tracker
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### 4. Start the server

```bash
npm run dev
```

---

### 📬 Author

**Rudresh** – MERN Stack Developer
✨ _Building backend-focused projects with purpose_

---
