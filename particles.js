const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = document.documentElement.scrollHeight;

const particles = [];

let particleColor = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "rgba(255,255,255,0.7)"
    : "rgba(0,0,0,0.7)";

window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", e => {
        particleColor = e.matches
            ? "rgba(255,255,255,0.7)"
            : "rgba(0,0,0,0.7)";
    });

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.radius = Math.random() * 2 + 1;

        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (isDarkMode) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
        } else {
            const spikes = 5;
            const outerRadius = this.radius * 2.5;
            const innerRadius = this.radius * 1.5;

            let rot = Math.PI / 2 * 3;
            let x = this.x;
            let y = this.y;
            let step = Math.PI / spikes;

            ctx.beginPath();
            ctx.moveTo(x, y - outerRadius);

            for(let i = 0; i < spikes; i++) {
                ctx.lineTo(
                    x + Math.cos(rot) * outerRadius,
                    y + Math.sin(rot) * outerRadius
                );

                rot += step;

                ctx.lineTo(
                    x + Math.cos(rot) * innerRadius,
                    y + Math.sin(rot) * innerRadius
                );

                rot += step;
            }

            ctx.closePath();
            ctx.fillStyle = particleColor;
            ctx.fill();
        }
    }
}

for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();