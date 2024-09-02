# **Minimum Viable Product (MVP) for "I'm Working On It" App**

The goal of the MVP is to create a functional, stripped-down version of the "I'm Working On It" app that delivers core features with minimal complexity. Here's what the MVP could look like:

---

## **Core Features**
1. **Hobby Management**:
   - **Add a Hobby**: Users can add a new hobby by providing a name and description.
   - **View Hobby List**: Users can see a list of all their hobbies.
   - **View Hobby Details**: Users can click on a hobby to see more details, such as progress and reminders.

2. **Progress Tracking**:
   - **Track Progress**: Users can update their progress on a hobby. This could be as simple as a percentage or a status update.

3. **Reminder System**:
   - **Set Reminders**: Users can set a reminder for each hobby to prompt them to make progress.
   - **View Reminders**: Users can see when their next reminder is scheduled.

4. **Basic UI/UX**:
   - **Simple Navigation**: Users can easily navigate between the main screens: Hobby List, Add Hobby, and Hobby Details.
   - **Responsive Design**: The app should work well on both desktop and mobile devices.

5. **Backend & Database**:
   - **Data Persistence**: All user data (hobbies, progress, reminders) is stored in an SQLite database.
   - **Basic API**: A RESTful API built with Express to handle CRUD operations (Create, Read, Update, Delete) for hobbies and reminders.

---

### **Technology Stack**
- **Frontend**:
  - **React**: For building the user interface.
  - **Axios**: For making API requests to the backend.

- **Backend**:
  - **Node.js with Express**: For creating the server and API endpoints.
  - **Knex.js**: For database queries and migrations.
  - **SQLite**: As the database to store hobbies, progress, and reminders.

---

### **Feature Breakdown**

1. **Add a Hobby**
   - **Frontend**: 
     - A form with fields for the hobby name and description.
     - A submit button that sends the data to the backend.
   - **Backend**: 
     - API route to handle the creation of a new hobby.
     - Database table for storing hobbies.

2. **View Hobby List**
   - **Frontend**:
     - A list or grid of hobby cards displaying the name of each hobby.
     - Clicking on a card navigates to the Hobby Details page.
   - **Backend**:
     - API route to fetch all hobbies from the database.

3. **View Hobby Details**
   - **Frontend**:
     - Display hobby name, description, and progress.
     - Option to add a progress update.
   - **Backend**:
     - API route to fetch details of a specific hobby.
     - API route to update hobby progress.

4. **Set Reminders**
   - **Frontend**:
     - Form or input field to set a reminder date/time for a hobby.
   - **Backend**:
     - API route to create and store reminders in the database.
     - Scheduled tasks (using a library like `node-cron`) to check for reminders and send notifications (e.g., console logs or future emails).

---

### **User Flow**
1. **Home Page**:
   - Shows a list of hobbies the user is tracking.
   - Option to add a new hobby.

2. **Add Hobby Page**:
   - Form to input hobby details.
   - Save the hobby and return to the Home Page.

3. **Hobby Details Page**:
   - View details of a selected hobby.
   - Update progress and set reminders.

---

### **MVP Development Plan**
1. **Week 1**: 
   - Set up the project environment.
   - Implement the backend with Express, Knex, and SQLite.
   - Create the API routes for hobby management.

2. **Week 2**:
   - Build the frontend with React.
   - Implement the Hobby List and Add Hobby features.
   - Connect the frontend to the backend API.

3. **Week 3**:
   - Implement the Hobby Details page.
   - Add the progress tracking feature.
   - Set up basic reminder functionality.

4. **Week 4**:
   - Perform testing and debugging.
   - Refine UI/UX.
   - Prepare for deployment (e.g., deploy backend on a service like Heroku, frontend on Netlify).

---

### **Next Steps After MVP**
- **Enhance the reminder system**: Integrate notifications (e.g., email or push notifications).
- **Add image uploads**: Allow users to attach pictures to their hobbies.
- **User Authentication**: Implement user accounts so that data is stored per user.
- **UI/UX Improvements**: Design enhancements based on user feedback.

This MVP focuses on getting the app up and running with the essential features so that you can begin collecting user feedback and iterating on the project.