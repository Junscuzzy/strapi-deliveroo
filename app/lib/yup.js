import * as Yup from 'yup'

Yup.setLocale({
  string: {
    min: `Minimum $\{min} letters`,
    max: `Maximum $\{max} letters`,
    email: `This field must be an email`
  },
  mixed: {
    required: 'This field is required'
  }
})

export default Yup
