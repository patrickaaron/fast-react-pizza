## App Requirements

- Users can order one or more pizzas from a menu.
- No user accounts or login required; users just input their names before using the app.
- The pizza menu can change, so it should be loaded from an API.
- Users can add multiple pizzas to a cart before ordering.
- Ordering requires the user’s name, phone number, and address.
- GPS location should be provided, if possible, to facilitate delivery.
- Users can mark their order as “priority” for an additional 20% of the cart price.
- Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
- Payments are made on delivery, so no payment processing is necessary in the app.
- Each order will get a unique ID that should be displayed, allowing users to look up their order based on the ID.
- Users should be able to mark their order as “priority” even after it has been placed.

## Key Technologies

- React Router (v6.4)

  - **Routing**: Handles navigation between different pages of the application, such as the menu, cart, and order confirmation.
  - **Data Loading**: Utilizes the latest features for loading data asynchronously, ensuring the menu and other dynamic content are fetched from the API efficiently.`

- Tailwind CSS

  - **Styling**: Provides utility-first CSS classes to style the application, ensuring a consistent and responsive design with minimal custom CSS.

- Redux
  - **UI State Management**: Manages the application's UI state, such as the user's cart, selected pizzas, and order status, ensuring a predictable and maintainable state management solution.
