import * as React from "react";
import { Collapse, Button } from 'antd';
import { Order as OrderProps } from './order.reducer';
import { is, Map } from  'immutable';

const Panel = Collapse.Panel;

interface OrderItemProps {
    order: OrderProps
}
interface OrderItemState {}

class OrderItem extends React.Component<OrderItemProps, OrderItemState> {
    constructor(props: OrderItemProps, state: OrderItemState) {
        super(props);
        this.state = {}
    }
    shouldComponentUpdate(nextProps,nextState){
        const thisProps = this.props;
        const thisState = this.state;
        if(!is(Map({...thisProps.order}), Map({...nextProps.order}))) {
            return true;
        }
        for (const key in nextState) {
            if (thisState[key] !== nextState[key] && !is(thisState[key], nextState[key])) {
              return true;
            }
        }
        return false;
    }

    render() {
        const order = this.props.order;
        console.log('render: ' + order.name);
        return(
            <span>{order.name}</span>
        )
    }
}


interface State {}
interface Props {
    orders: OrderProps[],
    getOrders: () => void
}
class Order extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props);
    }
    render() {
        return (
            <div>
              <Button onClick={this.props.getOrders}>获取新订单</Button>
              <Collapse defaultActiveKey={['key0']}>
                {
                    this.props.orders.map((order, index) => 
                        <Panel header={order.name} key={'key' + index}>
                             <OrderItem order={order} ></OrderItem>
                        </Panel>
                    )
                }
            </Collapse>
            </div>
        )
    }
}

export default Order;