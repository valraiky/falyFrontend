import axios from "axios";
import { Login } from "../typescript/Login";

export const Loginfetch = async (dataFrom : Login) => {
  const response = await axios.post('http://localhost:3000/api/auth/login',
    dataFrom,
    {
      withCredentials: true
    });
  return response.data;
};

export const handleLogout = async () => {
  await fetch('http://localhost:3000/api/users/logout', {
    method: 'POST',
    credentials: 'include',
  });
  window.location.reload(); // ou utilise useNavigate
};