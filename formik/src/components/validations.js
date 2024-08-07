import {object, string} from 'yup'

const validations= object({
    email:string().email(),
})

export default validations;