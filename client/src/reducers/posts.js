const InitialState = {
    showMobileMenu: false,
    value: 0
};


function postsReducer(state = InitialState, action) {
    switch(action.type) {
        default:
            return {...state};
        case 'TOGGLE_SIDE_MENU':
            return {...state, showMobileMenu: !state.showMobileMenu};
        case 'ADD_VALUE':
            return {...state, value: state.value + 1};
        case 'STORE_MESSAGE':
            return {...state, value: state.value + 1};
    };
};

export default postsReducer;