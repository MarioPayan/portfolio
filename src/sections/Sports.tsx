import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA, {KEYS} from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'
import {sectionTitle} from '../utils/utils'

export type CardItem = {title: string; description: string; images: string[]}

const Sports = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')
  sectionTitle(KEYS.SPORTS)

  return (
    <Grid item container xs={12} spacing={3}>
      {DATA.SPORTS.sections.map(sports => (
        <ImagesCard
          title={sports.title}
          description={sports.description}
          images={sports.images}
          onImage={setImageModal}
          key={sports.title}/>
      ))}
      <ImageModal image={imageModal} onClose={() => setImageModal('')} />
    </Grid>
  )
}

export default Sports
