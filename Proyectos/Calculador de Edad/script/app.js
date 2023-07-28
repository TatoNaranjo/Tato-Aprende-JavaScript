/* Age calculator Logic By TatoNaranjo */
/* Calculador de edad Por TatoNaranjo */


let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let button = document.querySelector(".send-button");

var form = document.getElementById("upperPart");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


const actualDate = new Date();
const actualDay = actualDate.getDate();
const actualMonth = actualDate.getMonth()+1;
const actualYear = actualDate.getFullYear();


/*Metodo Para Validar La Fecha Entregada Por el usuario*/
/*Method: Validates the given date by the user */
const validation = (()=>{ 
    
    
    button.addEventListener('click',()=>{
        let maxValue = 0;


/* Asignando los dias maximos que tiene cada mes, considerando años bisiestos */
/* Setting the maximun days of every month, considering leap years */
   const  T1daysOfMonth = [1,3,5,7,8,10,12];
   const  T0daysOfMonth = [4,6,9,11];
  
    if(T1daysOfMonth.includes(parseInt(month.value))){
        maxValue=31;
    }
    else if(T0daysOfMonth.includes(parseInt(month.value))){
        maxValue=30;
    }
    else if(month.value==2)maxValue=28;
    else if(month.value==2 && month.value%4==0 && month.value%100==0  || month.value%100==0 && month.value%400==0){
maxValue = 29;

    }

    /*Si alguna condición no se cumple, el booleano pasa a ser falso y la fecha es tomada como incorrecta */
    /*If any condition is not satisfied, boolean goes false and the date is incorrect */
   let checkDia = day.value<=maxValue && day.value>0 ;
   let checkMes =  month.value<=12 && month.value>0;
   let checkAno =  parseInt(year.value)<=actualYear && parseInt(year.value)>0;


   /* Si la fecha dada es superior a la fecha actual el booleano pasa a ser falso y la fecha es tomada como incorrecta*/
   /* If the given date is above the actual date, the boolean goes false and the date is incorrect */
   if(parseInt(year.value)==actualYear && parseInt(month.value)>actualMonth)checkMes = false;
   if( parseInt(year.value)==actualYear && parseInt(month.value)==actualMonth && actualDay<parseInt(day.value))checkDia = false;
    
   /*Inicializando un nuevo booleano en busca de errores */
   /*Initializing a boolean searching for errors */
   let isError = false;
    
    /* Si hay un error se muestra un mensaje durante un tiempo específico debajo del input correspondiente */
    /* If there's an error displays a message during a specific time below the corresponding input */
           if(!checkDia){
            let errorDia = document.getElementById("day-error");
          errorCampo(errorDia, "Must Be A Valid Day");
          isError = true;
           }
           
            if(!checkMes){
            let errorMes = document.getElementById("month-error");
        errorCampo(errorMes,"Must Be A Valid Month");
        isError = true;
           }
         if(!checkAno){
            let errorAno = document.getElementById("year-error");
           errorCampo(errorAno,"Must Be in The Past");
           isError = true;
            
           }

           /*Si no Hay ningun error, se hace el calculo de la fecha*/
           /*If There's no error, calculate the date */
           if(!isError)calculateDate(day.value,month.value,year.value);
         
    })
    
})

/*Method: Display a message in case of Error*/
/*Metodo que muestra un mensaje en caso de errores*/
const errorCampo = ((campo,mensaje)=>{
  campo.innerHTML=`
  <div class = "error">
    <p>${mensaje}</p>
    </div>
  `
    setTimeout(() => {
       campo.innerHTML = ''; // Clear the error message
      }, 3000);
})

/*Method: calculate The User Year */
/* Metodo Para Calcular la Edad */
const calculateDate =((day,month,year)=>{

//Inicializando variables del dia, año y edad. 
//Initializing the variables of Day, Month And Year
const dia = day;
const mes = month;
const ano = year;

//Initializing the answers of Day, Month And Year in Zero
//Inicializando contadores que calculan el día, el año y la Edad
let counterYears = 0;
let counterMonths = 0;
let counterDays = 0;

//Set Year Into Card
//Poniendo el año en la card
if(mes<=actualMonth)counterYears=actualYear-ano;
if(mes>actualMonth)counterYears=actualYear-ano-1;
const fieldYear = document.getElementById("numberY");

fieldYear.innerHTML=counterYears;

//Set Month Into Card
//Poniendo el mes en la card
if(mes<=actualMonth)counterMonths=actualMonth-mes;
if(mes>actualMonth)counterMonths=12-Math.abs(actualMonth-mes);
const fieldMonth = document.getElementById("numberM");
fieldMonth.innerHTML=counterMonths;

//Set Day Into Card
//Poniendo el dia en la card
if(actualDay>day)counterDays=actualDay-day;
const fieldDays = document.getElementById("numberD");
fieldDays.innerHTML=counterDays;


})