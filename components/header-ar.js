window.HEADER_AR = `
    <!-- Premium Navigation (RTL) -->
    <nav id="navbar" class="fixed w-full z-[100] px-6 md:px-10 py-4 md:py-6 flex justify-between items-center transition-all duration-500 text-white">

        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-btn" class="md:hidden text-2xl z-50 relative text-white focus:outline-none cursor-item" data-cursor="hover">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Desktop Links -->
        <div class="hidden md:flex gap-6 lg:gap-10 font-body text-xs lg:text-sm tracking-wide uppercase items-center">
            <a href="index-ar.html"
                class="nav-link text-white hover:text-gold relative after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 cursor-item transition-colors"
                data-cursor="hover" data-page="index-ar.html">الرئيسية</a>
            <a href="about-ar.html"
                class="nav-link text-white hover:text-gold relative after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 cursor-item transition-colors"
                data-cursor="hover" data-page="about-ar.html">الشركة</a>
            <a href="practice-areas-ar.html"
                class="nav-link text-white hover:text-gold relative after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 cursor-item transition-colors"
                data-cursor="hover" data-page="practice-areas-ar.html">التخصصات</a>
            <a href="our-team-ar.html"
                class="nav-link text-white hover:text-gold relative after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 cursor-item transition-colors"
                data-cursor="hover" data-page="our-team-ar.html">فريقنا</a>
            <a href="clients-ar.html"
                class="nav-link text-white hover:text-gold relative after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 cursor-item transition-colors"
                data-cursor="hover" data-page="clients-ar.html">عملاؤنا</a>
            <a href="news-ar.html"
                class="nav-link text-white hover:text-gold relative after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300 cursor-item transition-colors"
                data-cursor="hover" data-page="news-ar.html">الأخبار</a>
        </div>

        <!-- Right: Language + Contact -->
        <div class="flex items-center gap-4 md:gap-6 z-50 relative">
            <a href="index.html" id="lang-switch"
                class="text-white hover:text-gold font-body text-xs md:text-sm tracking-wide cursor-item transition-colors flex items-center gap-2 border border-white/10 hover:border-gold/50 px-3 py-1.5 rounded-full transition-all duration-300"
                data-cursor="hover">
                <i class="fa-solid fa-globe text-xs md:text-sm text-gold/80"></i>
                <span>EN</span>
            </a>
            <a href="contact-ar.html"
                class="border border-gold text-gold hover:bg-gold hover:text-dark px-4 md:px-6 py-2 rounded-sm transition-all cursor-item font-body text-xs md:text-sm tracking-wide uppercase z-50 relative whitespace-nowrap"
                data-cursor="hover">اتصل بنا</a>
        </div>

    </nav>

    <!-- Mobile Fullscreen Menu -->
    <div id="mobile-menu"
        class="fixed inset-0 bg-dark z-[90] flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-500">
        <div class="flex flex-col gap-8 font-heading text-3xl text-center uppercase tracking-wide">
            <a href="index-ar.html" class="mobile-nav-link text-white hover:text-gold transition-colors" data-page="index-ar.html">الرئيسية</a>
            <a href="about-ar.html" class="mobile-nav-link text-white hover:text-gold transition-colors" data-page="about-ar.html">الشركة</a>
            <a href="practice-areas-ar.html" class="mobile-nav-link text-white hover:text-gold transition-colors" data-page="practice-areas-ar.html">التخصصات</a>
            <a href="our-team-ar.html" class="mobile-nav-link text-white hover:text-gold transition-colors" data-page="our-team-ar.html">فريقنا</a>
            <a href="clients-ar.html" class="mobile-nav-link text-white hover:text-gold transition-colors" data-page="clients-ar.html">عملاؤنا</a>
            <a href="news-ar.html" class="mobile-nav-link text-white hover:text-gold transition-colors" data-page="news-ar.html">الأخبار</a>
            <a href="contact-ar.html" class="text-gold mt-4 border border-gold px-8 py-3 rounded-sm">اتصل بنا</a>
            <a href="index.html" class="text-white text-lg flex items-center justify-center gap-2 mt-4 hover:text-gold transition-colors" data-cursor="hover">
                <i class="fa-solid fa-globe text-gold"></i>
                <span>English</span>
            </a>
        </div>
    </div>
`;
