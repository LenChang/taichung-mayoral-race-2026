const GRADE_LEVEL = { A: 4, B: 3, C: 2, D: 1 };
const LEVEL_GRADE = ['D', 'D', 'C', 'B', 'A'];
const PARTY_COLOR = { KMT: '#2f4f86', DPP: '#3d7a4f' };

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const skillsWithTrait = (c) => [
  window.POLICY.candidates[c.id].trait,
  ...c.skills.map(s => ({ ...s, negative: s.desc.includes('負面') })),
];

const sourceLink = (url, label) => {
  const a = el('a', '', label || new URL(url).hostname.replace('www.', ''));
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  return a;
};

const overallGrade = (stats) => {
  const avg = stats.reduce((sum, s) => sum + GRADE_LEVEL[s.grade], 0) / stats.length;
  return LEVEL_GRADE[Math.round(avg)];
};

const gradeCounts = (stats) => ['A', 'B', 'C', 'D']
  .map(g => [g, stats.filter(s => s.grade === g).length])
  .filter(([, n]) => n > 0)
  .map(([g, n]) => `${g}×${n}`)
  .join('　');

const radarSvg = (labels, series) => {
  const size = 280;
  const center = size / 2;
  const radius = 70;
  const point = (j, r) => {
    const angle = (Math.PI / 3) * j - Math.PI / 2;
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
  };

  let svg = `<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%" role="img">`;
  for (let i = 1; i <= 4; i++) {
    const pts = labels.map((_, j) => point(j, radius * i / 4).join(',')).join(' ');
    svg += `<polygon points="${pts}" fill="none" stroke="var(--gold-dark)" stroke-width="0.5" opacity="0.5"/>`;
  }
  labels.forEach((_, j) => {
    const [x, y] = point(j, radius);
    svg += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="var(--gold-dark)" stroke-width="0.5" opacity="0.5"/>`;
  });
  series.forEach(({ grades, fill, stroke }) => {
    const pts = grades.map((g, j) => point(j, radius * GRADE_LEVEL[g] / 4).join(',')).join(' ');
    svg += `<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
  });
  labels.forEach((label, j) => {
    const angle = (Math.PI / 3) * j - Math.PI / 2;
    const [x, y] = point(j, radius + 15);
    const anchor = Math.cos(angle) > 0.1 ? 'start' : Math.cos(angle) < -0.1 ? 'end' : 'middle';
    const dy = Math.sin(angle) > 0.1 ? '1em' : Math.sin(angle) < -0.1 ? '-0.5em' : '0.3em';
    svg += `<text x="${x}" y="${y}" text-anchor="${anchor}" dy="${dy}" fill="var(--ink-black)" font-size="12" font-weight="bold">${label}</text>`;
  });
  return svg + '</svg>';
};

const renderEras = (container, tracks) => {
  const allSegs = tracks.flatMap(t => t.segments);
  const start = Math.min(...allSegs.map(s => s.from));
  const end = Math.max(...allSegs.map(s => s.to));
  const span = end - start;

  const axis = el('div', 'era-row era-axis');
  axis.appendChild(el('div', 'era-label'));
  const ticks = el('div', 'era-track');
  for (let y = start; y <= end; y += 2) {
    const tick = el('span', 'era-tick', y);
    tick.style.left = `${((y - start) / span) * 100}%`;
    ticks.appendChild(tick);
  }
  axis.appendChild(ticks);
  container.appendChild(axis);

  tracks.forEach(track => {
    const row = el('div', 'era-row');
    row.appendChild(el('div', 'era-label', track.label));
    const bar = el('div', 'era-track');
    track.segments.forEach(seg => {
      const s = el('div', `era-seg party-${seg.party}`, seg.text);
      s.style.left = `${((seg.from - start) / span) * 100}%`;
      s.style.width = `${((seg.to - seg.from) / span) * 100}%`;
      s.title = `${seg.from}–${seg.to} ${seg.text}`;
      bar.appendChild(s);
    });
    row.appendChild(bar);
    container.appendChild(row);
  });
};

const fillList = (container, items, className) => {
  items.forEach(text => container.appendChild(el('li', className, text)));
};

const renderCandidate = (view, data, shared) => {
  view.appendChild(document.getElementById('candidateTemplate').content.cloneNode(true));
  const field = (name) => view.querySelector(`[data-field="${name}"]`);
  const slot = (name) => view.querySelector(`[data-slot="${name}"]`);

  ['faction', 'period', 'currentRole', 'courtesyName', 'name'].forEach(k => { field(k).textContent = data[k]; });
  field('title').textContent = data.title.replace(/(\d) 號/, '$1\u00A0號');
  field('seal').textContent = data.name + '印';
  view.querySelector('.faction').classList.add(`party-${data.partyCode}`);
  const portrait = view.querySelector('.portrait-img');
  portrait.src = data.portrait;
  portrait.alt = `${data.name} 畫像`;

  skillsWithTrait(data).forEach(skill => {
    const tag = el('div', skill.negative ? 'skill-tag negative' : 'skill-tag');
    tag.appendChild(el('div', 'skill-name', skill.name));
    tag.appendChild(el('div', 'skill-desc', skill.desc));
    slot('skills').appendChild(tag);
  });

  data.stats.forEach(stat => {
    const row = el('div', 'stat-row');
    row.appendChild(el('div', 'stat-label', stat.label));
    const barBg = el('div', 'stat-bar-bg');
    const fill = el('div', 'stat-bar-fill');
    fill.style.width = `${GRADE_LEVEL[stat.grade] * 25}%`;
    barBg.appendChild(fill);
    row.appendChild(barBg);
    const effect = el('div', `stat-effect effect-${stat.party.effect}`, stat.party.effect);
    effect.title = '執政時勢影響';
    row.appendChild(effect);
    row.appendChild(el('div', `stat-rank rank-${stat.grade}`, stat.grade));
    slot('bars').appendChild(row);
  });

  slot('radar').innerHTML = radarSvg(
    data.stats.map(s => `${s.label} ${s.grade}`),
    [{ grades: data.stats.map(s => s.grade), fill: 'rgba(193, 50, 32, 0.4)', stroke: 'var(--vermilion)' }],
  );

  const grade = overallGrade(data.stats);
  slot('overall').textContent = grade;
  slot('overall').classList.add(`rank-${grade}`);
  slot('counts').textContent = gradeCounts(data.stats);

  data.stats.forEach(stat => {
    const details = el('details', 'evidence-item');
    const summary = el('summary');
    const title = el('span', '', stat.label + ' ');
    title.appendChild(el('span', 'evidence-sub-inline', `- ${stat.sub}`));
    summary.appendChild(title);
    summary.appendChild(el('span', `rank-${stat.grade}`, stat.grade));
    details.appendChild(summary);

    const content = el('div', 'evidence-content');
    const partyNote = el('div', 'party-note');
    partyNote.appendChild(el('span', `stat-effect effect-${stat.party.effect}`, `時勢・${stat.party.effect}`));
    partyNote.appendChild(document.createTextNode(stat.party.note));
    content.appendChild(partyNote);

    const pros = el('ul', 'evidence-list pros');
    fillList(pros, stat.pros);
    content.appendChild(pros);
    const cons = el('ul', 'evidence-list cons');
    fillList(cons, stat.cons);
    content.appendChild(cons);

    const sources = el('ul', 'sources-list');
    stat.sources.forEach(url => {
      const li = el('li');
      li.appendChild(sourceLink(url));
      sources.appendChild(li);
    });
    content.appendChild(sources);
    details.appendChild(content);
    slot('evidence').appendChild(details);
  });

  slot('policy').id = `policy-${data.id}`;
  renderPolicyDetail(slot('policy'), data, window.POLICY);

  renderEras(slot('eras'), [...shared.eraTracks, data.eraTrack]);
  fillList(slot('eraSummary'), data.eraSummary);
  data.eraSources.forEach(url => {
    const li = el('li');
    li.appendChild(sourceLink(url));
    slot('eraSources').appendChild(li);
  });
};

const renderCompare = (shared, cands) => {
  const [left, right] = shared.order.map(id => cands[id]);
  document.getElementById('electionDate').textContent = shared.electionDate;
  document.getElementById('vsLeft').textContent = left.name;
  document.getElementById('vsRight').textContent = right.name;

  const series = [left, right].map(c => ({
    grades: c.stats.map(s => s.grade),
    fill: PARTY_COLOR[c.partyCode] + '40',
    stroke: PARTY_COLOR[c.partyCode],
  }));
  document.getElementById('compareRadar').innerHTML = radarSvg(left.stats.map(s => s.label), series);

  const legend = document.getElementById('compareLegend');
  [left, right].forEach(c => {
    const item = el('span', 'legend-item');
    const swatch = el('i', `party-${c.partyCode}`);
    item.appendChild(swatch);
    item.appendChild(document.createTextNode(c.name));
    legend.appendChild(item);
  });

  const table = document.getElementById('compareTable');
  const head = el('tr');
  head.appendChild(el('th', '', '項目'));
  [left, right].forEach(c => {
    const th = el('th', `party-text-${c.partyCode}`);
    th.appendChild(sourceLinkInternal(c));
    head.appendChild(th);
  });
  const thead = el('thead');
  thead.appendChild(head);
  table.appendChild(thead);

  const tbody = el('tbody');
  left.stats.forEach((stat, i) => {
    const tr = el('tr');
    const label = el('td', 'compare-label', stat.label);
    const bench = shared.benchmarks[stat.key];
    if (bench) {
      const link = el('button', 'benchmark-link', '對照組');
      link.type = 'button';
      link.setAttribute('aria-haspopup', 'dialog');
      link.addEventListener('click', () => openBenchmark(bench, stat.key, stat.label, [left, right]));
      label.appendChild(link);
    }
    label.appendChild(el('div', 'compare-sub', stat.sub));
    tr.appendChild(label);
    [left, right].forEach(c => {
      const s = c.stats[i];
      const td = el('td', 'compare-cell');
      td.appendChild(el('span', `compare-grade rank-${s.grade}`, s.grade));
      td.appendChild(el('span', `stat-effect effect-${s.party.effect}`, s.party.effect));
      tr.appendChild(td);
    });
    const winner = GRADE_LEVEL[left.stats[i].grade] - GRADE_LEVEL[right.stats[i].grade];
    if (winner !== 0) tr.children[winner > 0 ? 1 : 2].classList.add('cell-lead');
    tbody.appendChild(tr);
  });
  const total = el('tr', 'compare-total');
  total.appendChild(el('td', 'compare-label', '綜合'));
  [left, right].forEach(c => {
    const g = overallGrade(c.stats);
    const td = el('td', 'compare-cell');
    td.appendChild(el('span', `compare-grade rank-${g}`, g));
    td.appendChild(el('span', 'compare-counts', gradeCounts(c.stats)));
    total.appendChild(td);
  });
  tbody.appendChild(total);
  table.appendChild(tbody);

  const duel = document.getElementById('duelCards');
  [left, right].forEach(c => {
    const card = el('a', `duel-card party-text-${c.partyCode}`);
    card.href = `#${c.id}`;
    const avatar = el('img', 'duel-portrait');
    avatar.src = c.avatar;
    avatar.alt = `${c.name} 畫像`;
    card.appendChild(avatar);
    card.appendChild(el('div', 'duel-name', c.name));
    const info = el('div', 'duel-info');
    [c.title, c.currentRole].forEach(t => info.appendChild(el('div', '', t)));
    card.appendChild(info);
    const g = overallGrade(c.stats);
    const grade = el('div', 'duel-grade', '綜合');
    grade.appendChild(el('b', `rank-${g}`, g));
    card.appendChild(grade);
    const skills = el('div', 'duel-skills');
    skillsWithTrait(c).forEach(s => {
      const chip = el('span', s.negative ? 'duel-skill negative' : 'duel-skill', s.name);
      chip.title = s.desc;
      skills.appendChild(chip);
    });
    card.appendChild(skills);
    card.appendChild(el('div', 'duel-more', '看細部資料 →'));
    duel.appendChild(card);
  });

  fillList(document.getElementById('verdictList'), shared.verdict);

  const eraTracks = [...shared.eraTracks, left.eraTrack, right.eraTrack];
  renderEras(document.getElementById('compareEras'), eraTracks);
  fillList(document.getElementById('eraConclusion'), shared.eraConclusion);

  const avg = shared.pollAverage;
  document.getElementById('pollAverage').textContent = `${avg.source}（${avg.date}）：${avg.text}`;
  const polls = document.getElementById('pollsTable');
  const ph = el('tr');
  [['日期'], ['民調單位'], ['委託', 'sponsor'], [left.name], [right.name], ['差距']].forEach(([t, cls]) => ph.appendChild(el('th', cls || '', t)));
  const pthead = el('thead');
  pthead.appendChild(ph);
  polls.appendChild(pthead);
  const pbody = el('tbody');
  shared.polls.forEach(p => {
    const tr = el('tr');
    tr.appendChild(el('td', '', p.date));
    tr.appendChild(el('td', p.lean ? `pollster party-text-${p.lean}` : 'pollster', p.pollster));
    const sponsor = el('td', p.lean ? `sponsor party-text-${p.lean}` : 'sponsor', (p.lean ? '◆ ' : '') + p.sponsor);
    tr.appendChild(sponsor);
    const lv = p[left.id];
    const rv = p[right.id];
    tr.appendChild(el('td', lv > rv ? 'poll-num poll-lead party-text-KMT' : 'poll-num', `${lv}%`));
    tr.appendChild(el('td', rv > lv ? 'poll-num poll-lead party-text-DPP' : 'poll-num', `${rv}%`));
    const diff = Math.round((lv - rv) * 10) / 10;
    const leader = diff > 0 ? left : right;
    tr.appendChild(el('td', `poll-diff party-text-${leader.partyCode}`, `${leader.name.slice(0, 1)} +${Math.abs(diff)}`));
    pbody.appendChild(tr);
  });
  polls.appendChild(pbody);

  setupBenchmarkDialog();

  const general = document.getElementById('generalSources');
  shared.generalSources.forEach(s => {
    const li = el('li');
    li.appendChild(sourceLink(s.url, s.label));
    general.appendChild(li);
  });

  const columns = document.getElementById('candidateSources');
  [left, right].forEach(c => {
    const col = el('div', 'sources-column');
    col.appendChild(el('h3', `sources-sub party-text-${c.partyCode}`, `${c.name} 各項依據`));
    c.stats.forEach(stat => {
      const group = el('div', 'source-group');
      group.appendChild(el('div', 'source-group-label', stat.label));
      const ul = el('ul', 'sources-list');
      stat.sources.forEach(url => {
        const li = el('li');
        li.appendChild(sourceLink(url));
        ul.appendChild(li);
      });
      group.appendChild(ul);
      col.appendChild(group);
    });
    columns.appendChild(col);
  });
};

function setupBenchmarkDialog() {
  const dialog = document.getElementById('benchmarkDialog');
  document.getElementById('benchmarkClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
}

function openBenchmark(bench, statKey, label, cands) {
  document.getElementById('benchmarkTitle').textContent = `對照組　${label} A 長什麼樣子？`;
  document.getElementById('benchmarkIntro').textContent = bench.intro;
  document.getElementById('benchmarkRule').textContent = window.SHARED.benchmarkRule;

  const rubric = document.getElementById('benchmarkRubric');
  rubric.replaceChildren();
  bench.rubric.forEach(r => {
    const li = el('li');
    li.appendChild(el('b', `rank-${r.grade}`, r.grade));
    li.appendChild(document.createTextNode(r.text));
    rubric.appendChild(li);
  });

  const table = document.getElementById('benchmarkTable');
  table.replaceChildren();
  const head = el('tr');
  [['人物'], [label], [bench.columns[0]], [bench.columns[1], 'benchmark-cost'], ['但書／扣分點'], ['來源']]
    .forEach(([t, cls]) => head.appendChild(el('th', cls || '', t)));
  const thead = el('thead');
  thead.appendChild(head);
  table.appendChild(thead);

  const tbody = el('tbody');
  const addRow = ({ name, partyCode, role, period, grade, what, evidence, caveat, sources, href }, rowClass) => {
    const tr = el('tr', rowClass);
    const who = el('td', 'benchmark-who');
    const nameNode = href ? el('a', `party-text-${partyCode}`, name) : el('span', `party-text-${partyCode}`, name);
    if (href) nameNode.href = href;
    who.appendChild(nameNode);
    who.appendChild(el('small', '', role));
    if (period) who.appendChild(el('small', 'benchmark-period', `期間 ${period}`));
    tr.appendChild(who);
    tr.appendChild(el('td', `benchmark-grade rank-${grade}`, grade));
    tr.appendChild(el('td', '', what));
    const ev = el('td', 'benchmark-cost', evidence);
    ev.dataset.label = bench.columns[1];
    tr.appendChild(ev);
    tr.appendChild(el('td', 'benchmark-caveat', caveat));
    const src = el('td', 'benchmark-sources');
    sources.forEach(url => src.appendChild(sourceLink(url)));
    tr.appendChild(src);
    tbody.appendChild(tr);
  };

  cands.forEach(c => {
    const stat = c.stats.find(s => s.key === statKey);
    addRow({
      ...bench.subjects[c.id],
      name: c.name,
      partyCode: c.partyCode,
      role: c.currentRole,
      grade: stat.grade,
      sources: stat.sources.slice(0, 2),
      href: `#${c.id}`,
    }, 'benchmark-subject');
  });
  const addFullRow = (className, text, sources = []) => {
    const tr = el('tr', className);
    const td = el('td', '', text);
    td.colSpan = 6;
    sources.forEach(url => {
      td.appendChild(document.createTextNode(' '));
      td.appendChild(sourceLink(url));
    });
    tr.appendChild(td);
    tbody.appendChild(tr);
  };

  [['mayor', '縣市首長（目標職位）'], ['legislator', '立委（兩人現職）']].forEach(([group, heading]) => {
    addFullRow('benchmark-group', heading);
    bench.people.filter(p => p.group === group).forEach(p => addRow({ ...p, grade: 'A' }));
    const blank = bench.blank && bench.blank[group];
    if (blank) addFullRow('benchmark-blank', blank.text, blank.sources);
  });

  table.appendChild(tbody);
  document.getElementById('benchmarkDialog').showModal();
}

const VERDICTS = ['可能', '有機會', '不可能'];
const VERDICT_CLASS = { 可能: 'pv-badge-yes', 有機會: 'pv-badge-maybe', 不可能: 'pv-badge-no' };

const verdictBadge = (verdict) => el('span', `pv-badge ${VERDICT_CLASS[verdict]}`, verdict);

const verdictTally = (policies) => {
  const wrap = el('div', 'verdict-tally');
  VERDICTS.forEach(v => {
    const n = policies.filter(p => p.verdict === v).length;
    const item = el('span', 'tally-item');
    item.appendChild(verdictBadge(v));
    item.appendChild(el('b', '', n));
    wrap.appendChild(item);
  });
  return wrap;
};

const policyItem = (p) => {
  const li = el('li', p.verdict === '不可能' ? 'policy-item policy-item-void' : 'policy-item');
  const head = el('div', 'policy-item-head');
  head.appendChild(verdictBadge(p.verdict));
  head.appendChild(el('span', 'policy-item-name', p.item));
  li.appendChild(head);
  if (p.changed) li.appendChild(el('div', 'policy-changed', `原本：${p.changed}`));
  li.appendChild(el('div', 'policy-note', p.note));
  return li;
};

const isMostlyVoid = (policies) => policies.length > 0 && policies.filter(p => p.verdict === '不可能').length * 2 >= policies.length;

const policyCell = (policies, href) => {
  const cell = el('a', isMostlyVoid(policies) ? 'policy-cell policy-cell-void' : 'policy-cell');
  cell.href = href;
  cell.appendChild(verdictTally(policies));
  cell.appendChild(el('span', 'policy-cell-more', `看 ${policies.length} 項細節 →`));
  return cell;
};

const renderPolicyDetail = (container, c, policy) => {
  const data = policy.candidates[c.id];
  container.appendChild(el('h2', 'section-title', '政見可行性　眼中的台中未來四年'));
  container.appendChild(el('div', 'policy-premise-note', `${policy.premise.title}：${policy.premise.short}`));

  const vision = el('div', `policy-vision party-border-${c.partyCode}`);
  vision.appendChild(el('p', 'policy-vision-text', data.vision));
  vision.appendChild(verdictTally(data.policies));
  container.appendChild(vision);

  const grid = el('div', 'policy-detail-grid');
  policy.categories.forEach((cat, i) => {
    const items = data.policies.filter(p => p.cat === cat);
    if (!items.length) return;
    const group = el('div', 'policy-detail-group');
    group.id = `policy-${c.id}-${i}`;
    group.appendChild(el('h3', 'policy-subtitle', cat));
    const ul = el('ul', 'policy-list');
    items.forEach(p => ul.appendChild(policyItem(p)));
    group.appendChild(ul);
    grid.appendChild(group);
  });
  container.appendChild(grid);
  if (data.excluded) container.appendChild(el('p', 'polls-note', data.excluded));
  const back = el('a', 'policy-back', '← 回兩雄對陣看政見比較表');
  back.href = '#compare/policy-compare';
  container.appendChild(back);
};

const renderPolicy = (policy, shared, cands) => {
  const ids = shared.order;
  const pre = policy.premise;
  const premise = document.getElementById('policyPremise');
  premise.appendChild(el('h3', 'policy-subtitle', pre.title));

  const grid = el('div', 'premise-grid');
  [['照常進行', pre.keep, 'premise-keep'], ['中央不給', pre.cut, 'premise-cut']].forEach(([title, items, cls]) => {
    const box = el('div', `premise-box ${cls}`);
    box.appendChild(el('h3', '', title));
    const ul = el('ul');
    fillList(ul, items);
    box.appendChild(ul);
    grid.appendChild(box);
  });
  premise.appendChild(grid);

  const facts = el('dl', 'premise-facts');
  pre.facts.forEach(f => {
    const row = el('div');
    row.appendChild(el('dt', '', f.label));
    row.appendChild(el('dd', '', f.value));
    facts.appendChild(row);
  });
  premise.appendChild(facts);

  const legend = el('ul', 'verdict-legend');
  pre.legend.forEach(l => {
    const li = el('li');
    li.appendChild(verdictBadge(l.verdict));
    li.appendChild(document.createTextNode(l.text));
    legend.appendChild(li);
  });
  premise.appendChild(legend);

  const compare = document.getElementById('policyCompare');
  const headRow = el('div', 'policy-row policy-row-head');
  headRow.appendChild(el('div', 'policy-cat', '類別'));
  ids.forEach(id => {
    const c = cands[id];
    const th = el('div', `policy-col-head party-text-${c.partyCode}`, c.name);
    const trait = policy.candidates[id].trait;
    th.appendChild(el('span', trait.negative ? 'policy-trait negative' : 'policy-trait', trait.name));
    headRow.appendChild(th);
  });
  compare.appendChild(headRow);

  const addRow = (label, cls, pick, anchor) => {
    const row = el('div', `policy-row ${cls}`);
    row.appendChild(el('div', 'policy-cat', label));
    ids.forEach(id => {
      const col = el('div', 'policy-col');
      col.appendChild(el('div', `policy-col-name party-text-${cands[id].partyCode}`, cands[id].name));
      col.appendChild(policyCell(pick(policy.candidates[id].policies), anchor(id)));
      row.appendChild(col);
    });
    compare.appendChild(row);
  };

  policy.categories.forEach((cat, i) => {
    addRow(cat, '', ps => ps.filter(p => p.cat === cat), id => `#${id}/policy-${id}-${i}`);
  });
  addRow('合計', 'policy-row-total', ps => ps, id => `#${id}/policy-${id}`);

  const more = el('p', 'policy-more');
  more.appendChild(document.createTextNode('「不可能」達半數以上即蓋「空頭支票」。點格子可看每項政見與判定理由：'));
  ids.forEach((id, i) => {
    if (i) more.appendChild(document.createTextNode('、'));
    const a = el('a', `party-text-${cands[id].partyCode}`, `${cands[id].name}的政見細項`);
    a.href = `#${id}/policy-${id}`;
    more.appendChild(a);
  });
  compare.appendChild(more);

  const notes = ids.map(id => policy.candidates[id].excluded).filter(Boolean);
  if (notes.length) compare.appendChild(el('p', 'polls-note', notes.join(' ')));

  fillList(document.getElementById('policyConclusion'), policy.conclusion);
  const sources = document.getElementById('policySources');
  policy.sources.forEach(s => {
    const li = el('li');
    li.appendChild(sourceLink(s.url, s.label));
    sources.appendChild(li);
  });
};

function sourceLinkInternal(c) {
  const a = el('a', '', c.name);
  a.href = `#${c.id}`;
  return a;
}

const route = () => {
  const views = ['compare', ...window.SHARED.order];
  const [view, anchor] = location.hash.slice(1).split('/');
  const current = views.includes(view) ? view : 'compare';
  views.forEach(v => {
    document.getElementById(`view-${v}`).hidden = v !== current;
  });
  document.querySelectorAll('.tab').forEach(tab => {
    const active = tab.dataset.view === current;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active);
  });
  const target = anchor && document.getElementById(anchor);
  if (target) target.scrollIntoView();
  else window.scrollTo(0, 0);
};

const LAYOUT_KEY = 'layoutPreference';
const MOBILE_QUERY = window.matchMedia('(max-width: 820px), (pointer: coarse) and (max-width: 1024px)');
let sessionPreference = null;

const detectLayout = () => (MOBILE_QUERY.matches ? 'mobile' : 'desktop');

const readPreference = () => {
  if (sessionPreference) return sessionPreference;
  try {
    return localStorage.getItem(LAYOUT_KEY) || 'auto';
  } catch {
    return 'auto';
  }
};

const applyLayout = () => {
  const pref = readPreference();
  const detected = detectLayout();
  const layout = pref === 'auto' ? detected : pref;
  const root = document.documentElement;
  root.classList.toggle('layout-desktop', layout === 'desktop');
  root.classList.toggle('layout-mobile', layout === 'mobile');
  document.getElementById('detectedLayout').textContent = pref === 'auto' ? `（${detected === 'mobile' ? '手機' : '桌面'}）` : '';
  document.querySelectorAll('.layout-switch button').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.layout === pref);
  });
};

const setPreference = (pref) => {
  sessionPreference = pref;
  try {
    localStorage.setItem(LAYOUT_KEY, pref);
  } catch {
    sessionPreference = pref;
  }
  applyLayout();
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.layout-switch button').forEach(btn => {
    btn.addEventListener('click', () => setPreference(btn.dataset.layout));
  });
  MOBILE_QUERY.addEventListener('change', applyLayout);
  applyLayout();

  const shared = window.SHARED;
  const cands = window.CANDIDATES;
  renderCompare(shared, cands);
  shared.order.forEach(id => renderCandidate(document.getElementById(`view-${id}`), cands[id], shared));
  renderPolicy(window.POLICY, shared, cands);
  document.getElementById('disclaimer').textContent = shared.disclaimer;
  document.getElementById('lastUpdated').textContent = shared.lastUpdated;
  const star = document.getElementById('starLink');
  if (shared.repoUrl) star.href = shared.repoUrl;
  else star.hidden = true;
  window.addEventListener('hashchange', route);
  route();
});
