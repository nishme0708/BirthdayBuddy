import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);
  const handleClear = ()=>{
    setPeople([]);
  };
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people}></List>
        <button className="btn btn-block" onClick={handleClear}>Clear All</button>
      </section>
    </main>
  );
};
export default App;
