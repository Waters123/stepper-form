import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Stepper, Step, StepLabel, Typography } from '@material-ui/core'

import { InputComponent } from '../../components/input'
import { ScrollBar } from '../../components/scrollBar'

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;

  .form-inputs {
    display: flex;
  }

  form {
    width: 60%;
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    width: '64%',
    margin: '0 auto',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad']
}

export function Home() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [condintionsScrolled, setcondintionsScrolled] = useState(false)
  const steps = getSteps()
  const [form, setForm] = useState([
    {
      formControl: {
        Name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
          isConstrolValid: false,
          touched: false,
        },
        Street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
          isConstrolValid: false,
          touched: false,
        },
        Adress: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
          isConstrolValid: false,
          touched: false,
        },
        Phone: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
          },
          value: '',
          validation: {},
          isConstrolValid: true,
          touched: false,
        },
        Country: {
          elementType: 'dropDown',
          elementConfig: {
            options: [
              { value: 'GEO', displayValue: 'GEORGIA' },
              { value: 'USA', displayValue: 'USA' },
            ],
          },
          value: '',
          validation: { required: true },
          isConstrolValid: false,
          touched: false,
        },
        Traki: {
          elementType: 'dropDown',
          elementConfig: {
            options: [
              { value: '', displayValue: 'Clear' },
              { value: 'GEO', displayValue: 'GEORGIA' },
              { value: 'USA', displayValue: 'USA' },
            ],
          },
          value: '',
          validation: { required: true },
          isConstrolValid: false,
          touched: false,
        },
      },
      formValid: false,
    },
    {
      formControl: {
        Name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
          isConstrolValid: false,
          touched: false,
        },
        Street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
          isConstrolValid: false,
          touched: false,
        },
        Adress: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
          isConstrolValid: false,
          touched: false,
        },
        Phone: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
          },
          value: '',
          validation: {},
          isConstrolValid: true,
          touched: false,
        },
      },
      formValid: false,
    },
    {
      formControl: {
        TermsAndCondintions: {
          elementType: 'checkBox',
          elementConfig: {
            type: 'checkBox',
          },
          value: false,
          validation: { requred: true },
          isConstrolValid: false,
          touched: false,
        },
      },
      formValid: false,
    },
  ])

  function checkValidity(validation, value) {
    let isValid = true
    if (validation.required) {
      isValid = value ? value.trim() !== '' && isValid : false
    }

    return isValid
  }

  function handleChange(formControlName, event) {
    const formCopy = [...form]

    const formControls = { ...formCopy[activeStep].formControl }
    formControls[formControlName].value = event.target.value || event.target.checked
    formControls[formControlName].touched = true
    formControls[formControlName].isConstrolValid = checkValidity(
      formControls[formControlName].validation,
      formControls[formControlName].value,
    )

    formCopy[activeStep].formControl = formControls

    setForm(formCopy)
  }

  function handleNext(event) {
    event.preventDefault()
    const formCopy = [...form]

    const formControls = { ...formCopy[activeStep].formControl }
    let formValid = true

    for (let key in formControls) {
      formValid = formControls[key].isConstrolValid && formValid
      formControls[key].touched = true
    }

    formCopy[activeStep].formControl = formControls
    formCopy[activeStep].formValid = formValid

    const formData = {}

    if (formValid) {
      for (let key in formControls) {
        formData[key] = formControls[key].value
      }
      setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    setForm(formCopy)
  }

  const updatedFormsArray = useMemo(() => createTwoDimensionalForms(form[activeStep]), [form, activeStep])

  const isStepOptional = step => {
    return step === 1
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.")
  //   }

  //   setActiveStep(prevActiveStep => prevActiveStep + 1)
  //   setSkipped(prevSkipped => {
  //     const newSkipped = new Set(prevSkipped.values())
  //     newSkipped.add(activeStep)
  //     return newSkipped
  //   })
  // }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <FormWrapper>
              <form>
                {activeStep === steps.length - 1 ? <ScrollBar setcondintionsScrolled={setcondintionsScrolled} /> : null}
                {updatedFormsArray.map((formControlsArray, index) => {
                  return (
                    <div className="form-inputs" key={index}>
                      {formControlsArray.map(formControl => {
                        return (
                          <InputComponent
                            key={formControl.id}
                            elementType={formControl.elementType}
                            val={formControl.value}
                            elementConfig={formControl.elementConfig}
                            name={formControl.id}
                            changed={handleChange}
                            validation={formControl.validation}
                            isConstrolValid={formControl.isConstrolValid}
                            touched={formControl.touched}
                            condintionsScrolled={condintionsScrolled}
                          />
                        )
                      })}
                    </div>
                  )
                })}

                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>

                  <Button
                    disabled={activeStep === steps.length - 1 ? !condintionsScrolled : false}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </form>
            </FormWrapper>
          </div>
        )}
      </div>
    </div>
  )
}

function createTwoDimensionalForms(form) {
  let formElementsArray = []
  if (form) {
    for (let key in form.formControl) {
      formElementsArray.push({
        id: key,
        ...form.formControl[key],
      })
    }
  }

  let twoDimensionalForms = []
  for (let index = 0; index < formElementsArray.length; index += 2) {
    twoDimensionalForms.push(formElementsArray.slice(index, index + 2))
  }

  return twoDimensionalForms
}
