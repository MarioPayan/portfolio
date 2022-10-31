import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA, {KEYS} from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'
import {tanHead} from '../utils/utils'

export type CardItem = {title: string; description: string; images: string[]}

const Random = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')

  tanHead(KEYS.RANDOM)

  return (
    <Grid item container xs={12} spacing={3}>
      {DATA.RANDOM.sections.map(random => (
        <ImagesCard
          title={random.title}
          description={random.description}
          images={random.images}
          onImage={setImageModal}
          key={random.title}/>
      ))}
      <ImageModal image={imageModal} onClose={() => setImageModal('')} />
    </Grid>
  )
}

export default Random
