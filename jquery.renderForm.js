$.fn.renderForm = function(config) {
  
  var form = renderForm();
  form.append(renderTitle());
  form.append(renderFormElements());
  form.append(renderSubmit());
  this.append(form);

  function renderForm() {
    var form = $('<form>');
    form.attr('role', 'form');
    form.attr('action', config.formSubmitUrl);
    form.attr('method', 'get');
    form.addClass('form');
    return form;
  }

  function renderTitle() {
    var title = $('<div>');
    title.addClass('title');
    title.text(config.formTitle);
    return title;
  }

  function renderFormElements() {
    var elements = $('<div>');
    elements.addClass('elements');

    for (let i = 0; i < config.formFields.length; i++) {
      var elWrapper = $('<div>');
      elWrapper.addClass('el-wrapper');

      var label = $('<label>');
      label.text(config.formFields[i].label + ':');

      var el;

      if(config.formFields[i].type === 'text') {
        el = $('<input>');
        el.attr('type', 'text');
      }
      else if(config.formFields[i].type === 'number') {
        el = $('<input>');
        el.attr('type', 'number');
      }
      else if(config.formFields[i].type === 'textarea') {
        el = $('<textarea>');
        el.attr('rows', '4');
        el.attr('cols', '50');
      }
      
      el.attr('name', config.formFields[i].name);

      elWrapper.append(label, el);
      elements.append(elWrapper);
    }
    
    return elements;
  }

  function renderSubmit() {
    var submitWrapper = $('<div>');
    submitWrapper.addClass('submit-wrapper');
    var submitBtn = $('<input>');
    submitBtn.attr('type', 'submit');
    submitBtn.attr('value', 'Submit');
    submitBtn.addClass('submit');
    submitWrapper.append(submitBtn);
    return submitWrapper;
  }

  return this;
};
