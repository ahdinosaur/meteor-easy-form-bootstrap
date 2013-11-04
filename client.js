EasyForm.ui = 'bootstrap';

Template.easyFormInsertModal.rendered = 
  EasyForm.formTemplateRendered('insert', function (callback) {
    $('#insertDialog').modal('hide');
    console.log(callback);
    return callback();
  });

EasyForm.insertModal = Template.easyFormInsertModal;
