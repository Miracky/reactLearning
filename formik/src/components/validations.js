import {object, ref, string} from 'yup'

const validations= object({
    email:string().email('Gecerli bir email giriniz.').required('Zorunlu alan'),
    password: string().min(5, 'Parolaniz en az 5 karakter olmalidir.').required('Zorunlu alan'),
    passwordConfirm: string().oneOf([ref('password')],'Parolalar uyusmuyor.').required('Zorunlu alan')
})

export default validations;