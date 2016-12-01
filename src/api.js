export const fetchPosts = () => { //eslint-disable-line
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    return response.json().then((json) => {
      console.log('API Json', json)
      return json
    }).catch((err) => {
      console.log(err)
    })
  })
}
