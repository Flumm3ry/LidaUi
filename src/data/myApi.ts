import { DefaultApiFactory } from './api'

export const MyApi = DefaultApiFactory(
  undefined,
  'https://australia-southeast1-lida-api-313611.cloudfunctions.net/rest-api/'
)
