import { AtlpNavigation } from '@atlp/types';

export const navigation: AtlpNavigation[] = [
    {
        id: 'components',
        title: 'Appointments Components',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'appointments',
                title: 'Appointments',
                translate: 'Appointments',
                type: 'item',
                icon: 'apps',
                url: '/appointments',
            },
            {
                id: 'vessel',
                title: 'Vessel',
                translate: 'Vessel',
                type: 'item',
                icon: 'apps',
                url: '/vessel',
            },
            {
                id: 'payment',
                title: 'Payment',
                translate: 'Payment',
                type: 'item',
                icon: 'apps',
                url: '/payment',
            },
            {
                id: 'airway',
                title: 'Airway',
                translate: 'Airway',
                type: 'item',
                icon: 'apps',
                url: '/airway',
            },
            {
                id: 'awb',
                title: 'Awb',
                translate: 'Awb',
                type: 'item',
                icon: 'apps',
                url: '/awb',
            },
            {
                id: 'voyages',
                title: 'Voyages',
                translate: 'Voyages',
                type: 'item',
                icon: 'apps',
                url: '/voyages',
            },
            // {
            //     id: 'information-services',
            //     title: 'Information services',
            //     translate: 'Information services',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/information-services',
            // },
            // {
            //     id: 'heavy-container',
            //     title: 'Heavy container',
            //     translate: 'Heavy container',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/heavy-container',
            // },
            // {
            //     id: 'truck-tracking',
            //     title: 'Truck tracking',
            //     translate: 'Truck tracking',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/truck-tracking',
            // },
            // {
            //     id: 'schedule',
            //     title: 'Schedule',
            //     translate: 'Schedule',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/schedule',
            // },
            // {
            //     id: 'track-cargo',
            //     title: 'Track cargo',
            //     translate: 'Track cargo',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/track-cargo',
            // }
        ]
    },
  
];
