import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type User implements Node {
  id: ID!
  favoriteCities: [City!]
  city: City
  favoriteNumbers: [Int!]
  number: Int
  favoriteidioms: [String!]
  idiom: String
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

enum City {
  NewYork
  London
  Madrid
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreatefavoriteCitiesInput {
  set: [City!]
}

input UserCreatefavoriteidiomsInput {
  set: [String!]
}

input UserCreatefavoriteNumbersInput {
  set: [Int!]
}

input UserCreateInput {
  city: City
  number: Int
  idiom: String
  favoriteCities: UserCreatefavoriteCitiesInput
  favoriteNumbers: UserCreatefavoriteNumbersInput
  favoriteidioms: UserCreatefavoriteidiomsInput
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  city_ASC
  city_DESC
  number_ASC
  number_DESC
  idiom_ASC
  idiom_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  favoriteCities: [City!]
  city: City
  favoriteNumbers: [Int!]
  number: Int
  favoriteidioms: [String!]
  idiom: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdatefavoriteCitiesInput {
  set: [City!]
}

input UserUpdatefavoriteidiomsInput {
  set: [String!]
}

input UserUpdatefavoriteNumbersInput {
  set: [Int!]
}

input UserUpdateInput {
  city: City
  number: Int
  idiom: String
  favoriteCities: UserUpdatefavoriteCitiesInput
  favoriteNumbers: UserUpdatefavoriteNumbersInput
  favoriteidioms: UserUpdatefavoriteidiomsInput
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  city: City
  """
  All values that are not equal to given value.
  """
  city_not: City
  """
  All values that are contained in given list.
  """
  city_in: [City!]
  """
  All values that are not contained in given list.
  """
  city_not_in: [City!]
  number: Int
  """
  All values that are not equal to given value.
  """
  number_not: Int
  """
  All values that are contained in given list.
  """
  number_in: [Int!]
  """
  All values that are not contained in given list.
  """
  number_not_in: [Int!]
  """
  All values less than the given value.
  """
  number_lt: Int
  """
  All values less than or equal the given value.
  """
  number_lte: Int
  """
  All values greater than the given value.
  """
  number_gt: Int
  """
  All values greater than or equal the given value.
  """
  number_gte: Int
  idiom: String
  """
  All values that are not equal to given value.
  """
  idiom_not: String
  """
  All values that are contained in given list.
  """
  idiom_in: [String!]
  """
  All values that are not contained in given list.
  """
  idiom_not_in: [String!]
  """
  All values less than the given value.
  """
  idiom_lt: String
  """
  All values less than or equal the given value.
  """
  idiom_lte: String
  """
  All values greater than the given value.
  """
  idiom_gt: String
  """
  All values greater than or equal the given value.
  """
  idiom_gte: String
  """
  All values containing the given string.
  """
  idiom_contains: String
  """
  All values not containing the given string.
  """
  idiom_not_contains: String
  """
  All values starting with the given string.
  """
  idiom_starts_with: String
  """
  All values not starting with the given string.
  """
  idiom_not_starts_with: String
  """
  All values ending with the given string.
  """
  idiom_ends_with: String
  """
  All values not ending with the given string.
  """
  idiom_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteUser(where: UserWhereUniqueInput!): User
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput!): BatchPayload!
  deleteManyUsers(where: UserWhereInput!): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  user(where: UserWhereUniqueInput!): User
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}
`

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'city_ASC' |
  'city_DESC' |
  'number_ASC' |
  'number_DESC' |
  'idiom_ASC' |
  'idiom_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type City = 
  'NewYork' |
  'London' |
  'Madrid'

export interface UserCreateInput {
  city?: City
  number?: Int
  idiom?: String
  favoriteCities?: UserCreatefavoriteCitiesInput
  favoriteNumbers?: UserCreatefavoriteNumbersInput
  favoriteidioms?: UserCreatefavoriteidiomsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  city?: City
  city_not?: City
  city_in?: City[] | City
  city_not_in?: City[] | City
  number?: Int
  number_not?: Int
  number_in?: Int[] | Int
  number_not_in?: Int[] | Int
  number_lt?: Int
  number_lte?: Int
  number_gt?: Int
  number_gte?: Int
  idiom?: String
  idiom_not?: String
  idiom_in?: String[] | String
  idiom_not_in?: String[] | String
  idiom_lt?: String
  idiom_lte?: String
  idiom_gt?: String
  idiom_gte?: String
  idiom_contains?: String
  idiom_not_contains?: String
  idiom_starts_with?: String
  idiom_not_starts_with?: String
  idiom_ends_with?: String
  idiom_not_ends_with?: String
}

export interface UserCreatefavoriteCitiesInput {
  set?: City[] | City
}

export interface UserCreatefavoriteidiomsInput {
  set?: String[] | String
}

export interface UserUpdateInput {
  city?: City
  number?: Int
  idiom?: String
  favoriteCities?: UserUpdatefavoriteCitiesInput
  favoriteNumbers?: UserUpdatefavoriteNumbersInput
  favoriteidioms?: UserUpdatefavoriteidiomsInput
}

export interface UserUpdatefavoriteCitiesInput {
  set?: City[] | City
}

export interface UserUpdatefavoriteNumbersInput {
  set?: Int[] | Int
}

export interface UserUpdatefavoriteidiomsInput {
  set?: String[] | String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreatefavoriteNumbersInput {
  set?: Int[] | Int
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  favoriteCities?: City[]
  city?: City
  favoriteNumbers?: Int[]
  number?: Int
  favoriteidioms?: String[]
  idiom?: String
}

export interface BatchPayload {
  count: Long
}

export interface User extends Node {
  id: ID_Output
  favoriteCities?: City[]
  city?: City
  favoriteNumbers?: Int[]
  number?: Int
  favoriteidioms?: String[]
  idiom?: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateManyUsers: (args: { data: UserUpdateInput, where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery)
  }
}