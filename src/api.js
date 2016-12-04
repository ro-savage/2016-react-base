export const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
    return response.json().then((json) => {
      console.log('API Json', json)
      return json
    }).catch((err) => {
      console.log(err)
    })
  })
}

export const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then((response) => {
    return response.json().then((json) => {
      console.log('API Json', json)
      return json
    }).catch((err) => {
      console.log(err)
    })
  })
}

export const postPost = (data) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json().then((json) => {
      return { ...data, ...json }
    }).catch((err) => {
      console.log(err)
    })
  })
}

export const fetchUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json().then((json) => {
      return json
    }).catch((err) => {
      console.log(err)
    })
  })
}
