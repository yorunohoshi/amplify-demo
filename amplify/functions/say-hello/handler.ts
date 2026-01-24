import type { Schema } from '../../data/resource'

export const handler: Schema["sayHello"]["functionHandler"] = async (event, context) => {
  const { name } = event.arguments

  return `Hello ${name}`
}