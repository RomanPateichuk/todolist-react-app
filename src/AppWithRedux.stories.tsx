import { action } from '@storybook/addon-actions'
import AppWithRedux from './AppWithRedux/AppWithRedux'
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react'
import { ReduxStoreProviderDecorator } from './stories/ReduxStoreProviderDecorator'
export default {
  title: 'AppWithRedux Component',
  component: AppWithRedux,
  decorators: [ReduxStoreProviderDecorator]
}

export const AppWuthReduxBaseExample = () => {
  return <>
    <AppWithRedux />
  </>

}