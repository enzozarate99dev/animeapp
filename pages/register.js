import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Fragment } from 'react'
import { Typography } from '@mui/material'
import { padding } from '@mui/system'
import useAuth from '../hooks/useAuth'
import { useRouter } from 'next/router'

const Login = () => {
  const auth = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="form"
        sx={{
          maxWidth: '400px',
          height: '450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          border: '1px solid gray',
          borderRadius: '5px',
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <Typography
          sx={{
            color: 'black',
            textAlign: 'center',
          }}
        >
          REGISTRO
        </Typography>
        <TextField
          id="outlined-basic"
          label="Correo Electrónico"
          variant="outlined"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Stack spacing={2} direction="column">
          <Button
            variant="contained"
            onClick={() => {
              auth
                .registerWithEmailAndPassword(email, password)
                .then(() => {
                  router.push('/')
                })
                .catch((error) => {
                  console.log(error)
                })
            }}
          >
            Registrarse
          </Button>
          <p>O</p>
          <Button
            variant="contained"
            onClick={() => {
              auth
                .registerOrLoginWithGoogle()
                .then(() => {
                  router.push('/')
                })
                .catch((error) => {
                  console.log(error)
                })
            }}
          >
            Google
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default Login