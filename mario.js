
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
	
	var line;
	line = " ".repeat(height);
	
	limit= height + 1;
	
	for (var base='##'; base.length <=limit; base+='#'){
		console.log(line.slice(0,limit-base.length) + base);
	}
	
	//other methods
	//base="#";
	//for (var x=0; x < height; x += 1){
		//base +='#';
		//line = line.substr(0,height-x)+base;
		//line =line.slice(0,height-x)+ base;
		//console.log(line);
		//}
	
}

