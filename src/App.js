import React from 'react'
import ThemeContextProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Containers from './containers'

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Containers/>
    </ThemeContextProvider>
  );
}

export default App;
