import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';

//Import actions
import { changeDialogs } from '../../../../redux/actions/charActions';

//Import interfaces
import { IDialog } from '../../../../assets/interfaces/dialogsInterfaces';


interface IEditDialog {
  dialogId: number,
  closePopup: Function
}

const EditDialog: React.FC<IEditDialog> = ({ dialogId, closePopup }) => {
  const dialogsData: any[] = useSelector(state => state.char.dialogs);
  const dispatch: Function = useDispatch();
  const dialogData = dialogsData.find((dialog: IDialog): boolean => dialog.id === dialogId);
  console.log(dialogData);

  const submitHandler = (): void => {
    closePopup(false);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={():void => closePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          Edit dialog
        </header>
        <CharInputField
          label='ID - auto generated'
          inputValue={dialogId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          Npc dialog
        </label>
        <textarea
          value={'npcText'} 
          // onChange={e => setNpcText(e.target.value)}
        />
        {/* {
          (npcTextErr) ? (
            <span className="insertPopup--error">You need to type npc dialog</span>
          ) : null
        } */}
        
        <div className="playerDialogsWrapper">
          {/* { 
            temponaryPlayerDialogs.map((playerDialog, index) => {
              return <PlayerDialog playerId={playerDialog.id} key={index} />;
            })
          } */}
        </div>      

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={(): void => submitHandler()} 
          // disabled={npcTextErr}
        > 
          submit 
        </button>
      </div>
    </div>
  );
};

export default EditDialog;