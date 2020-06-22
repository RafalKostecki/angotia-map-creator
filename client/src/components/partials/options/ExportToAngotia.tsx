
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../assets/interfaces/store';
import { prepareExternalCharData } from '../../../assets/scripts/utils/prepareExternalCharData';
import { CREATE_NPC } from '../../../api/mutations/npcs';
import { useMutation } from '@apollo/react-hooks';


interface IExportToAngotia {
  type?: string,
  text?: string
}

export const ExportToAngotia: React.FC<IExportToAngotia> = ({ type, text }) => {
  const { creator } = useContext(ContentContext);
  const [addNpc] = useMutation(CREATE_NPC);
  const charData = useSelector((state: IStore) => state.char);

  const exportHandler = (): void => {
    switch(type) {
      case 'char':
        const externalCharData = prepareExternalCharData(charData);
        console.log(externalCharData);
        addNpc({ variables: { input: externalCharData } });
      break;
    }
  };

  return (
    <span
      onClick={(): void => exportHandler()}
    > 
      {text ? text : creator?.panel?.options?.save?.content}  
    </span>
  );
};