# Deliverables

> Link: [Figma Link](https://www.figma.com/file/K98NcHSfoHbwDaUukp9Kvx/Test?type=design&node-id=0-1&mode=design&t=W7v9qXd9y0V2BdU1-0)

## Objective

- Develop a fully functional web application based on the Figma design using React.js or Next.js.
- Ensure the application is dynamic and responsive across various screen sizes.

## Technical Requirements

- State Management:
  - Use React's useState or useReducer hooks, or Next.js features (if applicable) to manage application state.
- API Integration:
  - Simulate data fetching from an API (mock or service like JSONPlaceholder) for data display, as needed.
- Documentation:
  - Briefly document the component structure, assumptions made, and instructions on running the project locally.

## Questions

### Question 1: Understanding the Figma Design

- Layout:
  - Understand the UI structure, including component layout and grid/flexbox usage.
  - Plan your React/Next.js component organization and CSS structure based on this analysis.

- Components:
  - Identify reusable design elements like buttons, inputs, and containers.
  - Abstract these elements into individual React components for maintainability.

- Typography:
  - Extract font families, sizes, and weights from the design.
  - Apply these styles in your implementation to match the design.

- Color Scheme:
  - Extract the color palette used in the design.
  - Use CSS variables or styled-components for efficient color management.

- Spacing:
  - Observe and implement margins and paddings correctly to match the design.
  - Use a consistent spacing scale for uniformity.

- Interactions:
  - Identify and implement interactive elements like buttons and forms.
  - Handle events like clicks and hovers, considering user experience and feedback mechanisms.

- Auto layout:
  - Examine the design's responsiveness on various desktop screen sizes.
  - Implement the optimized layout for different screen sizes using CSS media queries or a responsive design framework.

### Question 2: React Form with Validation

- Component: SignUpForm
- Functionality: Accepts user's email, name, country, age, and password.
- Validation:
  - Email must be in a valid format.
  - Password must be at least 8 characters long.
- Error handling: Display appropriate error messages for each field.
- Submit button: Disabled until the form is valid.
- Implementation: Functional components and React hooks.

### Question 3: REST API with Node.js and Express

- API endpoint: CRUD operations for user profiles.
- Data model:
  - Name
  - Email
  - Age
  - Country
  - Password (stored securely, not returned in responses)
- Routes:
  - GET /users: Retrieve all users.
  - POST /users: Create a new user.
  - PUT /users/:id: Update an existing user.
  - DELETE /users/:id: Delete a user.

### Question 4: Express Middleware Creation

- Middleware function: Logs request details.
- Log format: "[Timestamp] Method: URL, AccessToken:" (e.g., "[2023-04-01T12:00:00.000Z] GET: /api/users, AccessToken:"eydfdflkoejkndkf").
- Logging mechanism: console.log
- Application: Apply the middleware globally to all routes.

### Question 5: MongoDB Data Aggregation

- Query: Aggregate user data from the "users" collection.
- Calculations:
  - Total number of users
  - Average age
  - Number of users in each country
- Implementation: MongoDB aggregation framework
