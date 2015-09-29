var drawTable = function(size){
	table = $('<table></table>');
	for(var i=0; i<size ; i++)
	{
		var row = createRow();
		
		for(var j=0;j<size;j++)
		{
			row.append(createCell('-'));
		}
		
		table.append(row);
	}
	$('body').text('').append(table);
}

var createRow =  function(){
	var row = $('<tr></tr>');
	return row;
}

var createCell = function(text){
	var cell = $('<td>'+text+'</td>');
	return cell;
} 

var changeValue = function(){
	$('td').on('click',function(event){
		console.log('Cell clicked!!', event.target);
		$(this).html('X');
		$(this).css('background-color','pink');
		$(this).off('click');
		$(this).off('mouseover');
		$(this).off('mouseout');
	});
	
	$('td').on('mouseover',function(event){
		$(this).css('background-color','white');
	});
	
	$('td').on('mouseout',function(event){
		$(this).css('background-color','yellow');
	});
}