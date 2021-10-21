

getForm=document.forms[0];
getForm.addEventListener('submit',function(e){
    e.preventDefault();
    const address={
        'name':getForm.elements[0].value,
        'street Number':getForm.elements[1],
        'street Name':getForm.elements[2],
        village:getForm.elements[3],
        district:getForm.elements[4],
        'postal code':getForm.elements[5],
        state:getForm.elements[6],
        get:function getAddres(params) {
            
        },
        set:function setAddress(){
    
        }
    }
    console.log(address);

    
});



// console.log(address['street Name']);