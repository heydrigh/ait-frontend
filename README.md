# Frontend for AIT Management System

## Description

This project serves as the frontend for the AIT (Auto de Infração de Trânsito) Management System. It is built with **Next.js**, styled with **Tailwind CSS**, and uses **React Query** for data fetching and caching.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (>= 16.x)
- Yarn (Package Manager)
- Docker and Docker Compose (to run the backend services)

## Getting Started

1. Clone the repository:

```bash
   git clone <https://github.com/heydrigh/ait-frontend>
   cd <frontend-folder>
```

2. Install dependencies:

```bash
    yarn install
```

3. Start the development server:

```bash
   yarn dev
```

   The frontend will run at `http://localhost:3000`.

4. Ensure the backend is running simultaneously for full functionality. Follow the instructions in the backend repository to set it up and run it.

## Testing

Run the test suite using the following command:

```bash
yarn test
```

This will execute all unit and integration tests.

## Documentation

To view the component documentation and design system, run:

```bash
yarn storybook
```

Once started, the Storybook UI will be available at `http://localhost:6006`.

## Environment Variables

Create a `.env.local` file in the project root with the necessary environment variables:

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:3333/api
```

Adjust the `NEXT_PUBLIC_API_URL` value to point to the backend API.

## Deployment

To build the project for production, run:

```bash
yarn build
```

Then start the production server with:

```bash
yarn start
```

The application will now be running in production mode.

## Additional Notes

- Ensure the backend RabbitMQ and PostgreSQL services are running via Docker Compose for complete functionality.
- For endpoint details, refer to the backend Swagger documentation.

## Feedback

If you encounter any issues or have suggestions for improvement, feel free to raise them in the repository's issue tracker.
