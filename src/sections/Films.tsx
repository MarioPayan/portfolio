import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'

export type CardItem = {title: string; description: string; images: string[]}

const Films = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')

  return (
    <Grid item container xs={12} spacing={3}>
      {DATA.FILMS.sections.map(films => (
        <ImagesCard
          title={films.title}
          description={films.description}
          images={films.images}
          onImage={setImageModal}
          key={films.title}/>
      ))}
      <ImageModal image={imageModal} onClose={() => setImageModal('')} />
    </Grid>
  )
}

export default Films
