import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={
            <ProtectedLayout>
              <h2>Hello .... you entered the system!!</h2>
            </ProtectedLayout>
          }>
          </Route>
          <Route path="/" element={ <Login />}>
           
          </Route>
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
