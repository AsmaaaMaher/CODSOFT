const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="/Images/logo.png" class="logo" alt="Logo" >
    </div>
    <p class="info">We could not have reached this milestone of achievement without you.</p>
    <p class="info">Support Emails - help@flowers.com, support@flowers.com</p>
    <p class="info">Telephone - 0123456789</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Terms & Services</a>
            <a href="#" class="social-link">Privacy & Policy</a>
        </div>
        <div>
            <div class="social-media">
                <a href="#"><i class="bx bxl-linkedin-square"></i></a>
                <a href="#"><i class="bx bxl-facebook-square"></i></a>
                <a href="#"><i class="bx bxl-instagram-alt"></i></a>
                <a href="#"><i class="bx bxl-github"></i></a>
            </div>
        </div>
    </div>
    <p class="footer-credit">Warda, Beautiful Flowers Forever.</p>
    `;

}



createFooter();