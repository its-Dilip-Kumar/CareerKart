# 🎯 CareerKart — MERN Job Portal

A modern, full-stack job portal connecting talented professionals with top companies. Built with the MERN stack, featuring dual user roles, real-time application tracking, and one-click job applications.


---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Folder Structure](#-folder-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### 👨‍🎓 For Job Seekers (Students)
- 🔐 Secure authentication with JWT + httpOnly cookies
- 🔍 Smart search — filter jobs by title, location, salary
- 📝 One-click job applications
- 📊 Real-time application status (Pending / Accepted / Rejected)
- 📁 Resume upload via Cloudinary
- 👤 Profile management with skills, bio, and photo
- 💼 Browse jobs by category (Frontend, Backend, Data Science, etc.)

### 🏢 For Recruiters (Admins)
- 🏢 Company registration and management
- 💼 Post, edit, and manage job listings
- 👥 View all applicants for each job
- ✅ Accept or reject applications with one click
- 📊 Track applications in real-time
- 🔍 Search through posted jobs

### 🎨 UI/UX
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🎯 Modern UI with shadcn/ui + Tailwind CSS
- 🌈 Clean, accessible design

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| **React 18** | UI library |
| **Vite** | Build tool & dev server |
| **Redux Toolkit** | State management |
| **React Router v6** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Component library |
| **Framer Motion** | Animations |
| **Axios** | HTTP client |
| **Lucide React** | Icons |
| **Sonner** | Toast notifications |

### Backend
| Tech | Purpose |
|------|---------|
| **Node.js** | Runtime |
| **Express.js** | Web framework |
| **MongoDB** | Database |
| **Mongoose** | ODM |
| **JWT** | Authentication |
| **bcryptjs** | Password hashing |
| **Multer** | File upload handling |
| **Cloudinary** | Image/resume storage |
| **Cookie-parser** | Cookie handling |
| **CORS** | Cross-origin requests |
| **dotenv** | Environment variables |


## 🚀 Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Cloudinary account** — [Sign up free](https://cloudinary.com/)
- **Git** — [Download](https://git-scm.com/)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/its-Dilip-Kumar/CareerKart.git
cd CareerKart
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

Fill in your credentials in `.env` (see [Environment Variables](#-environment-variables)).

Start the backend server:

```bash
npm run dev
```

Backend will run on `http://localhost:8000`

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
```

Create a `.env` file:

```bash
cp .env.example .env
```

Start the frontend:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

### 4️⃣ Open in Browser

Visit [http://localhost:5173](http://localhost:5173) and start exploring! 🎉

---

## 🔐 Environment Variables

Create a `.env` file inside the `Backend/` folder with the following variables:

```env
# Server
PORT=8000

# Database
MONGO_URI=mongodb://localhost:27017/careerkart
# or MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/careerkart

# JWT
SECRET_KEY=your_super_secret_jwt_key_here

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Create a `.env` file inside the `Frontend/` folder:

```env
VITE_API_URL=http://localhost:8000
```

> ⚠️ **Important:** Never commit your `.env` files to GitHub. They are already in `.gitignore`.

---

## 📡 API Endpoints

### User Routes (`/api/v1/user`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/register` | Register new user | ❌ |
| POST | `/login` | Login user | ❌ |
| GET | `/logout` | Logout user | ✅ |
| POST | `/profile/update` | Update profile | ✅ |

### Company Routes (`/api/v1/company`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/register` | Register company | ✅ |
| GET | `/get` | Get all companies | ✅ |
| GET | `/get/:id` | Get company by ID | ✅ |
| PUT | `/update/:id` | Update company | ✅ |

### Job Routes (`/api/v1/job`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/post` | Post new job | ✅ |
| GET | `/get` | Get all jobs (with search) | ✅ |
| GET | `/get/:id` | Get job by ID | ✅ |
| GET | `/getadminjobs` | Get admin's jobs | ✅ |
| PUT | `/update/:id` | Update job | ✅ |

### Application Routes (`/api/v1/application`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/apply/:id` | Apply for a job | ✅ |
| GET | `/get` | Get applied jobs | ✅ |
| GET | `/:id/applicants` | Get job applicants | ✅ |
| POST | `/status/:id/update` | Update status | ✅ |

---

## 📁 Folder Structure

```
CareerKart/
├── Backend/
│   ├── controllers/       # Route logic
│   ├── middlewares/       # Auth, multer
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express routes
│   ├── utils/             # Helpers (cloudinary, datauri)
│   ├── .env.example       # Environment template
│   ├── .gitignore
│   ├── index.js           # Entry point
│   └── package.json
│
├── Frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── admin/     # Admin pages
│   │   │   ├── auth/      # Login/Signup
│   │   │   ├── shared/    # Navbar, Footer
│   │   │   └── ui/        # shadcn components
│   │   ├── hooks/         # Custom hooks
│   │   ├── redux/         # Redux slices & store
│   │   ├── utils/         # Constants, helpers
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### 📝 Coding Guidelines
- Follow existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test before submitting PR

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Dilip Kumar**

- GitHub: [@its-Dilip-Kumar](https://github.com/its-Dilip-Kumar)
- LinkedIn: [dilip-kumar-j2002](https://www.linkedin.com/in/dilip-kumar-j2002/)
- Email: dilip.sharma4558@gmail.com

---

## 🙏 Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [Cloudinary](https://cloudinary.com/) for media storage
- [Vercel](https://vercel.com/) & [Render](https://render.com/) for hosting (recommended)

---

## ⭐ Show Your Support

If you found this project helpful, please give it a **star** ⭐ on GitHub!

---

## 📬 Contact

Have questions or suggestions? Feel free to reach out:

- Open an [issue](https://github.com/its-Dilip-Kumar/CareerKart/issues)
- Send an email to dilip.sharma4558@gmail.com
- Connect on [LinkedIn](https://www.linkedin.com/in/dilip-kumar-j2002/)

---

<div align="center">

**Made with ❤️ by Dilip Kumar**

⭐ Star this repo if you like it! ⭐

</div>
