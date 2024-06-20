import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormsPage = ({ selectedOption }) => {
    const [extraInfoFields, setExtraInfoFields] = useState([]);

  const addExtraInfoField = () => {
    setExtraInfoFields([...extraInfoFields, '']);
  };

  const handleExtraInfoChange = (index, value) => {
    const newFields = [...extraInfoFields];
    newFields[index] = value;
    setExtraInfoFields(newFields);
  };

  return (
    <div className="flex-1 ml-72 p-12">
      {selectedOption === 'CreateTest' && (
        <div className="flex justify-center items-center h-screen mt-28">
          <div className="w-full max-w-4xl">
            <div className="p-6 bg-purple-700 rounded-lg text-white">
              <h1 className="text-white text-2xl mb-4">Company Details</h1>
              <textarea
                className="w-full h-32 p-2 mb-4 rounded-md bg-white text-gray-800"
                placeholder="Enter company details..."
              ></textarea>

              <h2 className="text-white text-xl mb-4">Job Mission & Details</h2>
              <textarea
                className="w-full h-32 p-2 mb-4 rounded-md bg-white text-gray-800"
                placeholder="Enter job mission & details..."
              ></textarea>

              <h2 className="text-white text-xl mb-4">Skill Set</h2>
              <div className="mb-4">
                <textarea
                  className="w-full h-32 p-2 mb-4 rounded-md bg-white text-gray-800"
                  placeholder="Enter hard skills..."
                ></textarea>
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full h-32 p-2 mb-4 rounded-md bg-white text-gray-800"
                  placeholder="Enter soft skills..."
                ></textarea>
              </div>

              <hr className="border-white mb-4" />

              <button
                className="text-white px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-800"
                onClick={addExtraInfoField}
              >
                Add Other Information +
              </button>

              {extraInfoFields.map((field, index) => (
                <div
                  key={index}
                  className="p-6 bg-purple-700 rounded-lg text-white mb-4"
                >
                  <textarea
                    className="w-full p-2 rounded-md bg-white text-gray-800"
                    placeholder="Enter other info..."
                    value={field}
                    onChange={(e) =>
                      handleExtraInfoChange(index, e.target.value)
                    }
                  ></textarea>
                </div>
              ))}
            </div>

            <Link 
              to="/publish"
              className="text-white border border-white px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-800 float-right"
            >
              Confirm
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormsPage;
