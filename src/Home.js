import React from 'react';
import MonthPicker from './components/MonthPicker/MonthPicker';
import MonthButton from './components/MonthPicker/MonthButton';


const Home = () => (
  <div style={{ margin: '30px' }}>
    <div>
      <MonthPicker button={<MonthButton />} locale="en" />
    </div>
  </div>
);

export default Home;
