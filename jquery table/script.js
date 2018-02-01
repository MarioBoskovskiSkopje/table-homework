$(document).ready(function () {
    var table = $("#contacts-table");   // tuku faleshe query selektorot treba da stavas da li selektiras po klasa ili po ID
    var saveButton = $("#saveButton"); // tuku faleshe query selektorot treba da stavas da li selektiras po klasa ili po ID
    var form = $("#contacts-form");
    var lastUniqueId = 1;

    $(saveButton).click(function (event) {
        event.preventDefault();

        // netocna sintaksa
        // var firstName = $("#first_name").value;
        // var lastName = $("#last_name").value;
        // var email = $("#email").value;

        var firstName = $("#first_name").val();
        var lastName = $("#last_name").val();
        var email = $("#email").val();

        var tr = $("<tr>");

        var uniqueIdTd = $("<td>");
        var firstNameTd = $("<td>");
        var lastNameTd = $("<td>");
        var emailTd = $("<td>");
        var buttonsTd = $("<td>");


        // netocna sintaksa 
        // uniqueIdTd.text() = lastUniqueId; 
        // firstNameTd.text() = firstName;
        // lastNameTd.text() = lastName;
        // emailTd.text() = email;

        // treba vaka

        uniqueIdTd.text(lastUniqueId); 
        firstNameTd.text(firstName);
        lastNameTd.text(lastName);
        emailTd.text(email);


        buttonsTd.html(`
        <input type="button" value="edit"  id="editRow${lastUniqueId}" />
        <input type="button" value="delete" id="deleteRow${lastUniqueId}" />
        <input type="button" value="save" id="saveRow${lastUniqueId}" style="display: none" /> 
    `);

        tr.append(uniqueIdTd);
        tr.append(firstNameTd);
        tr.append(lastNameTd);
        tr.append(emailTd);
        tr.append(buttonsTd);

        table.append(tr);


        var editRowButton = $(`#editRow${lastUniqueId}`);
        var deleteRowButton = $(`#deleteRow${lastUniqueId}`);
        var saveRowButton = $(`#saveRow${lastUniqueId}`);


        $(editRowButton).click(function () {
            // gresna sintaksata ova e sintaksa za vanila js objekt a tuku imas jQuery objekti napravi console.log ako ne mi veruvas
            // editRowButton.style.display = "none";
            // deleteRowButton.style.display = "none";
            // saveRowButton.style.display = "block";

            //ako sakas vanila js sintaksa na jquery objekt ova ke ti zavrsi rabota
            // editRowButton[0].style.display = "none";
            // deleteRowButton[0].style.display = "none";
            // saveRowButton[0].style.display = "block";
            
            editRowButton.css("display", "none");
            deleteRowButton.css("display", "none");
            saveRowButton.css("display", "block");


            // pak gresna sintaksa
            // firstNameTd.html() = `<input type="text" value="${firstName}" id="first-name-${lastUniqueId}" />`;
            // lastNameTd.html() = `<input type="text" value="${lastName}" id="last-name-${lastUniqueId}" />`;
            // emailTd.html() = `<input type="text" value="${email}" id="email-${lastUniqueId}" />`;
            firstNameTd.html(`<input type="text" value="${firstName}" id="first-name-${lastUniqueId}" />`);
            lastNameTd.html(`<input type="text" value="${lastName}" id="last-name-${lastUniqueId}" />`);
            emailTd.html(`<input type="text" value="${email}" id="email-${lastUniqueId}" />`);

            $(saveRowButton).click(function () {
                // istoto kako od goru
                // editRowButton.style.display = "inline";
                // deleteRowButton.style.display = "inline";
                // saveRowButton.style.display = "none";
    
                editRowButton.css("display", "inline");
                deleteRowButton.css("display", "inline");
                saveRowButton.css("display", "none");
    
                firstName = $(`#first-name-${lastUniqueId}`).val();
                lastName = $(`#last-name-${lastUniqueId}`).val();
                email = $(`#email-${lastUniqueId}`).val();
    
    
                // pak gresna sintaksa 
                // firstNameTd.text() = firstName;
                // lastNameTd.text() = lastName;
                // emailTd.text() = email;
    
                firstNameTd.text(firstName);
                lastNameTd.text(lastName);
                emailTd.text(email);
    
            });
        });

        $(deleteRowButton).click(function () {
            tr.remove();
        });


        form[0].reset();
        lastUniqueId++;
    });
});