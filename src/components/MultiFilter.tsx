import React, {useState} from 'react'
import {FormControl, InputLabel, Select, MenuItem, OutlinedInput, Box, Chip, ListSubheader} from '@mui/material'

import {getKeyFromLabel, getLabelFromKey} from '../utils/utils'

const MultiFilter = ({categories}: {categories: {label: string; items: any[]}[]}) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const [ALL, NONE] = ['All', 'None']

  const getFiltersFromStack = (stack: any, key: string) => [
    {key: `${key}-${getKeyFromLabel(ALL)}`, label: `${ALL} ${getLabelFromKey(key)}`},
    ...stack.map((skill: any) => ({key: `${key}-${getKeyFromLabel(skill.title)}`, label: skill.title})),
    {key: `${key}-${getKeyFromLabel(NONE)}`, label: `${NONE} ${getLabelFromKey(key)}`},
  ]

  const filters = categories.map((c: any) => ({
    label: c.label,
    items: getFiltersFromStack(c.items, getKeyFromLabel(c.label)),
  }))

  const handleChange = (value: any) => {
    let newFilters = typeof value === 'string' ? value.split(',') : value

    if (!newFilters.length) return setActiveFilters([ALL])

    const getLastFilterSelected = (filter: any) => filter.at(-1)

    const isLastAll = (filter: any) => getLastFilterSelected(filter).split(' ').at(0) === ALL
    const isLastFullAll = (filter: any) => getLastFilterSelected(filter) === ALL
    const isLastNone = (filter: any) => getLastFilterSelected(filter).split(' ').at(0) === NONE
    const isLastFullNone = (filter: any) => getLastFilterSelected(filter) === NONE

    const getAllSubFilters = (filter: any) => filter.items
      .filter((i: any) => ![ALL, NONE].some((k: any) => i.key.split('-').at(1).includes(getKeyFromLabel(k))))
      .map((i: any) => i.label)
    const getAllFilter = (filter: any) => `${ALL} ${filter.label}`
    const getNoneFilter = (filter: any) => `${NONE} ${filter.label}`

    const joinFilters = (filters1: any, filters2: any) => [...new Set([...filters1, ...filters2])]
    const excludeFilters = (filters1: any, filters2: any) => filters1.filter((f: any) => !filters2.includes(f))

    if (isLastFullAll(newFilters)) return setActiveFilters([ALL])
    if (isLastFullNone(newFilters)) return setActiveFilters([NONE])

    if (isLastAll(newFilters)) {
      const filter: any = filters.find(f => getAllFilter(f) === getLastFilterSelected(newFilters))
      return setActiveFilters(
        excludeFilters(joinFilters(newFilters, getAllSubFilters(filter)), [getNoneFilter(filter)])
      )
    }

    if (isLastNone(newFilters)) {
      const filter: any = filters.find(f => getNoneFilter(f) === getLastFilterSelected(newFilters))
      return setActiveFilters(excludeFilters(newFilters, [...getAllSubFilters(filter), getAllFilter(filter)]))
    }

    filters.forEach(filter => {
      if (getAllSubFilters(filter).every((f: any) => newFilters.includes(f))) {
        newFilters = joinFilters(newFilters, [getAllFilter(filter)])
      }
    })

    setActiveFilters(newFilters)
  }

  function getStyles(label: string, filters: readonly string[]) {
    return {
      fontWeight: filters.indexOf(label) === -1 ? 500 : 700,
    }
  }

  return (
    <>
      <FormControl sx={{m: 1, width: 300}}>
        <InputLabel id='filters-skills'>Filter</InputLabel>
        <Select
          labelId='filters-skills'
          multiple
          value={activeFilters}
          onChange={e => handleChange(e.target.value)}
          input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
          renderValue={selected => (
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
              {selected.map(value => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}>
          <MenuItem value={ALL} style={getStyles(ALL, activeFilters)}>
            All
          </MenuItem>

          {filters.map((filter: any, i: number) => [
            <ListSubheader key={i}>{filter.label}</ListSubheader>,
            filter.items.map((item: any) => (
              <MenuItem key={item.key} value={item.label} style={getStyles(item.label, activeFilters)}>
                {item.label}
              </MenuItem>
            )),
          ])}

          <MenuItem value={NONE} style={getStyles(NONE, activeFilters)}>
            None
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
export default MultiFilter
