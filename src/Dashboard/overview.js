import React from 'react';
import { Link } from 'react-router-dom';

import OpenJobs from './openJobsCharts';

const Dashboard = ({ selectedOption }) => {
  const totalJobs = 15; // Example total number of jobs
  const openJobs = 7;
  const closedJobs = 3;

  return (
    <div className="flex-1 ml-72 p-12">
      {selectedOption === 'Overview' && (
        <div className="flex flex-col h-screen bg-white p-4">
          <div className="flex justify-between mb-4">
            <div className="w-1/2 p-4 bg-white rounded-lg border-2 border-purple-700">
              <h3 className="text-lg font-bold text-purple-700">Open Jobs</h3>
              <p className="text-3xl font-bold text-gray-700">
                <OpenJobs data={openJobs} total={totalJobs} />
              </p>
            </div>
            <div className="w-1/2 p-4 bg-white rounded-lg border-2 border-purple-700 ml-4">
              <h3 className="text-lg font-bold text-purple-700">
                Recent Activity
              </h3>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm font-bold">Job Title</p>
                <p className="text-sm font-bold">Status</p>
                <p className="text-sm font-bold">Applied Candidates</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 p-4 bg-white rounded-lg border-2 border-purple-700">
              <h3 className="text-lg font-bold text-purple-700">Closed Jobs</h3>
              <p className="text-3xl font-bold text-gray-700">
                <OpenJobs data={closedJobs} total={totalJobs} />
              </p>
            </div>
            <div className="w-1/2 p-4 bg-white rounded-lg border-2 border-purple-700 ml-4">
              <h3 className="text-lg font-bold text-purple-700">
                Total Jobs Created
              </h3>
              <p className="text-3xl font-bold text-gray-700">15</p>
            </div>
          </div>
          <div className="flex-1 bg-white p-4 border-2 border-purple-700 overflow-y-auto">
            <h3 className="text-lg font-bold text-purple-700 mb-4">Job List</h3>
            <div className="border border-gray-300 rounded-lg p-2">
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm font-bold">Job Title</p>
                <p className="text-sm font-bold">Status</p>
                <p className="text-sm font-bold">Applied Candidates</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <Link to="/view" className="text-sm">
                  Job 1
                </Link>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 p-2">
                <p className="text-sm">Job 1</p>
                <p className="text-sm pr-8">Open</p>
                <p className="text-sm pr-16">5</p>
              </div>
              {/* Add more job list items as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
