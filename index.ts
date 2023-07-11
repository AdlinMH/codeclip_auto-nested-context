import { generateComponent } from './_generate'

/** REGISTER the Contexts with 3 STEPS */

/** 1. import context provider used here */
import { ToastProvider } from './toast' // sample
import { CustomBottomSheetProvider } from './customBottomSheet' // sample

/** 2. add context provider used here. NB: orders matters */
const registeredProvider = [
  ToastProvider,
  CustomBottomSheetProvider,
]

/** 3. export all context provider used here */
export * from './toast'
export * from './customBottomSheet'

// generate context provider component
export const ContextProviderCollection = generateComponent(registeredProvider)


/**
 * RESULT:
 * 
 * <ToastProvider>
 *   <CustomBottomSheetProvider>
 *     .... (children components)
 *   </CustomBottomSheetProvider>
 * </ToastProvider>
 *
 */
