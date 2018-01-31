export default function counter(state = {
    count: 0,
    inRunning: false
}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
                inRunning: false
            }
        case 'INCREMENT_IF_ODD':
            return {
                count: (state.count % 2 !== 0) ? state.count + 1 : state.count,
                inRunning: false
            }
        case 'DECREMENT':
            return {
                count: state.count - 1,
                inRunning: false
            }
        case 'START':
            return {
                count: state.count,
                inRunning: true
            }
        case 'END':
            return {
                count: state.count,
                inRunning: false
            }
        default:
            return state
    }
}