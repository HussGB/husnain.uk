import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const { data: session } = useSession();

  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = React.useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle user menu dropdown
  const handleUserMenu = () => {
    toggleDropdown();
    console.log('GitHub user menu clicked');
  };

  return (
    <nav className="fixed w-full bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <div className="text-white text-lg font-bold"><small>HUSNAIN.UK</small></div>
        </div>
        <div className="flex items-center space-x-4 relative">
          {session ? (
            <>
              <div className="relative group">
                <button
                  onClick={handleUserMenu}
                  className="text-white flex items-center space-x-2 cursor-pointer group-hover:text-gray-300"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                  <span>|</span>
                  <span>{session.user.name}</span>
                </button>
                {/* User menu dropdown */}
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-gray-800 text-white rounded shadow w-48">
                    <button className="block px-4 py-2 text-sm hover:bg-gray-700" onClick={() => console.log('Options clicked')}>
                      Options
                    </button>
                    <div className="border-t border-gray-600"></div>
                    <button className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-700" onClick={() => signOut()}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={() => signIn('github')}
              className="bg-gray-400 bg-opacity-80 text-black-800 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-full transition-all duration-300"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
