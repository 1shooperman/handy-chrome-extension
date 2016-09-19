var save_options = function () {
  var rawButton = document.getElementById('rawButton').checked;
  var escalationOpts = document.getElementById('escalationOpts').checked;
  chrome.storage.sync.set({
    showRawButton: rawButton,
    showEscalationOpts: escalationOpts
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
};

var restore_options = function () {
  chrome.storage.sync.get({
    showRawButton: false,
    showEscalationOpts: false
  }, function(items) {
    document.getElementById('rawButton').checked = items.showRawButton;
    document.getElementById('escalationOpts').checked = items.showEscalationOpts;
  });
};
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
