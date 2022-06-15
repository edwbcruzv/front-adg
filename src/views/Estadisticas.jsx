import React from 'react'
import AppFrame from '../components/AppFrame/AppFrame'
import Grid from '@mui/material/Grid'
import Grafica from '../components/Grafica'

const Estadisticas = () => {
  return (
    <AppFrame>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="stretch"
        wrap="wrap"
        
      >
        <Grid item>
          <Grafica/>
        </Grid>

        <Grid item>
          <Grafica/>
        </Grid>

        <Grid item>
          <Grafica/>
        </Grid>

        <Grid item>
          <Grafica/>
        </Grid>

        <Grid item>
          <Grafica/>
        </Grid>

        <Grid item>
          <Grafica/>
        </Grid>

        <Grid item>
          <Grafica/>
        </Grid>

        <Grid item>
          <Grafica/>
        </Grid>
        
      </Grid>
    </AppFrame>
  )
}

export default Estadisticas