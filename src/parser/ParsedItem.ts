import { ItemRarity, ItemInfluence } from './constants'
import { ItemModifier, ModifierType } from './modifiers'
import { ItemCategory } from './meta'

export interface ParsedItem {
  rarity: ItemRarity
  name: string
  baseType: string | undefined
  itemLevel?: number
  props: {
    armour?: number
    evasion?: number
    energyShield?: number
    blockChance?: number
    critChance?: number
    attackSpeed?: number
    physicalDamage?: number[]
    elementalDamage?: number
    mapBlighted?: true
    mapTier?: number
    gemLevel?: number
    areaLevel?: number
    talismanTier?: number
  }
  quality?: number
  sockets: {
    linked?: number // only 5 or 6
    white?: number
  }
  stackSize?: { value: number, max: number }
  isUnidentified: boolean
  isCorrupted: boolean
  isMirrored?: boolean
  influences: ItemInfluence[]
  modifiers: ItemModifier[]
  unknownModifiers: Array<{
    text: string
    type: ModifierType
  }>
  extra: {
    veiled?: 'prefix' | 'suffix' | 'prefix-suffix'
    prophecyMaster?: 'Alva' | 'Einhar' | 'Niko' | 'Jun' | 'Zana'
    altQuality?: 'Anomalous' | 'Divergent' | 'Phantasmal' | 'Superior'
  }
  heistJob?: { name: HeistJob, level: number }
  category?: ItemCategory
  icon?: string
  rawText: string
  isAdvancedDesc: boolean
}

export type HeistJob =
  'Lockpicking' |
  'Counter-Thaumaturgy' |
  'Perception' |
  'Deception' |
  'Agility' |
  'Engineering' |
  'Trap Disarmament' |
  'Demolition' |
  'Brute Force'
