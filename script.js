function addTask(){
	var taskInput=document.getElementById('taskInput');
	var taskList=document.getElementById('tasklist');

	
		var listItem=document.createElement("li");
		var taskText=document.createElement('span');

		taskText.textContent=taskInput.value;

		var completeButton=document.createElement('button');
		completeButton.textContent="complete";
		completeButton.onclick=function(){
			completeButton.innerHTML="COMPLETED!!";
			completeButton.style.color="blue";
		}
		var removeButton=document.createElement('button')
		removeButton.textContent='remove';
		removeButton.onclick=function(){
			listItem.remove();
		}
		listItem.appendChild(taskText);
		listItem.appendChild(completeButton);
		listItem.appendChild(removeButton);
		tasklist.appendChild(listItem);
		taskInput.value="";
	}
	


