import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'tu_secret_key_aqui';


const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: 'user123' },
];

export const loginUser = async (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;

  
  const payload = { username: user.username };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  return token;
};
