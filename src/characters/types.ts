import { Query } from '../base/types'
export interface Response {
  docs: Doc[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface Doc {
  _id: string
  height: string
  race: string
  gender?: Gender
  birth: string
  spouse: string
  death: string
  realm: string
  hair: string
  name: string
  wikiUrl?: string
}

export enum Gender {
  Empty = '',
  Female = 'Female',
  GenderMale = 'male',
  Male = 'Male',
  Males = 'Males',
  MostLikelyMale = 'Most likely male',
}

export interface ICharacter {
  GetABookCharacter(id: string, query?: Query): Promise<Response>
  ListCharacters(query?: Query): Promise<Response>
  GetACharacterQuote(id: string, query?: Query): Promise<Response>
  GetACharacter(id: string): Promise<Response>
}
