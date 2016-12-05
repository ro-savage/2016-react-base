import React from 'react'
import renderer from 'react-test-renderer'
import ReduxCounter from '../ReduxCounter'


test('ReactList changes when new item is added', () => {
  const component = renderer.create(
    <ReduxCounter counter={1} increase={() => {}} decrease={() => {}} increaseAsync={() => {}} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
