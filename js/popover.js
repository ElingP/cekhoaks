var elem1 =
  '<div><img src="media/Profil.png" alt=""></div><div><h4>Bambang Nugroho</h4><h6>Reputasi: 9999</h6><h6>Laporan: 420</h6></div>';

var elem2 =
  '<div><img src="media/Profil.png" alt=""></div><div><h4>Bambang Nugroho</h4><h6>Reputasi: 9999</h6><h6>Laporan: 420</h6></div><div><a class="btn btn-primary btn-sm mr-5" href="UbahProfil.html" role="button">Ubah Profil</a><a class="btn btn-primary btn-sm ml-1" href="Home.html" role="button">Keluar</a></div>';

$(document).ready(function() {
  $(".popover1").popover({
    html: true,
    content: elem1
  });

  $(".popover2").popover({
    html: true,
    content: elem2
  });

  $('[data-toggle="popover"]').popover();
});
