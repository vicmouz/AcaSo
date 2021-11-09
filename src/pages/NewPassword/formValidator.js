import {object, string, ref} from 'yup';

export default object().shape({
  password: string()
    .required('* Digite a sua nova senha')
    .min(6, '* Mínimo 6 caracteres')
    .matches(/^(?=.*[a-zA-Z])/, '* Senha deve conter letras e números')
    .matches(/^(?=.*[0-9])/, '* Senha deve conter letras e números')
    .matches(
      /^(?=.*?[#?!@$%^&*-])/,
      '* Senha deve conter ao menos um caractere especial',
    ),

  confirmPassword: string()
    .required('* Digite a confirmação da senha')
    .min(6, '* Mínimo 6 caracteres')
    .matches(/^(?=.*[a-zA-Z])/, '* Senha deve conter letras e números')
    .matches(/^(?=.*[0-9])/, '* Senha deve conter letras e números')
    .matches(
      /^(?=.*?[#?!@$%^&*-])/,
      'Senha deve conter ao menos um caractere especial',
    )
    .when('password', (password, field) =>
      password
        ? field
            .required('* Digite a confirmação da senha')
            .oneOf([ref('password')], '* Senhas não coincidem')
        : field,
    ),
});
