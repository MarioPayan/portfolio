import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA, {KEYS} from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'
import {sectionTitle} from '../utils/utils'

export type CardItem = {title: string; description: string; images: string[]}

const Traveling = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')
  sectionTitle(KEYS.TRAVELING)

  return (
    <Grid item container xs={12} spacing={3}>
      {DATA.TRAVELING.sections.map(traveling => (
        <ImagesCard
          title={traveling.title}
          description={traveling.description}
          images={traveling.images}
          onImage={setImageModal}
          key={traveling.title}/>
      ))}
      <ImageModal image={imageModal} onClose={() => setImageModal('')} />
    </Grid>
  )
}

export default Traveling
