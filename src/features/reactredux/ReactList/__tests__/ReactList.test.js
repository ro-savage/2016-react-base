import React from 'react'
import { shallow } from 'enzyme'
import ReactList from '../ReactList'

import List from '../../../../components/List/List'
import Button from '../../../../components/Button/Button'

describe('ReactList', () => {
  it('Should render contain the List react element', () => {
    const wrapper = shallow(<ReactList />)
    expect(wrapper.containsMatchingElement(<List />)).toBe(true)
  })

  it('Should render contain the Button react element', () => {
    const wrapper = shallow(<ReactList />)
    expect(wrapper.containsMatchingElement(<Button />)).toBe(true)
  })

  it('Should render contain a input element', () => {
    const wrapper = shallow(<ReactList />)
    expect(wrapper.containsMatchingElement(<input />)).toBe(true)
  })

  it('Should update state on input change', () => {
    const wrapper = shallow(<ReactList />)
    expect(wrapper.state('inputValue')).toBe('')
    wrapper.find('input').simulate('change', { target: { value: 'Test' } })
    expect(wrapper.state('inputValue')).toBe('Test')
  })

  it('Should update save new items, and remove input text on Button press', () => {
    const wrapper = shallow(<ReactList />)
    wrapper.setState({ items: [], inputValue: 'test' })
    expect(wrapper.state('items')).toEqual([])
    wrapper.find(Button).simulate('click')
    expect(wrapper.state('items')).toEqual(['test'])
    expect(wrapper.state('inputValue')).toBe('')
  })
})
