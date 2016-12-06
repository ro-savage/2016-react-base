import React from 'react'
import { shallow } from 'enzyme'
import PostInput from '../PostInput'

describe('PostInput', () => {
  it('handleSave should create a fake post', () => {
    const saveMock = jest.fn()
    const wrapper = shallow(<PostInput save={saveMock} />)
    wrapper.setState({ inputValue: 'mockTitle' })
    wrapper.instance().handleSave()
    const savedObject = saveMock.mock.calls[0][0]
    expect(savedObject.title).toBe('mockTitle')
    expect(savedObject.userId).toBeGreaterThan(0)
    expect(savedObject.userId).toBeLessThan(11)
  })
})
