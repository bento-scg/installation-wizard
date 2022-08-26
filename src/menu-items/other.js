// assets
import {
    IconBrandChrome,
    IconHelp,
    IconWifi,
    IconComponents,
    IconTransferIn,
    IconInfoSquare,
    IconAccessPoint,
    IconFilter
} from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'component-status',
            title: 'Component Status',
            type: 'item',
            url: '/status',
            icon: IconComponents,
            breadcrumbs: false
        },
        {
            id: 'io',
            title: 'I/O',
            type: 'item',
            url: '/io',
            icon: IconTransferIn,
            breadcrumbs: false
        },
        {
            id: 'wifi',
            title: 'Wifi',
            type: 'item',
            url: '/wifi',
            icon: IconWifi,
            breadcrumbs: false
        },
        {
            id: 'customer-information',
            title: 'Customer Information',
            type: 'item',
            url: '/',
            icon: IconInfoSquare,
            breadcrumbs: false
        }
        // {
        //     id: 'online',
        //     title: 'Online',
        //     type: 'item',
        //     url: '/',
        //     icon: IconAccessPoint,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'validate',
        //     title: 'Validate',
        //     type: 'item',
        //     url: '/validate',
        //     icon: IconFilter,
        //     breadcrumbs: false
        // }
    ]
};

export default other;
