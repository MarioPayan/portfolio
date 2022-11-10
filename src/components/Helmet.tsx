import React from 'react'
import {Helmet as ReactHelmet} from 'react-helmet'
import {getAssetURL} from '../utils/utils'

const Helmet = () => {
  const title = 'Mario Payan'
  const description = 'Hey, I\'m Mario, a Colombian software developer and part-time empirical musician, hardcore gamer, unstoppable traveler, and according to my mom, the sexiest person in the world. ¯\\_(ツ)_/¯'
  const image = getAssetURL('images/profile_pixel_LQ.png')

  return (
    <ReactHelmet
      defaultTitle={title}
      titleTemplate={`${title} - %s`}
      meta={
        [
          // HTML Meta Tags
          {name: 'description', content: description},

          // Google / Search Engine Tags
          {itemprop: 'name', content: title},
          {itemprop: 'description', content: description},
          {itemprop: 'image', content: image},

          // Facebook Meta Tags
          {property: 'og:url', content: 'mariopayan.com'},
          {property: 'og:type', content: 'website'},
          {property: 'og:title', content: title},
          {property: 'og:description', content: description},
          {property: 'og:image', content: image},

          // Twitter Meta Tags
          {property: 'twitter:card', content: 'summary_large_image'},
          {property: 'twitter:title', content: title},
          {property: 'twitter:description', content: description},
          {property: 'twitter:image', content: image},
        ] as any[]
      }/>
  )
}

export default Helmet
