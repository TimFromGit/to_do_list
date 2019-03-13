var inputNewDeal=document.querySelector('.new-deal-inbx');
var form=document.querySelector(".new-deal-form"); 
var dealInputCheck = document.getElementsByClassName('deal-list-item');
var toDoList=[];

//Функция открытия формы для добавления дела
 function openForm(e){
 	console.warn('open')
	e.preventDefault();
	form.style.display='inline-block';
}
//
closeDealCreation = () => {
	inputNewDeal.value='';
	inputNewDeal.style.border='';
	form.style.display= 'none';
}
//функция добавления дела при нажатии + и добавление записи в localStorage
add=(e)=>{
	e.preventDefault();
	if (inputNewDeal.value && inputNewDeal.value.trim()!==''){
		var NameNewDeal=inputNewDeal.value;
		var dealTemp={};
		var id;
		dealTemp.check=false;
		dealTemp.dealName=NameNewDeal;
		dealTemp.id = Date.now();
		toDoList.push(dealTemp);
//		console.log(toDoList);
		document.querySelector(".close-new-deal-form-btn").onclick();
		dealItemCreate();
		localStorage.setItem('dealName', JSON.stringify(toDoList));
	} else{
		inputNewDeal.style.border = '2px solid #2cc7bf';
	}
}
//функция вывод дел, перебирающая массив дел и формирует выводную строку
dealItemCreate=()=>{
	var dealItem='';
	toDoList.map(item=>{
		if (item.check==true){
			dealItem+=`
			<div class="deal-list-item" onmouseover="showBtnRemove(this.id)" onmouseout="hideBtnRemove(this.id)" id="deal-${item.id}">
				<label for=${item.id} class="deal-list-item-chbx-box">
					<img src="distr/arrow.png" alt="стрелка" class="deal-list-item-chbx-img">
				</label>
					<input type="checkbox" class="deal-list-item-chbx" onclick="dealChecked(this, this.id)" id=${item.id} checked>
				<div name="deal" class="deal-list-item-txt" style="text-decoration: line-through">${item.dealName}</div>
				<button type="button" onclick="removeDeal(this, this.id)" id="btn-${item.id}" class="deal-list-item-btn-remove">
					Удалить
				</button>
			</div>`;
		}
		else {
			dealItem+=`
			<div class="deal-list-item" onmouseover="showBtnRemove(this.id)" onmouseout="hideBtnRemove(this.id)" id="deal-${item.id}">
				<label for=${item.id} class="deal-list-item-chbx-box">
					<img src="distr/arrow.png" alt="стрелка" class="deal-list-item-chbx-img">
				</label>
					<input type="checkbox" class="deal-list-item-chbx" onclick="dealChecked(this, this.id)" id=${item.id}>
				<div name="deal" class="deal-list-item-txt">${item.dealName}</div>
				<button type="button" onclick="removeDeal(this, this.id)" id="btn-${item.id}" class="deal-list-item-btn-remove">
					Удалить
				</button>
			</div>`;
		}			
	})
	document.querySelector('.deals-list').innerHTML=dealItem;
	localStorage.setItem('dealName', JSON.stringify(toDoList));
	toDoList=JSON.parse(localStorage.getItem('dealName'));
	closeDealCreation();
}
//функция зачеркивания и сохранения состояния чекбокса
dealChecked=(el, elid)=> {
	toDoList=JSON.parse(localStorage.getItem('dealName'));
	toDoList.map(item=>{
		if (item.id==elid && el.checked){
			item.check=true;
			el.nextElementSibling.style.textDecoration="line-through";
			//console.log('checked');
		} else if (item.id==elid && el.checked==""){
			item.check=false;
			el.nextElementSibling.style.textDecoration="none";
			//console.log('unchecked');
		}		
	});
	localStorage.setItem('dealName', JSON.stringify(toDoList));
	toDoList=JSON.parse(localStorage.getItem('dealName'));
	//return toDoList;
}
	//функция отчистки всех данных
clean=()=>{
	localStorage.clear();
	location.reload();
}
removeDeal=(el,elid)=>{
	toDoList=JSON.parse(localStorage.getItem('dealName'));
//	console.warn('toDoList',toDoList)
	const arr = toDoList.filter(item=> {
//		console.log(String("btn-"+item.id)!==String(elid));
		el.parentElement.remove();
		return String("btn-"+item.id)!==String(elid);
	});
//	console.log(arr);
	//console.log(toDoList);
	localStorage.setItem('dealName', JSON.stringify(arr));
	toDoList=JSON.parse(localStorage.getItem('dealName'));
	
}
// при наведении на строку дела показываем кнопку удалить

showBtnRemove=(elid)=>{
	//el.lastElementChild.style.display="inline-block";
	const id=elid.replace(/\D+/g,"");
	document.getElementById(`btn-${id}`).style.display="inline-block"
}
hideBtnRemove=(elid)=>{
	const id=elid.replace(/\D+/g,"");
	document.getElementById(`btn-${id}`).style.display="none";
}

//проверяем наличие записи в localStorage, если есть, то выводим
if (localStorage.getItem('dealName')){
	toDoList=JSON.parse(localStorage.getItem('dealName'));
	dealItemCreate();
}