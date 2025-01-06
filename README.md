# Inventory Management System

This is an simple inventory management system built using Next.js for the mangement of mulitple storage addreses and locations from one portal.
If you dont want to sign in through google or give over you email you can use a temporary email service such as ([https://temp-mail.org/](https://temp-mail.org/)).

## Features

- **Product Management:** Add, edit, delete, and view product details.
- **User Authentication:** Secure access with user login and registration.
- **File Uploads:** Upload product images or other relevant files .

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- package manager such as bun, npm, etc.
- PostgreSQL database (you'll need to set up a database instance on Neon or elsewhere)
- A Clerk account ([https://clerk.com/](https://clerk.com/))
- An UploadThing account ([https://uploadthing.com/](https://uploadthing.com/))

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   cd <your-repository-name>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add the following, replacing the placeholder values with your actual secrets:

   ```
   DATABASE_URL=''
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=''
   CLERK_SECRET_KEY=''
   UPLOADTHING_SECRET=''
   UPLOADTHING_APP_ID=''
   ```

   **Important:**

   - **`DATABASE_URL`:** This is your PostgreSQL database connection string. Make sure your database is set up and accessible.
   - **`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`:** Your Clerk publishable key (frontend).
   - **`CLERK_SECRET_KEY`:** Your Clerk secret key (backend).
   - **`WEBHOOK_SECRET`:** Webhook used to sync clerks internal database with applications on user sign up.
   - **`UPLOADTHING_SECRET`:** Your UploadThing secret key (backend).
   - **`UPLOADTHING_APP_ID`:** Your UploadThing App ID.

4. **Database setup:**

- when you have created you database and want to generate tables run
  ```bash
  npx prisma db push
  ```

5. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This will start the Next.js development server, usually on `http://localhost:3000`.

### Usage

- Visit `http://localhost:3000` in your browser to access the application.
- You'll likely be prompted to sign up or log in (using Clerk).
- Once logged in, you can start managing your inventory.
