# MYCircle — React website starter

A responsive React + Vite frontend for the MYCircle professional community concept.

## Included
- Marketing homepage explaining MYCircle, benefits, features, how it works, community circles, mentorship, FAQs and contact section
- Signup and login pages
- React Router navigation
- Responsive desktop and mobile layout
- Demo-only form validation and UI feedback

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm

## Run on Windows 10
1. Extract this ZIP.
2. Open the extracted `mycircle-react-website` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Create a production build
```bash
npm run build
npm run preview
```

## Important before launch
This is a frontend starter, not a production authentication system. Signup/login currently validate the form and show a demo message; they do not create real accounts or securely store passwords. Do not collect real user passwords with this demo. Next development phase should connect the forms to a Java Spring Boot API, implement secure password hashing (for example BCrypt), session/JWT strategy, email/phone verification, validation, rate limiting and database storage.

## Project structure
```text
mycircle-react-website/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js
    └── styles.css
```
