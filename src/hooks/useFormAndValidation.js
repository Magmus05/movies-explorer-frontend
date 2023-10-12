import { useState, useCallback } from "react";

export function useFormAndValidation(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (e.target.validationMessage === "Введите данные в указанном формате." && e.target.name === "name") {
      setErrors({...errors, [name]: "Имя должно содержать только латиницу, кириллицу, пробел или дефис"});
    } else {
      setErrors({ ...errors, [name]: e.target.validationMessage });
    }

    setIsValid(e.target.closest("form").checkValidity());
    const btn = e.target.closest("form").querySelector("[name='buttonForm']");
    if (e.target.closest("form").checkValidity()) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}

// запуск валидации
//  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation()
