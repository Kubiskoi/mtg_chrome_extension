var d = new Date();
var month = d.getMonth()+1;
if (month < 10) month = "0"+String(month) 
else month = String(month);
var date_to_show = String(d.getFullYear()+"."+month+".XX 17:30");

var dt = document.getElementsByName("i_time");
dt[0].value=date_to_show;

var ty = document.getElementsByName("n_id_tournament_type");
ty[0].value=5;
var mh = document.getElementsByName("i_max_players");
mh[0].value=50;
var kp = document.getElementsByName("s_tournament_description");
kp[0].value="Highlander";
var lp = document.getElementsByName("s_location_description");
lp[0].value="Nemecky Highlander podla pravidiel www.highlandermagic.info!";
var ro = document.getElementsByName("b_registration");
ro[0].value=1;
var vs = document.getElementsByName("i_price");
vs[0].value="3.5 €";
var ce = document.getElementsByName("s_price");
ce[0].value="Booster na hráča, alebo highlander kredit.";
var fo = document.getElementsByName("n_id_format_type");
fo[0].value=6;