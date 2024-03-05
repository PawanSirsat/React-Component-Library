import classNames from 'classnames'

const getModuleClasses = (cssModule, classkey) => {
  return (cssModule && cssModule[classkey]) || classkey
}

const getObjectClasses = (cssModule, object) => {
  return Object.keys(object).reduce((classes, classkey) => {
    const className = cssModule[classkey]
    return className ? { ...classes, [classkey]: object[classkey] } : classes
  }, {})
}

const getDynamicClasses = (cssModule, props, classes) => {
  if (!Array.isArray(classes)) {
    // Handle the case where classes is not an array
    return {}
  }
  return classes.reduce((classesObject, classkey) => {
    const propValue = props[classkey]
    const className = cssModule[`${classkey}-${propValue}`]

    return className && propValue
      ? { ...classesObject, [className]: propValue }
      : classesObject
  }, {})
}

export const getClasses =
  (cssModule) =>
  (props) =>
  (...args) => {
    return classNames(
      args.map((arg) => {
        if (Array.isArray(arg)) {
          return getDynamicClasses(cssModule, props, arg)
        } else if (typeof arg === 'string') {
          return getModuleClasses(cssModule, arg)
        } else if (typeof arg === 'object') {
          return getObjectClasses(cssModule, arg)
        }
      })
    )
  }
