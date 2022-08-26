import axios from 'axios';

export const loginCall = async (userCredential) => {
    localStorage.user = userCredential.user;
    if (userCredential.user === 'admin' && userCredential.password === '1234') {
        window.location.href = '/';
    } else {
        return 'Incorrect username or password.';
    }
    // dispatch({ type: "LOGIN_START" });

    try {
        // const res = await axios.post("/auth/login", userCredential);
        // dispatch({ type: "LOGIN_SUCCESS", payload: "bento" })
    } catch (err) {
        console.log(err);
        // dispatch( {type: "LOGIN_FAILURE", payload: err})
    }
};

export const getComponent = async () => {
    try {
        // const res = await axios.get("/component");
        const res = [
            {
                component_name: 'aws.greengrass.SecureTunneling',
                component_version: '1.0.9',
                state: 'RUNNING'
            },
            {
                component_name: 'com.scg.io.serial.solar',
                component_version: '1.1.6',
                state: 'RUNNING'
            },
            {
                component_name: 'com.scg.TrinityEdgeWifi',
                component_version: '1.0.34',
                state: 'RUNNING'
            },
            {
                component_name: 'test1',
                component_version: '1.0.9',
                state: 'RUNNING'
            },
            {
                component_name: 'test2',
                component_version: '1.1.6',
                state: 'RUNNING'
            },
            {
                component_name: 'test3',
                component_version: '1.0.34',
                state: 'RUNNING'
            }
        ];
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getIO = async () => {
    try {
        // const res = await axios.get("/component");
        const res = [
            {
                name: '0013A20041EB2154',
                device: '/dev/ttyUSB0',
                status: 'Good'
            },
            {
                name: '0013A20041EB214D',
                device: '/dev/ttyUSB1',
                status: 'Poor'
            }
        ];
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getWifi = async () => {
    try {
        // const res = await axios.get("/wifi");
        const res = [
            {
                ssid: 'WEDO-01',
                signal: 'Good',
                status: 'Connected'
            },
            {
                ssid: 'Home1',
                signal: 'Fair',
                status: 'Disconnected'
            },
            {
                ssid: 'MyWifi',
                signal: 'Good',
                status: 'Disconnected'
            }
        ];
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const putWifi = async (req) => {
    try {
        console.log(req);
        // const res = await axios.put('/wifi', req);
        return 'OK';
    } catch (err) {
        console.log(err);
        return 'error';
    }
};

export const putValidate = async (req) => {
    try {
        console.log(req);
        // const res = await axios.put('/validate', req);
        return 'OK';
    } catch (err) {
        console.log(err);
        return 'error';
    }
};
