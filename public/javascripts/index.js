$('#test').on('click', test);

var testPlayer = {
	'type' : 'player'
};

function test() {
  var obj = {
		'method': 'get',
		'what' : [testPlayer]
	};
	console.log(obj);
  var promise = $.ajax({
		url: '/api/',
		contentType:"application/json",
		type: 'POST',
		data: JSON.stringify(obj)
	});

	promise.done(function(data, err) {
		console.log(data);
	});
}
