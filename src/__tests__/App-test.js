import React from 'react'
import renderer from 'react-test-renderer'
import Test from '../../App'

test('renders correctly', () => {
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
})
