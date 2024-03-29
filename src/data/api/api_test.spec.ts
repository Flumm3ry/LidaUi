/**
 * lida-api
 * This is a REST API utilising the CQRS design pattern being exposed via Google Clouds serverless functions.
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from './api'
import { Configuration } from './configuration'

const config: Configuration = {}

describe('DefaultApi', () => {
  let instance: api.DefaultApi
  beforeEach(function () {
    instance = new api.DefaultApi(config)
  })

  test('createSensorData', () => {
    return expect(instance.createSensorData({})).resolves.toBe(null)
  })
  test('createSystemLog', () => {
    return expect(instance.createSystemLog({})).resolves.toBe(null)
  })
  test('readSensorData', () => {
    const startDate: number = 1.2
    const endDate: number = 1.2
    return expect(instance.readSensorData(startDate, endDate, {})).resolves.toBe(null)
  })
  test('readSystemLog', () => {
    const startDate: number = 1.2
    const endDate: number = 1.2
    return expect(instance.readSystemLog(startDate, endDate, {})).resolves.toBe(null)
  })
  test('updateState', () => {
    const body: api.UpdateStateCommand = undefined
    return expect(instance.updateState(body, {})).resolves.toBe(null)
  })
})
