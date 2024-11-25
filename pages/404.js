/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file defines a custom 404 error page for the Next.js application.
 * It displays a user-friendly message and provides a link to navigate back to the home page.
 */

import Link from 'next/link'; // Import Next.js Link for navigation

const Custom404 = () => {
  /*
   * Custom404 Component:
   * Renders a 404 error message when a user navigates to a page that does not exist.
   * Includes a button to redirect users back to the home page.
   */
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center text-center text-white">
      {/* Wrapper div for centering the content */}
      <div>
        {/* Heading for the 404 message */}
        <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
        
        {/* Informational message */}
        <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
        
        {/* Navigation link to redirect to the home page */}
        <Link href="/" className="px-8 py-4 bg-blue-500 rounded-lg text-lg font-bold hover:bg-blue-400 transition duration-300">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
