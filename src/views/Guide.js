import React from 'react'

import {Grid} from '@material-ui/core'
import {Typography, Box} from '@material-ui/core'

export default function Guide(){
    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                   <Typography variant="h2">
                       Guide
                   </Typography> 
                </Grid>
            </Grid>
        </div>
    )
}