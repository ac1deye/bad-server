import { doubleCsrf } from 'csrf-csrf'
import { csrfOptions } from '../config'

const { generateToken, doubleCsrfProtection } =
    doubleCsrf(csrfOptions)

export { generateToken, doubleCsrfProtection }
