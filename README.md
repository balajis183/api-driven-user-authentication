# AccessHub

**AccessHub** is a React web application designed to allow users to authenticate, view their details, and browse a catalog of products. The app integrates with two APIs to fetch user data and product listings, allowing authenticated users to explore available products once logged in.

## Features

- **User Authentication**: Users provide their `ID` and `Email` to log in. Upon successful authentication, user details are displayed.
- **View User Details (Reference)**: Users can view a list of sample user data, which is just for reference and helps users understand what details they will need for login.
- **Product Catalog**: Authenticated users can browse a list of available products, view their details (image, description, price), and explore different product options.
- **Toast Notifications**: Inform users of successful actions, errors, or warnings through toast messages.

## How It Works

### 1. **View User Details (Reference)**

- Users can click on a link to the `UserDetails` page, where they can view some sample user information (like ID and email) as a reference.
- This page **does not allow login**—it simply shows users some sample details for their understanding.

### 2. **Login Page**

- The user provides their `ID` and `Email` on the login page.
- **MyEffect.js** authenticates the credentials by comparing the entered ID and email with the data fetched from the `jsonplaceholder` API.
- If authentication is successful, the user is redirected to the `UserDetails` page, where their personal information (ID, name, email, etc.) is displayed.
- If authentication fails, an error message prompts the user to re-enter the details.

### 3. **Authentication Process**

- Once the user enters valid details (ID and email), the app authenticates the credentials against the API.
- If the credentials match, authentication is successful, and the user's data is shown.
- If the credentials are incorrect, the user is prompted to try again with valid credentials.

### 4. **View User Details**

- After successful authentication, users are shown a table with their details (e.g., ID, name, email).
- Users are provided with a link to view the available products.

### 5. **Product Catalog**

- Once logged in, the user can navigate to the `Products` page where products are fetched from the `fakestoreapi`.
- Products are displayed in a grid format with images, titles, descriptions, and prices.
- **Loading & Error Handling**: While the products are being fetched, a loading message is shown. If the fetch fails, an error message is displayed.

### 6. **Routing & Navigation**

- **Navbar**: Contains navigation links to the homepage (`/`), login page (`/login`), user details (`/userdetails`), and products page (`/products`).
- **React Router** is used for client-side routing, making the navigation smooth and fast without page reloads.

## Technologies Used

- **React.js**: For building the user interface using functional components and hooks.
- **React Router**: For handling navigation and routing between different pages.
- **Axios**: To make HTTP requests to external APIs for user and product data.
- **React Toastify**: For displaying toast notifications for success, error, and warning messages.
- **CSS**: Basic styling for layout and design (customizable as per requirements).

---

## Installation

To get started with the **AccessHub** project, follow the steps below:

### 1. Clone the repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/balajis183/api-driven-user-authentication.git

```

### 2. Navigate to the project folder

Once cloned, go to the project directory:

```bash
cd api-driven-user-authentication

```

### 3. Install dependencies

The project uses npm to manage dependencies. To install all the required dependencies, run the following command:

```bash
npm install react@18 react-dom@18 axios react-router-dom react-toastify

```

This will install the following necessary packages:

1. **react** (^18.3.1)
2. **react-dom** (^18.3.1)
3. **axios** (^1.7.9)
4. **react-router-dom** (^7.1.3)
5. **react-toastify** (^11.0.3)

### Main Dependencies and Their Purpose

1. **react**: Core library for building the user interface with components and state management.
2. **react-dom**: Renders React components into the browser's DOM.
3. **axios**: Simplifies making HTTP requests to fetch or send data to APIs.
4. **react-router-dom**: Enables navigation and routing between pages in the application.
5. **react-toastify**: Displays non-intrusive toast notifications for success, error, or warning messages.

### 4. Start the development server

Once the dependencies are installed, you can start the development server to view the app in action. Run the following command:

```bash
npm start

```

## Acknowledgments

This project was made possible using the following resources:

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for user data API.
- [Fake Store API](https://fakestoreapi.com/) for product data API.

**User Data API**  
The application fetches user data (ID, name, email, etc.) from the [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users).  
This API provides sample user data for testing purposes.  

**Product Data API**  
The product catalog is populated using the [Fake Store Products API](https://fakestoreapi.com/products),  
which provides a list of sample products, including details like title, description, price, and images.


## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For major changes, open an issue to discuss your ideas first.

## Contact

If you have any questions or feedback, feel free to reach out:

- **GitHub**: [balajis183](https://github.com/balajis183)
- **Email**: sbalaji2000s@gmail.com

---

```bash
https://github.com/balajis183

```

Thank you for exploring **AccessHub**! 😊


