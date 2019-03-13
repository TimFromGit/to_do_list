window.onload=function(){
const form=document.querySelector(".new-deal-form");
const btnOpenNewDealForm=document.querySelector(".open-new-deal-form");
const btnCloseNewDeal=document.querySelector(".close-new-deal-form");
const btnAddNewDeal=document.querySelector('.add-new-deal');
let flag=false;
var inputNewDeal=document.querySelector('.new-deal-name');

btnOpenNewDealForm.focus();



//функция для открытия формы добавления дела
btnOpenNewDealForm.onclick = function open(e){
//	console.log("Нажата кнопка открыть добавление дела");
	e.preventDefault();

	form.style.display='inline-block';
	inputNewDeal.focus();
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

form.onsubmit = (e)=>{
	e.preventDefault();
	btnAddNewDeal.onclick();

}
//функция для добавления нового дела
btnAddNewDeal.onclick = function add(){
	//e.preventDefault();
	// if (inputNewDeal.value && inputNewDeal.value.trim() !== ''){
		let toDoList=[];
		dealText=inputNewDeal.value;
		let dealTemp={};
		dealTemp.check=false;
		dealTemp.dealText=dealText;
		dealTemp.button="button";
		// {"check": false,
		// 	"dealText": inputNewDeal.value,
		// 	"button": "btn"};
		let i=toDoList.length;
		toDoList[i]=dealTemp;
		//toDoList.push(deal);
		//arr.map(deal=>div)
		console.log(toDoList);
		btnCloseNewDeal.onclick();
		btnOpenNewDealForm.focus();
	// 	}
	//  else {
	// 	//подсвечиваем окно, если оно не заполнено
	// 	inputNewDeal.style.border = '2px solid red';
	// };		

	if (flag){
	console.log('tratata1');
	btnRemoveDeal.onclick= function removeDeal(obj) {
    console.log('tratata2');
	}
}
}
}