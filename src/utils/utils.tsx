export const image404 = 'images/404.jpg'

export const getAssetURL = (url: string): string => (url ? `${process.env.PUBLIC_URL}/${url}` : image404)

export const getDevIconURL = (url: string): string => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${url}`

export const getLabelFromKey = (key: string): string => key
  ?.split('_')
  .map(w => (w.length ? `${w.charAt(0).toUpperCase()}${w.slice(1)}` : w))
  .filter(w => w)
  .join(' ') || key

export const getKeyFromLabel = (label: string): string => label.toLowerCase().split(' ').join('_')

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const sectionTitle = (key: string) => {
  window.history.replaceState(null, '', `/${getKeyFromLabel(key)}`)
}
