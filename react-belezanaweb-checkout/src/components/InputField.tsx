import { InputHTMLAttributes } from 'react'
import Cleave from 'cleave.js/react'
import { CleaveOptions } from 'cleave.js/options'
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<FieldValues, any>
  label: string
  name: string
  options?: CleaveOptions
}

export function InputField({
  control,
  label,
  name,
  options,
  ...props
}: InputFieldProps) {
  // The easiest way to make Cleave free text is to not use it
  const whichOne = ({
    ref,
    value,
    ...field
  }: ControllerRenderProps<FieldValues, string>) => {
    if (options === undefined) {
      return <input ref={ref} id={name} {...props} {...field} />
    } else {
      return (
        <Cleave
          htmlRef={ref}
          id={name}
          options={options!}
          {...props}
          {...field}
        />
      )
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => {
        return (
          <div>
            <label htmlFor={name}>{label}</label>
            {whichOne(field)}
            <ErrorMessage
              name={name}
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </div>
        )
      }}
    />
  )
}
