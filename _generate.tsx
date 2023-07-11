import React from 'react'

type ProviderType = (prop: { children: any }) => JSX.Element
type ChildrenType = any
type GeneratedProviderType = { Component?: ProviderType, children?: ChildrenType }

const generateProviderObject = (registeredProvider: ProviderType[]) => {
  let Obj: GeneratedProviderType = {}
  let pivot: { children?: any } = {}

  registeredProvider.map((Provider, i) => {
    if (i === 0) {
      Obj = { Component: Provider, children: null }
      pivot = Obj
    } else {
      pivot.children = { Component: Provider, children: null }
      pivot = pivot.children
    }
  })
  return Obj
}

const serializeProviderComponent = (Provider: GeneratedProviderType, lastChildren: ChildrenType) => {
  const { Component, children } = Provider
  return (
    <Component>
      {children ? serializeProviderComponent(children, lastChildren) : lastChildren}
    </Component>
  )
}

export const generateComponent = (registeredProvider: ProviderType[]) => ({ children }) => {
  const providersObj = generateProviderObject(registeredProvider)
  return serializeProviderComponent(providersObj, children)
}
