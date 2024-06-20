// TablePage.js
import React, { useState } from 'react';
import ScoreDonut from './scoreDonut';

const TablePage = ({ selectedOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const data = [
    { name: 'John Doe', score: 85, rank: 1 },
    { name: 'Jane Doe', score: 92, rank: 2 },
    { name: 'Alice Smith', score: 78, rank: 3 },
    { name: 'Bob Johnson', score: 95, rank: 4 },
    { name: 'Eve Williams', score: 88, rank: 5 },
  ];

  return (
    <div className="flex-1 ml-72 p-0">
      {selectedOption === 'Details' && (
        <div className="flex flex-col items-center justify-center p-6 h-screen">
          <div className="w-full max-w-lg">
            <form className="mt-5 sm:flex sm:items-center">
              <input
                id="q"
                name="q"
                className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search Here"
                type="search"
                autoFocus=""
                value=""
              />
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-purple-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Search
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center p-4 space-x-4">
            <button
              id="dropdownDefault"
              onClick={toggleDropdown}
              className="text-purple-700 ring-primary-300 bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button"
            >
              Range
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Additional filters */}
            <button
              id="dropdownDefault"
              onClick={toggleDropdown2}
              className="text-purple-700 ring-primary-300 bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button"
            >
              Rank by
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
              >
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Range
                </h6>
                <ul
                  className="space-y-2 text-sm"
                  aria-labelledby="dropdownDefault"
                >
                  <li className="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="apple"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      1-10
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="microsoft"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="microsoft"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      1-20
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="google"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="google"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      All
                    </label>
                  </li>
                </ul>
              </div>
            )}

            {/* Dropdown2 menu */}
            {isDropdownOpen2 && (
              <div
                id="dropdown"
                className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
              >
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Rank by
                </h6>
                <ul
                  className="space-y-2 text-sm"
                  aria-labelledby="dropdownDefault"
                >
                  <li className="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="apple"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Hard Skills
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="microsoft"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="microsoft"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Soft Skills
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="google"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="google"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Methodology
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Table */}
          <div className="flex items-center justify-center mt-8">
            <table
              className="bg-purple-700 text-white rounded-lg"
              style={{ width: '750px' }}
            >
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">
                        <ScoreDonut score={item.score} />
                      </td>
                      <td className="px-6 py-4 pl-10">{item.rank}</td>
                    </tr>
                    {index !== data.length - 1 && (
                      <tr>
                        <td
                          className="border-t border-gray-200"
                          colSpan="3"
                        ></td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePage;
