const checkName = () => {
    const iValue = document.getElementById('fName').value;
    const regexUser = /^[A-Za-z]{5,12}$/
    if (regexUser.test(iValue)) {
        document.getElementById('fName').style.border = "2px solid green";
        document.getElementById('fNameText').style.display = "none"
    }
    else {
        document.getElementById('fName').style.border = "2px solid red";
        document.getElementById('fNameText').style.display = "block"
        document.getElementById('fNameText').style.color = "red"
    }
}
const checkuserName = () => {
    const iValue = document.getElementById('uName').value;
    const regexUser = /^[A-Za-z0-9]{5,12}$/
    if (regexUser.test(iValue)) {
        document.getElementById('uName').style.border = "2px solid green";
        document.getElementById('uNameText').style.display = "none";
    }
    else {
        document.getElementById('uName').style.border = "2px solid red";
        document.getElementById('uNameText').style.display = "block";
        document.getElementById('uNameText').style.color = "red";
    }
}
const checkeMail = () => {
    const iValue = document.getElementById('eMail').value;
    const regexUser = /^[A-Za-z0-9.]+@[a-zA-Z0-9.]{5,}$/
    if (regexUser.test(iValue)) {
        document.getElementById('eMail').style.border = "2px solid green";
        document.getElementById('eMailText').style.display = "none";
    }
    else {
        document.getElementById('eMail').style.border = "2px solid red";
        document.getElementById('eMailText').style.display = "block";
        document.getElementById('eMailText').style.color = "red";
    }
}
const checkPassword = () => {
    const iValue = document.getElementById('pWord').value;
    const regexUser = /^(?=.*[A-Z])(?=.*[A-Z])(?=.*[@_-])(?=.*\d).{8,12}$/
    if (regexUser.test(iValue)) {
        document.getElementById('pWord').style.border = "2px solid green";
        document.getElementById('pWordText').style.display = "none";
    }
    else {
        document.getElementById('pWord').style.border = "2px solid red";
        document.getElementById('pWordText').style.display = "block";
        document.getElementById('pWordText').style.color = "red";
    }
}
const checkNumber = () => {
    const iValue = document.getElementById('mobile').value;
    const regexUser = /^[6-9]\d{9}$/
    if (regexUser.test(iValue)) {
        document.getElementById('mobile').style.border = "2px solid green";
        document.getElementById('mobileText').style.display = "none";
    }
    else {
        document.getElementById('mobile').style.border = "2px solid red";
        document.getElementById('mobileText').style.display = "block";
        document.getElementById('mobileText').style.color = "red";
    }
}
const checkPAN = () => {
    const iValue = document.getElementById('pCard').value;
    const regexUser = /^[A-Z]{5}[0-9]{4}[A-Z]$/
    if (regexUser.test(iValue)) {
        document.getElementById('pCard').style.border = "2px solid green";
        document.getElementById('pCardText').style.display = "none";
    }
    else {
        document.getElementById('pCard').style.border = "2px solid red";
        document.getElementById('pCardText').style.display = "block";
        document.getElementById('pCardText').style.color = "red";
    }
}