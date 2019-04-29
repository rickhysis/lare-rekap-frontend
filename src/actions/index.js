export const handleDrawer = store => {
    const drawer = !store.state.drawer;
    store.setState({ drawer });
  };