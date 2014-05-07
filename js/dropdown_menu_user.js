jQuery(document).ready(function() {
  jQuery('.block-body').hide();

  jQuery('.block-header').click(function() {
    jQuery('.block-body').toggle();
  });
});
