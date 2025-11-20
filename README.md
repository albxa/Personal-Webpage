<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# Personal Webpage

A responsive personal portfolio website showcasing skills, experience, and projects. Built using modern web development technologies, this project aims to present a clean and professional online presence.

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices.
- **Multi-Language Support**: Available in English and German.
- **Dynamic Animations**: Interactive elements powered by Framer Motion.
- **Contact Form Integration**: Functional email form using SendGrid for backend communication.
- **SEO Optimized**: Implements best practices for search engine optimization.
- **Custom Domain Support**: Configured to work with a personal domain and HTTPS.

## Technologies Used

- **Frontend**: React.js, Next.js
- **Styling**: Tailwind CSS
- **Internationalization**: i18next, react-i18next
- **Backend Email Integration**: SendGrid
- **Hosting**: Netlify
- **Deployment Automation**: Netlify Continuous Deployment
- **Other Tools**:
  - ESLint and Prettier for code formatting and linting
  - TypeScript for type safety
  - Framer Motion for animations
  - PostCSS and Autoprefixer for styling optimization

## Installation and Setup

1. Clone the repository on desired path (Git must be installed already):
   ```bash/cmd
   git init 
   git clone https://github.com/username/Personal-Webpage
   cd Personal-Webpage

2. Install dependencies
   ```bash
   npm install
   
3. Create .env.local File for API key
   ```bash
   SENDGRID_API_KEY=your-sendgrid-api-key

4. Run dev Server
   ```bash
   npm run dev

5. Build for production
   ```bash
   npm run build

6.  (OPTIONAL) Export for static hostic, not needed for this specific project
    ```bash
    npm run export

7. View the application
   - Development: http://localhost:3000
   - Production: http://your-deployment-domain

## **Project Structure**
Describe the directory and file structure of the project.

```markdown
## Project Structure

- **`/pages`**: Contains all the Next.js pages.
  - **`/api`**: Server-side functions.
     - **`send-email.js`**: Email backend powered by SendGrid.
  - **`index.js`**: Homepage.
  - **`about.js`**: About section.
  - **`projects.js`**: Projects listing.
  - **`resume.js`**: Resume details.
  - **`contact.js`**: Contact form.
  - **`_app.js`**: Global app configuration.
  - **`_error.js`**: Custom error pages.
  - **`_404.js`**: Custom 404 error page.

- **`/components`**: Reusable components.
  - **`Header.jsx`**: Navigation bar with links and language toggler.

- **`/styles`**: Styling files.
  - **`globals.css`**: Global CSS styles.
  - **`tailwind.config.js`**: Tailwind CSS configuration.

- **`/locales`**: Local folder for languages.
  - **`en.json`**: English translation of entire website.
  - **`de.json`**: German translation of entire website.

- **`/public`**: Public assets (e.g., images).
  - **`images`**: Profile pictures, project screenshots.
  - **`docs`**: Documents that can be downloaded from website.

- **`next.config.ts`**: Next.js configuration.
- **`netlify.toml`**: Netlify deployment settings.
- **`.eslintrc.json`**: ESLint configuration for linting.
```

## Deployment

### Hosting
- Hosted on **Netlify** with continuous deployment enabled via GitHub.

### Domain
- Custom domain from Hostpoint.
- Configured DNS with A and CNAME records pointing to Netlify.

### HTTPS
- Automatic SSL certificate via Netlify for secure connections.

### Continuous Deployment
1. Push changes to the GitHub repository.
2. Netlify automatically builds and deploys the latest version of the site.

## Code Details

### Header
- File: `/components/Header.jsx`
- Description: Implements a responsive navigation bar with language toggle and active link highlighting.

### Contact Form
- File: `/pages/contact.js`
- Description: Captures user messages and sends them via SendGrid. Configurable through `.env.local`.

### Multi-Language Support
- Files: `/locales/en.json`, `/locales/de.json`
- Description: Uses i18next for translations, dynamically loading text based on selected language.

### Animations
- File: `/pages/index.js`
- Description: Animated introduction text using Framer Motion.
>>>>>>> b4e9a17f0ea6f2b65a93f5a3d75ac65adc6caf91
