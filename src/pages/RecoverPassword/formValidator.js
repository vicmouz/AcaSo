import {object, string} from 'yup';

export default object().shape({
  email: string()
    .email('E-mail inválido')
    .required('* Digite o seu e-mail'),
});
