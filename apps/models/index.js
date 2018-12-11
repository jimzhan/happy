import mongoose from 'mongoose'
import { plugins } from '../../db'

mongoose.plugin(plugins.dataloader)

export { default as Group } from './Group'
export { default as Permission } from './Permission'
export { default as User } from './User'