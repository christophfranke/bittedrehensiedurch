import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://bittedrehensiedurch.prismic.io/api/v2'
export default options => Prismic.getApi(apiEndpoint, options)
