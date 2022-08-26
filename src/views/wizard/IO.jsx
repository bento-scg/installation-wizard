// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { useState, useEffect } from 'react';
import { getIO } from '../../apiCalls';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'device', headerName: 'Device', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 }
];

const IO = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        console.log('callGetComponent');

        const callGetIO = async () => {
            const res = await getIO();
            setDatas(res);
        };

        callGetIO();
    }, []);

    return (
        <MainCard title="IO">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={datas} columns={columns} rowsPerPageOptions={[5, 25, 50, 100]} getRowId={(row) => row.name} />
            </div>
        </MainCard>
    );
};

export default IO;
