import React, { useState } from 'react';

//Import data
import { exampleDialogs } from './exampleDialogs';
import { exampleMonologs } from './exampleMonologs';

//Import components
import Dialog from './Dialog';
import Monolog from './Monolog';

//Import scripts
import { 
  findConnectedDialog 
} from '../../../../assets/scripts/dialogs/findConnectedDialog';


interface IDialogs {
  type: string,
  addBtnText: string
}

const Dialogs: React.FC<IDialogs> = ({ type, addBtnText }) => {
  const [connectedDialogs, setConnectedDialogs] = useState<any[]>([]);

  const dialogsValidator = (beginId: number | string): void => {
    setConnectedDialogs(
      findConnectedDialog(exampleDialogs, beginId)
    );

    console.log('connectedDialogs', connectedDialogs);
  }

  const clearConnected = ():void => {
    setConnectedDialogs([]);
  }

  return (
    <div className="dialogs">
      <nav className="dialogs__nav">
        <ul>
          <li className="t-paragraph8Light"> { type } </li>
          <li className="t-paragraph5Normal">
            <span> { addBtnText } </span>
          </li>
        </ul>
      </nav>
      {
        type ==='dialogs' ? (
          exampleDialogs.length > 0 ? (
            exampleDialogs.map((dialog, index) => {
              return <Dialog 
                id={dialog.id}
                npc={dialog.npc}
                player={dialog.player}
                key={index}
                validatorFunc={dialogsValidator}
                connectedDialogs={connectedDialogs}
                clearValidator={clearConnected}
              />
            })
          ) : (
            <p className='dialogs--none t-paragraph5Normal'>
              There's no { type }
            </p>
          )
        ) : null
      }
      {
        type ==='monologs' ? (
          exampleMonologs.length > 0 ? (
            exampleMonologs.map((monolog, index) => {
              return <Monolog 
                id={monolog.id}
                content={monolog.content}
                key={index}
              />
            })
          ) : (
            <p className='dialogs--none t-paragraph5Normal'>
              There's no { type }
            </p>
          )
        ) : null
      }
    </div>
  )
}


export default Dialogs;