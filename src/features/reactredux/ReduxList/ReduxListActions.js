export const SAVE_ITEM = '@@reduxList/SAVE_ITEM'

export const saveListItem = item => ({
  type: SAVE_ITEM,
  payload: item,
})
