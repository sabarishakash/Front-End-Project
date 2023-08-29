import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import StudentPage from './count';

function App16() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/student">Student Page</Link>
            </li>
          </ul>
        </nav>

<Routes>
    
          <Route path="/student" element={<StudentPage/>}/>
           
          </Routes>
          {/* Define other routes */}
        
      </div>
    </Router>
  );
}

export  {App16};
