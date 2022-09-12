import React from "react";
import { Field } from "formik";
import TextField from "@mui/material/TextField";

const MyTextField = ({ label, name, textfield, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const { value, ...restField } = field;

        return (
          <TextField
            id={name}
            name={name}
            label={label}
            helperText={form.touched[name] && form.errors[name]}
            error={form.touched[name] && Boolean(form.errors[name])}
            variant="outlined"
            fullWidth
            value={value ?? ""}
            {...restField}
            {...rest}
            {...textfield}
          />
        );
      }}
    </Field>
  );
};

export default MyTextField;
