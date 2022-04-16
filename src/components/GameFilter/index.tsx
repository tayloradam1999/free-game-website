import React, { ChangeEvent, ReactElement } from 'react'
import { GENRES, PLATFORMS, SORT_BY } from './constants'
// import { TAGS } from './constants'
import { Form, Label, Select } from './styles';

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => (
  <Form onChange={onChange} >
    <Label htmlFor="platform-Select">
      Platform:
      <Select name="platform" id="platform-Select">
        {PLATFORMS.map((platform) => (
          <option key={platform.value} value={platform.value}>{platform.display}</option>
        ))}
      </Select>
    </Label>

    <Label htmlFor="genre-Select">
      Genre:
      <Select name="genre" id="genre-Select">
        {GENRES.map((genres) => (
          <option key={genres.value} value={genres.value}>{genres.display}</option>
        ))}
      </Select>
    </Label>

    {/* <Label htmlFor="tag-Select">
      Tag:
      <Select name="tag" id="tag-Select">
        {TAGS.map((tag) => (
          <option key={tag.value} value={tag.value}>{tag.display}</option>
        ))}
      </Select>
    </Label> */}

    <Label htmlFor="sortBy-Select">
      Sort By:
      <Select name="sortBy" id="sortBy-Select">
        {SORT_BY.map((sortBy) => (
          <option key={sortBy.value} value={sortBy.value}>{sortBy.display}</option>
        ))}
      </Select>
    </Label>
  </Form>
)

export default GameFilter