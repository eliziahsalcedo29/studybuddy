import Default from "../templates/Default";


export default function Login() {
  return (
    <Default>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-200">
            
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Login
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to continue your studies.
          </p>
        </div>
          
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email-address" className="sr-only">Your email</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-emerald-600 focus:border-emerald-600 focus:z-10 text-base"
                placeholder="Your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">Your password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-emerald-600 focus:border-emerald-600 focus:z-10 text-base"
                placeholder="Your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 transition duration-150 ease-in-out shadow-md"
            >
              Log in
            </button>
          </div>
        </form>

        <div className="text-center space-y-4 pt-4">
          {/* Don't have an account link */}
          <p className="text-sm text-gray-600">
            Don't have an account? 
            <a href="#" className="font-medium text-emerald-700 hover:text-emerald-800 hover:underline transition duration-150 ease-in-out">
              Click here
            </a>
          </p>

          {/* Back to Home link */}
          <p className="text-sm">
            <a href="#" className="font-medium text-gray-500 hover:text-gray-700 hover:underline transition duration-150 ease-in-out">
              Back to Home
            </a>
          </p>
        </div>
      </div>
    </div>
    </Default>
  );
}