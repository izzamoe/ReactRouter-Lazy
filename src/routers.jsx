import {createBrowserRouter} from "react-router-dom";



export const Routers = createBrowserRouter([
    {
        path: '/',
        async lazy() {
           let Home = await import("./App");
              return { Component: Home.default };
        }
    },
    {
        path: '/about',
        async lazy() {
            let About = await import("./About");
            return { Component: About.default };
        },
    },
    {
        path: '/layout',
        async lazy() {
            let Layout = await import("./Layout");
            return { Component: Layout.default };
        },
    },
    {
        path: '/aplikasi',
        async lazy() {
            let YourComponent = await import("./YourComponent");
            return { Component: YourComponent.default };
        },
    },
]);