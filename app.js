/* ==========================================================================
   Astra AI Physics — Fully Operational Interactive Reconstruction
   Reverse-engineered from https://astra-ai.co/subjects/physics/#how-it-works
   ========================================================================== */

const PHYSICS_PROBLEMS = [
  {
    id: 'projectile',
    category: 'Kinematics · 2D Motion',
    badge: 'Mechanics',
    title: 'Projectile Launch & Trajectory Analysis',
    prompt: 'A projectile is launched from ground level with an initial speed v₀ = 25 m/s at an angle θ = 36.87° above the horizontal (g = 9.8 m/s²). Calculate: (1) initial velocity components, (2) maximum height H, (3) total time of flight T, and (4) horizontal range R.',
    latexFormula: 'y(t) = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2, \\quad R = \\frac{v_0^2 \\sin(2\\theta)}{g}',
    simParams: {
      v0: { label: 'Initial Speed v₀ (m/s)', min: 5, max: 50, step: 1, value: 25 },
      angle: { label: 'Launch Angle θ (°)', min: 10, max: 85, step: 1, value: 37 },
      gravity: { label: 'Gravity g (m/s²)', min: 1.6, max: 24.8, step: 0.2, value: 9.8 }
    },
    steps: [
      {
        num: 1,
        title: 'Decompose the initial velocity vector into horizontal and vertical components',
        principle: 'Horizontal motion has zero acceleration (aₓ = 0), while vertical motion experiences constant downward gravitational acceleration (aᵧ = -g).',
        formula: 'v_{0x} = v_0 \\cos\\theta, \\quad v_{0y} = v_0 \\sin\\theta',
        substitution: 'v_{0x} = 25 \\cos(36.87^\\circ) = 20.0\\text{ m/s}, \\quad v_{0y} = 25 \\sin(36.87^\\circ) = 15.0\\text{ m/s}',
        question: 'What is the vertical component of initial velocity v₀ᵧ (in m/s)?',
        expectedAnswer: 15,
        unit: 'm/s',
        hint: 'Multiply v₀ = 25 m/s by sin(36.87°) ≈ 0.60.'
      },
      {
        num: 2,
        title: 'Find the maximum height H at the apex of the trajectory',
        principle: 'At the highest point of the trajectory, the vertical velocity momentarily becomes zero (vᵧ = 0) while vₓ remains 20.0 m/s.',
        formula: 'v_y^2 = v_{0y}^2 - 2gH \\implies H = \\frac{v_{0y}^2}{2g}',
        substitution: 'H = \\frac{(15.0)^2}{2 \\times 9.8} = \\frac{225}{19.6} \\approx 11.48\\text{ m}',
        question: 'What is the maximum height H reached by the projectile (in m)?',
        expectedAnswer: 11.48,
        unit: 'm',
        hint: 'Divide v₀ᵧ² = 225 by (2 × 9.8 = 19.6).'
      },
      {
        num: 3,
        title: 'Determine the total time of flight T',
        principle: 'The time to reach the apex is t_up = v₀ᵧ / g. Because the launch and landing elevations are equal, total flight time is T = 2 · t_up.',
        formula: 'T = \\frac{2 v_{0y}}{g}',
        substitution: 'T = \\frac{2 \\times 15.0}{9.8} \\approx 3.06\\text{ s}',
        question: 'What is the total time of flight T (in s)?',
        expectedAnswer: 3.06,
        unit: 's',
        hint: 'Compute 30 / 9.8.'
      },
      {
        num: 4,
        title: 'Calculate the horizontal range R',
        principle: 'Horizontal distance is constant horizontal speed v₀ₓ multiplied by total time in the air T.',
        formula: 'R = v_{0x} \\cdot T = \\frac{v_0^2 \\sin(2\\theta)}{g}',
        substitution: 'R = 20.0 \\times 3.061 \\approx 61.22\\text{ m}',
        question: 'What is the horizontal range R (in m)?',
        expectedAnswer: 61.22,
        unit: 'm',
        hint: 'Multiply v₀ₓ = 20.0 m/s by T = 3.061 s.'
      }
    ]
  },
  {
    id: 'incline',
    category: 'Dynamics · Newton’s Second Law',
    badge: 'Forces & Friction',
    title: 'Block Sliding Down an Inclined Plane with Friction',
    prompt: 'A block of mass m = 8.0 kg slides down a rough ramp inclined at θ = 30° to the horizontal. The coefficient of kinetic friction between the block and ramp is μₖ = 0.25 (g = 9.8 m/s²). Find the normal force F_N, kinetic friction fₖ, and acceleration a down the ramp.',
    latexFormula: 'm a = mg\\sin\\theta - \\mu_k mg\\cos\\theta \\implies a = g(\\sin\\theta - \\mu_k\\cos\\theta)',
    simParams: {
      mass: { label: 'Mass m (kg)', min: 1, max: 25, step: 0.5, value: 8.0 },
      angle: { label: 'Incline Angle θ (°)', min: 10, max: 65, step: 1, value: 30 },
      mu: { label: 'Friction Coefficient μₖ', min: 0, max: 0.8, step: 0.05, value: 0.25 }
    },
    steps: [
      {
        num: 1,
        title: 'Resolve gravity into parallel and perpendicular components',
        principle: 'Tilt the coordinate axes so x points down the incline and y points perpendicular to the surface.',
        formula: 'F_{g\\parallel} = mg\\sin\\theta, \\quad F_{g\\perp} = mg\\cos\\theta',
        substitution: 'F_{g\\parallel} = 8.0 \\times 9.8 \\times \\sin(30^\\circ) = 39.2\\text{ N}, \\quad F_{g\\perp} = 8.0 \\times 9.8 \\times \\cos(30^\\circ) = 67.9\\text{ N}',
        question: 'What is the component of gravity pulling the block down the slope F_g∥ (in N)?',
        expectedAnswer: 39.2,
        unit: 'N',
        hint: 'sin(30°) = 0.5, so compute 8.0 × 9.8 × 0.5.'
      },
      {
        num: 2,
        title: 'Calculate the normal force F_N and kinetic friction force fₖ',
        principle: 'There is no motion perpendicular to the ramp (aᵧ = 0), so F_N balances F_g⊥. Kinetic friction opposes the motion: fₖ = μₖ F_N.',
        formula: 'F_N = mg\\cos\\theta, \\quad f_k = \\mu_k F_N',
        substitution: 'f_k = 0.25 \\times 67.90 = 16.97\\text{ N}',
        question: 'What is the magnitude of the kinetic friction force fₖ (in N)?',
        expectedAnswer: 16.97,
        unit: 'N',
        hint: 'Multiply F_N = 67.90 N by μₖ = 0.25.'
      },
      {
        num: 3,
        title: 'Apply Newton’s Second Law along the incline to find acceleration a',
        principle: 'Net force down the slope is F_net = F_g∥ - fₖ = m·a.',
        formula: 'a = \\frac{F_{g\\parallel} - f_k}{m} = g(\\sin\\theta - \\mu_k\\cos\\theta)',
        substitution: 'a = \\frac{39.2 - 16.97}{8.0} = \\frac{22.23}{8.0} \\approx 2.78\\text{ m/s}^2',
        question: 'What is the acceleration a of the block down the ramp (in m/s²)?',
        expectedAnswer: 2.78,
        unit: 'm/s²',
        hint: 'Divide the net force 22.23 N by the mass 8.0 kg.'
      }
    ]
  },
  {
    id: 'energy',
    category: 'Work, Energy & Circular Motion',
    badge: 'Conservation Laws',
    title: 'Rollercoaster Loop-the-Loop Conservation of Energy',
    prompt: 'A m = 2.0 kg rollercoaster cart is released from rest at height h₁ = 12.0 m on a frictionless track and enters a vertical circular loop of radius R = 4.0 m (g = 9.8 m/s²). Find its speed v_top and the normal force F_N exerted by the track at the top of the loop (height h₂ = 2R = 8.0 m).',
    latexFormula: 'mgh_1 = mgh_2 + \\frac{1}{2}mv_{\\text{top}}^2, \\quad F_N + mg = \\frac{mv_{\\text{top}}^2}{R}',
    simParams: {
      h1: { label: 'Release Height h₁ (m)', min: 6, max: 22, step: 0.5, value: 12.0 },
      radius: { label: 'Loop Radius R (m)', min: 2, max: 6, step: 0.5, value: 4.0 },
      mass: { label: 'Cart Mass m (kg)', min: 1, max: 10, step: 0.5, value: 2.0 }
    },
    steps: [
      {
        num: 1,
        title: 'Use Conservation of Mechanical Energy between release and top of loop',
        principle: 'With zero friction, total mechanical energy E = U + K is constant. The top of the loop is at height h₂ = 2R = 8.0 m.',
        formula: 'mgh_1 = mg(2R) + \\frac{1}{2}mv_{\\text{top}}^2 \\implies v_{\\text{top}} = \\sqrt{2g(h_1 - 2R)}',
        substitution: 'v_{\\text{top}} = \\sqrt{2 \\times 9.8 \\times (12.0 - 8.0)} = \\sqrt{78.4} \\approx 8.85\\text{ m/s}',
        question: 'What is the speed v_top at the top of the loop (in m/s)?',
        expectedAnswer: 8.85,
        unit: 'm/s',
        hint: 'Compute √(2 × 9.8 × 4.0) = √78.4.'
      },
      {
        num: 2,
        title: 'Apply centripetal force equation at the top of the loop',
        principle: 'At the top of the loop, both gravity mg and the downward normal force F_N point toward the center of the circle, providing centripetal acceleration v²/R.',
        formula: 'F_N + mg = \\frac{mv_{\\text{top}}^2}{R} \\implies F_N = \\frac{mv_{\\text{top}}^2}{R} - mg',
        substitution: 'F_N = \\frac{2.0 \\times 78.4}{4.0} - (2.0 \\times 9.8) = 39.2 - 19.6 = 19.6\\text{ N}',
        question: 'What is the normal force F_N from the track at the top of the loop (in N)?',
        expectedAnswer: 19.6,
        unit: 'N',
        hint: 'Centripetal force mv²/R is 39.2 N; subtract weight mg = 19.6 N.'
      }
    ]
  },
  {
    id: 'circuits',
    category: 'Electricity & Magnetism · DC Circuits',
    badge: 'Ohm’s & Kirchhoff’s Laws',
    title: 'Series-Parallel Resistor Network & Power Dissipation',
    prompt: 'A V_s = 24 V DC source is connected in series with resistor R₁ = 4.0 Ω and a parallel combination of R₂ = 6.0 Ω and R₃ = 12.0 Ω. Find: (1) equivalent resistance R_eq, (2) total current I_total, and (3) power P₂ dissipated in R₂.',
    latexFormula: 'R_{\\text{eq}} = R_1 + \\left(\\frac{1}{R_2} + \\frac{1}{R_3}\\right)^{-1}, \\quad I = \\frac{V_s}{R_{\\text{eq}}}, \\quad P_2 = \\frac{V_p^2}{R_2}',
    simParams: {
      voltage: { label: 'Source Voltage V_s (V)', min: 6, max: 48, step: 2, value: 24 },
      r1: { label: 'Series Resistor R₁ (Ω)', min: 1, max: 20, step: 1, value: 4 },
      r2: { label: 'Branch Resistor R₂ (Ω)', min: 2, max: 24, step: 1, value: 6 }
    },
    steps: [
      {
        num: 1,
        title: 'Reduce the parallel branch R₂ ∥ R₃ and add series resistor R₁',
        principle: 'For two resistors in parallel, R_p = (R₂·R₃)/(R₂ + R₃). Then add R₁ in series.',
        formula: 'R_p = \\frac{6.0 \\times 12.0}{6.0 + 12.0} = 4.0\\ \\Omega \\implies R_{\\text{eq}} = R_1 + R_p = 4.0 + 4.0 = 8.0\\ \\Omega',
        substitution: 'R_{\\text{eq}} = 8.0\\ \\Omega',
        question: 'What is the total equivalent resistance R_eq of the circuit (in Ω)?',
        expectedAnswer: 8.0,
        unit: 'Ω',
        hint: '6 Ω in parallel with 12 Ω equals 4 Ω; add R₁ = 4 Ω.'
      },
      {
        num: 2,
        title: 'Find total current I_total and parallel branch voltage V_p',
        principle: 'By Ohm’s Law, I_total = V_s / R_eq. The voltage across the parallel network is V_p = V_s - I_total·R₁.',
        formula: 'I_{\\text{total}} = \\frac{24\\text{ V}}{8.0\\ \\Omega} = 3.0\\text{ A}, \\quad V_p = I_{\\text{total}} \\cdot R_p = 3.0 \\times 4.0 = 12.0\\text{ V}',
        substitution: 'I_{\\text{total}} = 3.0\\text{ A}, \\quad V_p = 12.0\\text{ V}',
        question: 'What is the voltage V_p across the parallel branch (in V)?',
        expectedAnswer: 12.0,
        unit: 'V',
        hint: 'Multiply I_total = 3.0 A by R_p = 4.0 Ω.'
      },
      {
        num: 3,
        title: 'Compute the thermal power P₂ dissipated in resistor R₂',
        principle: 'Power dissipated in a resistor with known voltage V_p across it is P₂ = V_p² / R₂.',
        formula: 'P_2 = \\frac{V_p^2}{R_2} = \\frac{(12.0)^2}{6.0} = 24.0\\text{ W}',
        substitution: 'P_2 = 24.0\\text{ W}',
        question: 'How much power P₂ is dissipated in resistor R₂ (in W)?',
        expectedAnswer: 24.0,
        unit: 'W',
        hint: 'Divide 12² = 144 by R₂ = 6.0 Ω.'
      }
    ]
  }
];

const FLASHCARDS_DATA = [
  {
    topic: 'Newtonian Mechanics',
    front: 'Why does normal force F_N NOT always equal mg?',
    back: 'Normal force is a constraint reaction force perpendicular to the contact surface. On an incline θ it equals mg cosθ, and in an accelerating elevator or curved loop it adjusts so that ΣF_⊥ = m a_⊥.',
    formula: 'F_N = m(g\\cos\\theta + a_\\perp)'
  },
  {
    topic: 'Work & Energy',
    front: 'When is mechanical energy E = K + U conserved?',
    back: 'Mechanical energy is strictly conserved when no non-conservative forces (like kinetic friction or air drag) do net work on the system (W_nc = 0).',
    formula: '\\Delta K + \\Delta U = W_{\\text{nc}}'
  },
  {
    topic: 'Electromagnetism',
    front: 'What is the physical meaning of Lenz’s Law in Faraday induction?',
    back: 'The induced current always flows in a direction such that its own magnetic field opposes the change in magnetic flux that produced it — enforcing conservation of energy.',
    formula: '\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}'
  },
  {
    topic: 'Waves & Quantum',
    front: 'Why does increasing light intensity NOT increase maximum photoelectron kinetic energy?',
    back: 'Each photon interacts one-to-one with a single electron. Higher intensity means more photons per second (larger current), whereas photon energy depends solely on frequency E = hf.',
    formula: 'K_{\\max} = hf - \\phi'
  }
];

const TRUE_FALSE_DATA = [
  {
    statement: 'At the highest point of a projectile’s trajectory (launched at 45°), both its velocity and acceleration are zero.',
    answer: false,
    explanation: 'False! Only the vertical velocity component vᵧ is zero at the apex. The horizontal velocity vₓ = v₀ cosθ is non-zero, and downward gravitational acceleration g = 9.8 m/s² never turns off!'
  },
  {
    statement: 'Doubling the net force on an object of constant mass doubles its acceleration.',
    answer: true,
    explanation: 'True! By Newton’s Second Law (a = F_net / m), acceleration is directly proportional to net force when mass is constant.'
  },
  {
    statement: 'Adding another resistor in parallel to a circuit increases the total equivalent resistance.',
    answer: false,
    explanation: 'False! Adding a parallel branch opens an additional pathway for current flow, which always decreases the total equivalent resistance below the smallest individual branch resistor.'
  },
  {
    statement: 'Centripetal force is a separate fundamental force that must be drawn alongside gravity and tension on a free-body diagram.',
    answer: false,
    explanation: 'False! Centripetal force (mv²/R) is simply the net radial force provided by real physical forces like gravity, tension, normal force, or friction.'
  }
];

const FAQ_DATA = {
  students: [
    {
      q: 'What is Astra AI and how can it help me?',
      a: 'Astra AI is an interactive physics learning platform and AI tutor that guides you step by step through mechanics, electromagnetism, thermodynamics, waves, and quantum physics. Instead of just dumping a final number, it checks your reasoning at every step and visualizes the physical system.'
    },
    {
      q: 'Does Astra AI only provide solutions, or does it actually improve understanding of physics concepts?',
      a: 'It is specifically built around Socratic scaffolding: decomposing free-body diagrams, identifying conservation laws, deriving symbolic expressions before plugging in numbers, and letting you manipulate variables on a live canvas.'
    },
    {
      q: 'Can Astra AI solve complex physics problems?',
      a: 'Yes — from multi-body inclined planes and RLC circuits to orbital mechanics and photoelectric quantum transitions, with full LaTeX derivation and dimensional analysis.'
    },
    {
      q: 'How is Astra AI different from ChatGPT?',
      a: 'General chatbots often hallucinate signs, skip free-body diagrams, or hand over the final answer immediately. Astra enforces physical sign conventions, unit consistency, interactive simulations, and active recall.'
    }
  ],
  parents: [
    {
      q: 'How do I know my child is learning and not just copying homework answers?',
      a: 'Astra locks later steps behind guided conceptual checkpoints ("Which force balances gravity perpendicular to the ramp?"). Students earn mastery streaks by solving twin practice problems independently.'
    },
    {
      q: 'Does one subscription give access to all subjects available on Astra AI?',
      a: 'Yes! Physics, Mathematics, Chemistry, Biology, Computer Science, and Exam Prep modes are all included in one unified workspace.'
    }
  ],
  teachers: [
    {
      q: 'What does peer-reviewed research say about AI physics tutoring?',
      a: 'In a 2025 randomized controlled trial at Harvard (Kestin et al., Scientific Reports), university physics students using a structured Socratic AI tutor achieved more than double the learning gains of standard active-learning classrooms in less time.'
    },
    {
      q: 'Can Astra AI replace a physics teacher or classroom lab?',
      a: 'No — Astra complements classroom instruction by giving every student 24/7 individualized Socratic feedback when they get stuck on homework or exam revision.'
    }
  ]
};

// Application State
const state = {
  activeProblemIndex: 0,
  unlockedStepIndex: 0,
  completedSteps: {},
  simRunning: true,
  simTime: 0,
  activeStudyMode: 'quiz',
  flashcardIndex: 0,
  flashcardFlipped: false,
  tfIndex: 0,
  tfAnswered: null,
  streakDays: JSON.parse(localStorage.getItem('astra_physics_streak') || '[true, true, true, true, false, false, false]'),
  xp: parseInt(localStorage.getItem('astra_physics_xp') || '420', 10),
  faqTab: 'students',
  chatHistory: [
    {
      role: 'tutor',
      text: 'Hi! I’m your Astra Physics Tutor. Pick any problem above, click a formula key, or ask me anything — like *"Why does normal force equal mg cosθ on an incline?"* or *"Solve a projectile launched at 30 m/s at 45°"*.'
    }
  ]
};

function saveProgress() {
  localStorage.setItem('astra_physics_streak', JSON.stringify(state.streakDays));
  localStorage.setItem('astra_physics_xp', String(state.xp));
  const xpEl = document.getElementById('header-xp-badge');
  if (xpEl) xpEl.textContent = `${state.xp} XP · 🔥 ${state.streakDays.filter(Boolean).length}d Streak`;
}

function renderLatexInElement(el) {
  if (!el || typeof window.katex === 'undefined') return;
  el.querySelectorAll('[data-latex]').forEach((node) => {
    const tex = node.getAttribute('data-latex');
    const display = node.getAttribute('data-display') === 'true';
    try {
      window.katex.render(tex, node, { throwOnError: false, displayMode: display });
    } catch (e) {
      node.textContent = tex;
    }
  });
}

// ============================================================================
// 1. Interactive Bento Flip Cards (Module 230791 from 14_3rwvvap7r0kpx.js)
// ============================================================================
function initFlipCards() {
  document.querySelectorAll('[data-flip-card]').forEach((card) => {
    const btn = card.querySelector('.star-toggle-btn');
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = card.getAttribute('data-expanded') === 'true';
      card.setAttribute('data-expanded', String(!expanded));
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });

  // Action chips inside #learn cards jump straight to the AI tutor with that prompt
  document.querySelectorAll('[data-tutor-prompt]').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const promptText = chip.getAttribute('data-tutor-prompt');
      const targetEl = document.getElementById('how-it-works');
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
      handleCustomProblemOrQuestion(promptText);
    });
  });
}

// ============================================================================
// 2. Interactive Step-by-Step Physics Solver & 2D Simulation (#how-it-works)
// ============================================================================
function getActiveProblem() {
  return PHYSICS_PROBLEMS[state.activeProblemIndex];
}

function renderProblemSelector() {
  const container = document.getElementById('problem-selector-tabs');
  if (!container) return;
  container.innerHTML = PHYSICS_PROBLEMS.map((p, idx) => {
    const active = idx === state.activeProblemIndex;
    return `
      <button type="button" data-prob-idx="${idx}"
        class="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
          active
            ? 'home-ramp-fill text-white shadow-[0_6px_20px_rgba(67,83,243,0.45)]'
            : 'bg-white/5 text-[#8a9bad] hover:bg-white/10 hover:text-white border border-white/10'
        }">
        ${p.badge}: ${p.title.split(' ')[0]} ${p.title.split(' ')[1] || ''}
      </button>
    `;
  }).join('');

  container.querySelectorAll('[data-prob-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeProblemIndex = parseInt(btn.getAttribute('data-prob-idx'), 10);
      state.unlockedStepIndex = 0;
      state.simTime = 0;
      renderProblemSelector();
      renderSolverWorkspace();
      renderSimControls();
    });
  });
}

function renderSolverWorkspace() {
  const prob = getActiveProblem();
  const headerEl = document.getElementById('solver-problem-header');
  const stepsEl = document.getElementById('solver-steps-list');
  if (!headerEl || !stepsEl) return;

  headerEl.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
      <span class="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8b98ff] bg-[#4353f3]/15 border border-[#5b6bff]/40 px-3 py-1 rounded-full">
        ${prob.category}
      </span>
      <span class="font-mono text-xs text-[#8a9bad]">
        Step ${Math.min(state.unlockedStepIndex + 1, prob.steps.length)} of ${prob.steps.length}
      </span>
    </div>
    <h3 class="text-xl lg:text-2xl font-semibold text-white mb-2">${prob.title}</h3>
    <p class="text-sm lg:text-base text-[#a3a3ac] leading-relaxed mb-4">${prob.prompt}</p>
    <div class="bg-black/50 border border-white/10 rounded-2xl px-4 py-3 overflow-x-auto">
      <div data-latex="${prob.latexFormula}" data-display="true" class="text-sm text-[#c9cfff]"></div>
    </div>
  `;

  stepsEl.innerHTML = prob.steps.map((step, idx) => {
    const isUnlocked = idx <= state.unlockedStepIndex;
    const stepKey = `${prob.id}-${step.num}`;
    const isCompleted = !!state.completedSteps[stepKey];

    if (!isUnlocked) {
      return `
        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-4 opacity-50 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="size-7 rounded-full bg-white/10 font-mono text-xs flex items-center justify-center text-white/60">0${step.num}</span>
            <span class="text-sm font-medium text-white/60">${step.title}</span>
          </div>
          <span class="font-mono text-[11px] uppercase tracking-wider text-white/40">🔒 Complete previous step</span>
        </div>
      `;
    }

    return `
      <div class="rounded-2xl border ${isCompleted ? 'border-emerald-500/40 bg-emerald-950/15' : 'border-[#5b6bff]/40 bg-[#151621]'} p-5 transition-all">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="flex items-center gap-2.5">
            <span class="size-7 rounded-full ${isCompleted ? 'bg-emerald-500 text-black' : 'home-ramp-fill text-white'} font-mono text-xs font-bold flex items-center justify-center">
              ${isCompleted ? '✓' : '0' + step.num}
            </span>
            <h4 class="font-semibold text-white text-sm lg:text-base">${step.title}</h4>
          </div>
          <span class="font-mono text-[11px] uppercase tracking-wider ${isCompleted ? 'text-emerald-400' : 'text-[#8b98ff]'}">
            ${isCompleted ? 'Mastered +25 XP' : 'Active Step'}
          </span>
        </div>

        <p class="text-xs lg:text-sm text-[#a3a3ac] mb-3 leading-relaxed">${step.principle}</p>

        <div class="bg-black/40 border border-white/10 rounded-xl p-3 mb-3 overflow-x-auto">
          <div data-latex="${step.formula}" data-display="true" class="text-xs lg:text-sm"></div>
        </div>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-3">
          <div class="relative flex-1">
            <input type="number" step="any" id="step-input-${idx}"
              placeholder="${step.question}"
              value="${isCompleted ? step.expectedAnswer : ''}"
              class="w-full rounded-xl bg-black/60 border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-[#8a9bad]/60 focus:outline-none focus:border-[#5b6bff]" />
            <span class="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-[#8a9bad]">${step.unit}</span>
          </div>
          <button type="button" data-check-step="${idx}"
            class="home-ramp-fill px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white hover:brightness-110 transition cursor-pointer">
            Check Step
          </button>
          <button type="button" data-hint-step="${idx}"
            class="px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-xs font-medium text-[#c9cfff] hover:bg-white/10 transition cursor-pointer">
            💡 Hint
          </button>
          <button type="button" data-reveal-step="${idx}"
            class="px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-medium text-[#8a9bad] hover:text-white transition cursor-pointer">
            Show Derivation
          </button>
        </div>

        <div id="step-feedback-${idx}" class="${isCompleted ? 'block' : 'hidden'} mt-3 rounded-xl bg-black/50 border border-white/10 p-3 text-xs lg:text-sm">
          <div class="font-semibold text-emerald-400 mb-1">✓ Step Verified:</div>
          <div data-latex="${step.substitution}" data-display="false" class="text-white/90"></div>
        </div>
      </div>
    `;
  }).join('');

  renderLatexInElement(headerEl);
  renderLatexInElement(stepsEl);

  // Wire step check / hint / reveal buttons
  stepsEl.querySelectorAll('[data-check-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-check-step'), 10);
      const step = prob.steps[idx];
      const inputEl = document.getElementById(`step-input-${idx}`);
      const fbEl = document.getElementById(`step-feedback-${idx}`);
      const userVal = parseFloat(inputEl?.value || '');
      const tol = Math.max(0.15, Math.abs(step.expectedAnswer) * 0.03);

      if (!Number.isNaN(userVal) && Math.abs(userVal - step.expectedAnswer) <= tol) {
        const stepKey = `${prob.id}-${step.num}`;
        if (!state.completedSteps[stepKey]) {
          state.completedSteps[stepKey] = true;
          state.xp += 25;
          state.streakDays[4] = true; // mark Friday active
          saveProgress();
        }
        if (state.unlockedStepIndex <= idx && idx < prob.steps.length - 1) {
          state.unlockedStepIndex = idx + 1;
        }
        renderSolverWorkspace();
      } else if (fbEl) {
        fbEl.classList.remove('hidden');
        fbEl.innerHTML = `<span class="text-amber-300 font-medium">Not quite!</span> Check your units and signs. Hint: ${step.hint}`;
      }
    });
  });

  stepsEl.querySelectorAll('[data-hint-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-hint-step'), 10);
      const step = prob.steps[idx];
      const fbEl = document.getElementById(`step-feedback-${idx}`);
      if (fbEl) {
        fbEl.classList.remove('hidden');
        fbEl.innerHTML = `<span class="text-[#8b98ff] font-semibold">💡 Socratic Hint:</span> ${step.hint}`;
      }
    });
  });

  stepsEl.querySelectorAll('[data-reveal-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-reveal-step'), 10);
      const step = prob.steps[idx];
      const stepKey = `${prob.id}-${step.num}`;
      state.completedSteps[stepKey] = true;
      if (state.unlockedStepIndex <= idx && idx < prob.steps.length - 1) {
        state.unlockedStepIndex = idx + 1;
      }
      renderSolverWorkspace();
    });
  });
}

function renderSimControls() {
  const prob = getActiveProblem();
  const controlsEl = document.getElementById('sim-sliders-container');
  if (!controlsEl) return;

  controlsEl.innerHTML = Object.entries(prob.simParams).map(([key, cfg]) => `
    <div class="flex flex-col gap-1 bg-black/40 border border-white/10 rounded-xl p-3">
      <div class="flex items-center justify-between text-xs">
        <span class="text-[#8a9bad] font-medium">${cfg.label}</span>
        <span id="sim-val-${key}" class="font-mono text-white font-semibold">${cfg.value}</span>
      </div>
      <input type="range" data-sim-param="${key}"
        min="${cfg.min}" max="${cfg.max}" step="${cfg.step}" value="${cfg.value}"
        class="w-full accent-[#4353f3] cursor-pointer mt-1" />
    </div>
  `).join('');

  controlsEl.querySelectorAll('[data-sim-param]').forEach((slider) => {
    slider.addEventListener('input', () => {
      const key = slider.getAttribute('data-sim-param');
      const val = parseFloat(slider.value);
      prob.simParams[key].value = val;
      const labelEl = document.getElementById(`sim-val-${key}`);
      if (labelEl) labelEl.textContent = String(val);
      state.simTime = 0;
    });
  });
}

// Live 2D Physics Canvas Renderer
function startPhysicsCanvasLoop() {
  const canvas = document.getElementById('physics-sim-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let lastTs = performance.now();

  function drawArrow(x1, y1, x2, y2, color, label) {
    const headlen = 8;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
    if (label) {
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(label, x2 + 6, y2 - 4);
    }
    ctx.restore();
  }

  function frame(now) {
    const dt = Math.min(0.05, (now - lastTs) / 1000);
    lastTs = now;
    if (state.simRunning) {
      state.simTime += dt;
    }

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Subtle coordinate grid
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < w; gx += 40) {
      ctx.beginPath();
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, h);
      ctx.stroke();
    }
    for (let gy = 0; gy < h; gy += 40) {
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(w, gy);
      ctx.stroke();
    }

    const prob = getActiveProblem();
    const readoutEl = document.getElementById('sim-live-telemetry');

    if (prob.id === 'projectile') {
      const v0 = prob.simParams.v0.value;
      const deg = prob.simParams.angle.value;
      const g = prob.simParams.gravity.value;
      const rad = (deg * Math.PI) / 180;
      const vx = v0 * Math.cos(rad);
      const vy0 = v0 * Math.sin(rad);
      const tFlight = Math.max(0.2, (2 * vy0) / g);
      const maxH = (vy0 * vy0) / (2 * g);
      const range = vx * tFlight;

      const t = state.simTime % (tFlight * 1.15);
      const clampedT = Math.min(t, tFlight);

      const padX = 48;
      const groundY = h - 42;
      const scale = Math.min((w - padX * 2) / Math.max(range, 30), (groundY - 40) / Math.max(maxH, 15));

      // Ground line
      ctx.strokeStyle = 'rgba(255,255,255,0.22)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(20, groundY);
      ctx.lineTo(w - 20, groundY);
      ctx.stroke();

      // Full parabolic trajectory dashed
      ctx.save();
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = 'rgba(139, 152, 255, 0.45)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let s = 0; s <= 60; s++) {
        const ts = (s / 60) * tFlight;
        const px = padX + vx * ts * scale;
        const py = groundY - (vy0 * ts - 0.5 * g * ts * ts) * scale;
        if (s === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.restore();

      // Current projectile position
      const curX = padX + vx * clampedT * scale;
      const curY = groundY - (vy0 * clampedT - 0.5 * g * clampedT * clampedT) * scale;
      const curVy = vy0 - g * clampedT;

      // Velocity vectors
      drawArrow(curX, curY, curX + vx * 1.4, curY, '#38bdf8', 'vₓ');
      drawArrow(curX, curY, curX, curY - curVy * 1.4, '#f43f5e', 'vᵧ');
      drawArrow(curX, curY, curX + vx * 1.4, curY - curVy * 1.4, '#a855f7', 'v');

      // Glowing projectile orb
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#5b6bff';
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(curX, curY, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      if (readoutEl) {
        readoutEl.textContent = `t = ${clampedT.toFixed(2)}s | H_max = ${maxH.toFixed(2)}m | T = ${tFlight.toFixed(2)}s | R = ${range.toFixed(2)}m`;
      }
    } else if (prob.id === 'incline') {
      const m = prob.simParams.mass.value;
      const deg = prob.simParams.angle.value;
      const mu = prob.simParams.mu.value;
      const g = 9.8;
      const rad = (deg * Math.PI) / 180;
      const fgParallel = m * g * Math.sin(rad);
      const fn = m * g * Math.cos(rad);
      const fk = Math.min(fgParallel, mu * fn);
      const accel = Math.max(0, (fgParallel - fk) / m);

      const baseX = 90;
      const baseY = h - 45;
      const rampLen = Math.min(w - 180, 320);
      const topX = baseX;
      const topY = baseY - rampLen * Math.sin(rad);
      const rightX = baseX + rampLen * Math.cos(rad);
      const rightY = baseY;

      // Draw wedge
      ctx.fillStyle = 'rgba(67, 83, 243, 0.14)';
      ctx.strokeStyle = '#5b6bff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(topX, topY);
      ctx.lineTo(rightX, rightY);
      ctx.lineTo(baseX, baseY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Sliding block position along incline
      const maxS = rampLen - 50;
      const s = accel > 0 ? ((0.5 * accel * state.simTime * state.simTime * 28) % maxS) : 30;
      const bx = topX + (s + 28) * Math.cos(rad);
      const by = topY + (s + 28) * Math.sin(rad);

      ctx.save();
      ctx.translate(bx, by);
      ctx.rotate(rad);
      ctx.fillStyle = '#2a6afe';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.fillRect(-18, -32, 36, 32);
      ctx.strokeRect(-18, -32, 36, 32);

      // Force vectors from center of block
      drawArrow(0, -16, 48, -16, '#f43f5e', 'mg sinθ');
      drawArrow(0, -16, -36 * (fk / Math.max(1, fgParallel)), -16, '#fbbf24', 'fₖ');
      drawArrow(0, -16, 0, -64, '#34d399', 'F_N');
      ctx.restore();

      if (readoutEl) {
        readoutEl.textContent = `F_N = ${fn.toFixed(1)}N | fₖ = ${fk.toFixed(1)}N | a = ${accel.toFixed(2)} m/s²`;
      }
    } else if (prob.id === 'energy') {
      const h1 = prob.simParams.h1.value;
      const R = prob.simParams.radius.value;
      const m = prob.simParams.mass.value;
      const g = 9.8;

      const loopCx = w * 0.58;
      const groundY = h - 42;
      const loopR = Math.min(72, R * 14);
      const loopCy = groundY - loopR;

      // Track hill + loop
      ctx.strokeStyle = '#8b98ff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      const startY = Math.max(30, groundY - h1 * 14);
      ctx.moveTo(45, startY);
      ctx.bezierCurveTo(130, startY, 175, groundY, loopCx - loopR, groundY);
      ctx.lineTo(w - 35, groundY);
      ctx.stroke();

      // Circular loop
      ctx.beginPath();
      ctx.arc(loopCx, loopCy, loopR, 0, Math.PI * 2);
      ctx.stroke();

      // Animate cart along loop
      const angle = (state.simTime * 2.6) % (Math.PI * 2);
      const cartX = loopCx + loopR * Math.sin(angle);
      const cartY = loopCy + loopR * Math.cos(angle);

      ctx.fillStyle = '#fcbb00';
      ctx.shadowColor = '#fcbb00';
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(cartX, cartY, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      const vTopSq = 2 * g * (h1 - 2 * R);
      const vTop = vTopSq > 0 ? Math.sqrt(vTopSq) : 0;
      const fnTop = vTopSq > 0 ? (m * vTopSq) / R - m * g : 0;

      if (readoutEl) {
        readoutEl.textContent = vTopSq > 0 && fnTop >= 0
          ? `v_top = ${vTop.toFixed(2)} m/s | F_N(top) = ${fnTop.toFixed(1)} N (Safe Loop ✓)`
          : `⚠️ Insufficient height h₁ for loop radius R! Cart detaches (h₁ < 2.5R)`;
      }
    } else if (prob.id === 'circuits') {
      const vs = prob.simParams.voltage.value;
      const r1 = prob.simParams.r1.value;
      const r2 = prob.simParams.r2.value;
      const r3 = 12;
      const rp = (r2 * r3) / (r2 + r3);
      const req = r1 + rp;
      const itot = vs / req;
      const vp = itot * rp;
      const p2 = (vp * vp) / r2;

      // Schematic loop
      ctx.strokeStyle = '#8b98ff';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(70, 55, w - 140, h - 110);

      // Animated current charge dots
      const offset = (state.simTime * itot * 18) % 40;
      ctx.fillStyle = '#38bdf8';
      for (let x = 80 + offset; x < w - 80; x += 40) {
        ctx.beginPath();
        ctx.arc(x, 55, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(w - x, h - 55, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Labels
      ctx.fillStyle = '#ffffff';
      ctx.font = '600 13px "JetBrains Mono", monospace';
      ctx.fillText(`Battery V_s = ${vs}V`, 85, h / 2);
      ctx.fillText(`R₁ = ${r1}Ω (I = ${itot.toFixed(2)}A)`, w / 2 - 65, 42);
      ctx.fillText(`R₂ = ${r2}Ω ∥ R₃ = 12Ω (V_p = ${vp.toFixed(1)}V)`, w / 2 - 95, h - 28);

      if (readoutEl) {
        readoutEl.textContent = `R_eq = ${req.toFixed(2)}Ω | I_total = ${itot.toFixed(2)}A | V_p = ${vp.toFixed(1)}V | P₂ = ${p2.toFixed(1)}W`;
      }
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

// ============================================================================
// 3. Built-in Physics Formula Keyboard & Custom Problem Parser
// ============================================================================
function handleCustomProblemOrQuestion(rawInput) {
  const text = (rawInput || '').trim();
  if (!text) return;

  const inputBox = document.getElementById('custom-physics-input');
  if (inputBox) inputBox.value = text;

  const lower = text.toLowerCase();
  if (lower.includes('incline') || lower.includes('ramp') || lower.includes('friction') || lower.includes('normal force')) {
    state.activeProblemIndex = 1;
  } else if (lower.includes('loop') || lower.includes('energy') || lower.includes('roller') || lower.includes('height')) {
    state.activeProblemIndex = 2;
  } else if (lower.includes('circuit') || lower.includes('resistor') || lower.includes('ohm') || lower.includes('voltage')) {
    state.activeProblemIndex = 3;
  } else {
    state.activeProblemIndex = 0;
  }

  // Extract custom numbers if user typed e.g. "30 m/s at 45 degrees"
  const nums = [...text.matchAll(/(\d+(?:\.\d+)?)\s*(m\/s|deg|°|kg|m|v|ohm|Ω)/gi)];
  const prob = getActiveProblem();
  nums.forEach((m) => {
    const val = parseFloat(m[1]);
    const unit = m[2].toLowerCase();
    if (unit === 'm/s' && prob.simParams.v0) prob.simParams.v0.value = Math.min(50, Math.max(5, val));
    if ((unit === 'deg' || unit === '°') && prob.simParams.angle) prob.simParams.angle.value = Math.min(85, Math.max(10, val));
    if (unit === 'kg' && prob.simParams.mass) prob.simParams.mass.value = Math.min(25, Math.max(1, val));
  });

  state.unlockedStepIndex = 0;
  renderProblemSelector();
  renderSolverWorkspace();
  renderSimControls();

  // Also add an AI tutor response to the live chat
  state.chatHistory.push({ role: 'user', text });
  state.chatHistory.push({
    role: 'tutor',
    text: `Loaded **${prob.title}** into the step-by-step workspace and calibrated the live 2D vector simulation! Start with **Step 01** above, or adjust the sliders to test edge cases.`
  });
  renderStudyModeWorkspace();
}

function initMathKeyboardAndScanner() {
  document.querySelectorAll('[data-math-symbol]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sym = btn.getAttribute('data-math-symbol');
      const input = document.getElementById('custom-physics-input');
      if (input) {
        input.value += sym;
        input.focus();
      }
    });
  });

  const solveBtn = document.getElementById('btn-solve-custom');
  if (solveBtn) {
    solveBtn.addEventListener('click', () => {
      const input = document.getElementById('custom-physics-input');
      handleCustomProblemOrQuestion(input?.value || '');
    });
  }

  const scanInput = document.getElementById('scan-file-input');
  if (scanInput) {
    scanInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const statusEl = document.getElementById('scan-ocr-status');
      if (statusEl) {
        statusEl.classList.remove('hidden');
        statusEl.textContent = `📸 Scanning "${file.name}" with Astra Physics Vision OCR...`;
        setTimeout(() => {
          statusEl.textContent = `✓ Extracted problem from "${file.name}" → Loaded Inclined Plane Dynamics (m = 8.0 kg, θ = 30°, μₖ = 0.25)`;
          handleCustomProblemOrQuestion('Inclined plane block 8 kg at 30 deg with friction');
        }, 900);
      }
    });
  }
}

// ============================================================================
// 4. Interactive Practice Modes (#practise — Module 82199 in 18_3l3inpv8-ee18.js)
// ============================================================================
function renderStudyModeWorkspace() {
  const container = document.getElementById('study-mode-interactive-stage');
  if (!container) return;

  document.querySelectorAll('[data-study-mode]').forEach((pill) => {
    const mode = pill.getAttribute('data-study-mode');
    if (mode === state.activeStudyMode) {
      pill.classList.add('border-[#5b6bff]', 'bg-[#4353f3]/25', 'text-white');
      pill.classList.remove('border-white/10', 'bg-white/5', 'text-[#8a9bad]');
    } else {
      pill.classList.remove('border-[#5b6bff]', 'bg-[#4353f3]/25', 'text-white');
      pill.classList.add('border-white/10', 'bg-white/5', 'text-[#8a9bad]');
    }
  });

  if (state.activeStudyMode === 'flashcards' || state.activeStudyMode === 'repetition') {
    const card = FLASHCARDS_DATA[state.flashcardIndex % FLASHCARDS_DATA.length];
    container.innerHTML = `
      <div class="rounded-2xl border border-white/15 bg-black/50 p-5 text-left">
        <div class="flex items-center justify-between text-xs font-mono text-[#8b98ff] mb-2">
          <span>${card.topic}</span>
          <span>Card ${(state.flashcardIndex % FLASHCARDS_DATA.length) + 1} / ${FLASHCARDS_DATA.length}</span>
        </div>
        <div id="flashcard-box" class="cursor-pointer rounded-xl bg-[#161824] border border-white/10 p-5 min-h-[130px] flex flex-col justify-center transition-all hover:border-[#5b6bff]">
          <p class="text-sm lg:text-base font-semibold text-white mb-2">${state.flashcardFlipped ? card.back : card.front}</p>
          ${state.flashcardFlipped ? `<div data-latex="${card.formula}" data-display="false" class="text-xs text-[#8b98ff] mt-2"></div>` : `<span class="text-xs font-mono text-[#8a9bad]">👆 Click card to flip answer & formula</span>`}
        </div>
        <div class="flex items-center justify-between gap-2 mt-3">
          <button type="button" id="btn-fc-flip" class="px-3.5 py-2 rounded-xl bg-white/10 text-xs font-semibold text-white hover:bg-white/15 cursor-pointer">Flip Card</button>
          <div class="flex gap-2">
            <button type="button" id="btn-fc-hard" class="px-3.5 py-2 rounded-xl bg-amber-500/20 border border-amber-400/40 text-xs font-semibold text-amber-300 cursor-pointer">Repeat Soon</button>
            <button type="button" id="btn-fc-easy" class="home-ramp-fill px-4 py-2 rounded-xl text-xs font-semibold text-white cursor-pointer">Got It (+15 XP)</button>
          </div>
        </div>
      </div>
    `;
    renderLatexInElement(container);
    container.querySelector('#flashcard-box')?.addEventListener('click', () => {
      state.flashcardFlipped = !state.flashcardFlipped;
      renderStudyModeWorkspace();
    });
    container.querySelector('#btn-fc-flip')?.addEventListener('click', () => {
      state.flashcardFlipped = !state.flashcardFlipped;
      renderStudyModeWorkspace();
    });
    container.querySelector('#btn-fc-hard')?.addEventListener('click', () => {
      state.flashcardIndex++;
      state.flashcardFlipped = false;
      renderStudyModeWorkspace();
    });
    container.querySelector('#btn-fc-easy')?.addEventListener('click', () => {
      state.xp += 15;
      state.flashcardIndex++;
      state.flashcardFlipped = false;
      saveProgress();
      renderStudyModeWorkspace();
    });
  } else if (state.activeStudyMode === 'trueFalse' || state.activeStudyMode === 'quiz') {
    const item = TRUE_FALSE_DATA[state.tfIndex % TRUE_FALSE_DATA.length];
    container.innerHTML = `
      <div class="rounded-2xl border border-white/15 bg-black/50 p-5 text-left">
        <div class="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
          <span>CONCEPT CHECK · TRUE OR FALSE</span>
          <span>Question ${(state.tfIndex % TRUE_FALSE_DATA.length) + 1} / ${TRUE_FALSE_DATA.length}</span>
        </div>
        <p class="text-sm lg:text-base font-medium text-white mb-4">${item.statement}</p>
        <div class="flex gap-3">
          <button type="button" id="btn-tf-true" class="flex-1 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold text-white cursor-pointer">True</button>
          <button type="button" id="btn-tf-false" class="flex-1 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold text-white cursor-pointer">False</button>
          <button type="button" id="btn-tf-next" class="px-4 py-2.5 rounded-xl home-ramp-fill text-xs sm:text-sm font-semibold text-white cursor-pointer">Next →</button>
        </div>
        ${
          state.tfAnswered !== null
            ? `<div class="mt-3 p-3 rounded-xl border ${state.tfAnswered === item.answer ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300' : 'border-rose-500/40 bg-rose-950/20 text-rose-300'} text-xs leading-relaxed">
                ${item.explanation}
              </div>`
            : ''
        }
      </div>
    `;
    container.querySelector('#btn-tf-true')?.addEventListener('click', () => {
      state.tfAnswered = true;
      if (item.answer === true) { state.xp += 20; saveProgress(); }
      renderStudyModeWorkspace();
    });
    container.querySelector('#btn-tf-false')?.addEventListener('click', () => {
      state.tfAnswered = false;
      if (item.answer === false) { state.xp += 20; saveProgress(); }
      renderStudyModeWorkspace();
    });
    container.querySelector('#btn-tf-next')?.addEventListener('click', () => {
      state.tfIndex++;
      state.tfAnswered = null;
      renderStudyModeWorkspace();
    });
  } else {
    // AI Tutor Chat / Knowledge Gaps / Smart Text
    const lastMsgs = state.chatHistory.slice(-3);
    container.innerHTML = `
      <div class="rounded-2xl border border-white/15 bg-black/50 p-4 text-left flex flex-col gap-3">
        <div class="max-h-[155px] overflow-y-auto space-y-2 pr-1">
          ${lastMsgs.map((m) => `
            <div class="rounded-xl px-3.5 py-2.5 text-xs lg:text-sm ${
              m.role === 'tutor'
                ? 'bg-[#191b28] border border-[#5b6bff]/30 text-white'
                : 'bg-[#4353f3] text-white ml-auto max-w-[85%]'
            }">
              <span class="font-mono text-[10px] uppercase tracking-wider block opacity-65 mb-0.5">${m.role === 'tutor' ? 'Astra Physics AI' : 'You'}</span>
              ${m.text}
            </div>
          `).join('')}
        </div>
        <div class="flex gap-2">
          <input type="text" id="mini-tutor-chat-input"
            placeholder="Ask a physics follow-up (e.g., 'Why does period T not depend on mass in orbit?')..."
            class="flex-1 rounded-xl bg-black/60 border border-white/15 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-[#8a9bad]/60 focus:outline-none focus:border-[#5b6bff]" />
          <button type="button" id="btn-mini-tutor-send" class="home-ramp-fill px-4 py-2 rounded-xl text-xs font-semibold text-white cursor-pointer">Ask</button>
        </div>
      </div>
    `;
    const sendChat = () => {
      const inp = container.querySelector('#mini-tutor-chat-input');
      const q = (inp?.value || '').trim();
      if (!q) return;
      state.chatHistory.push({ role: 'user', text: q });
      let reply = 'Great question! Start by drawing the free-body diagram and identifying which quantities are conserved. In gravitational orbits, $GMm/r^2 = mv^2/r$, so the satellite mass $m$ cancels from both sides!';
      if (q.toLowerCase().includes('friction')) {
        reply = 'Static friction $f_s \\le \\mu_s F_N$ adjusts up to its threshold to prevent slipping, whereas kinetic friction $f_k = \\mu_k F_N$ acts at a constant ratio once sliding begins.';
      } else if (q.toLowerCase().includes('energy') || q.toLowerCase().includes('work')) {
        reply = 'By the Work-Energy Theorem, net work done by all forces equals the change in kinetic energy: $W_{\\text{net}} = \\Delta K = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$.';
      }
      state.chatHistory.push({ role: 'tutor', text: reply });
      state.xp += 10;
      saveProgress();
      renderStudyModeWorkspace();
    };
    container.querySelector('#btn-mini-tutor-send')?.addEventListener('click', sendChat);
    container.querySelector('#mini-tutor-chat-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendChat();
    });
  }
}

// ============================================================================
// 5. Streak Tracker & FAQ Accordion
// ============================================================================
function renderStreakDays() {
  const container = document.getElementById('streak-days-row');
  if (!container) return;
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  container.innerHTML = labels.map((day, idx) => {
    const active = state.streakDays[idx];
    return `
      <button type="button" data-streak-day="${idx}"
        class="flex flex-col items-center gap-1.5 p-2 rounded-xl border transition cursor-pointer ${
          active
            ? 'border-amber-400/50 bg-amber-500/15 text-white'
            : 'border-white/10 bg-white/5 text-[#8a9bad] hover:border-white/25'
        }">
        <span class="font-mono text-[11px]">${day}</span>
        <span class="size-7 rounded-full flex items-center justify-center text-xs font-bold ${
          active ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(251,191,36,0.6)]' : 'bg-white/10 text-white/40'
        }">${active ? '🔥' : '·'}</span>
      </button>
    `;
  }).join('');

  const countEl = document.getElementById('streak-count-title');
  if (countEl) {
    countEl.textContent = `${state.streakDays.filter(Boolean).length}-day streak`;
  }

  container.querySelectorAll('[data-streak-day]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-streak-day'), 10);
      state.streakDays[idx] = !state.streakDays[idx];
      saveProgress();
      renderStreakDays();
    });
  });
}

function renderFaqSection() {
  const listEl = document.getElementById('faq-accordion-list');
  if (!listEl) return;
  const items = FAQ_DATA[state.faqTab] || FAQ_DATA.students;

  document.querySelectorAll('[data-faq-tab]').forEach((tabBtn) => {
    const t = tabBtn.getAttribute('data-faq-tab');
    if (t === state.faqTab) {
      tabBtn.classList.add('home-ramp-fill', 'text-white');
      tabBtn.classList.remove('text-[#8a9bad]');
    } else {
      tabBtn.classList.remove('home-ramp-fill', 'text-white');
      tabBtn.classList.add('text-[#8a9bad]');
    }
  });

  listEl.innerHTML = items.map((item, idx) => `
    <div class="home-card-shell rounded-2xl overflow-hidden">
      <button type="button" data-faq-toggle="${idx}" aria-expanded="${idx === 0 ? 'true' : 'false'}"
        class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-base lg:text-lg text-white hover:text-[#c9cfff] transition cursor-pointer">
        <span>${item.q}</span>
        <span class="faq-chevron text-[#8b98ff] transition-transform duration-300 ${idx === 0 ? 'rotate-180' : ''}">▼</span>
      </button>
      <div id="faq-body-${idx}" class="${idx === 0 ? 'block' : 'hidden'} px-6 pb-5 text-sm lg:text-base text-[#8a9bad] leading-relaxed border-t border-white/5 pt-3">
        ${item.a}
      </div>
    </div>
  `).join('');

  listEl.querySelectorAll('[data-faq-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-faq-toggle');
      const body = document.getElementById(`faq-body-${idx}`);
      const chev = btn.querySelector('.faq-chevron');
      const isOpen = body && !body.classList.contains('hidden');
      if (body) body.classList.toggle('hidden', isOpen);
      if (chev) chev.classList.toggle('rotate-180', !isOpen);
    });
  });
}

// ============================================================================
// Bootstrapping
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  saveProgress();
  initFlipCards();
  renderProblemSelector();
  renderSolverWorkspace();
  renderSimControls();
  startPhysicsCanvasLoop();
  initMathKeyboardAndScanner();
  renderStudyModeWorkspace();
  renderStreakDays();
  renderFaqSection();

  // Play / Pause / Reset Simulation
  document.getElementById('btn-sim-play')?.addEventListener('click', (e) => {
    state.simRunning = !state.simRunning;
    e.currentTarget.textContent = state.simRunning ? '⏸ Pause' : '▶ Play';
  });
  document.getElementById('btn-sim-reset')?.addEventListener('click', () => {
    state.simTime = 0;
  });

  // Study mode pills
  document.querySelectorAll('[data-study-mode]').forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      state.activeStudyMode = pill.getAttribute('data-study-mode');
      renderStudyModeWorkspace();
    });
  });

  // FAQ tabs
  document.querySelectorAll('[data-faq-tab]').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      state.faqTab = tabBtn.getAttribute('data-faq-tab');
      renderFaqSection();
    });
  });

  // Exam prep collector cards (#intro-1)
  document.querySelectorAll('[data-exam-resource]').forEach((card) => {
    card.addEventListener('click', () => {
      const label = card.getAttribute('data-exam-resource');
      card.classList.toggle('border-[#5b6bff]');
      card.classList.toggle('bg-[#4353f3]/15');
      const status = document.getElementById('exam-collector-status');
      if (status) {
        status.textContent = `✓ Added "${label}" to your personalized Physics Exam Study Plan (+10 XP)`;
        state.xp += 10;
        saveProgress();
      }
    });
  });

  // Re-render KaTeX once loaded
  window.addEventListener('load', () => {
    renderLatexInElement(document.body);
    renderSolverWorkspace();
  });
});
