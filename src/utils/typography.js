import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'
oceanBeachTheme.googleFonts = [
  {
    name: "Archivo Narrow",
    styles: [
      600
    ]
  },
  {
    name: "Roboto",
    styles: [
      400
    ]
  }
]

oceanBeachTheme.headerFontFamily = ["Archivo Narrow"]
oceanBeachTheme.bodyFontFamily = ["Roboto"]

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'body': {
    color: 'rgba(0, 0, 0, .80)'
  },
  'h1,h2,h3,h4,h5': {
    margin: '1.5rem 0',
    fontWeight: 600
  },
  'p': {
    lineHeight: '1.82em',
    fontSize: '18px'
  }
})

const typography = new Typography(oceanBeachTheme)

export default typography
