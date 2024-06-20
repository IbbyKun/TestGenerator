import React from 'react';
import { Link } from 'react-router-dom';

const FormWithFloatingLabels = ({ selectedOption }) => {
  const toggleError = () => {
    const errMessages = document.querySelectorAll(
      '.text-sm.text-red-600.hidden'
    );
    errMessages.forEach((el) => {
      el.classList.toggle('hidden');
    });

    const allBorders = document.querySelectorAll('.border-gray-200');
    const allTexts = document.querySelectorAll('.text-gray-500');
    allBorders.forEach((el) => {
      el.classList.toggle('border-red-600');
    });
    allTexts.forEach((el) => {
      el.classList.toggle('text-red-600');
    });
  };

  return (
    <div className="flex-1 ml-72 p-12">
      {selectedOption === 'Profile' && (
        <div className="min-h-screen bg-white p-0 sm:p-12">
          <div className="mx-auto max-w-md px-6 py-12 bg-white shadow-lg sm:rounded-3xl border border-purple-700">
            <h1 className="text-2xl font-bold mb-8 text-center">
              Profile Settings
              <div className="shrink-0 mt-1 ml-32 bg-purple-700 border-purple-700 border-solid border-[3px] h-[3px] w-[140px]" />
            </h1>
            <form id="form" noValidate>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="username"
                  placeholder="Change username"
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">
                  Username is required
                </span>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Change email"
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">
                  Email is required
                </span>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Old Password"
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">
                  Old Password is required
                </span>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">
                  New Password is required
                </span>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">
                  Confirm Password is required
                </span>
              </div>
              {/* New Fields */}
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="companyActivity"
                  placeholder="Change Chat Prompt"
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">
                  Chat Prompt is required
                </span>
              </div>

              
              {/* End of New Fields */}

              <button
                id="button"
                type="button"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-purple-700 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                onClick={toggleError}
              >
                Save
              </button>

              <div className="flex justify-center mt-4">
                <a className="text-sm">Do you want to Logout? </a>
                <Link to="/" className="text-sm text-purple-700 font-semibold">
                  Logout
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormWithFloatingLabels;
