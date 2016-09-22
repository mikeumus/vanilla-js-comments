let CommentApp = (function(){
	"use strict";
	
	let commentUtils = {};
	
	let table = document.getElementById("commentsTable");
	
	commentUtils.addComment = function(value){
		let rowCount = table.rows.length;
		let row = table.insertRow(rowCount);
		
		value !== undefined ? value : value = document.getElementById("commentVal").value;

		let cell = row.insertCell(0);
		cell.setAttribute('onmouseenter', "CommentApp.editComment(this)");

		cell.innerHTML = value;
	};
	
	commentUtils.editComment = function(value){
		let commentEditor = `
		<form onsubmit="event.preventDefault(); CommentApp.saveEdit(this)">
			<input id="commentEdit" class="comment-edit" type='text' value=${value.textContent}>
		<form/>`;
		value.innerHTML = commentEditor;
		value.onmouseleave = () => {
			let preValue = value.getElementsByClassName("comment-edit")[0].value;
			value.innerHTML = preValue;
		};
	};

	commentUtils.saveEdit = function(value){
		let editNode = document.getElementById("commentEdit");
		let editParent = value.parentElement;
		editParent.innerHTML = editNode.value;
		editParent.setAttribute('onmouseenter', "CommentApp.editComment(this)");
	};
	
	return commentUtils;
		
}());