import React, {
  createContext, RefObject, useContext, useRef,
} from 'react'
import Toast from 'react-native-easy-toast'

import ToastComponent from '@/Components/Toast'

const ToastContext = createContext<RefObject<Toast> | Record<string, any>>({})

export const useToastContext = () => useContext(ToastContext)

export const ToastProvider = ({ children }: { children: any }) => {
  const toastRef = useRef<Toast>(null)

  return (
    <ToastContext.Provider value={toastRef}>
      {children}

      <ToastComponent componentRef={toastRef} />
    </ToastContext.Provider>
  )
}
