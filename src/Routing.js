import React, { useState } from 'react';


import Profile from './Dashboard/profile';
import Sidebar from './Dashboard/sidebar';
import MyTest from './Dashboard/myTests';
import Details from './Dashboard/details';
import CreateTest from './Dashboard/createTest';

import Overview from './Dashboard/overview';
import Chat from './Dashboard/kayaChat';

function Routing() {
  const [selectedOption, setSelectedOption] = useState('Overview');
  const [jobTitle, setJobTitle] = useState('');

  const handleOptionChange = (option) => {
    if (option.startsWith('Job Title')) {
      setSelectedOption('Details');
      setJobTitle(option);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />

      {selectedOption === 'Overview' && (
        <Overview selectedOption={selectedOption} />
      )}
      {selectedOption === 'Profile' && (
        <Profile selectedOption={selectedOption} />
      )}
      {selectedOption === 'MyTests' && (
        <MyTest
          selectedOption={selectedOption}
          onJobTitleClick={handleOptionChange}
        />
      )}
      {selectedOption === 'CreateTest' && (
        <CreateTest selectedOption={selectedOption} />
      )}
      {selectedOption === 'Details' && (
        <Details selectedOption={selectedOption} jobTitle={jobTitle} />
      )}
      {selectedOption === 'Chat' && <Chat selectedOption={selectedOption} />}
    </div>
  );
}

export default Routing;
