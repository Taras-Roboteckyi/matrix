import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Section } from './Form.Styled';
/* import { useDispatch } from 'react-redux'; */
/* import { authOperations } from '../../redux/authorization'; */

export const Form = () => {
  /* const dispatch = useDispatch(); */

  const validationSchema = Yup.object({
    row: Yup.string()
      .min(3, 'Має містити мінімум 3 символи!')
      .max(254, 'Не може містити більше 254 символів!')
      .required("Це поле обов'язкове!"),
    column: Yup.string()
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
        'Неналежна назва ел. пошти',
      )
      .min(3, 'Має містити мінімум 3 символи!')
      .max(254, 'Не може містити більше 254 символів!')
      .required("Це поле обов'язкове!"),
    range: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?!.*[^a-zA-Z0-9])/,
        'Має містити мінімум одну латинську літеру, одну цифру, без спеціальних символів',
      )
      .min(8, 'Має містити мінімум 8 символів!')
      .max(100, 'Не може містити більше 100 символів!')
      .required("Це поле обов'язкове!"),
  });

  const formik = useFormik({
    initialValues: {
      row: '',
      column: '',
      range: '',
    },
    validationSchema,
    onSubmit: async values => {
      /* await dispatch(authOperations.register(values)) */
    },
  });

  return (
    <Section>
      <h2 className="form-title">Реєстрація</h2>

      <form onSubmit={formik.handleSubmit} className="form">
        <input
          name="row"
          className="form-input"
          placeholder="Рядок *"
          type="number"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('row')}
          value={formik.values.row}
        />
        {formik.touched.row && formik.errors.row ? (
          <p className="form-input-error">{formik.errors.row}</p>
        ) : null}

        <input
          name="column"
          className="form-input"
          placeholder="Колонка *"
          type="number"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('column')}
          value={formik.values.column}
        />
        {formik.touched.column && formik.errors.column ? (
          <p className="form-input-error">{formik.errors.column}</p>
        ) : null}

        <input
          name="range"
          className="form-input"
          placeholder="Пароль *"
          type="number"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('range')}
          value={formik.values.range}
        />
        {formik.touched.range && formik.errors.range ? (
          <p className="form-input-error">{formik.errors.range}</p>
        ) : null}

        <div className="buttons">
          <button className="login-button" type="button" /* onClick={onLoginClick} */>
            Створити матрицю
          </button>
        </div>
      </form>
    </Section>
  );
};
