import React from 'react'
import { Input, InputLabel, FormControl, TextField, MenuItem, FormControlLabel, Checkbox } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export function InputComponent({
  elementConfig,
  elementType,
  val,
  name,
  changed,
  touched,
  isConstrolValid,
  validation,
  condintionsScrolled,
}) {
  const classes = useStyles()
  let error = false

  if (!isConstrolValid && touched && validation) {
    error = true
  }
  let inputElement
  switch (elementType) {
    case 'input':
      inputElement = (
        <>
          <InputLabel required={validation.required} error={error} htmlFor={name}>
            {name}
          </InputLabel>
          <Input id={name} error={error} {...elementConfig} value={val} onChange={event => changed(name, event)} />
        </>
      )
      break
    case 'dropDown':
      inputElement = (
        <>
          <TextField
            id={name}
            required={validation.required}
            error={error}
            select
            label="Select Country"
            value={val ? val : ''}
            onChange={event => changed(name, event)}
          >
            {elementConfig.options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.displayValue}
              </MenuItem>
            ))}
          </TextField>
        </>
      )
      break
    case 'checkBox':
      inputElement = (
        <FormControlLabel
          control={<Checkbox disabled={!condintionsScrolled} checked={val} onChange={event => changed(name, event)} color="primary" />}
          label="Primary"
        />
      )
      break
  }

  return (
    <FormControl fullWidth className={classes.margin}>
      {inputElement}
    </FormControl>
  )
}
