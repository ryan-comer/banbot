import React from 'react'

import {Grid} from '@material-ui/core'
import {Typography, Box} from '@material-ui/core'
import {Label, TextField, Button} from '@material-ui/core'

export default function BanBot(){
    return(
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                   <Typography variant="h2">
                       BanBot
                   </Typography> 
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={1}>
                                <Typography>
                                    Summoner One:
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField size="small" variant="filled" fullWidth/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={1}>
                                <Typography>
                                    Summoner Two:
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField size="small" variant="filled" fullWidth/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={1}>
                                <Typography>
                                    Summoner Three:
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField size="small" variant="filled" fullWidth/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={1}>
                                <Typography>
                                    Summoner Four:
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField size="small" variant="filled" fullWidth/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={1}>
                                <Typography>
                                    Summoner Five:
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField size="small" variant="filled" fullWidth/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item xs={2}>
                            <Button color="secondary" variant="contained" size="large" fullWidth>Generate Ban List</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}