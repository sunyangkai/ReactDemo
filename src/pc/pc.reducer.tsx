
const initialState = {
    index: ['test']
}

export interface PcState {
    index: string[]
}

export const actionType = {
    pc_first: 'pc_first',
    pc_getList: 'pc_getList'
}

const pc = (state: PcState = initialState, action: any) => { 
    switch (action.type) {
        case actionType.pc_first:
            return {
                ...state,
                index: ['sun', 'yang', 'kai']
            }
        
        case actionType.pc_getList:
            return {
                ...state,
                index: action.list
            }
        default:
            return state;
    }
}
  
export { pc };
