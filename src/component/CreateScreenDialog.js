import * as React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';


const CreateScreenDialog = (props) => {
  const { visible, hideDialog } = props
  console.log('CreateScrDial', visible)
  return (


    <Portal>
      <Dialog visible={visible} onDismiss={() => hideDialog()}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">Sorry ! This Feature is not Avaliable</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => hideDialog()}>Close</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>





  );

};

export default CreateScreenDialog;