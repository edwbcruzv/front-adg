import React from 'react'
import AppFrame from '../components/AppFrame/AppFrame'
import Grafica from '../components/Grafica'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {Box} from '@mui/material'

const Resultados = () => {
  return (
    <AppFrame>
      <Grid container 
    direction="row"
    justifyContent="space-around"
    alignItems="stretch">
      <Grid item>
      <Box sx={{border:1}}>
        <Grafica/>
        </Box>

      </Grid>

      <Grid item>
        <Box sx={{border:1}}>
        <Typography variant="body1" color="initial">Se supone que aqui va una descripcion</Typography>
        </Box>
      </Grid>
    </Grid>
    </AppFrame>
  )
}

export default Resultados