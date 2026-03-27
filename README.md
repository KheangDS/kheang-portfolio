# YENG Kheang - Data Analyst Portfolio

A modern, clean, and responsive portfolio website built with Vite, React, and TypeScript.

## 🚀 Quick Start

To run this project on your laptop:

1. **Open your terminal** (Command Prompt, PowerShell, or Terminal).
2. **Navigate to the project folder**:
   ```bash
   cd portfolio2
   ```
3. **Install the dependencies** (only needed once):
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and go to `http://localhost:5173`.

---

## 🛠️ How to Edit Your Information

All your personal data is stored in the `src/data/` folder. You don't need to change the component code; just update these files:

| What to change | File Path |
| :--- | :--- |
| **Name, Title, Bio, Email, Social Links** | `src/data/profile.ts` |
| **Skills & Categories** | `src/data/skills.ts` |
| **Projects (Title, Tech, Description)** | `src/data/projects.ts` |
| **Highlights / Experience** | `src/data/highlights.ts` |
| **Colors & Theme** | `src/styles/index.css` (check the `:root` section) |
| **Profile Image** | Replace `public/images/profile-photo.jpg` |

### 📸 Changing the Profile Photo
1. Find your favorite photo.
2. Rename it to `profile-photo.jpg`.
3. Put it inside the `public/images/` folder.
4. The website will automatically update!

---

## ✅ Final Checklist for Customization

- [ ] **Name & Title**: Edit `src/data/profile.ts`.
- [ ] **Short Bio**: Update the `shortBio` in `src/data/profile.ts`.
- [ ] **Skills**: Add or remove skills in `src/data/skills.ts`.
- [ ] **Project Details**: Update project names and descriptions in `src/data/projects.ts`.
- [ ] **Contact Links**: Ensure your GitHub and LinkedIn URLs are correct in `src/data/profile.ts`.
- [ ] **Theme Colors**: Open `src/styles/index.css` and change the `--accent-primary` color to your favorite color (e.g., `#ff0000` for red).
- [ ] **Profile Image**: Upload your photo to `public/images/`.

---

## 🏗️ Build for Deployment

When you are ready to publish your website:
```bash
npm run build
```
The output will be in the `dist/` folder, which you can upload to Netlify, Vercel, or GitHub Pages.
