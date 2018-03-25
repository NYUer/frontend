$('.ui.rating')
  .rating()
;

$('.ui.rating.static')
  .rating("disable")
;

Bmob.initialize("1fe041375281fb38612829308c8b2f06", "5e2d348f45b02e6915c8be18e384e335");

function submitComment(){
	var commentt = document.getElementById("commentBox").value;
	var rating = $('.ui.rating.edit').rating("get rating");
	// console.log(comment);
	// console.log(rating);

	var Data = Bmob.Object.extend("AllData");
	var data = new Data();
	// 添加数据，第一个入口参数是Json数据
	data.save({
	  rate: rating,
	  comment: commentt,
	  professor_name: "Olivier Marin",
	  professor_nyuid: "N12345678"
	}, {
	  success: function(data) {
	    // 添加成功
	    alert("Submitted!");
	  },
	  error: function(data, error) {
	    // 添加失败
	    alert("Submission failed!")
	  }
	});
}