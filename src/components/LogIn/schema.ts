import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);

export const schema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required('Обязательное поле')
        .matches(regExpEmail, 'Неверный формат почты'),
    password: yup
        .string()
        .trim()
        .required('Обязательное поле')
        .min(5, 'Необходимо минимум 5 символов'),
});
