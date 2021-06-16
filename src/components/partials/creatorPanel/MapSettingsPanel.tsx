import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../ActionInputField';
import { setMapDesc, setMinEntryLevel, changeMapName } from '../../../store/actions/mapActions';
import { IStore } from '../../../interfaces/store.interface';
import { useTranslation } from 'react-i18next';


export const MapSettingsPanel: React.FC = () => {
	const { t } = useTranslation(['common']);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const description = useSelector((state: IStore) => state.map.description);
	const [descValue, setDescValue] = useState<string>(description);
	const mapInternalId = useSelector((state: IStore) => state.map.internalId);
	const minEntryLevel = useSelector((state: IStore) => state.map.minEntryLevel);
	const mapSize = useSelector((state: IStore) => state.map.size);
	const boardName = useSelector((state: IStore) => state.map.mapName);
	const dispatch = useDispatch();

	const settingsPanelStyles = {
		left: isOpen ? '0' : '-300px'
	};

	return (
		<>
			<div 
				className="g-sidePanelSwitch g-sidePanelSwitch--statisticPanel t-paragraph4Normal" 
				onClick={() => setIsOpen(true)}
			> 
				{ 'creator?.settingsPanel?.open' }
			</div>
			<aside 
				className="g-sidePanelWrapper g-sidePanelWrapper--left" 
				style={settingsPanelStyles}
			>
				<div className="g-sidePanel g-sidePanel--left">
					<ActionInputField
						label={'creator?.settingsPanel?.id'}
						inputValue={mapInternalId}
						inputDisabled={true}
					/>
					<ActionInputField
						label={'creator?.settingsPanel?.size'}
						inputValue={`${mapSize.x} x ${mapSize.y}`}
						inputDisabled={true}
					/>
					<ActionInputField
						label={'creator?.settingsPanel?.boardName'}
						inputValue={boardName}
						action={changeMapName}
					/>
					<ActionInputField
						label={'creator?.settingsPanel?.minLevel'}
						inputValue={minEntryLevel}
						action={setMinEntryLevel}
					/>

					<div className="g-separeTextarea">
						<label className="g-separeTextarea__label t-paragraph6Light">
							{ 'creator?.settingsPanel?.description' }
						</label>
						<textarea
							className="g-separeTextarea__area g-separeTextarea__area--mapDesc"
							value={descValue}
							onChange={e => setDescValue(e.target.value)}
							onBlur={() => dispatch(setMapDesc(descValue))}
						/>
					</div>

					<div
						className="g-sidePanel__switch t-paragraph5Normal" 
						onClick={() => setIsOpen(false)}
					>
						<span>
							{ t('common:close') }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};