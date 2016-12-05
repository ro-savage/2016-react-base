export const fetchUsers = () => { // eslint-disable-line
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json().then((json) => {
      return json
    }).catch((err) => {
      console.log(err)
    })
  })
}
