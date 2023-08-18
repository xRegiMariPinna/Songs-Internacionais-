var song="";
var i = 0;

var  musica = [
"musicas/Arctic Monkeys - I Wanna Be Yours.mp3",
"musicas/Beach bunny - prom queen.mp3",
"musicas/Come Inside Of My Heart (Sped Up).mp3",
"musicas/Cupid's Chokehold (Speed).mp3",
"musicas/D4vd - Here with me.mp3",
"musicas/Dark Red (sped up).mp3",
"musicas/Die For You (Sped Up).mp3",
"musicas/DISCO LINES - BABY GIRL.mp3",
"musicas/DJ Snake - You Are My High.mp3",
"musicas/Doja Cat, Gwen Stefani - You Right x Luxurious.mp3",
"musicas/g3ox_em - GigaChad Theme.mp3",
"musicas/girl in red - we fell in love in october.mp3",
"musicas/Henrik - Give It To Me.mp3",
"musicas/I Wanna Ride I Wanna Ride (Sped Up).mp3",
"musicas/Izzamuzzic, Julien Marchal - Shootout.mp3",
"musicas/Jenny - Studio Killers.mp3",
"musicas/justine skye ft. tyga - collide.mp3",
"musicas/Kanye West - Bound 2.mp3",
"musicas/Memories - Sped Up.mp3",
"musicas/Miguel - Sure Thing.mp3",
"musicas/Mr Loverman - Ricky Montgomery.mp3",
"musicas/okayceci - feel u.mp3",
"musicas/paloma faith-only love can hurt like this (sped up+reverb).mp3",
"musicas/Pass the Dutchie - musical youth (speed up).mp3",
"musicas/Portugal - Kawe & Ananda.mp3",
"musicas/RAYE, 070 Shake - Escapism.mp3",
"musicas/Seafret - Atlantis ( sped up - tradução ).mp3",
"musicas/Secrets - A Boogie.mp3",
"musicas/sped up nightcore - Infinity (Jaymes Young).mp3",
"musicas/Stacey Ryan - Fall In Love Alone.mp3",
"musicas/Steve Lacy - Bad Habit.mp3",
"musicas/Stranded (with dray tyg)(Sped Up).mp3",
"musicas/Substance - sped up.mp3",
"musicas/Summertime Sadness (Sped Up).mp3",
"musicas/SZA - Kill Bill.mp3",
"musicas/The Neighbourhood - Sweater Weather.mp3",
"musicas/those eyes - new west.mp3",
"musicas/Trinidad Cardona, Robinson -  Love Me Back.mp3",
"musicas/why mona - Wannabe.mp3",
"musicas/Woo (sped up).mp3"
];

var albuns = [
    "album/Arctic Monkeys - I Wanna Be Yours.png",
    "album/Beach bunny - prom queen.png",
    "album/Come Inside Of My Heart (Sped Up).png",
    "album/Cupid's Chokehold (Speed).png",
    "album/D4vd - Here with me.png",
    "album/Dark Red (sped up).png",
    "album/Die For You (Sped Up).png",
    "album/DISCO LINES - BABY GIRL.png",
    "album/DJ Snake - You Are My High.png",
    "album/Doja Cat, Gwen Stefani - You Right x Luxurious.mp3.png",
    "album/g3ox_em - GigaChad Theme.png",
    "album/girl in red - we fell in love in october.png",
    "album/Henrik - Give It To Me.png",
    "album/I Wanna Ride I Wanna Ride (Sped Up).png",
    "album/Izzamuzzic, Julien Marchal - Shootout.png",
    "album/Jenny - Studio Killers.png",
    "album/justine skye ft. tyga - collide.png",
    "album/Kanye West - Bound 2.png",
    "album/Memories - Sped Up.png",
    "album/Miguel - Sure Thing.png",
    "album/Mr Loverman - Ricky Montgomery.png",
    "album/okayceci - feel u.png",
    "album/paloma faith-only love can hurt like this (sped up+reverb).png",
    "album/Pass the Dutchie - musical youth (speed up).png",
    "album/Portugal - Kawe & Ananda.png",
    "album/RAYE, 070 Shake - Escapism.png",
    "album/Seafret - Atlantis ( sped up - tradução ).png",
    "album/Secrets - A Boogie.png",
    "album/sped up nightcore - Infinity (Jaymes Young).png",
    "album/Stacey Ryan - Fall In Love Alone.png",
    "album/Steve Lacy - Bad Habit.png",
    "album/Stranded (with dray tyg)(Sped Up).png",
    "album/Substance - sped up.png",
    "album/Summertime Sadness (Sped Up).png",
    "album/SZA - Kill Bill.png",
    "album/The Neighbourhood - Sweater Weather.png",
    "album/those eyes - new west.png",
    "album/Trinidad Cardona, Robinson -  Love Me Back.png",
    "album/why mona - Wannabe.png",
    "album/Woo (sped up).png"    
];

var frases = [
    "Arctic Monkeys - I Wanna Be Yours",
    "Beach bunny - prom queen",
    "Come Inside Of My Heart (Sped Up)",
    "Cupid's Chokehold (Speed)",
    "D4vd - Here with me",
    "Dark Red (sped up)",
    "Die For You (Sped Up)",
    "DISCO LINES - BABY GIRL",
    "DJ Snake - You Are My High",
    "Doja Cat, Gwen Stefani - You Right x Luxurious",
    "g3ox_em - GigaChad Theme",
    "girl in red - we fell in love in october",
    "Henrik - Give It To Me",
    "I Wanna Ride I Wanna Ride (Sped Up)",
    "Izzamuzzic, Julien Marchal - Shootout",
    "Jenny - Studio Killers",
    "justine skye ft. tyga - collide",
    "Kanye West - Bound 2",
    "Memories - Sped Up",
    "Miguel - Sure Thing",
    "Mr Loverman - Ricky Montgomery",
    "okayceci - feel u",
    "paloma faith-only love can hurt like this (sped up+reverb)",
    "Pass the Dutchie - musical youth (speed up)",
    "Portugal - Kawe & Ananda",
    "RAYE, 070 Shake - Escapism",
    "Seafret - Atlantis ( sped up - tradução )",
    "Secrets - A Boogie",
    "sped up nightcore - Infinity (Jaymes Young)",
    "Stacey Ryan - Fall In Love Alone",
    "Steve Lacy - Bad Habit",
    "Stranded (with dray tyg)(Sped Up)",
    "Substance - sped up",
    "Summertime Sadness (Sped Up)",
    "SZA - Kill Bill",
    "The Neighbourhood - Sweater Weather",
    "those eyes - new west",
    "Trinidad Cardona, Robinson -  Love Me Back",
    "why mona - Wannabe",
    "Woo (sped up)"
    

];
function playMusic(){
    document.getElementById("nomeAlbum").innerHTML=frases[i];
    document.getElementById("musica").src=albuns[i];
   song= new Audio(musica[i])
   song.play();
}
function posterior(){
    i=(i+1)% musica.length;
    document.getElementById("nomeAlbum").innerHTML=frases[i];
    document.getElementById("musica").src=albuns[i];

    trocarMusica();
}
function anterior(){
    i=(i - 1 + musica.length) % musica.length;
    document.getElementById("nomeAlbum"). src=albuns[i];
    document.getElementById("musica").src=albuns[i];

    trocarMusica();
}
function trocarMusica(){
    song.pause();
    song=new  Audio(musica[i]);
    song.play;
}
function pauseMusic(){
    song.pause;
}

