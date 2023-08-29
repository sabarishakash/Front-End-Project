import React, { useState } from 'react';
import LoginPage from './login1';

import { App14 } from './sidebar2';

const App13 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <App14 onLogout={handleLogout}/>
      ) : (
        <LoginPage onLogin={handleLogin}/>
      )}
    </div>
  );
};

export {App13};
