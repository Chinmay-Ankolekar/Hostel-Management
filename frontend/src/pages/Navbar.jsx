import { useState } from "react";

function Navbar() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("jwtToken"));

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("jwtToken");
  };

    return( 
        <>
         <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 text-lg font-semibold">
          SJCE Boys Hostel
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          >
            Account
          </a>
          <a
            href="/login"
            className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            onClick={logout}
          >
            Logout
          </a>
        </div>
      </div>
    </nav>

        </>
    )
}

export default Navbar;