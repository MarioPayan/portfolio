import React from 'react'
import {Helmet, HelmetData} from 'react-helmet-async'
import DATA from '../API/data'
import {getAssetURL} from '../utils/utils'

const Head = () => {
  const title = DATA.PERSONAL.name
  const description = DATA.PERSONAL.description.CHILL
  const image = getAssetURL('images/profile_pixel_LQ.png')
  const url = DATA.PERSONAL.url

  return (
    <Helmet helmetData={new HelmetData({})}>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
    </Helmet>
  )
}

export default Head
