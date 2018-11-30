import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'
oceanBeachTheme.googleFonts = [
  {
    name: "Catamaran",
    styles: [
      600
    ]
  },
  {
    name: "Merriweather Sans",
    styles: [
      400
    ]
  }
]

oceanBeachTheme.headerFontFamily = ["Catamaran"]
oceanBeachTheme.bodyFontFamily = ["Merriweather Sans"]

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5': {
    marginBottom: 0,
    marginTop: 0,
  }
})

const typography = new Typography(oceanBeachTheme)

export default typography
