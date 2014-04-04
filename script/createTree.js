
function clickHandler(eventArgs) {

	if(node.isEnable()){
		node.disable();

		node.getStroke().setOpacity(0.5);
    	node.getFill().setOpacity(0.5);
    	node.getFill().setColor("rgb(255,0,0)");

	} else {
		node.enable();

		node.getStroke().setOpacity(1);
    	node.getFill().setOpacity(1);
    	node.getFill().setColor("rgb(0,0,255)");
    
	}

      // if(node.isEnable){
      // 	alert("isEnable");
      // }
}

function createNode(myPanel, coordX, coordY){
    node = myPanel.createCircle();
    node.setCenterLocationXY(coordX, coordY);
    node.setRadius(20);
    node.getStroke().setWeight(5);
    node.getStroke().setColor("rgb(0,0,0)");
    node.getFill().setColor("rgb(0,0,255)");
    node.addDoubleClickListener(clickHandler());
    node.setZIndex(4);
    node.disable();
    myPanel.addElement(node);
}

function createLine(myPanel, X1, Y1, X2, Y2){
	myLine = myPanel.createLine();
	myLine.setStartX(X1);
	myLine.setStartY(Y1);
	myLine.setEndX(X2);
	myLine.setEndY(Y2);
	myLine.setZIndex(0);
	myPanel.addElement(myLine);
}

function mash(myPanel, rowNb, columnNb, number){ // keep record of last positions -> see addition row/ col
	spaceRow = 50;
	spaceCol = 75;

	oldX = spaceCol;
	oldY = spaceRow;

	for (var i = 0; i < rowNb; i++) {
		for (var j = 0; j < columnNb; j++) {
			X = spaceCol + j * spaceCol;
			Y = spaceRow + i * spaceRow;

			createNode(myPanel, X, Y);

			if (i != 0) {
				if (j == 0) {
					createLine(myPanel, X, oldY, X, Y);
				} else {
					createLine(myPanel, X, oldY - spaceRow, X, Y);					
				}
				
			};

			if (j != 0) {
				createLine(myPanel, oldX, oldY, X, Y);
			};

			oldX = X;
			oldY = Y;
		};
	};
}



