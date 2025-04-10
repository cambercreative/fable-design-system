import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/default';

// Pages
import Home from './pages/Home';
import Components from './pages/Components';
import Guidelines from './pages/Guidelines';
import Resources from './pages/Resources';

// Layout
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/fable-design-system">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;