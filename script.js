const text =
"Wishing You Happiness, Success & Endless Blessings";

let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}

typing();

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {

    if (music.paused) {

        await music.play();

        musicBtn.innerHTML = "⏸️";
        musicBtn.classList.add("playing");

    } else {

        music.pause();

        musicBtn.innerHTML = "▶️";
        musicBtn.classList.remove("playing");
    }

});

function updateCountdown() {

    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        11,
        25
    );

    if (birthday < now) {
        birthday = new Date(
            now.getFullYear() + 1,
            11,
            25
        );
    }

    const diff = birthday - now;

    document.getElementById("days").textContent =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor(diff / (1000 * 60 * 60) % 24);

    document.getElementById("minutes").textContent =
        Math.floor(diff / (1000 * 60) % 60);

    document.getElementById("seconds").textContent =
        Math.floor(diff / 1000 % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

for(let b=0;b<15;b++){

const balloon=document.createElement("div");

balloon.className="balloon";
balloon.innerHTML="🎈";

balloon.style.left=Math.random()*100+"%";
balloon.style.animationDuration=
(Math.random()*8+8)+"s";

document.body.appendChild(balloon);
}

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const particles=[];

for(let i=0;i<150;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*5+2
});

}

function confetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.fillStyle=
`hsl(${Math.random()*360},100%,50%)`;

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

p.y+=2;

if(p.y>canvas.height){
p.y=0;
}

});

requestAnimationFrame(confetti);
}

confetti();

function launchFireworks(){

for(let i=0;i<40;i++){

const fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";
fire.style.left=Math.random()*100+"vw";
fire.style.top=Math.random()*100+"vh";
fire.style.fontSize="40px";
fire.style.pointerEvents="none";

document.body.appendChild(fire);

setTimeout(()=>{
fire.remove();
},1000);
}
}

const images =
document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

document.getElementById("closeLightbox")
.addEventListener("click",()=>{

lightbox.style.display="none";

});