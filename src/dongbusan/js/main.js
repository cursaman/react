/* =========================================================
       Header Interaction
       1. 스크롤 시 헤더 배경 변경
       2. 햄버거 버튼 클릭 시 Mobile Drawer 열고 닫기
       3. 메뉴 클릭 / 배경 클릭 / ESC 키 입력 시 Drawer 닫기
    ========================================================= */
    const header = document.querySelector(".header");
    const menuBtn = document.querySelector(".menu-btn");
    const mobileDrawer = document.querySelector(".mobile-drawer");
    const drawerDim = document.querySelector(".drawer-dim");
    const drawerLinks = document.querySelectorAll(".mobile-drawer a");

    // 스크롤이 50px 이상 내려가면 헤더에 배경색 추가
    const handleHeaderScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    // 모바일 메뉴 열기
    const openDrawer = () => {
      menuBtn.classList.add("active");
      mobileDrawer.classList.add("active");
      drawerDim.classList.add("active");
      document.body.classList.add("menu-open");
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.setAttribute("aria-label", "모바일 메뉴 닫기");
      mobileDrawer.setAttribute("aria-hidden", "false");
    };

    // 모바일 메뉴 닫기
    const closeDrawer = () => {
      menuBtn.classList.remove("active");
      mobileDrawer.classList.remove("active");
      drawerDim.classList.remove("active");
      document.body.classList.remove("menu-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "모바일 메뉴 열기");
      mobileDrawer.setAttribute("aria-hidden", "true");
    };

    // 햄버거 버튼 클릭 시 열기 / 닫기 토글
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("active");
      isOpen ? closeDrawer() : openDrawer();
    });

    // 어두운 배경 클릭 시 닫기
    drawerDim.addEventListener("click", closeDrawer);

    // 모바일 메뉴 안의 링크 클릭 시 닫기
    drawerLinks.forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    // ESC 키로 닫기
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDrawer();
    });

    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll();

    /* =========================================================
       GSAP Motion Interaction
       1. 로딩 화면
       2. Hero 텍스트 등장
       3. 카드 / 이미지 Fade In
       4. 숫자 Count Up
       5. Top 버튼
    ========================================================= */
    const loadingScreen = document.querySelector(".loading-screen");
    const topBtn = document.querySelector(".top-btn");


    /* =========================================================
       Hero Swiper
       - 8장 이미지 자동 전환
       - autoplay delay: 3000ms = 3초
       - fade 효과 적용
    ========================================================= */
    const heroProgress = document.querySelector(".hero-progress span");

    if (document.querySelector(".hero-swiper")) {
    const heroSwiper = new Swiper(".hero-swiper", {
      loop: true,
      effect: "fade",
      speed: 1200,
      allowTouchMove: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".hero-pagination",
        type: "fraction",
        formatFractionCurrent: (number) => String(number).padStart(2, "0"),
        formatFractionTotal: (number) => String(number).padStart(2, "0"),
      },
      on: {
        init() {
          if (!heroProgress) return;
          heroProgress.style.transition = "none";
          heroProgress.style.width = "0%";
          requestAnimationFrame(() => {
            heroProgress.style.transition = "width 3000ms linear";
            heroProgress.style.width = "100%";
          });
        },
        slideChangeTransitionStart() {
          if (!heroProgress) return;
          heroProgress.style.transition = "none";
          heroProgress.style.width = "0%";
          requestAnimationFrame(() => {
            heroProgress.style.transition = "width 3000ms linear";
            heroProgress.style.width = "100%";
          });
        },
      },
    });
    }

    // ScrollTrigger 플러그인 등록
    gsap.registerPlugin(ScrollTrigger);

    // 애니메이션을 줄 대상에게 fade-up 클래스 자동 부여
    const fadeTargets = document.querySelectorAll(
      ".section-title, .image-card, .club-card, .reservation-card, .gallery-item, .location-info, .map-box, .footer-brand, .footer-menu, .stat-box"
    );

    fadeTargets.forEach((target) => target.classList.add("fade-up"));

    // 페이지 진입 로딩 화면
    window.addEventListener("load", () => {
      const loadingTl = gsap.timeline();

      loadingTl
        .to(".loader-logo", {
          y: -12,
          opacity: 0,
          duration: 0.45,
          delay: 0.45,
          ease: "power2.out",
        })
        .add(() => {
          loadingScreen.classList.add("hide");
          document.body.classList.remove("is-loading");
        })
        .to(".hero-text > *", {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
        }, "-=0.1");
    });

    // 섹션 요소 Fade In
    gsap.utils.toArray(".fade-up").forEach((item) => {
      gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // 이미지 패럴랙스 느낌
    gsap.utils.toArray(".gallery-item img, .image-card img").forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // Statistics Count Up
    document.querySelectorAll(".stat-box strong").forEach((numberEl) => {
      const targetNumber = Number(numberEl.textContent);
      const counter = { value: 0 };

      gsap.to(counter, {
        value: targetNumber,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: numberEl,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          numberEl.textContent = Math.floor(counter.value);
        },
      });
    });

    // Top 버튼 노출 / 숨김
    const handleTopButton = () => {
      if (window.scrollY > 500) {
        topBtn.classList.add("show");
      } else {
        topBtn.classList.remove("show");
      }
    };

    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", handleTopButton);
    handleTopButton();