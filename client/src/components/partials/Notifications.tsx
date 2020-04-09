import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import creatorConfig from '../../assets/configs/creatorConfig.json';
import { IStore } from '../../assets/interfaces/store';


let timer;
export const Notifications: React.FC = () => {
	const actionNote = useSelector((state: IStore) => state.ui.actionNote);
	const [note, setNote] = useState<string>(actionNote);
	const [opacityCSS, setOpacityCSS] = useState<number>(1);

	useEffect((): void => {
		clearTimeout(timer);

		if (opacityCSS === 0 && note !== actionNote) {
			setNote(actionNote);
			setOpacityCSS(1);
		}

		timer = setTimeout((): void => {
			setOpacityCSS(0);	
		}, creatorConfig.actionNoteDelay);
	});

	return (
		<div id="notifications" className="notifications" style={{opacity : opacityCSS}}>
			<span id="noteText"> { note } </span>
		</div>
	);
};