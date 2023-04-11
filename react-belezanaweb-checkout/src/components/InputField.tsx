import { InputHTMLAttributes } from 'react'
import Cleave from 'cleave.js/react'
import { CleaveOptions } from 'cleave.js/options'
import { Control, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { FormDataType } from '../pages/Checkout/Payment'
import styled from 'styled-components'

/* 
  Styles
*/
const S_InputField = styled.div(({ theme }) => ({
  fontSize: theme.font.size.sm,
  lineHeight: theme.font.lineHeight.amount,

  '& > label': {
    color: theme.colors.label,
    display: 'block',
    marginBottom: '0.3rem',
  },

  '& input': {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radii.r,
    color: theme.colors.black,
    padding: '0.875rem',
    width: '100%',

    '&::placeholder': {
      color: theme.colors.border,
    },

    '&:is(:focus-visible)': {
      outline: `1px solid ${theme.colors.border}`,
    },

    '&.invalid': {
      borderColor: theme.colors.error,
    },
  },

  '& .error-message': {
    color: theme.colors.error,
    fontSize: theme.font.size.xs,
    lineHeight: theme.font.lineHeight.itemName,
  },
}))

/* 
  Component
*/
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<FormDataType, any>
  label: string
  name: keyof FormDataType
  options: CleaveOptions
}

export function InputField({
  control,
  label,
  name,
  options,
  ...props
}: InputFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...fields }, formState: { errors } }) => {
        return (
          <S_InputField>
            <label htmlFor={name}>{label}</label>
            <Cleave
              htmlRef={ref}
              id={name}
              options={options}
              {...fields}
              {...props}
              className={errors[name] && 'invalid'}
            />
            <ErrorMessage
              name={name}
              errors={errors}
              render={({ message }) => (
                <span className="error-message">{message}</span>
              )}
            />
          </S_InputField>
        )
      }}
    />
  )
}
