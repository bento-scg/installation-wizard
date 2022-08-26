// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { useState, useEffect } from 'react';
import { getComponent } from '../../apiCalls';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'component_name', headerName: 'Component name', flex: 1 },
    { field: 'component_version', headerName: 'Component Version', flex: 1 },
    { field: 'state', headerName: 'State', flex: 1 }
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 90
    // },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    // }
];

const ComponentStatus = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        console.log('callGetComponent');

        const callGetComponent = async () => {
            const res = await getComponent();
            setDatas(res);
        };

        callGetComponent();
    }, []);

    return (
        <MainCard title="Component Status">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={datas} columns={columns} rowsPerPageOptions={[5, 25, 50, 100]} getRowId={(row) => row.component_name} />
            </div>
        </MainCard>
    );
};

export default ComponentStatus;
