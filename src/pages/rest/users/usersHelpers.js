export const getUserFromArray = (userId, users) => {
  if (userId && (users && users.length > 0)) {
    const user = users.find(u => u.id.toString() === userId.toString())

    if (user) { return user }
  }

  return false
}

export const getUserNameFromArray = (userId, users) => {
  const user = getUserFromArray(userId, users)

  if (user && user.name) {
    return user.name
  }

  return 'Unknown user'
}
