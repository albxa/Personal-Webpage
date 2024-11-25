/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file defines a custom error page for the Next.js application. 
 * It handles both 404 (Page Not Found) and other unexpected errors, providing user-friendly messages.
 */

import Link from 'next/link'; // Import Next.js Link for navigation

function ErrorPage({ statusCode }) {
  /*
   * ErrorPage Component:
   * Renders different error messages based on the `statusCode`:
   * - 404: Displays a "Page Not Found" message with a link to return to the home page.
   * - Other errors: Displays a generic error message.
   * Props:
   * - statusCode: The HTTP status code of the error (e.g., 404, 500).
   */
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      {statusCode === 404 ? (
        <div>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link href="/">
            <a style={{ color: 'blue', textDecoration: 'underline' }}>Go back to Home</a>
          </Link>
        </div>
      ) : (
        <div>
          <h1>An unexpected error occurred</h1>
          <p>We are sorry for the inconvenience. Please try again later.</p>
        </div>
      )}
    </div>
  );
}

// Fetches the status code for the error
ErrorPage.getInitialProps = ({ res, err }) => {
  /*
   * getInitialProps:
   * Determines the appropriate `statusCode` to display:
   * - If a response (`res`) exists, use `res.statusCode`.
   * - If an error object (`err`) exists, use `err.statusCode`.
   * - Default to 404 if neither is available.
   */
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
