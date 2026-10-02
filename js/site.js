(function () {
  const properties = DRAKA.properties;
  const page = document.body.dataset.page || "";

  document.querySelectorAll("[data-phone]").forEach((el) => {
    if (!DRAKA.contact.phone) {
      el.remove();
      return;
    }
    el.textContent = DRAKA.contact.phone;
    if (el.tagName === "A") el.href = DRAKA.contact.phoneHref;
  });
  document.querySelectorAll("[data-email]").forEach((el) => {
    if (!DRAKA.contact.email) {
      el.remove();
      return;
    }
    el.textContent = DRAKA.contact.email;
    if (el.tagName === "A") el.href = DRAKA.contact.emailHref;
  });
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const navKey = page === "property" ? "properties" : page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === navKey) link.setAttribute("aria-current", "page");
  });

  const header = document.getElementById("header");
  const panel = document.getElementById("nav-panel");
  const menuButton = document.querySelector(".menu-toggle");
  if (panel && menuButton) {
    const setOpen = (open) => {
      panel.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
      menuButton.textContent = open ? "Close" : "Menu";
      document.body.classList.toggle("nav-open", open);
    };
    menuButton.addEventListener("click", () => setOpen(menuButton.getAttribute("aria-expanded") !== "true"));
    panel.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && panel.classList.contains("is-open")) {
        setOpen(false);
        menuButton.focus();
      }
    });
  }
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const tease = document.querySelector(".property-tease");
  const bubbles = document.getElementById("property-bubbles");
  if (bubbles) {
    const preview = properties.slice(0, 4);
    if (!preview.length) {
      if (tease) tease.hidden = true;
    } else {
      if (tease) tease.hidden = false;
      bubbles.hidden = false;
      bubbles.innerHTML = preview.map(bubble).join("");
    }
  }

  const leaseList = document.getElementById("lease-list");
  if (leaseList) {
    const leases = properties.filter((property) => property.intent === "rent");
    leaseList.hidden = leases.length === 0;
    leaseList.innerHTML = leases.map(leaseCard).join("");
    const leaseEmpty = document.getElementById("lease-empty");
    if (leaseEmpty) leaseEmpty.hidden = leases.length !== 0;
  }

  const book = initBook();
  if (!book) bindFinders(null);
  initProperty();
  initForms();

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (ch) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
    ));
  }

  function hoverFacts(property) {
    const lines = [];
    if (property.neighborhood) lines.push(property.neighborhood);
    if (property.price) lines.push(property.price);
    else if (property.scale) lines.push(property.scale);
    const rooms = [property.beds, property.baths].filter(Boolean);
    if (rooms.length) lines.push(rooms.join(" · "));
    if (property.available) lines.push(property.available);
    else if (property.type) lines.push(property.type);
    return lines.slice(0, 4);
  }

  function markLetter(property) {
    const name = String(property.name || "").trim();
    const letter = name.match(/[A-Za-z]/);
    return (letter ? letter[0] : name.charAt(0) || "·").toUpperCase();
  }

  function leaseCard(property) {
    const place = [property.neighborhood, property.state].filter(Boolean).join(", ");
    const note = [property.price, property.available ? "Available " + property.available : ""].filter(Boolean).join(" · ");
    const kind = property.intent === "sale" ? "For sale" : "For lease";
    return (
      '<a class="card" href="property.html?id=' + esc(property.id) + '">' +
        '<div class="card-body">' +
          '<p class="kicker">' + esc(kind) + (property.type ? " · " + esc(property.type) : "") + "</p>" +
          "<h3>" + esc(property.name) + "</h3>" +
          (place ? '<p class="meta">' + esc(place) + "</p>" : "") +
          (note ? '<p class="open-note">' + esc(note) + "</p>" : "") +
        "</div>" +
      "</a>"
    );
  }

  function bubble(property) {
    const facts = hoverFacts(property).map((line) => "<span>" + esc(line) + "</span>").join("");
    const face = property.image
      ? "<img src=\"" + esc(property.image) + "\" alt=\"\" style=\"object-position:" + esc(property.pos || "center") + "\">"
      : "<span class=\"bubble-mark\" aria-hidden=\"true\">" + esc(markLetter(property)) + "</span>";
    return (
      '<a class="bubble" href="property.html?id=' + esc(property.id) + '">' +
        '<span class="bubble-photo">' +
          face +
          '<span class="bubble-facts" aria-hidden="true">' + facts + "</span>" +
        "</span>" +
        '<span class="bubble-name">' + esc(property.name) + "</span>" +
      "</a>"
    );
  }

  function matchesUse(property, type) {
    if (!type || type === "All") return true;
    if (type === "Commercial") return ["Commercial", "Mixed-use", "Office", "Retail"].includes(property.type);
    return property.type === type;
  }

  function bindFinders(book) {
    document.querySelectorAll("form.finder").forEach((form) => {
      const params = new URLSearchParams(location.search);
      ["intent", "type", "state", "q"].forEach((name) => {
        const field = form.elements[name];
        const value = params.get(name);
        if (field && value) field.value = value;
      });
      const apply = () => {
        const intent = form.elements.intent.value || "All";
        const type = form.elements.type.value || "All";
        const market = form.elements.state.value || "All";
        const q = form.elements.q.value.trim();
        if (book) {
          book.state.intent = intent;
          book.state.type = type;
          book.state.state = market;
          book.state.q = q;
          book.write();
          return;
        }
        const next = new URLSearchParams();
        if (intent !== "All") next.set("intent", intent);
        if (type !== "All") next.set("type", type);
        if (market !== "All") next.set("state", market);
        if (q) next.set("q", q);
        const query = next.toString();
        location.href = "properties.html" + (query ? "?" + query : "") + "#page";
      };
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        apply();
        if (book) document.getElementById("page")?.scrollIntoView({ behavior: "smooth" });
      });
      if (book) {
        form.addEventListener("change", apply);
        form.elements.q.addEventListener("input", apply);
      }
    });
  }

  function initBook() {
    const filters = document.getElementById("filters");
    const book = document.getElementById("book");
    if (!filters || !book) return null;
    const count = document.getElementById("result-count");
    const empty = document.getElementById("empty");
    const emptyCopy = empty ? empty.querySelector("p") : null;
    const params = new URLSearchParams(location.search);
    const state = {
      intent: params.get("intent") || "All",
      state: params.get("state") || "All",
      role: params.get("role") || "All",
      type: params.get("type") || "All",
      open: params.get("open") === "1",
      q: params.get("q") || "",
    };
    const groups = [
      ["role", "Ownership", [["All", "All"], ["Owned", "Owned"], ["Managed", "Managed"]]],
    ];
    filters.innerHTML = groups.map(([key, label, values]) =>
      '<div class="filter-row" role="group" aria-label="' + esc(label) + '">' +
        '<span class="filter-label">' + esc(label) + "</span>" +
        values.map(([value, text]) =>
          '<button type="button" class="chip" data-key="' + key + '" data-value="' + esc(value) + '">' + esc(text) + "</button>"
        ).join("") +
      "</div>"
    ).join("") +
      '<div class="filter-row"><span class="filter-label">Availability</span><button type="button" class="chip" data-key="open" data-value="1">Open now</button></div>';

    function describe() {
      const bits = [];
      if (state.intent === "rent") bits.push("for rent");
      if (state.intent === "sale") bits.push("for sale");
      if (state.type !== "All") bits.push(state.type.toLowerCase());
      if (state.role !== "All") bits.push(state.role.toLowerCase());
      if (state.state !== "All") bits.push("in " + state.state);
      if (state.open) bits.push("open now");
      if (state.q) bits.push("matching “" + state.q + "”");
      return bits.join(", ");
    }

    function write() {
      const next = new URLSearchParams();
      if (state.intent !== "All") next.set("intent", state.intent);
      if (state.state !== "All") next.set("state", state.state);
      if (state.role !== "All") next.set("role", state.role);
      if (state.type !== "All") next.set("type", state.type);
      if (state.open) next.set("open", "1");
      if (state.q) next.set("q", state.q);
      const query = next.toString();
      history.replaceState(null, "", (query ? "?" + query : location.pathname) + location.hash);
      render();
    }

    function render() {
      filters.querySelectorAll(".chip").forEach((button) => {
        const key = button.dataset.key;
        const on = key === "open" ? state.open : state[key] === button.dataset.value;
        button.classList.toggle("is-on", on);
        button.setAttribute("aria-pressed", on ? "true" : "false");
      });
      document.querySelectorAll("form.finder").forEach((form) => {
        if (document.activeElement && form.contains(document.activeElement) && document.activeElement.name === "q") return;
        if (form.elements.intent) form.elements.intent.value = state.intent === "All" ? "" : state.intent;
        if (form.elements.type) form.elements.type.value = state.type === "All" ? "" : state.type;
        if (form.elements.state) form.elements.state.value = state.state === "All" ? "" : state.state;
        if (form.elements.q) form.elements.q.value = state.q;
      });
      const query = state.q.toLowerCase();
      const list = properties.filter((property) => {
        if (state.intent !== "All" && property.intent !== state.intent) return false;
        if (state.state !== "All" && property.state !== state.state) return false;
        if (state.role !== "All" && property.role !== state.role) return false;
        if (!matchesUse(property, state.type)) return false;
        if (state.open && property.open !== true) return false;
        if (query) {
          const haystack = [property.name, property.neighborhood, property.state, property.street, property.unit, property.type, property.scale, property.price, property.intent].join(" ").toLowerCase();
          if (!haystack.includes(query)) return false;
        }
        return true;
      });
      const search = describe();
      if (count) {
        if (properties.length) {
          count.hidden = false;
          count.textContent = list.length + (list.length === 1 ? " property" : " properties");
        } else {
          count.hidden = !search;
          count.textContent = search ? "Filtered to " + search + "." : "";
        }
      }
      book.innerHTML = list.map(leaseCard).join("");
      book.hidden = list.length === 0;
      if (empty) {
        empty.hidden = list.length !== 0;
        if (emptyCopy) {
          emptyCopy.textContent = properties.length
            ? (search ? "Nothing in the portfolio matches " + search + "." : "Nothing in the portfolio matches.")
            : "Active listings are provided by the office. Contact Drakca to discuss a property in Maryland, Virginia, or Washington, D.C.";
        }
      }
    }

    filters.addEventListener("click", (event) => {
      const button = event.target.closest(".chip");
      if (!button) return;
      if (button.dataset.key === "open") state.open = !state.open;
      else state[button.dataset.key] = button.dataset.value;
      write();
    });
    const clear = document.getElementById("clear-filters");
    if (clear) {
      clear.addEventListener("click", () => {
        state.intent = "All";
        state.state = "All";
        state.role = "All";
        state.type = "All";
        state.open = false;
        state.q = "";
        write();
      });
    }
    const api = { state, write };
    bindFinders(api);
    render();
    return api;
  }

  function detailFacts(property) {
    const year = property.year
      ? (property.renewed ? property.year + ", renewed " + property.renewed : String(property.year))
      : "";
    return [
      ["Jurisdiction", property.state],
      ["Neighborhood", property.neighborhood],
      ["Address", property.street],
      ["Unit", property.unit],
      ["Use", property.type],
      ["Price", property.price],
      ["Bedrooms", property.beds],
      ["Baths", property.baths],
      ["Size", property.scale],
      ["Available", property.available],
      ["Year", year],
      ["Transit", property.metro],
    ].filter(([, value]) => value);
  }

  function initProperty() {
    const root = document.getElementById("property");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const property = properties.find((item) => item.id === id);
    if (!property) {
      document.title = "Property not found — Drakca";
      root.innerHTML = '<section class="page-hero"><div class="hero-shade" aria-hidden="true"></div><div class="wrap"><p class="eyebrow">Portfolio</p><h1>That property is not listed.</h1><p class="lede">The full list is on the properties page.</p><p class="hero-actions"><a class="btn" href="properties.html">Back to properties</a></p></div></section>';
      return;
    }
    document.title = property.name + " — Drakca";
    const facts = detailFacts(property);
    const story = Array.isArray(property.story) ? property.story : [];
    const gallery = (property.gallery || []).map((image) =>
      '<img src="' + esc(image.src) + '" alt="' + esc(image.alt) + '" loading="lazy">'
    ).join("");
    const applyHref = property.applyHref || ("contact.html?property=" + encodeURIComponent(property.name) + "&topic=apply");
    const eyebrow = [property.state, property.neighborhood].filter(Boolean).join(" · ");
    root.innerHTML =
      '<section class="page-hero' + (property.image ? "" : " page-hero-plain") + '">' +
        (property.image
          ? '<img class="hero-media" src="' + esc(property.image) + '" alt="' + esc(property.alt || "") + '" style="object-position:' + esc(property.pos || "center") + '">'
          : "") +
        '<div class="hero-shade" aria-hidden="true"></div>' +
        '<div class="wrap">' +
          (eyebrow ? '<p class="eyebrow">' + esc(eyebrow) + "</p>" : "") +
          "<h1>" + esc(property.name) + "</h1>" +
          (property.summary ? '<p class="lede">' + esc(property.summary) + "</p>" : "") +
        "</div>" +
        '<a class="scroll-cue" href="#page"><span>Scroll</span><span class="scroll-line" aria-hidden="true"></span></a>' +
      "</section>" +
      '<section class="section" id="page"><div class="wrap property-intro">' +
        (facts.length
          ? "<dl class=\"facts\">" + facts.map(([label, value]) => "<div><dt>" + esc(label) + "</dt><dd>" + esc(value) + "</dd></div>").join("") + "</dl>"
          : "") +
        '<div class="story-grid">' +
          '<div class="story">' +
            story.map((paragraph) => "<p>" + esc(paragraph) + "</p>").join("") +
            (gallery ? '<div class="gallery">' + gallery + "</div>" : "") +
          "</div>" +
          '<aside class="inquiry apply-panel">' +
            '<p class="kicker">Application</p>' +
            '<h2>How to apply</h2>' +
            "<ol>" +
              "<li>Review the details on this page.</li>" +
              "<li>Send an application to the office and name this property.</li>" +
              "<li>The office replies at the email you provide. Rent and terms are set in the lease.</li>" +
            "</ol>" +
            '<a class="btn btn-block" href="' + esc(applyHref) + '">Apply for this property</a>' +
            '<p class="apply-note"><a href="contact.html?property=' + encodeURIComponent(property.name) + '&topic=tour">Request a tour</a> · <a href="properties.html">All properties</a></p>' +
          "</aside>" +
        "</div>" +
      "</div></section>";
  }

  function initForms() {
    const params = new URLSearchParams(location.search);
    document.querySelectorAll(".desk-form").forEach((form) => {
      const named = params.get("property") || params.get("building");
      const topic = params.get("topic");
      if (named && form.elements.subject && !form.elements.subject.value) form.elements.subject.value = named;
      if (topic === "apply" && form.elements.who) form.elements.who.value = "Applying for a property";
      if (topic === "availability" && form.elements.who) form.elements.who.value = "Looking for a home or a shop";
      if (topic === "owner" && form.elements.who) form.elements.who.value = "An owner";
      if (topic === "resident" && form.elements.who) form.elements.who.value = "A resident";
      if (topic === "brokerage" && form.elements.who) form.elements.who.value = "Buying or selling";
      if (topic === "estimate" && form.elements.who) form.elements.who.value = "Requesting an estimate";
      if (topic === "tour" && form.elements.who) form.elements.who.value = "Scheduling a tour";

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.querySelectorAll(".error").forEach((node) => node.remove());
        form.querySelectorAll("[aria-invalid]").forEach((node) => node.removeAttribute("aria-invalid"));
        const checks = [
          [form.elements.name, form.elements.name.value.trim().length > 1, "Enter your name."],
          [form.elements.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.elements.email.value.trim()), "Enter a valid email."],
          [form.elements.message, form.elements.message.value.trim().length >= 8, "Add a short note so we know how to help."],
        ];
        if (form.elements.subject && form.elements.subject.required) {
          checks.push([form.elements.subject, form.elements.subject.value.trim().length > 1, "Name the property."]);
        }
        let valid = true;
        checks.forEach(([field, ok, message]) => {
          if (ok) return;
          valid = false;
          field.setAttribute("aria-invalid", "true");
          const note = document.createElement("p");
          note.className = "error";
          note.textContent = message;
          field.closest(".field").appendChild(note);
        });
        if (!valid) {
          form.querySelector("[aria-invalid]").focus();
          return;
        }
        const entry = Object.fromEntries(new FormData(form).entries());
        entry.at = new Date().toISOString();
        const notes = JSON.parse(localStorage.getItem("dracka.notes") || "[]");
        notes.push(entry);
        localStorage.setItem("dracka.notes", JSON.stringify(notes));
        const lines = [
          "Name: " + entry.name,
          "Email: " + entry.email,
          "Phone: " + (entry.phone || "—"),
          "I am: " + (entry.who || "—"),
        ];
        if (entry.place) lines.push("Kind of property: " + entry.place);
        lines.push("About: " + (entry.subject || "—"), "", entry.message);
        const mail = new URLSearchParams({
          subject: "Drakca — " + (entry.who || "Inquiry") + (entry.subject ? " — " + entry.subject : ""),
          body: lines.join("\n"),
        });
        const success = form.parentElement.querySelector(".form-success");
        const mailLink = success.querySelector("[data-mailto]");
        const href = DRAKA.contact.emailHref ? DRAKA.contact.emailHref + "?" + mail.toString() : "";
        if (mailLink && href) mailLink.href = href;
        else if (mailLink) mailLink.remove();
        form.hidden = true;
        success.hidden = false;
        success.focus();
        if (href) window.location.href = href;
      });
    });
  }
})();
