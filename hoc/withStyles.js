import React from 'react'
import { getClasses } from '../helpers/styles'

const withStyles = (styles) => (WrappedComponent) => {
  const withStylesComponent = (props) => {
    const allProps = { ...WrappedComponent.defaultProps, ...props }

    return (
      <WrappedComponent getStyles={getClasses(styles)(allProps)} {...props} />
    )
  }
  withStylesComponent.displayName = WrappedComponent.displayName
  return withStylesComponent
}

export default withStyles
