import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PieChart from './PieChart';
import BarChart from './BarChart';

function Charts() {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <PieChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card>
                        <BarChart />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Charts;
