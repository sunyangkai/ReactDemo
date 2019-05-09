import { combineReducers } from 'redux';
import { pc, PcState } from './pc/pc.reducer';
import { pc_order, PcOrderState } from './pc/order/order.reducer';

export default combineReducers({
    pc,
    pc_order
});

export interface State {
    pc: PcState,
    pc_order: PcOrderState
}

