import React from 'react'
import DatePicker from '../components/sensorDataTab/DatePicker'
import { render } from '@testing-library/react'

describe('Date Picker', () => {
  it('should render without exploding', () => {
    render(<DatePicker />)
  })
})
