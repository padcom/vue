/* @flow */

export function initFunctionalComponents (vm: Component) {
  var components = vm.$options.components
  if (components) {
    Object.keys(components).forEach(componentName => {
      var component = components[componentName]
      if (typeof component  === 'function') {
        debugger;
        components[componentName] = {
          functional: true,
          render: component
        }
      }
    })
  }
}
