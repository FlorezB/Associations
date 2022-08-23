const associations = require('../associations')

const checkIfExists = (req, res, next) => {
  const { slug } = req.params

  const association = associations.find(association => {
    return association.slug === slug
  })

  if (association) {
    req.association = association
    next()
  } else {
    res.status(404).json('Not found')
  }
}

module.exports = {
  checkIfExists
}