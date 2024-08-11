
    function showSkills() {
        const skillsDiv = document.getElementById('skills');
            if (skillsDiv.style.display === 'none' || skillsDiv.style.display === '') {
                skillsDiv.style.display = 'block';
            } else {
                skillsDiv.style.display = 'none';
            }
        }
        ScrollReveal({ 
            distance:'80px',
            duration:2000,
            delay:200,
         });
         ScrollReveal().reveal('.home-content,heading', {origin:'top'});
         ScrollReveal().reveal('.home-img,.service-container,.continer-box,.contact form', {origin:'buttom'});
         ScrollReveal().reveal('.home-contact h1,.about-img', {origin:'left'});
         ScrollReveal().reveal('.home-contact hp,.about-content', {origin:'right'});

         const typed = new Typed('.multiple-text', {
            strings: ['Web Developer.', 'UI/UX Designer.'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        });
        