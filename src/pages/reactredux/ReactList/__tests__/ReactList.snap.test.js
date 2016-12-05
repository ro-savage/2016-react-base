import React from 'react'
import renderer from 'react-test-renderer'
import ReactList from '../ReactList'


test('ReactList changes when new item is added', () => {
  const component = renderer.create(
    <ReactList />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Get children
  const input = tree.children[1]
  const button = tree.children[2]

  // Manually trigger onChange Event for input field
  input.props.onChange({ target: { value: 'Item 4' } })
  // Manually trigger onClick Event for input field
  button.props.onClick()

  // re-rendering. Should contain Item 4
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
