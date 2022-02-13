export default doc => ({
  page: doc.uid === 'home' ? '/' : `/${doc.uid}`,
})[doc.type]
