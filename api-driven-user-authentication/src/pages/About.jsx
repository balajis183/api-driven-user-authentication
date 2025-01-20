import React from "react";
import "../Styles/About.css"; // Importing external CSS for styling

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Our Application 'AccessHub'</h1>

      <p className="about-paragraph">
        Welcome to our "AccessHub" user authentication and product viewing platform! Our
        application is designed to provide a seamless experience for both
        customers and staff, enabling users to authenticate themselves and gain
        access to available products. Whether you're browsing through a catalog
        or managing accounts, everything is done with ease and efficiency.
      </p>

      <h2 className="about-subheading">What Does Our Application Do?</h2>
      <p className="about-paragraph">
        At its core, our application allows users to authenticate by entering
        their unique ID and email address. After successful authentication,
        users are granted access to a catalog of products, where they can view
        detailed information, such as prices, descriptions, and images of the
        items. This process ensures that each user sees only relevant data,
        keeping the platform secure and personalized.
      </p>
      <p className="about-paragraph">
        After successful authentication, users can also interact with the
        catalog by viewing, filtering, and sorting products based on their
        preferences. This gives customers an efficient way to browse through
        available items while maintaining a tailored experience.
      </p>

      <h2 className="about-subheading">Key Features</h2>
      <ul className="about-list">
        <li>
          <strong>User Authentication:</strong> Secure login system to
          authenticate users via their ID and email. It ensures that only
          authorized users can access the system, keeping data safe and secure.
        </li>
        <li>
          <strong>Product Catalog:</strong> After authentication, users can view
          a list of products with images, titles, descriptions, and prices.
          Products are displayed dynamically and can be filtered or searched for
          convenience.
        </li>
        <li>
          <strong>Toast Notifications:</strong> Real-time feedback messages
          (success and error) to guide users during interactions, making the
          application more interactive and user-friendly.
        </li>
        <li>
          <strong>Data Fetching from APIs:</strong> User and product information
          is fetched dynamically using APIs, ensuring up-to-date content. This
          means users always see the latest products and changes in real time.
        </li>
      </ul>

      <h2 className="about-subheading">Technologies We Use</h2>
      <ul className="about-list">
        <li>
          <strong>React.js:</strong> A powerful JavaScript library for building
          user interfaces, especially for single-page applications. React allows
          for fast rendering and efficient updates when data changes.
        </li>
        <li>
          <strong>Axios:</strong> A promise-based HTTP client for making
          requests to external APIs to fetch user and product data. Axios is
          easy to use and ensures smooth communication with external services.
        </li>
        <li>
          <strong>React Toastify:</strong> A library for displaying
          user-friendly notifications (success, error, and info messages). It
          enhances user experience by providing instant feedback after
          interactions.
        </li>
        <li>
          <strong>React Router:</strong> Used for handling navigation between
          different pages like login, user details, and products. React Router
          ensures smooth transitions and enables a single-page application
          experience.
        </li>
        <li>
          <strong>Inline CSS Styling:</strong> Basic but effective styling to
          ensure that the layout is simple and functional across various
          devices. Inline styles provide an easy and scalable way to manage
          component-specific styling.
        </li>
      </ul>

      <h2 className="about-subheading">How It Works</h2>
      <p className="about-paragraph">
        The user begins by accessing the login page, where they enter their ID
        and email. Once the system validates these credentials, the user is
        authenticated, and they are granted access to the product catalog. Each
        product is displayed with relevant details, including the price and
        description.
      </p>
      <p className="about-paragraph">
        If any errors occur during authentication (e.g., incorrect credentials),
        the user is notified immediately via a toast message, guiding them to
        try again. The authentication process is quick and straightforward,
        ensuring users can access the catalog with minimal effort.
      </p>
    </div>
  );
}

export default About;
