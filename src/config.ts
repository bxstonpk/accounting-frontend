import {
    faBuilding,
    faAddressCard,
    faEnvelope,
    faHome,
    faRectangleList,
    faAngry,
} from '@fortawesome/free-regular-svg-icons';

export const config = {
    navigation: {
        dashboard: {
            title: 'Dashboard',
            path: '/dashboard',
        },
        masterData: {
            title: 'Master Data',
            path: '/master-data',
            sub: [
                {
                    title: 'Organization',
                    path: '/organization',
                    icon: faBuilding,
                },
                {
                    title: 'Customer',
                    path: '/customer',
                    icon: faAddressCard,
                },
                {
                    title: 'Supplier',
                    path: '/supplier',
                    icon: faEnvelope,
                },
                {
                    title: 'Bank',
                    path: '/bank',
                    icon: faHome,
                },
                {
                    title: 'Account',
                    path: '/account',
                    icon: faRectangleList,
                },
                {
                    title: 'Inventory',
                    path: '/inventory',
                    icon: faAngry,
                },
                {
                    title: 'CRM',
                    path: '/crm',
                    icon: faAngry,
                },
                {
                    title: 'Orders',
                    path: '/orders',
                    icon: faAngry,
                },
                {
                    title: 'Tax Settings',
                    path: '/tax-settings',
                    icon: faAngry,
                },
            ]
        },
        revenue: {
            title: 'Revenues',
            path: '/revenues',
        },
        expenses: {
            title: 'Expenses',
            path: '/expenses',
        },
        accounting: {
            title: 'Account',
            path: '/account',
        },
        inventory: {
            title: 'Inventory',
            path: '/inventory',
        },
        project: {
            title: 'project',
            path: '/project',
        },
        reports: {
            title: 'Reports',
            path: '/reports',
        },
        settings: {
            title: 'Settings',
            path: '/settings',
        },
    }
}