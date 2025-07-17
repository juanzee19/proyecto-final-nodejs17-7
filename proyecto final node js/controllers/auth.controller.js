import { loginUser } from '../services/auth.service.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await loginUser(username, password);
    if (!token) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
