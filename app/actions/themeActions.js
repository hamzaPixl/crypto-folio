function changeTheme(checked) {
  const theme = !checked ? 'light' : 'dark';
  return {
    type: 'CHANGE_THEME',
    theme,
  };
}

export default changeTheme;

