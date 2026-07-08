/**
 * Dash & Partners — Unified Component Loader
 * Works with file:// protocol (no server needed)
 * Injects header & footer, sets active nav link, initializes navbar behavior.
 */
(function () {
    const isArabic = document.documentElement.lang === 'ar';

    // ── 1. Inject Header ───────────────────────────────────────────────────
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = isArabic ? (window.HEADER_AR || '') : (window.HEADER_EN || '');
    }

    // ── 2. Inject Footer ───────────────────────────────────────────────────
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = isArabic ? (window.FOOTER_AR || '') : (window.FOOTER_EN || '');
    }

    // ── 3. Active Link Detection ───────────────────────────────────────────
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Highlight active link in desktop navbar
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.remove('text-white');
            link.classList.add('text-gold');
        }
    });

    // Highlight active link in mobile menu
    document.querySelectorAll('.mobile-nav-link[data-page]').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.remove('text-white');
            link.classList.add('text-gold');
        }
    });

    // Highlight active link in footer nav
    document.querySelectorAll('.footer-nav-link[data-page]').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-gold', 'font-bold');
        }
    });

    // ── 4. Navbar Scroll Behavior ──────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    const logo   = document.getElementById('nav-logo');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-dark/95', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
                navbar.classList.remove('py-4', 'md:py-6');
                if (logo) {
                    logo.classList.replace('h-12', 'h-10');
                    logo.classList.replace('md:h-16', 'md:h-14');
                }
            } else {
                navbar.classList.remove('bg-dark/95', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
                navbar.classList.add('py-4', 'md:py-6');
                if (logo) {
                    logo.classList.replace('h-10', 'h-12');
                    logo.classList.replace('md:h-14', 'md:h-16');
                }
            }
        });
    }

    // ── 5. Mobile Menu Toggle ──────────────────────────────────────────────
    const mobileBtn  = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        const mobileIcon = mobileBtn.querySelector('i');
        mobileBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('opacity-100');
            if (isOpen) {
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                if (mobileIcon) mobileIcon.classList.replace('fa-times', 'fa-bars');
            } else {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                if (mobileIcon) mobileIcon.classList.replace('fa-bars', 'fa-times');
            }
        });
    }

    // ── 6. Custom Cursor (Desktop only) ────────────────────────────────────
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const cursorDot     = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        if (cursorDot && cursorOutline) {
            window.addEventListener('mousemove', (e) => {
                cursorDot.style.left = `${e.clientX}px`;
                cursorDot.style.top  = `${e.clientY}px`;
                cursorOutline.animate(
                    { left: `${e.clientX}px`, top: `${e.clientY}px` },
                    { duration: 500, fill: 'forwards' }
                );
            });
        }

        // Re-init cursor hover for items injected by components
        document.querySelectorAll('.cursor-item').forEach(item => {
            item.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            item.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }

})();
