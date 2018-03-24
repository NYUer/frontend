$('.ui.rating')
  .rating()
;

$('.ui.rating.static')
  .rating("disable")
;

var NID = "";
let BASEURI = "http://api-sp.nyu.wiki";
Bmob.initialize("1fe041375281fb38612829308c8b2f06", "5e2d348f45b02e6915c8be18e384e335");

function getProf() {
	axios.get(`${BASEURI}/faculty?instructor_nyu_id=${NID}`)
			 .then(function(response) {
					let data = response.data;
					refreshData(data);
			 })
			 .then(function(error) {});
}

function refreshData(data) {
	if (!data.length) return;
	data = data[0];
	let profName = data.preferred_name;
	let jobType = data.school_or_div;
	let html = `
		<h3 class="ui header" style="margin-top:15px">BIO</h3>
		<p><b>Internation Assignment Loc:</b> ${data.internation_assignment_loc || "New York"}</p>
		<p><b>Job Profile:</b> ${data.job_profile}</p>
		<p><b>Job Type:</b> ${data.job_type}</p>
		<p><b>Room Number:</b> ${data.room_number}</p>
		<p><b>School or Div:</b> ${data.school_or_div}</p>
		<p><b>Unit:</b> ${data.unit}</p>
		<p><b>Unit ID:</b> ${data.unit_id}</p>
		<br />
	`;

	$("#professorName").html(profName);
	$("#description").html(jobType);
	$("#professorBio").html(html);
}

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
	  professor_nyuid: NID
	}, {
	  success: function(data) {
	    getRate();
	  },
	  error: function(data, error) {}
	});
}

function getRate(){
	var Data = Bmob.Object.extend("AllData");
	var query = new Bmob.Query(Data);
	query.equalTo("professor_nyuid", NID);
	query.find({
	  success: function(results) {
	  	var mark = 0;
	    for (var i = 0; i < results.length; i++) {
	      mark += results[i].get("rate");
	    }
	    loadComments(results);
	    if (!results.length) {
	    	$('.ui.rating.static').rating("set rating", 3);
	    } else {
	    	mark = Math.round(mark / results.length);
	    	$('.ui.rating.static').rating("set rating", mark);
	    }
	    
	  },
	  error: function(error) {}
	});
	
}

function loadComments(commentList) {
	let html = "";

	for (let i = 0; i < commentList.length; i++) {
		html +=
			`<div class="comment">
		      <a class="avatar">
		        <img src="http://placeholder.qiniudn.com/35x35">
		      </a>
		      <div class="content">
		        <a class="author">Anonymous</a>
		        <div class="metadata">
		          <span class="date">${commentList[i].updatedAt}</span>
		        </div>
		        <div class="text">
		          ${commentList[i].get("comment")}
		        </div>
		      </div>
		    </div>`;
	}
	$("#commentLoader").html(html);
}

window.onload = function () {

	NID = window.location.hash;
	if (!NID) window.open("/", "_self");
	else {
		NID = NID.substr(1);
	}
	getProf();
	getRate();

}