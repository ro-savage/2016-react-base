/* eslint-disable */
// Disabled ES lint because of one line export not being default
// rule: import/prefer-default-export
export const saveListItem = item => ({
  type: 'SAVE',
  payload: item,
})
