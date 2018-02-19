
// Poderia ate passar o req aqui e realizar o send com base no result
exports.handleAsyncMethod = async (method, args) => {
  try {
    const result = await method(...args)
    return result
  } catch (err) {
    console.log(err)
    return 'error'
  }
}
