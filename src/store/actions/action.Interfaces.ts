export interface ICatSuccess {
  id: string
  name: string
  temperament: string
  life_span: string
  alt_names: string
  wikipedia_url: string
  origin: string
  weight_imperial: string
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppress_tall: number
  short_legs: number
  hypoallergenic: number
  adaptabillity: number
  affection_level: number
  country_code: string
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  description: string
}

export interface ICatData {
  data: ICatSuccess[]
}

export interface IBreed {
  id: string
  name: string
  temperament: string
  life_span: string
  alt_names: string
  wikipedia_url: string
  origin: string
  weight_imperial: string
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppress_tall: number
  short_legs: number
  hypoallergenic: number
  adaptabillity: number
  affection_level: number
  country_code: string
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  description: string
}

export interface ISingleCatSucces {
  breeds: IBreed[]
  url: string
}
export interface ISingleCatData {
  data: ISingleCatSucces[]
}
