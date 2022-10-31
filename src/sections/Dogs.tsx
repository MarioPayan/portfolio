import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA, {KEYS} from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'
import {tanHead} from '../utils/utils'

export type CardItem = {title: string; description: string; images: string[]}

const Dogs = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')

  tanHead(KEYS.DOGS)

  return (
    <Grid item container xs={12} spacing={3}>
      {DATA.DOGS.sections.map(dogs => (
        <ImagesCard
          title={dogs.title}
          description={dogs.description}
          images={dogs.images}
          onImage={setImageModal}
          key={dogs.title}/>
      ))}
      <ImageModal image={imageModal} onClose={() => setImageModal('')} />
    </Grid>
  )
}

export default Dogs
