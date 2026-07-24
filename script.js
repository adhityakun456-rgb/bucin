const typingText = "Selamat datang Nadine Alycia ❤️";
let i = 0;

function typeEffect() {
    if (i < typingText.length) {
        document.querySelector(".typing").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = function () {
    typeEffect();
};

const quotes = [

`🌅 Selamat Pagi Nadine Alycia ❤️

Semoga pagi ini membawa kebahagiaan baru untukmu.
Jangan lupa sarapan ya cantik.
Aku harap senyummu selalu menghiasi harimu.
Semangat menjalani aktivitas hari ini.
Aku selalu mendoakanmu.`,

`☀️ Selamat Siang Nadine Alycia ❤️

Semoga hari ini berjalan lancar.
Kalau capek jangan lupa istirahat ya.
Aku bangga sama kamu.
Tetap semangat cantikku.`,

`🌇 Selamat Sore Nadine Alycia ❤️

Terima kasih sudah berjuang hari ini.
Semoga rasa lelahmu segera hilang.
Aku selalu ada buat kamu.`,

`🌙 Selamat Malam Nadine Alycia ❤️

Selamat beristirahat.
Semoga tidurmu nyenyak.
Mimpi indah ya sayang.
Aku akan selalu mendoakanmu.`,

`❤️

Aku mungkin bukan orang yang sempurna.

Tapi aku akan selalu berusaha menjadi alasan kamu tersenyum setiap hari.`,

`🥰

Kalau dunia sedang tidak baik-baik saja,

ingat masih ada aku yang selalu sayang sama kamu.`,

`💖

Aku tidak tahu masa depan seperti apa.

Yang aku tahu...

aku ingin kamu selalu ada di dalamnya.`,

`🌸

Senyummu adalah alasan kenapa hariku selalu terasa indah.`,

`🥹

Terima kasih sudah hadir di hidupku.

Aku bersyukur dipertemukan denganmu.`,

`💕

Semoga kita selalu diberi kesehatan,

kebahagiaan,

dan bisa terus bersama.`

];

function randomQuote(){

const random = Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerHTML = quotes[random];

const pentol = [

"🥟 Pentol : Semangat ya cantikk ❤️",

"🥟 Pentol : Jangan lupa makan 😆",

"🥟 Pentol : Aku jagain dari jauh ya ❤️",

"🥟 Pentol : Jangan sedih yaa 🥹",

"🥟 Pentol : Senyum dong cantik 😍",

"🥟 Pentol : Aku sayang Nadine ❤️"

];

const p = Math.floor(Math.random()*pentol.length);

document.querySelector(".pentol-text").innerHTML = pentol[p];

}
