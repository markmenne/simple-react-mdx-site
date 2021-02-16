export const MENU_ITEMS = [
    {
        name: 'Data Loader',
        targetUrl: '../',
        remote: true,
    },
    {
        name: 'Disclaimer',
        targetUrl: '../disclaimer',
        remote: true,
    },
    {
        name: 'About',
        targetUrl: '../about',
        remote: true,
    },
    {
        name: 'Posts',
        targetUrl: 'post',
        remote: false,
    },
] as const;