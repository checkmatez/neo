import * as validator from 'validator'

export default event => {
  const LOCALE = 'ru-RU'
  const { type } = event.data

  if (type === 'PHONE_NUMBER') {
    event.data.value = event.data.value.replace(/\D/g, '')
  }

  // VALIDATIONS
  if (type === 'EMAIL' && !validator.isEmail(event.data.value)) {
    return {
      error: 'Email is not valid!',
    }
  }

  if (type === 'PHONE_NUMBER' && !validator.isMobilePhone(event.data.value, LOCALE)) {
    return {
      error: 'Phone number is not valid!',
    }
  }

  // TRANSFORMATIONS
  if (type === 'EMAIL') {
    event.data.value = validator.normalizeEmail(event.data.value)
  }

  return event
}
