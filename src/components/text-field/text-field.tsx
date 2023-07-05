import { TextFieldProps } from "./text-field.props"
import { FieldHookConfig, useField, ErrorMessage } from "formik"

const TextField = ({...props}: TextFieldProps & FieldHookConfig<string>) => {

    const [field, meta] = useField(props)

  return (
    <div className="inline-block w-full">
      <label className={`inline-block w-full ${meta.touched && meta.error && "border-red-400 border-2 rounded "}`}>
          <input className="input" {...props} {...field}/>
      </label>
      <p className="text-red-400">
        <ErrorMessage name={field.name}/>
      </p>
    </div>
  )
}

export default TextField