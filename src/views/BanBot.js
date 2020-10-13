import React from 'react'

import {Grid} from '@material-ui/core'
import {Typography, Box} from '@material-ui/core'
import {Label, TextField, Button} from '@material-ui/core'

export default function BanBot(){
    let summonerOne
    let summonerTwo
    let summonerThree
    let summonerFour
    let summonerFive

    // Generate the ban list for the summoners
    function generateBans(){
        // Verify summoner names

        // Gather data

        // Process data

        // Output results
    }

    function changeSummonerOne(event){
        summonerOne = event.target.value;
    }
    function changeSummonerTwo(event){
        summonerTwo = event.target.value;
    }
    function changeSummonerThree(event){
        summonerThree = event.target.value;
    }
    function changeSummonerFour(event){
        summonerFour = event.target.value;
    }
    function changeSummonerFive(event){
        summonerFive = event.target.value;
    }

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
                            <Grid item xs={3} md={1}>
                                <Typography>
                                    Summoner One:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField size="small" variant="filled" fullWidth value={summonerOne} onChange={changeSummonerOne}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={3} md={1}>
                                <Typography>
                                    Summoner Two:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField size="small" variant="filled" fullWidth value={summonerTwo} onChange={changeSummonerTwo}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={3} md={1}>
                                <Typography>
                                    Summoner Three:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField size="small" variant="filled" fullWidth value={summonerThree} onChange={changeSummonerThree}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={3} md={1}>
                                <Typography>
                                    Summoner Four:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField size="small" variant="filled" fullWidth value={summonerFour} onChange={changeSummonerFour}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={3} md={1}>
                                <Typography>
                                    Summoner Five:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <TextField size="small" variant="filled" fullWidth value={summonerFive} onChange={changeSummonerFive}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item xs={8} md={2}>
                            <Button onClick={generateBans} color="secondary" variant="contained" size="large" fullWidth>Generate Ban List</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}