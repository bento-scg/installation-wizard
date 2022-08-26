// material-ui
import { Box, Card, Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useState, useEffect, useRef } from 'react';
import { getWifi, putWifi } from '../../apiCalls';

import { DataGrid } from '@mui/x-data-grid';
import { gridSpacing } from 'store/constant';

const columns = [
    { field: 'ssid', headerName: 'SSID', flex: 1 },
    { field: 'signal', headerName: 'Signal', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 }
];

const Wifi = () => {
    const [datas, setDatas] = useState([]);
    const [activeWifi, setActiveWifi] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        console.log('callGetWifi');

        const callGetWifi = async () => {
            const res = await getWifi();
            setDatas(res);
        };

        callGetWifi();
    }, []);

    const callPutWifi = async () => {
        const req = { ssid: activeWifi, password: pass };
        alert(JSON.stringify(req));
        const res = await putWifi(req);
    };

    return (
        <MainCard title="Wifi">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={datas}
                    columns={columns}
                    getRowId={(row) => row.ssid}
                    onSelectionModelChange={(newSelection) => {
                        setActiveWifi(newSelection[0]);
                        password.current.value = '';
                    }}
                />
            </div>
            <Grid container spacing={gridSpacing} className="mt-1">
                <Grid item xs={12}>
                    {activeWifi ? (
                        <SubCard title="Wifi Setting">
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={2}>
                                    <span className="whitespace-nowrap">SSID :</span>
                                </Grid>
                                <Grid item xs={10}>
                                    <span>{activeWifi}</span>
                                </Grid>
                            </Grid>
                            <Grid container spacing={gridSpacing} className="mt-1 items-center">
                                <Grid item xs={12} sm={2}>
                                    <div className="whitespace-nowrap">Password :</div>
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        value={pass}
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
                                <Button variant="outlined" className="mt-5" onClick={callPutWifi} disabled={pass ? false : true}>
                                    Update
                                </Button>
                            </Box>
                        </SubCard>
                    ) : (
                        <></>
                    )}
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Wifi;
