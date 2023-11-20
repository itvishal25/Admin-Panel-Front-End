// Login.js
import React, { useState } from 'react';

import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';

const Login = ({ onRegisterClick, onForgotPasswordClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Link onClick={onRegisterClick} variant="body2">
            Don't have an account? Register here
          </Link>
          <Link onClick={onForgotPasswordClick} variant="body2">
            Forgot password? Recover here
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
