import { store } from '../../App';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import interfaces
import { IMapSize } from '../interfaces/mapInterfaces';


export const generateEmptyMapMatrix = ():Array<any> => {
	const storeData = store.getState();
	const mapSize: IMapSize = storeData.map.size;

	const newMatrix: Array<any> = [...Array(mapSize.y)].map(() => {
		return [...Array(mapSize.x)].map(() => {
			return [
				[0, 0],
				[0, 0]
			]
		})
	})

	return newMatrix;
}


export const emptyMapCanvasCtx = (canvasId: string) => {
	const canvas: any = document.getElementById(canvasId);
	const context: any = canvas.getContext("2d");

	// Store the current transformation matrix
	context.save();

	// Use the identity matrix while clearing the canvas
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Restore the transform
	context.restore();

	console.log(`Canvas ${canvasId} context has been cleared.`);

	return context;
}