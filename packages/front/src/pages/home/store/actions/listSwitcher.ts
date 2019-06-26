export const setState=(store,setState) => {
  const {state}=store;
  store.setState({
    ...state,
    listSwitcher:{
      ...state.listSwitcher,
      ...setState
    }
  });
};
