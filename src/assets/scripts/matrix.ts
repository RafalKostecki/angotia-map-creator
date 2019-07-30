export const updateMatrixByTheOther = (rootMatrix: any[], upgradeMatrix: any[], setValue: number): any[] => {
	const copyOfRootMatrix = [...rootMatrix];
	const copyOfUpgradeMatrix = [...upgradeMatrix];
	console.log('rootMatrix', rootMatrix);
	console.log('upgradeMatrix', upgradeMatrix)
	copyOfUpgradeMatrix.forEach((yAxis: Array<number>, y:number) => {
		yAxis.forEach((field: number, x: number) => {
			const squareMatrix: Array<number> = [
				field[0][0],
				field[0][1],
				field[1][0],
				field[1][1]
			];

			squareMatrix.forEach((square: number, squareIndex: number) => {
				if (square === 1) {
					const fieldArray = squareIndex >= 2 ? 1 : 0;
					const squarePos = fieldArray === 0 ? squareIndex : squareIndex - 2;

					copyOfRootMatrix[y][x][fieldArray][squarePos] = setValue; //add new values to the rootMatrix
				}
			});

		})
	})

	return [...copyOfRootMatrix];
}