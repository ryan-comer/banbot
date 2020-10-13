import React from 'react'

import {Grid} from '@material-ui/core'
import {Box, Typography} from '@material-ui/core'

export default function HomeView() {
    return (
        <Grid container justify="center">
            <Grid item xs={12}>
                <Box mt={5}>
                    <Typography variant="h2">
                        Welcome to BanBot!
              </Typography>
                </Box>
            </Grid>
            <Grid item xs={10} md={6}>
                <Box my={4}>
                    <Typography variant="body1">
                        BanBot is an application that helps you ban champions during
                        a clash tournament.  Simply input the summoner names, and BanBot
                        will do the rest!  Our advanced algorithms analyze what champions
                        each summoner will likely play and which champions they are likely to
                        perform well with.
              </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}