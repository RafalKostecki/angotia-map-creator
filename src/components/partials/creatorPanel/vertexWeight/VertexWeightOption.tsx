import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import mapConfig from '../../../../assets/configs/map.config.json';
import { matrixToIds } from '../../../../scripts/parsers/matrixToIds';
import { deepCopy } from '../../../../scripts/utils/deepCopy';
import { markSquare } from '../../../../scripts/matrix/markSquare';
import { isEmptyMatrix } from '../../../../scripts/validators/isEmptyMatrix';
import { addNotification } from '../../../../scripts/utils/notifications';
import { VertexWeightPopup } from './VertexWeightPopup';
import { 
    changeMapVertexWeightMatrix, 
    changeMapVertexWeights 
} from '../../../../store/actions/mapActions';
import { ContentContext } from '../../../../Template';
import { IStore } from '../../../../interfaces/store.interface';
import { Canvas } from '../../../../models/canvas.model';
import { Notification } from '../../../../models/notification.model';
import { MatrixFillColor } from '../../../../models/matrixFillColor.model';


let pressedKey: string | null = null;
document.addEventListener('keydown', event => pressedKey = event.key);
document.addEventListener('keyup', () => pressedKey = null);

export const VertexWeightOption: React.FC = () => {
    const { notifications, creator } = useContext(ContentContext);
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const selectMatrix = deepCopy(useSelector((state: IStore) => state.ui.select.matrix));
    const vertexWeightMatrix = useSelector((state: IStore) => state.map.vertex.matrix);
    const vertexWeights = deepCopy(useSelector((state: IStore) => state.map.vertex.weights));
    const dispatch = useDispatch(); 

    const vertexHandler = (): void => {
        if (isEmptyMatrix(selectMatrix)) {
            addNotification(notifications?.options?.vertex?.select, Notification.error);
            return;
        }

        pressedKey === mapConfig?.secondOptionKeyCode ? deleteVertices() : setIsPopup(true);
        pressedKey = null;
    };
    
    const deleteVertices = (): void => {
        const deleteLocations = matrixToIds(selectMatrix);

        deleteLocations.forEach(location => {
            if (vertexWeights.some(e => e.id === location.id)) {
                const index = vertexWeights.findIndex(x => x.id === location.id);

                vertexWeights.splice(index, 1);
              }
        });

        dispatch(changeMapVertexWeights(vertexWeights));
        markSquare(
            vertexWeightMatrix, 
            Canvas.vertexWeight, 
            changeMapVertexWeightMatrix, 
            notifications?.options?.vertex?.delete, 
            '', 
            MatrixFillColor.vertexWeight
        );
    };

    return (
        <>
            { isPopup ? ReactDOM.createPortal(
                <VertexWeightPopup isActivePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                role="button" 
                className="option" 
                onClick={(): void => vertexHandler()} 
                data-title={ creator?.panel?.options?.vertex?.dataTitle }
            >
				<div className="vertexWeightOption">
					<div className="vertexWeightOption__number">
                        { mapConfig?.vertexWeight?.max }
					</div>
				</div>
			</div>
        </>
    );
};