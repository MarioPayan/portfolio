import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA, {KEYS} from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'
import {sectionTitle} from '../utils/utils'

export type CardItem = {title: string; description: string; images: string[]}

const Roles = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')
  sectionTitle(KEYS.ROLES)

  return (
    <Grid item container xs={12} spacing={3}>
      {DATA.ROLES.sections.map(roles => (
        <ImagesCard
          title={roles.title}
          description={roles.description}
          images={roles.images}
          onImage={setImageModal}
          key={roles.title}
          {...{social: roles.social || {}}}/>
      ))}
      <ImageModal image={imageModal} onClose={() => setImageModal('')} />
    </Grid>
  )
}

export default Roles
