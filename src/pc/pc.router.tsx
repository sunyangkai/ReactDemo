import * as React from "react";
import { Route  } from 'react-router-dom';

import Order from './order/order.component';
import Room from './room/room.ui';
import Hotel from './hotel/hotel.ui';

const routes = [
            {
                path: '/pc/order',
                component: Order,
            },
            {
                path: '/pc/room',
                component: Room,
            },
            {
                path: '/pc/hotel',
                component: Hotel,
            },
];

class PcRouter extends React.Component{
 
    render() {
        return (
            routes.map((route) => 
                <Route key={route.path} path={route.path} component={route.component}>   
                </Route>
            )
        )
    }
}

export default PcRouter;