import './App.css';
import  { createBrowserRouter,RouterProvider } from "react-router-dom";
import {Singup} from "./component/userLoginSignUp/signup";
import { LoginForm } from './component/userLoginSignUp/login';
import { HomePage } from './component/HomePage/home';
import { AuthProvider } from './component/globalVariables/AuthContext';
import {ProtectedRoute} from './component/HomePage/ProtectedRoute';



const router = createBrowserRouter([
  {path:"/",
    element:<Singup/>
  },
  {
    path:"/login",
    element:<LoginForm/>
  },
  {
    path:"/home",
    element:(
      <ProtectedRoute>
        <HomePage/>
      </ProtectedRoute>
    )
  }
])




function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
