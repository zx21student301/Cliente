$(principal)

function principal(){
	$('p').each(function(){
		var pdata = $(this);
		pdata.html( pdata.text().replace(/(^\w+)/,'<b>$1</b>') );
	});
}