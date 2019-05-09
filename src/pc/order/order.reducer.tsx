
const initialState = {
    orders: [
        {id: 1, name: 'firsrt'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'}
    ]
}

export interface Order {
    id: number,
    name: string
}

export interface PcOrderState {
    orders: Order[]
}

export const actionType = {
    pc_order_getOrders: 'pc_order_getOrders'
}
const pc_order = (state: PcOrderState = initialState, action: any) => { 
    switch (action.type) {
        case actionType.pc_order_getOrders:
            return {
                ...state,
                orders:  [
                    {id: 1, name: 'Amelia'},
                    {id: 2, name: 'second'},
                    {id: 3, name: 'Cris'}
                ]
            }
        default:
            return state;
    }
}
  
export { pc_order };
