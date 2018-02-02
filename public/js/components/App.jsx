import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ReadingPane from './ReadingPane';
import SelectDate from './SelectDate';
import SelectPlan from './SelectPlan';
import SelectVersion from './SelectVersion';

const App = () => (
  <div>
    <Header />
    <SelectDate />
    <SelectPlan />
    <SelectVersion />
    <ReadingPane />
    <Footer />
  </div>
);

export default App;