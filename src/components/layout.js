import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">StratScale</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>
      <main className="min-h-screen bg-white text-gray-800">{children}</main>
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} StratScale. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
