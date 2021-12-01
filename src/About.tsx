import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div>
        <p>
          This repo is created for testing purposes. Feel free to fix any issues you see and add any functionality you want. 
        </p>
        <Link to="user">User page</Link>
      </div>
    </div>
  )
} 