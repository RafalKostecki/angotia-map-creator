import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import scripts
import { deepCopy, matrixToIds } from '../../../../assets/scripts/matrix';
import { markSquare } from '../../../../assets/scripts/markSquare';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';

//Import actions
import { changeMapVertexWeightMatrix, changeMapVertexWeights } from '../../../../redux/actions/mapActions';


interface IPassageOption {
    closePopup: Function
}

const VertexWeightPopup: React.FC<IPassageOption> = ({ closePopup }) => {
    const [vertexWeightValue, setVertexWeightValue] = useState<string>("");
    const selectMatrix = deepCopy(useSelector(state => state.map.select.matrix));
    const vertexWeightMatrix = useSelector(state => state.map.vertex.matrix);
    const vertexWeights = deepCopy(useSelector(state => state.map.vertex.weights));
    const dispatch = useDispatch(); 


    const insertVertexWeight = () => {
        const potentialWeights = matrixToIds(selectMatrix);
        potentialWeights.forEach(location => {
            if (!vertexWeights.some(e => e.id === location.id)) {
                const newLocation = {
                    ...location,
                    destination: {
                        vertexWeightValue,
                    }
                }

                vertexWeights.push(newLocation);
              }
        })

        closePopup(false);
        dispatch(changeMapVertexWeights(vertexWeights));
        markSquare(vertexWeightMatrix, 'mapVertexWeightCanvas', changeMapVertexWeightMatrix, 'Vertex weight added', vertexWeightValue, 'vertexWeight')
    }

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup"> 
                <header className="insertPopup__header t-paragraph3Light">Add weight</header>
                <label className="insertPopup__label t-paragraph6Light">
                    Weight of vertex ({creatorConfig.vertexWeight.min} - {creatorConfig.vertexWeight.max})
                </label>
                <input type='text' value={vertexWeightValue} onChange={e => setVertexWeightValue(e.target.value)}/>

                <button type="submit" className="insertPopup__submit t-paragraphLight" onClick={() => insertVertexWeight()}> submit </button>
            </div>
        </div>
    )
}


export default VertexWeightPopup;