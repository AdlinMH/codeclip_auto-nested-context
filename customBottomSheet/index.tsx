import React, { createContext, useContext, useState } from 'react'
import CustomBottomSheet, { CustomBottomSheetProps } from '@/Components/CustomBottomSheet'

const CustomBottomSheetContext = createContext<any>({})

export const useCustomBottomSheetContext = () => useContext(CustomBottomSheetContext)

export const CustomBottomSheetProvider = ({ children }: { children: any }) => {
  const [props, setProps] = useState<CustomBottomSheetProps>({ isVisible: false, children: null })

  return (
    <CustomBottomSheetContext.Provider value={setProps}>
      {children}

      <CustomBottomSheet {...props} />
    </CustomBottomSheetContext.Provider>
  )
}
