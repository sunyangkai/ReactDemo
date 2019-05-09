import { connect } from 'react-redux';
import  Pc from './pc.ui';
import  { State } from '../reducer';
import { actionType } from './pc.reducer';
import { HTTPS } from '../network/network';



const mapStateToProps = (state: State) => {
    return {
        index: state.pc.index
    }
}

const mapDispatchToProps = (dispatch) => ({
    getIndex: () => {
        dispatch({
            type: actionType.pc_first
        })
    },

    getList: () => {
        HTTPS.post('/getList', {id: 2}).subscribe({
            next: (res) => {
                dispatch({
                    type: actionType.pc_getList,
                    list: res.data
                })
            },
            error: (e) => {

            }
        })
    }
})

 export default connect(mapStateToProps, mapDispatchToProps)(Pc);