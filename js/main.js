(function () {
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.textContent = html;
    return e;
  };
  const fmt = (p) => (typeof p === "number" ? "₹" + p : p);

  // Categories
  const cats = document.getElementById("categories");
  const chips = document.getElementById("chips");
  const footCats = document.getElementById("foot-cats");
  window.CATEGORIES.forEach((c) => {
    const sec = el("article", "cat reveal");
    sec.id = c.id;

    const gal = el("div", "gallery" + (c.images.length === 1 ? " single" : ""));
    c.images.forEach((im) => {
      if (!im.src) {
        gal.appendChild(el("div", "placeholder", "Photo coming soon"));
        return;
      }
      const b = el("button", "zoom");
      b.type = "button";
      b.dataset.src = im.src;
      b.dataset.alt = im.alt;
      b.setAttribute("aria-label", "Enlarge photo: " + im.alt);
      const img = el("img");
      img.src = im.src;
      img.alt = im.alt;
      img.loading = "lazy";
      b.appendChild(img);
      if (im.caption) b.appendChild(el("span", "cap", im.caption));
      gal.appendChild(b);
    });

    const info = el("div", "info");
    info.appendChild(el("h3", "", c.name));
    info.appendChild(el("p", "", c.description));
    const ul = el("ul", "prices");
    c.items.forEach((i) => {
      const li = el("li");
      li.appendChild(el("span", "", i.name));
      li.appendChild(el("strong", "", fmt(i.price)));
      ul.appendChild(li);
    });
    info.appendChild(ul);

    sec.append(gal, info);
    cats.appendChild(sec);

    [chips, footCats].forEach((box) => {
      const a = el("a", "", c.name);
      a.href = "#" + c.id;
      box.appendChild(a);
    });
  });

  // Team
  const grid = document.getElementById("team-grid");
  window.TEAM.forEach((m) => {
    const card = el("div", "member");
    card.appendChild((() => { const a = el("div", "avatar"); const i = el("img"); i.src = m.photo || "images/avatar.svg"; i.alt = "Portrait of " + m.name; i.loading = "lazy"; a.appendChild(i); return a; })());
    card.appendChild(el("h3", "", m.name));
    grid.appendChild(card);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu
  const btn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });

  // Scroll reveal
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    items.forEach((i) => io.observe(i));
  } else items.forEach((i) => i.classList.add("in"));

  // Lightbox
  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img");
  const closeBtn = lb.querySelector(".close");
  let last = null;
  const close = () => { lb.hidden = true; if (last) last.focus(); };
  document.addEventListener("click", (e) => {
    const z = e.target.closest(".zoom");
    if (z) {
      last = z;
      lbImg.src = z.dataset.src;
      lbImg.alt = z.dataset.alt;
      lb.hidden = false;
      closeBtn.focus();
    } else if (!lb.hidden && (e.target === lb || e.target === closeBtn)) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) close(); });
})();
