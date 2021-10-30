import React from 'react'
import renderer from 'react-test-renderer'
import Test from '.././components/sensorDataTab/SystemStatus'

test('renders correctly', () => {
  const tree = renderer.create(<Test />).toJSON()
  expect(tree).toMatchSnapshot()
})
