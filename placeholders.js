// Preview where future photos will go. Only runs when the URL has ?placeholders
// e.g. https://meeoh.github.io/power-golf-perf/?placeholders
(() => {
  if (!new URLSearchParams(location.search).has('placeholders')) return;
  document.documentElement.classList.add('show-placeholders');

  const ph = (num, title, spec, ratio) => {
    const el = document.createElement('div');
    el.className = `ph ${ratio}`;
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', `Photo placeholder: ${title}`);
    el.innerHTML = `<span class="ph-num">${num}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>
      <b>${title}</b><small>${spec}</small>`;
    return el;
  };
  const $ = s => document.querySelector(s);

  // 1. Hero
  $('.hero-img').replaceChildren(ph(1, 'Kris coaching a student in Bay 1', 'Landscape 3:2 · hero.jpg', 'r-3x2'));

  // 5. Programs CTA bar
  const cta = $('.cta-bar');
  const text = document.createElement('div');
  text.className = 'cta-text';
  text.append(...cta.children);
  cta.classList.add('cta-photo');
  cta.append(ph(5, 'Beginner getting a grip or setup tip', 'Landscape 16:9 · beginner.jpg', 'r-16x9'), text);

  // 3. Facility main image
  $('#facility .framed').replaceChildren(ph(3, 'Wide shot of both bays', 'Landscape 3:2 · studio.jpg', 'r-3x2'));

  // 4. Facility gallery row
  const gallery = document.createElement('div');
  gallery.className = 'container gallery';
  const tile = (child, caption) => {
    const f = document.createElement('figure');
    const c = document.createElement('figcaption');
    c.textContent = caption;
    f.append(child, c);
    return f;
  };
  const shot = new Image();
  shot.src = 'assets/gasp-lab-screen.jpg';
  shot.alt = 'GASP Lab 4 lesson screen';
  gallery.append(
    tile(ph('4a', 'K-Vest sensors on a golfer', 'Square · kvest.jpg', 'r-1x1'), 'K-Vest 3D motion capture'),
    tile(ph('4b', 'Feet on the Boditrak mat', 'Square · boditrak.jpg', 'r-1x1'), 'Boditrak pressure mapping'),
    tile(ph('4c', 'Ball on the tee, launch monitor in frame', 'Square · launch.jpg', 'r-1x1'), 'Foresight GC2 launch monitor'),
    tile(shot, 'GASP Lab 4 lesson screen'),
  );
  $('#facility').append(gallery);

  // 2. Coach headshot
  $('.coach > img').replaceWith(ph(2, 'New headshot of Kris', 'Portrait 4:5 · kris.jpg', 'r-4x5'));

  // 6. Entrance (optional)
  const entrance = ph(6, 'Unit 7 entrance / sign', 'Landscape 16:9 · entrance.jpg · optional', 'r-16x9');
  entrance.classList.add('ph-entrance');
  $('.visit dl').after(entrance);

  // Badge so it's obvious this isn't the live layout
  const badge = document.createElement('a');
  badge.className = 'ph-badge';
  badge.href = location.pathname;
  badge.textContent = 'Photo placeholders on · hide';
  document.body.append(badge);
})();
