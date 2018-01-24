const themeReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return [
        ...state,
        {
          theme: action.theme,
        },
      ];
    default:
      return state;
  }
};

export default themeReducer;
