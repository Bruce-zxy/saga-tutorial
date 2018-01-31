export default function counter(state = { count: 0 }, action) {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'INCREMENT_IF_ODD':
      return { count: (state.count % 2 !== 0) ? state.count + 1 : state.count }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}
