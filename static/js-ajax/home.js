$(function() {
	var filters = [{"name": "id", "op": "like", "val": "%y%"}];
	$.ajax({
	 	url: '/api/user',
		//data: {"q": JSON.stringify({"filters": filters})},
		dataType: "json",
		contentType: "application/json",
		success: function(data) {
			console.log(data.objects[0]);
			$("#content").html("<p>Hi: " + data.objects[0].firstName + "  " + data.objects[0].lastName + "! Let is snow!</p>");
		}
	});
});