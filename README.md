# Code Boost

## Overview

CodeBoost brings you a variety of interesting coding challenges. Our user-friendly platform fosters a supportive community where developers at any level can improve their programming skills and grow continuously.

This README provides instructions for setting up and running the Code Boost platform on your local machine.
## Deployed link 
- https://coding-platform-eight.vercel.app/

## Setup Instructions

To run the entire code on your device, follow the steps below:

### 1. Clone the Repository

Clone our repository to your local device using the following command:

```bash
git clone [link of repo]
```

### 2. Open Code Editor

Open your preferred code editor and navigate to the cloned repository.

### 3. Backend Setup

First, set up the backend:

1. Navigate to the `BACKEND` directory using the command:

```bash
cd BACKEND
```

2. Create a `.env` file inside the `BACKEND` folder and add the following lines:

```bash
MONGO_URI="mongodb+srv://<Username>:<Password>@cluster0.6caipl2.mongodb.net/"
ACCESS_TOKEN_SECRET=sometokenkey
REFRESH_TOKEN_SECRET=sometokenkeynew
```

Make sure to replace `<Password>` with your actual MongoDB password.

3. Obtain the MongoDB URI by accessing MongoDB Atlas. Sign up or login, create a cluster, and follow the provided steps. Note that if you revisit this project after some time, you may need to restart your cluster and update your current IP.

4. Install dependencies by running:

```bash
pnpm install
```

5. Start the backend server:

```bash
npm run start
```

### 4. Frontend Setup

Next, set up the frontend:

1. Open a new terminal window.

2. Navigate to the `FRONTEND` folder:

```bash
cd FRONTEND
```

3. Install frontend dependencies:

```bash
npm install
```

4. Once the installation is complete, run:

```bash
npm run dev
```

### 5. Access the Platform

Open your browser and go to:

```
http://localhost:5173/
```

You should now be able to see the platform in action.

Congratulations! You have successfully completed the setup.

## Features

- Community Support 
- Code editing in differnt languages 
- Personal Coding Question Bank 
- User authentication

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- RESTful APIs

## Contributors

- Aniker Suthar
- Darshan Laljani

## Website previews
1. Home page
   ![image](https://github.com/Aniket-Suthar/coding-platform/assets/117531809/bb233319-58a9-4aaa-a9fc-a1b824671b1a)

2. Code Editor
   ![image](https://github.com/Aniket-Suthar/coding-platform/assets/117531809/ebdd31df-1bd1-4ece-99a3-5a76fe5a4210)

3. Question Bank
   ![image](https://github.com/Aniket-Suthar/coding-platform/assets/117531809/b07e6028-263a-4d38-a81c-0ecab44e6342)

4. Signup page
   ![image](https://github.com/Aniket-Suthar/coding-platform/assets/117531809/36d47a14-98cd-41a7-8051-8fc1234612ef)
   




---

Feel free to reach out to us. for any questions or feedback.
