import 'reflect-metadata'
import { methods } from '../decorators'

function bindRoutes(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

export const get = bindRoutes(methods.GET)
export const post = bindRoutes(methods.POST)
export const patch = bindRoutes(methods.PATCH)
export const del = bindRoutes(methods.DEL)