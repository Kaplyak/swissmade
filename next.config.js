module.exports = {
  images: {
    domains: [
      'imageengine.victorinox.com',
      'content.rolex.com',
      'images-na.ssl-images-amazon.com',
      'images.sweetauthoring.com',
      'alpanddellcheese.com',
      'www.lindt.ch',
      'lonelyplanet-weblinc.netdna-ssl.com',
      'www.thespruceeats.com',
      'cailler.ch',
      'www.hublot.com'
    ]
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/cache')
    }
    return config
  },
}