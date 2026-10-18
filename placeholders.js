// Preview where future photos will go. Only runs when the URL has ?placeholders
// e.g. https://meeoh.github.io/power-golf-perf/?placeholders
(() => {
  if (!new URLSearchParams(location.search).has('placeholders')) return;
  document.documentElement.classList.add('show-placeholders');

  const style = document.createElement('style');
  style.textContent = `
    .ph { position: relative; width: 100%; border-radius: 12px; overflow: hidden;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
      padding: 16px; text-align: center; background: #e6e9e6; color: #7b847e;
      font: 500 14px/1.35 Geist, system-ui, sans-serif; }
    .ph svg { width: 44px; height: 44px; flex: none; fill: none; stroke: #9aa39d; stroke-width: 1.5;
      stroke-linecap: round; stroke-linejoin: round; }
    .ph b { display: block; font-weight: 600; color: #4d5650; font-size: 14px; max-width: 22em; }
    .ph small { display: block; font-size: 12px; color: #8a938d; }
    .ph-num { position: absolute; top: 10px; left: 10px; height: 22px; min-width: 22px; padding: 0 7px;
      border-radius: 999px; background: rgba(0,0,0,.55); color: #fff; font-size: 11px; font-weight: 600; line-height: 22px; }
    .r-3x2 { aspect-ratio: 3 / 2; } .r-16x9 { aspect-ratio: 16 / 9; }
    .r-1x1 { aspect-ratio: 1 / 1; } .r-4x5 { aspect-ratio: 4 / 5; }
        .coach .ph { width: 240px; }
    .ph-entrance { margin-top: 24px; max-width: 340px; }
    .ph-badge { position: fixed; right: 16px; bottom: 16px; z-index: 50; background: #131714; color: #fff;
      font: 500 13px/1 Geist, system-ui, sans-serif; padding: 10px 14px; border-radius: 999px; text-decoration: none;
      box-shadow: 0 6px 20px rgba(0,0,0,.2); }
    @media (max-width: 860px) {
      .coach .ph { width: 200px; }
    }`;
  document.head.append(style);

  const ph = (num, title, spec, ratio) => {
    const el = document.createElement('div');
    el.className = `ph ${ratio}`;
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', `Photo placeholder: ${title}`);
    el.innerHTML = `<span class="ph-num">${num}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 16l-5-5-8 8.5"/></svg>
      <b>${title}</b><small>${spec}</small>`;
    return el;
  };
  const $ = s => document.querySelector(s);

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
