// =======================================================
// --- FEATURE: Mobile Hamburger Menu Toggle & Smooth Scroll ---
// =======================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Hamburger click event
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Optional: Toggle icon (from bars to a close icon)
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Smooth scroll and close menu on link click
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    
    // Close mobile menu if open
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      // Reset icon to bars
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
    
    // Smooth scroll
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// =======================================================
// --- FEATURE: Single Frame Certification Viewer ---
// =======================================================
const certificates = [
    {
        title: "OCI Foundations Associate",
        issuer: "Oracle",
        image: "images/cert1.png",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B1C83BACD452CD5407AF3EF5E01FAE5FDA65283285DF88AC72AB8EB8B5CEF894"
    },
    {
        title: "Career Essentials in Generative AI",
        issuer: "Microsoft & LinkedIn",
        image: "images/cert3.png",
        link: "https://www.linkedin.com/learning/certificates/5615e03cbaff1ad6eacad5607db0d15557c6d401e566d999bfb928db38727184"
    },
    {
        title: "Networking Foundations: Networking Basics",
        issuer: "LinkedIn Learning",
        image: "images/cert4.png",
        link: "https://www.linkedin.com/learning/certificates/13d0c38003c1fb3da61cab61244ae1145297113a40bc38c251c1092e1a89ba30"
    },
    {
        title: "Application Based Python",
        issuer: "New Age Solution Technologies NASTECH",
        image: "images/cert4b.jpg",
        link: "https://drive.google.com/file/d/1tsqjTu9cQjMdR29xPTkgVcbxn_Ybjsoc/view?usp=sharing"
    },
    {
        title: "Programming For Everybody (Python)",
        issuer: "University of Michigan",
        image: "images/cert5.png",
        link: "https://coursera.org/share/b7adfd9a3550a39cee7308ee30d91e95"
    },
    {
        title: "Networking Foundations: IP Addressing",
        issuer: "LinkedIn Learning",
        image: "images/cert6.png",
        link: "https://drive.google.com/file/d/1PcbSCKw5z0TJ5cX-XSJFTjHvfjkihYHa/view?usp=drive_link"
    },
    {
        title: "Introduction To Python",
        issuer: "Infosys Springboard",
        image: "images/cert8.jpg",
        link: "https://drive.google.com/file/d/12KCGYQc0aN97sHXPFBCHvlzOfaf2FMlt/view?usp=sharing"
    },
    {
        title: "Internship Training - Python",
        issuer: "New Age Solution Technologies NASTECH",
        image: "images/cert4a.png",
        link: "https://drive.google.com/file/d/1NHRLUf7fwxlQ0Pfcs8gZwQcg92Qd_QEA/view?usp=sharing"
    }


    // Add more certificate objects here
];

let currentCertIndex = 0;

const certCard = document.getElementById('current-cert-card');
const certImg = document.getElementById('cert-img');
const certTitle = document.getElementById('cert-title');
const certIssuer = document.getElementById('cert-issuer');
const certLink = document.getElementById('cert-link');
const prevBtn = document.getElementById('prev-cert-btn');
const nextBtn = document.getElementById('next-cert-btn');

function updateCertificateViewer(index) {
    // Fade out the current certificate
    certCard.classList.remove('active-cert');
    
    // Use a small delay for a smooth fade effect
    setTimeout(() => {
        const cert = certificates[index];
        
        // Update content
        certImg.src = cert.image;
        certImg.alt = cert.title;
        certTitle.textContent = cert.title;
        certIssuer.textContent = `Issued by: ${cert.issuer}`;
        certLink.href = cert.link;
        
        // Fade in the new certificate
        certCard.classList.add('active-cert');
    }, 200); // 200ms delay matches the CSS transition time
}

function showNextCertificate() {
    currentCertIndex = (currentCertIndex + 1) % certificates.length;
    updateCertificateViewer(currentCertIndex);
}

function showPrevCertificate() {
    currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
    updateCertificateViewer(currentCertIndex);
}

// Attach event listeners
nextBtn.addEventListener('click', showNextCertificate);
prevBtn.addEventListener('click', showPrevCertificate);

// Initialize viewer on load (optional: the HTML already loads the first one)
// updateCertificateViewer(currentCertIndex); 

// =======================================================
// --- FEATURE: Enhanced Contact Form Submission ---
// =======================================================
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  
  const form = this;
  const status = document.getElementById('formStatus');
  const button = form.querySelector('button[type="submit"]');

  // Disable button and show a sending status
  button.disabled = true;
  button.textContent = 'Sending...';
  status.textContent = 'Sending your message, please wait...';
  status.style.color = '#60a5fa'; // Blue for pending

  // --- Mock API Call (Replace with actual form submission service) ---
  setTimeout(() => {
    // Simulate success
    status.textContent = 'Thank you! Your message has been sent successfully.';
    status.style.color = '#4ade80'; // Green for success
    
    form.reset();
    
    // Re-enable button and clear status after a short delay
    setTimeout(() => {
        button.disabled = false;
        button.textContent = 'Send Message';
        status.textContent = ''; // Clear status message
    }, 7000);
    
  }, 2000); // 2 second delay to simulate network latency
  
});

// =======================================================
// --- FEATURE: Dynamic Footer Year ---
// =======================================================
// Corrected to show the actual current year
document.getElementById('currentYear').textContent = new Date().getFullYear();