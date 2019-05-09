import * as React from "react";
import { Route  } from 'react-router-dom';

import Info from './info/info.ui';
import Qualification from './qualification/qualification.ui';

const routes = [
    {
        path: '/pc/hotel/info',
        component: Info
    },
    {
        path: '/pc/hotel/qualification',
        component: Qualification
    }
];


class HotelRouter extends React.Component {
            render() {
                return (
                    routes.map((route) => 
                        <Route key={route.path} path={route.path} component={route.component}>   
                        </Route>
                    )
                )
            }
}

export default HotelRouter;