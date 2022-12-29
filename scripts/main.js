//zatvara nakon odabrane opcije u navigaciji
function myFunction(){
  $("#navbar").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbar").collapse('hide');
    });
  });
}