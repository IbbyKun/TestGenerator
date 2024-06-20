import React from 'react';

const MyTest = ({ selectedOption, onJobTitleClick }) => {
  const jobList = [
    'Job Title 1',
    'Job Title 2',
    'Job Title 3',
    'Job Title 4',
    'Job Title 5',
    'Job Title 6',
    'Job Title 7',
    'Job Title 8',
    'Job Title 9',
    'Job Title 10',
  ];

  return (
    <div className="flex-1 ml-72 p-12">
      {selectedOption === 'MyTests' && (
        <div className="flex justify-center items-center h-screen bg-white">
          <div
            className="bg-purple-700 p-6 rounded-lg"
            style={{ width: '750px' }}
          >
            <h2 className="text-white mt-4 text-lg text-bold mb-1">
              Job Title
            </h2>
            <div className="bottom-0 left-0 w-full h-1 bg-white"></div>
            {jobList.map((job, index) => (
              <div key={index} className="relative">
                {index !== 0 && (
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-white"></div>
                )}
                <h2
                  className="text-white mt-6 text-lg cursor-pointer"
                  onClick={() => onJobTitleClick(job)}
                >
                  {job}
                </h2>
                <button className="absolute top-2 right-1 w-7 h-7 bg-white text-black rounded-full flex items-center justify-center">
                  Copy
                </button>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default MyTest;
