import { Box, Container, Grid, Paper, Toolbar } from '@mui/material';
import React from 'react';
import Chart from '../dashboard/Chart';

const Blogs = () => {
    return (
        <>
            <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}>
                <Chart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
        </>
    );
};

export default Blogs;