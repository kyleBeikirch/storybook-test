module.exports = ({ config }) => {
  config.resolve.alias = {
    'react-native-svg': 'svgs'
  }
  config.resolve.extensions.push('.ts', '.tsx', '.mdx', '.js')
  return config
}
