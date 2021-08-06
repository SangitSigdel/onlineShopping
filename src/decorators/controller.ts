import express from 'express'
import 'reflect-metadata'

import { methods } from '../decorators'
export const router = express.Router()

export function controller(rootRoute: string) {
  return function (target: Function) {

    for (let key in target.prototype) {
      const handler = target.prototype[key]
      const route = Reflect.getMetadata('path', target.prototype, key)
      const method: methods = Reflect.getMetadata('method', target.prototype, key)
      if (method) {
        router[method](`${rootRoute}${route}`, handler)
      }
    }

  }
}