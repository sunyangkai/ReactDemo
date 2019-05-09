import { connect } from 'react-redux';
import  Order from './order.ui';
import { State } from '../../reducer';
import { actionType } from './order.reducer';
import { HTTPS } from '../../network/network';

const mapStateToProps = (state: State) => {
    return {
        orders: state.pc_order.orders
    }
}

const mapDispatchToProps = (dispatch) => ({
    getOrders: () => {
        HTTPS.post('/getOrders', {id: 2}).subscribe({
            next: (res) => {
                dispatch({
                    type: actionType.pc_order_getOrders,
                    orders: res.data
                })
            },
            error: (e) => {}
        })
    }
})

 export default connect(mapStateToProps, mapDispatchToProps)(Order);