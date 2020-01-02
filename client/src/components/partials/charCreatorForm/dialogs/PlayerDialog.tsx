import React, { useState } from 'react';

//Import interfaces
import { INewDialog } from '../../../../assets/interfaces/dialogsInterfaces';

//Import components
import CharInputField from '../CharInputField';


const PlayerDialog: React.FC = () => {
  const dialogId = Math.random();
  const [newDialogText, setNewDialogText] = useState<string>('');

  return (
    <React.Fragment>
      <CharInputField
        label='Player dialog ID'
        inputValue={dialogId}
        inputDisabled={true}
      />
      <label className="insertPopup__label t-paragraph6Light">
        Player dialog
      </label>
      <textarea
        value={newDialogText} 
        onChange={e => setNewDialogText(e.target.value)}
      />
      <CharInputField
        label='Next dialog'
        inputValue={''}
        inputDisabled={false}
      />
    </React.Fragment>
  );
};

export default PlayerDialog;