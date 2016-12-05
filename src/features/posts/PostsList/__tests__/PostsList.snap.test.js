import React from 'react'
import renderer from 'react-test-renderer'
import PostsList from '../PostsList'


test('ReactList changes when new item is added', () => {
  const component = renderer.create(
    <PostsList
      dispatchFetchPosts={() => {}}
      posts={[{ id: 1, userId: 1, title: 'postMock' }]}
      users={[{ id: 1, name: 'userMock' }]}
    />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
