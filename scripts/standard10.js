var d = new Date();
var month = d.getMonth()+1;
if (month < 10) month = "0"+String(month) 
else month = String(month);
var date_to_show = String(d.getFullYear()+"."+month+".XX 10:00");

var dt = document.getElementsByName("i_time");
dt[0].value=date_to_show;

var ty = document.getElementsByName("n_id_tournament_type");
ty[0].value=4;
var mh = document.getElementsByName("i_max_players");
mh[0].value=50;
var kp = document.getElementsByName("s_tournament_description");
kp[0].value="Standard";
var lp = document.getElementsByName("s_location_description");
lp[0].value="Cloudpost Vás pozýva na tradičnú Standardovú sobotu! Príďte si zahrať a pobaviť sa, teším sa na Vašu účasť!";
var ro = document.getElementsByName("b_registration");
ro[0].value=1;
var vs = document.getElementsByName("i_price");
vs[0].value="3.5 €";
var ce = document.getElementsByName("s_price");
ce[0].value="Booster na hráča.";
var fo = document.getElementsByName("n_id_format_type");
fo[0].value=3;