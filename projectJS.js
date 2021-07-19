var numberURLs = 0;
const contact = document.querySelector(".contact");

function addURL() {
    var AU = document.querySelector("#addURL");
    
    var label = document.createElement("input");
    label.type = "text";
    label.placeholder = "Website";
    label.classList.add("twoInGrid");
    var URL = document.createElement("input");
    URL.type = "text";
    URL.placeholder = "URL";
    URL.classList.add("twoInGrid");
    
    var personalLink = document.createElement('div');
    personalLink.appendChild(label);
    personalLink.appendChild(URL);

    contact.insertBefore(personalLink, AU);
    if ((numberURLs % 2) == 1) {
        var p1 = document.createElement("p");
        contact.insertBefore(p1, AU);
        var p2 = document.createElement("p");
        contact.insertBefore(p2, AU);
    }
    numberURLs += 1;
}

function addSkill() {
    var skillBox = document.createElement('input');
    skillBox.classList.add('skill');
    skillBox.type = "text";
    var skillButton = document.getElementById("addSkill");
    var skillGrid = document.getElementById("skillsGrid");
    skillBox.placeholder = "Gambling";
    skillGrid.insertBefore(skillBox, skillButton);
}

function addExpert() {
    var expertBox = document.createElement('input');
    expertBox.classList.add('expertise');
    expertBox.type = "text";
    expertBox.placeholder = "Being Controlled by a Rat under my Toque"
    var expertButton = document.getElementById("addExpertise");
    var expertGrid = document.getElementById("expertiseGrid");
    expertGrid.insertBefore(expertBox, expertButton);
}

function addEducation() {
    var box = document.getElementById("educationDiv");
    var newBox = document.createElement("div");
    newBox.innerHTML = box.innerHTML;
    newBox.classList.add("educationDiv");
    newBox.placeholder = "Harvard - Juris Doctor - 2004";
    var eduButton = document.getElementById("addEducation");
    var eduForm = document.getElementById("eduForm");
    eduForm.insertBefore(newBox, eduButton);
}

function addReference() {
    var br = document.createElement("br");
    var grid = document.querySelector('.refGrid');
    var newGrid = document.createElement("div");
    newGrid.innerHTML = grid.innerHTML;
    newGrid.classList.add("refGrid");
    var refForm = document.getElementById("refForm");
    var refButton = document.getElementById("addRef");
    refForm.insertBefore(newGrid, refButton);
}

function makeResume() {
    var email = document.getElementById("email");
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address');
        return;
    } else {
        var name = document.getElementById("name").value;
        var pronouns = document.getElementById("pronouns").value;
        var phone = document.getElementById("number").value;
        var persEmail = document.getElementById("email").value;
        var street = document.getElementById("street").value;
        var apt = document.getElementById("apt").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var zip = document.getElementById("zip").value;
        var URLs = document.querySelectorAll(".twoInGrid");
        var listURL = [];
        if (URLs.length != 0){
            for (i=0; i<URLs.length; i+=2) {
                if (URLs[i].value != '') {
                    var site = URLs[i].value + ": " + URLs[i + 1].value;
                    listURL.push(site);
                } else {
                    continue;
                }
            }
        }
        var skills = document.querySelectorAll(".skill");
        var skillsList = [];
        for (i=0; i<skills.length; i++) {
            if (skills[i].value != ""){
                skillsList.push(skills[i].value);
            }
        }
        var expertise = document.querySelectorAll(".expertise");
        var expertList = [];
        for (i=0; i<expertise.length; i++) {
            if (expertise[i].value != "") {
                expertList.push(expertise[i].value);
            }
        }
        var education = document.querySelectorAll("#education");
        var eduList = [];
        for (i=0; i<education.length; i++) {
            if (education[i].value != "") {
                eduList.push(education[i].value);
            }
        }
        var emp1 = document.getElementById("emp1").children;
        var emp1Title = emp1.title.value;
        if (emp1Title != "") {
            var emp1Company = emp1.company.value;
            var emp1Contact = emp1.contact.value;
            var emp1Start = emp1.start.value;
            var emp1End = emp1.end.value;
            var emp1Num = emp1.num.value;
            var emp1Desc = document.getElementById("emp1Text").value;
        }
        var emp2 = document.getElementById("emp2").children;
        var emp2Title = emp2.title.value;
        if (emp2Title != "") {
            var emp2Company = emp2.company.value;
            var emp2Contact = emp2.contact.value;
            var emp2Start = emp2.start.value;
            var emp2End = emp2.end.value;
            var emp2Num = emp2.num.value;
            var emp2Desc = document.getElementById("emp2Text").value;
        }
        var emp3 = document.getElementById("emp3").children;
        var emp3Title = emp3.title.value;
        if (emp3Title != "") {
            var emp3Company = emp3.company.value;
            var emp3Contact = emp3.contact.value;
            var emp3Start = emp3.start.value;
            var emp3End = emp3.end.value;
            var emp3Num = emp3.num.value;
            var emp3Desc = document.getElementById("emp3Text").value;
        }
        var references = document.querySelectorAll(".refGrid");
        var refNames = [];
        var refNumbers = [];
        var refEmails = [];
        var refTexts = [];
        for (i=0; i<references.length; i++) {
            var refDiv = references[i].children;
            var ref = refDiv[0].children;
            if (ref.name.value != '') {
                refNames.push(ref.name.value);
                refNumbers.push(ref.number.value);
                refEmails.push(ref.email.value);
                refTexts.push(refDiv[2].value);
            }
        }
        var win = window.open("");
        win = win.document;
        win.write("<!DOCTYPE html><html><head><title>Resume</title><link rel='stylesheet' href='resume.css'></head><body class='resumePage'><div class='resume'><span class='cutout'></span><div class='nameBanner' id='banner'><p><strong><span class='bannerName'>")
        win.write(name + "</span>")
        if (pronouns != "") {
            win.write("<br>" + pronouns + "</strong>");
        } else {win.write("</strong>");}
        if (listURL.length != 0) {
            win.write("<br><span class='urls'>")
            for (i=0; i<listURL.length; i++) {
                win.write("<span class='urlDot'></span>" + listURL[i]);
            }
            win.write("</span></p></div>")
        } else {win.write("</p></div>")}
        win.write("<div class='mainSection'><div class='column' id='column1'>");
        if (emp1Title != "") {
            win.write("<h3 class='sectionHeader'>WORK EXPERIENCE</h3><p><strong>" + emp1Start.slice(0,4) + "-" + emp1End.slice(0,4) + " " + emp1Company + "</strong></p>");
            win.write("<p>" + emp1Title + "</p>");
            win.write("<p>" + emp1Desc + "</p>");
            win.write("<p><strong>Supervisor: </strong>" + emp1Contact + " " + emp1Num + "</p>");
            win.write("<br>")
        }
        if (emp2Title != "") {
            win.write("<p><strong>" + emp2Start.slice(0,4) + "-" + emp2End.slice(0,4) + " " + emp2Company + "</strong></p>");
            win.write("<p>" + emp2Title + "</p>");
            win.write("<p>" + emp2Desc + "</p>");
            win.write("<p><strong>Supervisor: </strong>" + emp2Contact + " " + emp2Num + "</p>");
            win.write("<br>")
        }
        if (emp3Title != "") {
            win.write("<p><strong>" + emp3Start.slice(0,4) + "-" + emp3End.slice(0,4) + " " + emp3Company + "</strong></p>");
            win.write("<p>" + emp3Title + "</p>");
            win.write("<p>" + emp3Desc + "</p>");
            win.write("<p><strong>Supervisor: </strong>" + emp3Contact + " " + emp3Num + "</p>");
            win.write("<br>")
        }
        win.write("<h3 class='sectionHeader'>CONTACT</h3>")
        var address = String(street + " " + apt + "<br>" + city + ", " + state + " " + zip)
        var persInfo = [address, phone, persEmail]
        for (x=0; x<persInfo.length; x++) {
            if (persInfo[x] != "") {
                win.write("<p>" + persInfo[x] + "</p>");
            }
        }
        win.write("</div><div class='column' id='column2'>");
        if (eduList.length != 0) {
            win.write("<h3 class='sectionHeader'>EDUCATION</h3>")
            for (i=0; i<eduList.length; i++) {
                win.write("<p>" + eduList[i] + "</p>");
            }
        }
        if (skillsList.length != 0 && expertList.length !=0) {
            win.write("<div class='miniColumns'><div class='column' id='column2.1'><h3 class='sectionHeader'>SKILLS</h3>");
            for (i=0; i<skillsList.length; i++) {
                win.write("<p><span class='dot'></span>" + skillsList[i] + "</p>");
            }
            win.write("</div>")
            win.write("<div class='column' id='column2.2'><h3 class='sectionHeader'>EXPERTISE</h3>")
            for (i=0; i<expertList.length; i++) {
                win.write("<p><span class='dot'></span>" + expertList[i] + "</p>");
            } 
            win.write("</div></div>")
        } else if (skillsList.length == 0 && expertList != 0) {
            win.write("<h3 class='sectionHeader'EXPERTISE</h3>")
            for (i=0; i<expertList.length; i++) {
                win.write("<p><span class='dot'></span>" + expertList[i] + "</p>");
            } 
        } else if (skillsList.length != 0 && expertList == 0) {
            for (i=0; i<skillsList.length; i++) {
                win.write("<p><span class='dot'></span>" + skillsList[i] + "</p>");
            }
        }
        if (refNames.length != 0) {
            win.write("<h3 class='sectionHeader'>REFERENCES</h3>");
            for (i=0; i<refNames.length; i++) {
                win.write("<p><strong>" + refNames[i] + "</strong></p>")
                win.write("<p>" + refTexts[i] + "</p>");
                win.write("<p>" + refNumbers[i] + " - " + refEmails[i] + "</p><br>")
            }
        }
        win.write("</div></div></div></body></html>")
    }
}

function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

function showDefault(box) {
    alert(box.default);
}

document.getElementById("addURL").addEventListener("click", addURL);
document.getElementById('addSkill').addEventListener('click', addSkill);
document.getElementById('addExpertise').addEventListener('click', addExpert);
document.getElementById("addEducation").addEventListener('click', addEducation);
document.getElementById("addRef").addEventListener('click', addReference);
document.getElementById("makeResume").addEventListener('click', makeResume);
