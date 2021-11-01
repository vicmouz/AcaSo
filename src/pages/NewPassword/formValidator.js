import {object, string, ref} from 'yup';

export default object().shape({
  password: string().required('* Digite a sua nova senha'),
  confirmPassword: string()
    .required('* Digite a confirmação da senha')
    .when('newPassword', (newPassword, field) =>
      newPassword
        ? field
            .required('* Digite a confirmação da senha')
            .oneOf([ref('password')], '* Senhas não coincidem')
        : field,
    ),
});
