import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA, {KEYS} from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'
import {sectionTitle} from '../utils/utils'

export type CardItem = {title: string; description: string; images: string[]}

const Music = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')
  sectionTitle(KEYS.MUSIC)

  return (
    <Grid item container xs={12} spacing={3}>
      {DATA.MUSIC.sections.map(music => (
        <ImagesCard
          title={music.title}
          description={music.description}
          images={music.images}
          onImage={setImageModal}
          key={music.title}
          {...{social: music.social || {}}}/>
      ))}
      <ImageModal image={imageModal} onClose={() => setImageModal('')} />
    </Grid>
  )
}

export default Music
