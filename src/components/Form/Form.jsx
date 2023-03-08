import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Section } from './Form.Styled';
import { useDispatch } from 'react-redux';
import { ItemsSlice } from '../../redux/items';

export const Form = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    row: Yup.number()
      .integer('Must be more than 0')
      .max(50, 'Максимальне допустиме число 50!')
      .min(1, 'Мінімальне допустиме число 1!')
      .required("Це поле обов'язкове!"),

    column: Yup.number()
      .positive()
      .min(1, 'Мінімальне допустиме число 1!')
      .max(50, 'Максимальне допустиме число 50!')
      .required("Це поле обов'язкове!"),

    range: Yup.number()
      .positive()
      .min(1, 'Мінімальне допустиме число 1!')
      .max(50, 'Максимальне допустиме число 50!')
      .required("Це поле обов'язкове!"),
  });

  const formik = useFormik({
    initialValues: {
      row: '',
      column: '',
      range: '',
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      await dispatch(ItemsSlice.dataForm(values));
      actions.resetForm({
        values: {
          row: '',
          column: '',
          range: '',
        },
      });
    },
  });

  return (
    <Section>
      <h3 className="form-title">Створення матриці</h3>

      <form onSubmit={formik.handleSubmit} className="form">
        <div className="container-input">
          <label className="label-input">
            Кількість рядків:
            <input
              label="first name"
              name="row"
              className="form-input"
              placeholder="К-сть Рядків *"
              type="number"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('row')}
              value={formik.values.row}
            />
          </label>
          {formik.touched.row && formik.errors.row ? (
            <p className="form-input-error">{formik.errors.row}</p>
          ) : null}
        </div>

        <div className="container-input">
          <label className="label-input">
            Кількість колонок:
            <input
              name="column"
              className="form-input"
              placeholder="К-сть Колонок *"
              type="number"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('column')}
              value={formik.values.column}
            />
          </label>
          {formik.touched.column && formik.errors.column ? (
            <p className="form-input-error">{formik.errors.column}</p>
          ) : null}
        </div>

        <div className="container-input">
          <label className="label-input">
            X-діапазон:
            <input
              name="range"
              className="form-input"
              placeholder="Х - діапазон *"
              type="number"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('range')}
              value={formik.values.range}
            />
          </label>
          {formik.touched.range && formik.errors.range ? (
            <p className="form-input-error">{formik.errors.range}</p>
          ) : null}
        </div>

        <div className="buttons">
          <button className="button" type="submit" /* onClick={onLoginClick} */>
            Створити матрицю
          </button>
        </div>
      </form>
    </Section>
  );
};
