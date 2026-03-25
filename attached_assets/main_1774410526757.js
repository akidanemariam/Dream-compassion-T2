document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.addEventListener("click", (event) => {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (anchor && navMenu.classList.contains("is-open")) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (event) => {
      if (!navMenu.classList.contains("is-open")) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navMenu.contains(target) || navToggle.contains(target)) return;
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-list a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;
    const hrefFile = href.split("/").pop()?.toLowerCase();
    if (!hrefFile) return;
    if (hrefFile === currentFile) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const currentTarget = event.currentTarget;
      if (!(currentTarget instanceof HTMLAnchorElement)) return;
      const href = currentTarget.getAttribute("href");
      if (!href) return;
      const targetId = href.slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      event.preventDefault();
      const header = document.querySelector('.site-header');
      const headerOffset = (header ? header.offsetHeight : 76) + 12;
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const offsetTop = rect.top + scrollTop - headerOffset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  });

  const contactForm = document.querySelector(".contact-form");
  if (contactForm instanceof HTMLFormElement) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const mailto = contactForm.dataset.mailto;
      if (!mailto) {
        alert(
          "Thanks for reaching out to Dreams Compassion.\n\nThis site is static. Add a form provider or set data-mailto on the form to send via email."
        );
        return;
      }

      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const company = String(data.get("company") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const message = String(data.get("message") || "").trim();

      const subjectParts = ["Dreams Compassion — Website inquiry"];
      if (company) subjectParts.push(company);
      const subject = subjectParts.join(" — ");

      const bodyLines = [
        "Hello Dreams Compassion team,",
        "",
        "I'm reaching out via your website contact form.",
        "",
        `Name: ${name || "-"}`,
        `Company: ${company || "-"}`,
        `Email: ${email || "-"}`,
        `Phone: ${phone || "-"}`,
        "",
        "Message:",
        message || "-",
        "",
      ];

      const body = bodyLines.join("\n");
      const url = `mailto:${encodeURIComponent(mailto)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
    });
  }


  // Collapsible "On this page" jump links (desktop + mobile)
  document.querySelectorAll('[data-collapsible="jump"]').forEach((aside) => {
    const button = aside.querySelector(".aside-toggle");
    if (!button) return;

    const panelId = button.getAttribute("aria-controls") || "";
    const panel = panelId ? document.getElementById(panelId) : aside.querySelector(".aside-panel");
    if (!panel) return;

    const storageKey = aside.getAttribute("data-storage-key") || panelId;
    const stored = (() => {
      try { return storageKey ? window.localStorage.getItem(storageKey) : null; } catch { return null; }
    })();

    const setState = (open) => {
      aside.classList.toggle("is-open", open);
      aside.classList.toggle("is-collapsed", !open);
      button.setAttribute("aria-expanded", String(open));
    };

    // Default: collapsed (helps reduce hero gaps). Respect saved preference.
    const initialOpen = stored === "open";
    setState(initialOpen);

    button.addEventListener("click", () => {
      const isOpen = aside.classList.contains("is-open");
      const next = !isOpen;
      setState(next);

      try {
        if (storageKey) window.localStorage.setItem(storageKey, next ? "open" : "closed");
      } catch {
        // ignore storage errors
      }
    });

    // Optional: collapse after selecting a jump link on smaller screens.
    aside.querySelectorAll(".jump-list a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 980px)").matches) {
          setState(false);
          try {
            if (storageKey) window.localStorage.setItem(storageKey, "closed");
          } catch {
            // ignore
          }
        }
      });
    });
  });

});
