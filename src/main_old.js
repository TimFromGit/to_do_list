const form=document.querySelector(".new-deal-form");
const btnOpenNewDealForm=document.querySelector(".open-new-deal-form");
const btnCloseNewDeal=document.querySelector(".close-new-deal-form");
const btnAddNewDeal=document.querySelector('.add-new-deal');
const inputNewDeal=document.querySelector('.new-deal-name');
let deal_id = 0;
let flag=false;

btnOpenNewDealForm.focus();



//функция для открытия формы добавления дела
btnOpenNewDealForm.onclick = function open(e){
//	console.log("Нажата кнопка открыть добавление дела");
	e.preventDefault();

	form.style.display='inline-block';
	//inputNewDeal.focus();
}

//функция для закрытия формы добавления дела
btnCloseNewDeal.onclick = function closedeal(){
//	console.log('Нажата кнопка закрыть добавление дела')
//скрываем форму через css свойство
	form.style.display= 'none';
//отчищаем введеные данные, если таковы имеются
	inputNewDeal.value='';
	inputNewDeal.style.border='';
}


//функция для добавления нового дела
btnAddNewDeal.onclick = function add(e){
	e.preventDefault();
	if (inputNewDeal.value && inputNewDeal.value.trim() !== ''){
		let newDealObject;
		const dealList=document.querySelector('.deals-list');
		//создаем прототип для дел
		let ObjectProtoDeal={
			constructor: function (checkbox, deal,id){
				this.checkbox=checkbox;
				this.deal=deal;
				
				return this;
			},
			clear: function (){
				console.log('удалить');
			}
		}
		//создаем объект нового дела на основе прототипа
		newDealObject = Object.create(ObjectProtoDeal).constructor(false,`${inputNewDeal.value}`);
		//console.log(newDealObject);
		//создаем новый див для дел
		const newDeal=document.createElement("div");
		newDeal.className="deals-list-item-"+deal_id;
		//create checkbox for deal
		const checkbox=document.createElement("input");
		checkbox.className="deal-status";
		checkbox.type="checkbox";
		//create head for deal
		const dealHead=document.createElement("input");
		dealHead.className="deal-head";
		dealHead.value=`${newDealObject.deal}`;
		dealHead.id="deal-num-" + deal_id;
		//console.log(dealHead);
		//create button for remove deal
		var btnRemoveDeal=document.createElement("button");
		btnRemoveDeal.className="remove-deal";
		btnRemoveDeal.id="btn-remove-deal-"+ deal_id;
		btnRemoveDeal.innerHTML='<img src="distr/delete.png" alt="remove" class="buttons">';
		btnRemoveDeal.onclick="removeDeal(this)";


		newDeal.appendChild(checkbox);
		newDeal.appendChild(dealHead);
		newDeal.appendChild(btnRemoveDeal);
		dealList.appendChild(newDeal);
		deal_id++;
		flag = true;
		btnCloseNewDeal.onclick();
		btnOpenNewDealForm.focus();
		console.log("btnRemoveDeal",btnRemoveDeal);
	} else {
		//подсвечиваем окно, если оно не заполнено
		inputNewDeal.style.border = '2px solid red';
	};		

	if (flag){
	console.log('tratata1');
	btnRemoveDeal.onclick= function removeDeal(obj) {
    console.log('tratata2');
	}
}
}
