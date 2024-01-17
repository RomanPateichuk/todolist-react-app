import React from 'react';
import { action } from '@storybook/addon-actions'
import { AddItemForm } from './AddItemForm/AddItemForm'

export default {
  title: 'AddItemForm Component',
  component: AddItemForm,
}

const callback = action('Button "add" was pressed')

export const AddItemFormBaseExample = (props: any) => {
  return <AddItemForm addItem={callback} />
} 