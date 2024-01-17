import { action } from '@storybook/addon-actions'
import { EditableSpan } from './EditableSpan'
export default {
  title: 'EditableSpan Component',
  component: EditableSpan
}


const saveEditCallBack = action('title save')



export const TaskBaseExample = (props: any) => {
  return <>
    <EditableSpan title={'Start value'} saveEdit={saveEditCallBack} />
  </>
}
