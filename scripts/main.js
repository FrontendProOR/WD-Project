function sign_in_up_toggle(sign_in_up) {
  if(sign_in_up === 1){
    //sign in - uloguj se
    var x = document.getElementById("modalLoginForm");
  }else if(sign_in_up === 2){
    //sign up - registracija
    var x = document.getElementById("modalLoginForm1");
  }
    x.toggleAttribute('hidden');
}
function showTab(x){
  if(x===1){
    //fitness centri prikazi ispod tabelu sa dugmetom pored fitness centra za brisanje i formu za unos
  }else if(x===2){
    //treninzi prikazi ispod tabelu sa dugmetom pored treninga za brisanje i formu za unos
  }else if(x===3){
    //korisnici prikazi ispod tabelu sa dugmetom pored korisnika za brisanje i formu za unos
    document.getElementById("userHidDiv1").toggleAttribute("hidden");
    document.getElementById("userHidDiv2").toggleAttribute("hidden");
  }
}
function myFunction(){
  $("#navbar").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbar").collapse('hide');
    });
  });
}