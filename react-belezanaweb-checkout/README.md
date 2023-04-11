# PS

1. The credit card number must be a valid number. Examples:

Visa: 4111 1111 1111 1111
Mastercard: 5555 5555 5555 4444
American Express: 3782 8224 6310 005
Discover: 6011 1111 1111 1117
JCB: 3530 1113 3330 0000
Diners Club: 3056 9309 0259 04
UnionPay: 6221 8831 0000 0000 000
Maestro: 6759 6498 2643 8453
Mir: 2201 2201 2201 2201
Elo: 6363 1811 1111 1110

# Questions

1. How to make validator.isDate() work for 'MM/YY' format? I tried set different format but it did not work!

# What I Learned

1. Note that in this configuration, the OrderSummary component will only be rendered when the user navigates to the /order path while on the Home page. If the user navigates directly to the /order path, they will not see the Home component.

2. Also, make sure that you're using the Outlet component from react-router-dom inside the Home component. The Outlet component renders the child routes nested under the current route.

3. @types/ for Cleave and validator

4. Pass ref to Cleave so it works altogether with Controller

5. Portals!

6. I just can't make input's :invalid works. I had to added .invalid class when there is an error in the field.

  I tried: setError, shouldUseNativeValidation, ConstraintValidation API (it worked but react-hook-form has no idea of it). Also tried to select the input that is followed by .error-message using :has().

  ```tsx
  function onFailSubmit(errors: FieldErrors<FormDataType>) {
    console.log(errors)
    // ? Why is setError not firing :invalid 😡
    // ? Why is [shouldUseNativeValidation] crashing the app
    Object.entries(errors)
      .map(([name, error]) => ({
        name: name as keyof FormDataType,
        type: error?.type as string,
        message: error?.message,
      }))
      .forEach(({ name, type, message }) => {
        setError(name, { type, message })
      })
  }
  ```

# Shit

1. <https://github.com/remix-run/react-router/discussions/9792>
