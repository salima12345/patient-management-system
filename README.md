# 🏥 Patient Management System

A modern healthcare patient management web application built using **Next.js**, **TypeScript**, **Twilio**, **TailwindCSS**, and **Appwrite**. Patients can register, book and manage appointments. Admins can schedule, confirm, and cancel appointments, with integrated **SMS notifications** for seamless communication.


---

## ⚙️ Tech Stack

- **Frontend:** Next.js, TypeScript, TailwindCSS, ShadCN UI
- **Backend Services:** Appwrite (Authentication, Database, File Storage)
- **Notifications:** Twilio (SMS)
- **Monitoring:** Sentry

---

## 🔋 Features

- 👉 **Patient Registration** – Secure sign-up with profile creation
- 👉 **Book Appointments** – Patients can schedule one or more appointments
- 👉 **Admin Dashboard** – Admins manage all appointments in real time
- 👉 **Confirm / Schedule Appointments** – Admins set or approve times
- 👉 **Cancel Appointments** – Admins can remove any scheduled session
- 👉 **SMS Notifications** – Automatic SMS sent via Twilio when confirmed
- 👉 **File Uploads** – Secure file uploads using Appwrite Storage
- 👉 **Responsive Design** – Fully optimized for mobile, tablet, and desktop
- 👉 **Error Monitoring** – Integrated with Sentry for performance and error tracking
- 👉 **Scalable Architecture** – Modular, clean codebase with reusable components

---

## 🤸 Quick Start

### ✅ Prerequisites

Ensure the following are installed:

- Git
- Node.js (v16 or later)
- npm



### 📦 Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Setup

Create a `.env.local` file in the project root:

```env
# Appwrite
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=your_project_id
API_KEY=your_appwrite_api_key
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=your_patient_collection_id
APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
NEXT_PUBLIC_BUCKET_ID=your_bucket_id

# Admin passkey for secure admin panel access
NEXT_PUBLIC_ADMIN_PASSKEY=111111
```


---

## 🏃 Running the App Locally

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) to view the app
- Admin panel typically accessible via `/admin` (protected via `NEXT_PUBLIC_ADMIN_PASSKEY`)

---

## 🧱 Folder Structure

```
/src
  /components      ← UI Components
  /app             ← Next.js App Router (pages, layouts)
  /lib             ← Appwrite + Twilio integrations
  /hooks           ← Custom React hooks
  /utils           ← Helper functions
  /types           ← TypeScript types/interfaces
  /store           ← Global state (e.g., Zustand)
.env.local
tailwind.config.js
next.config.js
```

---

## 📈 Monitoring

- [Sentry](https://sentry.io/) is integrated for real-time error reporting and performance monitoring.

---






