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
      'www.hublot.com',
      'www.omegawatches.com',
      'www.cheesesfromswitzerland.com',
      'images.saymedia-content.com',
      'static.patek.com',
      'upload.wikimedia.org',
      'kbimages1-a.akamaihd.net',
      'www.audemarspiguet.com',
      'www.fairmondo.de'
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