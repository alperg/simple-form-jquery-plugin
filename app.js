$(function() {

  var apiUrl = "http://api.alperg.com/form/";

  function renderTable() {
    $.ajax({
      url: apiUrl,
      method: "GET"
    })
    .done(function(response) {
      renderTableBody(response);
    });
  }

  function renderTableBody(formData) {
    var table = $("#formsTable");
    var tbody = $("<tbody>");

    $.each(formData, function(index, form) {
      var tr = $("<tr>");
      var idTd = $("<td>");
      idTd.text(form.formId);
      var nameTd = $("<td>");
      nameTd.text(form.formName);
      var btnTd = $("<td>");
      var btnRender = $("<button>").text("Render").addClass('render-button');
      btnRender.on("click", function() {
        $('.form-wrapper').empty();
        $('.form-wrapper').renderForm(form).addClass('form-wrapper');
      });
      btnTd.append(btnRender);
      tr.append(idTd, nameTd, btnTd);
      tbody.append(tr);
    });
    table.append(tbody);
  }

  renderTable();

});
