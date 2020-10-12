import React from 'react'

import {Grid} from '@material-ui/core'
import {Typography, Box} from '@material-ui/core'

export default function BanBot(){
    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                   <Typography variant="h2">
                       BanBot
                   </Typography> 
                </Grid>
            </Grid>
        </div>
    )
}