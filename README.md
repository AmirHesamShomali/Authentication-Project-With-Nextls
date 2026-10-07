# Authentication Project With Next.js

A modern authentication project built with **Next.js** and the **App Router**.

This project was developed to practice and understand authentication-related concepts in modern Next.js applications, including **Server Actions, Middleware, form validation with Zod, protected pages, and component-based UI development**.

The project also focuses on understanding how server-side logic can be handled directly within a Next.js application without requiring a separate backend application.

---

## 📌 About The Project

**Authentication Project With Next.js** is a practical authentication project created to improve my understanding of authentication and server-side features in Next.js.

The project uses the **Next.js App Router** as its main application architecture.

One of the main goals was to understand how different Next.js features can work together to create an authentication flow.

The project focuses on:

- Authentication
- Next.js App Router
- Server Actions
- Middleware
- Form validation
- Zod
- Protected routes/pages
- React components
- Bootstrap-based UI

---

## 🚀 Project Status

The project is currently implemented as an **Authentication Practice Project**.

The main authentication architecture and related Next.js concepts have been implemented to provide practical experience with server-side actions, validation, and route/page protection.

---

# 🛠️ Technologies Used

The project is built with the following technologies:

### Core Technologies

- **Next.js**
- **React**
- **JavaScript**
- **HTML5**
- **CSS3**

### UI

- **Bootstrap**

### Validation

- **Zod**

### Next.js Features

- **App Router**
- **Server Actions**
- **Middleware**
- **Server-side logic**
- **Client Components**

### Development Tools

- **Node.js**
- **npm**
- **Git**
- **GitHub**

---

# 🎯 Main Goals

The main goals of this project were:

1. Understand authentication concepts in Next.js.
2. Learn how to work with the Next.js App Router.
3. Practice Server Actions.
4. Learn how Middleware can be used to control access to pages.
5. Validate user input with Zod.
6. Create reusable React components.
7. Build an authentication-oriented user interface.
8. Understand the interaction between client-side forms and server-side logic.
9. Improve practical Next.js development skills.

---

# 🔐 Authentication

Authentication is the main purpose of this project.

The application demonstrates how authentication-related functionality can be organized inside a Next.js project.

A simplified authentication flow can be represented as:

```text
User
  │
  ▼
Authentication Form
  │
  ▼
Form Validation
  │
  ▼
Zod Validation
  │
  ▼
Server Action
  │
  ▼
Authentication Logic
  │
  ▼
Authentication Result
  │
  ▼
Protected / Public Page
```

This architecture allows the application to keep validation and server-side operations organized within the Next.js application.

---

# ⚡ Next.js App Router

The project uses the **Next.js App Router**.

The App Router provides a modern routing architecture for Next.js applications and allows pages and application logic to be organized using the `app` directory.

The repository contains an `app` directory as the main application structure.

A simplified structure looks like:

```text
app/
├── ...
├── ...
└── ...
```

Using the App Router also makes it possible to take advantage of modern Next.js features such as:

- Server Components
- Server Actions
- Layouts
- Middleware
- Server-side rendering

---

# ⚙️ Server Actions

One of the important concepts used in this project is **Server Actions**.

Server Actions allow server-side operations to be executed from the application without having to create a completely separate backend project.

In this project, Server Actions are used to manage server-side authentication-related operations.

The general flow is:

```text
React Form
     │
     ▼
Server Action
     │
     ▼
Server-side Logic
     │
     ▼
Response
```

This approach helps keep server-side operations close to the Next.js application.

---

# 🛡️ Middleware

The project also uses **Next.js Middleware**.

A `middleware.js` file exists in the repository and is used as part of the application's access-control architecture.

Middleware can be used to inspect incoming requests before they reach specific pages or routes.

In an authentication project, this makes it possible to implement logic such as:

```text
Request
   │
   ▼
Middleware
   │
   ├── Authenticated ──► Protected Page
   │
   └── Not Authenticated ──► Login Page
```

This is useful for protecting pages that should only be accessible to authenticated users.

---

# ✅ Form Validation With Zod

The project uses **Zod** for form validation.

Validation is an important part of authentication systems because user-provided data should be checked before being processed.

A simplified example of a Zod schema could look like:

```javascript
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
```

This approach provides structured validation for form data.

The validation process can be represented as:

```text
Form Input
    │
    ▼
Zod Schema
    │
    ├── Valid ──► Continue
    │
    └── Invalid ──► Show Error
```

---

# 🧩 React Components

The project includes a dedicated `components` directory for React components.

Using reusable components helps keep the UI organized and makes individual parts of the authentication interface easier to maintain.

Instead of putting the entire interface into one large page, different UI elements can be separated into reusable components.

---

# 🎨 User Interface

The UI of the project was developed using:

- React
- HTML
- CSS
- Bootstrap

Bootstrap provides ready-to-use UI utilities and components that can be used to create a clean and responsive authentication interface.

The combination of React and Bootstrap makes it possible to separate the UI into reusable components while maintaining consistent styling.

---

# 📁 Project Structure

The current repository contains the following main directories and files:

```text
Authentication-Project-With-Nextls/
│
├── action/
│
├── app/
│
├── components/
│
├── public/
│
├── .gitignore
├── README.md
├── jsconfig.json
├── middleware.js
├── next.config.mjs
├── package-lock.json
└── package.json
```

### `action/`

Contains server-side action logic used by the application.

### `app/`

Contains the main Next.js App Router application.

### `components/`

Contains reusable React UI components.

### `public/`

Contains public assets used by the application.

### `middleware.js`

Contains middleware logic used for controlling requests and page access.

### `next.config.mjs`

Contains Next.js configuration.

### `package.json`

Contains project dependencies and available npm scripts.

---

# 🔄 Application Architecture

The overall architecture can be represented as:

```text
                 ┌───────────────────┐
                 │       User        │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │   React UI / Form │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │   Zod Validation  │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │   Server Action   │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │ Authentication    │
                 │     Logic         │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │ Middleware /      │
                 │ Access Control    │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │ Protected Page    │
                 └───────────────────┘
```

---

# ⚙️ Installation

Make sure you have **Node.js** installed on your system.

## 1. Clone the repository

```bash
git clone https://github.com/AmirHesamShomali/Authentication-Project-With-Nextls.git
```

## 2. Enter the project directory

```bash
cd Authentication-Project-With-Nextls
```

## 3. Install dependencies

```bash
npm install
```

## 4. Run the development server

```bash
npm run dev
```

The project will normally be available at:

```text
http://localhost:3000
```

The repository's current Next.js setup also uses `npm run dev` for starting the development server.

---

# 📜 Available Commands

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates a production build of the application.

### Production Server

```bash
npm run start
```

Starts the application in production mode after building it.

---

# 🧠 Important Concepts Learned

This project provides practical experience with several important concepts in modern Next.js development.

| Concept | Purpose |
|---|---|
| Next.js | React framework for modern web applications |
| App Router | Modern Next.js routing architecture |
| React | Component-based UI development |
| Server Actions | Server-side application operations |
| Middleware | Request and access control |
| Zod | Form and data validation |
| Bootstrap | UI styling and responsive design |
| JavaScript | Application logic |
| HTML | Page structure |
| CSS | Interface styling |

---

# 📚 Learning Outcomes

Through this project, I practiced:

- Building authentication-related functionality with Next.js
- Working with App Router
- Understanding Server Actions
- Working with Middleware
- Protecting pages and routes
- Validating forms with Zod
- Building reusable React components
- Creating responsive interfaces with Bootstrap
- Understanding server-side and client-side responsibilities
- Organizing a Next.js project structure
- Improving my understanding of modern Next.js architecture

---

# 🔮 Future Improvements

The project can be extended with additional authentication features such as:

- User registration
- Secure password hashing
- Login and logout
- Session management
- Password reset
- Email verification
- Remember me functionality
- User profile
- Role-based access control
- Admin dashboard
- OAuth authentication
- Google Login
- GitHub Login
- Two-Factor Authentication
- Improved error handling
- Database integration
- Better security practices
- Automated tests

---

# 🔒 Security Improvements

For a production-ready authentication system, additional security measures should be considered.

Possible improvements include:

- Hashing passwords using a strong password hashing algorithm
- Secure session management
- HTTP-only cookies
- CSRF protection where appropriate
- Rate limiting
- Input sanitization
- Strong password policies
- Account lockout mechanisms
- Email verification
- Secure environment variables
- Proper authorization checks on the server

This project is primarily intended as a **learning and practice project**, so additional security hardening would be necessary before using it as a production authentication system.

---

# 🚀 Possible Future Architecture

The current project can eventually be expanded into a complete full-stack authentication system.

A possible architecture would be:

```text
                    Next.js Application
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
       React UI       Server Actions    Middleware
          │                │                │
          └────────────────┼────────────────┘
                           │
                           ▼
                      Backend Logic
                           │
                           ▼
                       Database
```

This would make the project suitable as a foundation for larger applications.

---

# 📱 Responsive Design

The interface uses Bootstrap to support responsive layouts.

The UI can be adapted for:

- Desktop
- Laptop
- Tablet
- Mobile

Bootstrap's responsive utilities make it easier to create layouts that work across different screen sizes.

---

# 🎓 Project Type

**Category:** Authentication / Front-End / Next.js Practice Project

**Framework:** Next.js

**Architecture:** App Router

**Main Topics:** Authentication, Server Actions, Middleware and Form Validation

**UI:** React + HTML + CSS + Bootstrap

**Validation:** Zod

**Difficulty:** Intermediate

**Purpose:** Learning, practice and portfolio development

---

# 👨‍💻 Author

**Amir Hesam Shomali**

GitHub:

https://github.com/AmirHesamShomali

---

# 📄 License

This project was created for educational, learning and portfolio purposes.

Feel free to explore the source code and use the concepts demonstrated in this project for learning and experimentation.

---

## ⭐ Conclusion

This project was created to gain practical experience with **authentication and modern Next.js development**.

The main focus was on understanding how **App Router, Server Actions, Middleware and Zod validation** can work together inside a Next.js application.

The project also provided practical experience with building a React-based authentication interface using **HTML, CSS and Bootstrap**.

Overall, this project helped strengthen my understanding of the relationship between **client-side UI, server-side logic, validation and access control** in modern web applications.
