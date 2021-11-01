import {object, string} from 'yup';

export default object().shape({
  email: string()
    .email('* E-mail inválido')
    .required('* Digite o seu e-mail'),
  password: string().required('* Digite a sua senha'),
});
