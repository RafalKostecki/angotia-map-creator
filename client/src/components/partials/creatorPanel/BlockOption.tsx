import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { markSquare } from '../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../assets/scripts/isEmptyMatrix';
import { setActionNote } from '../../../assets/scripts/notifications';

//Import configs
import creatorConfig from '../../../assets/configs/creatorConfig.json';

//Import actions
import { changeMapBlockMatrix } from '../../../redux/actions/mapActions';

//Import contexts
import { ContentContext } from '../../../Template';


const BlockOption = () => {
	const blockMatrix = useSelector(state => state.map.blockMatrix);
	const fillColor = creatorConfig.blockSquareColor;
	const selectMatrix = useSelector(state => state.ui.select.matrix);

	const blockHandler = (): void => {
		if (isEmptyMatrix(selectMatrix)) {
			setActionNote('Need to select fields', 'warning');
			return;
		}
		
		markSquare(
			blockMatrix, 
			'mapBlockCanvas', 
			changeMapBlockMatrix, 
			'Selected fields have been blocked', 
			fillColor, 
			'barrier'
		);
	};

	return (
		<ContentContext.Consumer>
			{({ creator }) => (
				<div 
					role="button" 
					className="option option--block" 
					onClick={(): void => blockHandler()} 
					data-title={creator.panel.options.addFileOption.dataTitle}
				>
					<div className="g-exitBtn"></div>
				</div>
			)}
		</ContentContext.Consumer>
	);
};


export default BlockOption;