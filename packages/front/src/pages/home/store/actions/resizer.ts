export const setState=(store,setState) => {
  const {state}=store;
  store.setState({
    ...state,
    resizer:{
      ...state.resizer,
      ...setState
    }
  });
};
