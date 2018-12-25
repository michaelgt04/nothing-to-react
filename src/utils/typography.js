import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'
oceanBeachTheme.googleFonts = [
  {
    name: 'Open Sans',
    styles: [600],
  },
  {
    name: 'Raleway',
    styles: [300],
  },
]

oceanBeachTheme.headerFontFamily = ['Open Sans']
oceanBeachTheme.bodyFontFamily = ['Raleway']

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    color: 'rgba(0, 0, 0, .80)',
    maxWidth: '1400px',
    margin: 'auto'
  },
  'h1,h2,h3': {
    borderBottom: '3px solid #FEA680',
    display: 'inline-block',
    paddingBottom: '14px',
  },
  'h1,h2,h3,h4,h5': {
    margin: '1.5rem 0',
    fontWeight: 600,
  },
  p: {
    lineHeight: '1.82em',
    fontSize: '20px',
  },
})

const typography = new Typography(oceanBeachTheme)

export default typography
