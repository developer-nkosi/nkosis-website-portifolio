// Mobile Navigation Toggle
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.Or just email me');
    this.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Initialize the background animation using Three.js
(function () {
    var container = document.getElementById('bg-canvas');
    if (!container) return;

    var SEPARATION = 150;
    var AMOUNTX = 40;
    var AMOUNTY = 60;

    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 2000, 10000);

    var camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        10000
    );
    camera.position.set(0, 355, 1220);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 0);
    container.appendChild(renderer.domElement);

    var positions = [];
    for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
            var x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
            var y = 0;
            var z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
            positions.push(x, y, z);
        }
    }

    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
    );

    var material = new THREE.PointsMaterial({
        size: 8,
        color: 0x2563eb,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
    });

    var points = new THREE.Points(geometry, material);
    scene.add(points);

    var count = 0;
    var posAttr = geometry.attributes.position;
    var posArray = posAttr.array;

    function animate() {
        requestAnimationFrame(animate);

        var i = 0;
        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                var index = i * 3;
                posArray[index + 1] =
                    Math.sin((ix + count) * 0.3) * 50 +
                    Math.sin((iy + count) * 0.5) * 50;
                i++;
            }
        }
        posAttr.needsUpdate = true;

        renderer.render(scene, camera);
        count += 0.1;
    }

    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    animate();
})();