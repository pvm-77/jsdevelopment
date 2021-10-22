
let getPermanentAddressForm = document.forms[1];
let getcheckBoxName = getPermanentAddressForm.elements['fill-permanent-address'];
getForm = document.forms[0];
let lastElement = getForm.elements['state'];
lastElement.addEventListener('blur', function (e) {
    e.preventDefault();


    const address = {
        name: getForm.elements[1].value,
        'street-Number': getForm.elements[2].value,
        'street-Name': getForm.elements[3].value,
        village: getForm.elements[4].value,
        district: getForm.elements[5].value,
        'postal-code': getForm.elements[6].value,
        state: getForm.elements[7].value,
        get: function getAddres() {

        },
        set: function setAddress(params) {

        },

    }
    getcheckBoxName.addEventListener('change', function (params) {
        params.preventDefault();
        fillPermanentAddress(address);


    });


});

function fillPermanentAddress(correspondenceAddressObject) {
    // get permanent address form
    getPermanentAddressForm = document.forms[1];
    //  check if check-box is clicked

    let temp = getPermanentAddressForm.elements['fill-permanent-address'].checked;



    if (temp !== false) {
        // alert(correspondenceAddressObject['street-Number']);


        getPermanentAddressForm.elements['pname'].value = correspondenceAddressObject['name'];
        getPermanentAddressForm.elements['street-number'].value = correspondenceAddressObject['street-Number'];
        getPermanentAddressForm.elements['street-name'].value = correspondenceAddressObject['street-Name'];
        getPermanentAddressForm.elements['village'].value = correspondenceAddressObject['village'];
        getPermanentAddressForm.elements['district'].value = correspondenceAddressObject['district'];
        getPermanentAddressForm.elements['pin'].value = correspondenceAddressObject['postal-code'];
        getPermanentAddressForm.elements['state'].value = correspondenceAddressObject['state'];


    } else {
        getPermanentAddressForm.elements[0].value = '';
        getPermanentAddressForm.elements[1].value = '';
        getPermanentAddressForm.elements[2].value = '';
        getPermanentAddressForm.elements[3].value = '';
        getPermanentAddressForm.elements[4].value = '';
        getPermanentAddressForm.elements[5].value = '';
        getPermanentAddressForm.elements[6].value = '';

    }

}