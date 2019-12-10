function Confirm (props) {
  return new Promise(function (resolve, reject) {
    if (window.confirm(props)) {
      resolve(true)
    } else {
      resolve(false)
    }
  })
}
export default Confirm