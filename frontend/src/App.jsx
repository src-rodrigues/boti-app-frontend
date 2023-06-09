import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header />
      <Section />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
