// material-ui
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useState, useEffect, useRef } from 'react';
import { putValidate } from '../../apiCalls';

import { DataGrid } from '@mui/x-data-grid';
import { gridSpacing } from 'store/constant';

const columns = [
    { field: 'ssid', headerName: 'SSID', flex: 1 },
    { field: 'signal', headerName: 'Signal', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 }
];

const Validate = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const callPutValidate = async () => {
        const req = { user: user, password: pass };
        alert(JSON.stringify(req));
        const res = await putValidate(req);
    };

    return (
        <MainCard title="Validate">
            <Grid container spacing={gridSpacing} className="mt-1">
                <Grid item xs={12}>
                    {/* <SubCard> */}
                    <Grid container spacing={gridSpacing} className="items-center">
                        <Grid item xs={12} sm={1}>
                            <div className="whitespace-nowrap">User :</div>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <TextField
                                required
                                id="outlined-user-input"
                                label="user"
                                type="text"
                                onChange={(e) => setUser(e.target.value)}
                                error={user === ''}
                                helperText={user === '' ? 'user is required' : ''}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={gridSpacing} className="mt-1 items-center">
                        <Grid item xs={12} sm={1}>
                            <div className="whitespace-nowrap">Password :</div>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => setPass(e.target.value)}
                                error={pass === ''}
                                helperText={pass === '' ? 'password is required' : ''}
                            />
                        </Grid>
                    </Grid>
                    <Box component="div" sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'start' } }}>
                        <Button variant="outlined" className="mt-5" onClick={callPutValidate} disabled={pass && user ? false : true}>
                            Done
                        </Button>
                    </Box>
                    {/* </SubCard> */}
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Validate;
