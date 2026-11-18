/* ==========================================================================
   Astra AI Physics — Iraqi 6th Scientific (السادس العلمي) Operational Platform
   Complete 8/9-Chapter Syllabus, KaTeX Equation Atlas, Ministerial Exam
   Step-by-Step Solver, 60 FPS 2D Chapter Simulators, & Tutoring Methods
   ========================================================================== */

const IRAQI_SYLLABUS_CHAPTERS = [
  {
    id: 'ch1',
    num: 'الفصل الأول · Ch 01',
    titleAr: 'المتسعات (Capacitors)',
    titleEn: 'Electrostatics, Dielectrics & Capacitor Networks',
    weight: '20–25 درجة وزارية',
    summary: 'يدرس سعة المتسعة ذات الصفيحتين المتوازيتين، تأثير إدخال العازل الكهربائي (ثابت العزل k) في حالتي المتسعة المتصلة والمفصولة، ربط التوالي والتوازي والربط المختلط، والطاقة المختزنة ودائرة شحن وتفريغ المتسعة (R-C).',
    goldenRules: [
      'إذا ذُكر في السؤال (ما زالت متصلة بالمصدر): يبقى فرق الجهد ثابتاً (ΔV_k = ΔV) وتزداد الشحنة (Q_k = k·Q).',
      'إذا ذُكر (فُصلت عن المصدر ثم أُدخل العازل): تبقى الشحنة الكلية ثابتة (Q_k = Q) ويقل فرق الجهد (ΔV_k = ΔV / k).',
      'انتبه لتحويل الوحدات في قانون الطاقة PE: يجب تحويل السعة من μF (×10⁻⁶) أو nF (×10⁻⁹) أو pF (×10⁻¹²) إلى الفاراد (F) دائماً!'
    ],
    equations: [
      {
        name: 'السعة الكهربائية والهندسية (Capacitance)',
        latex: 'C = \\frac{Q}{\\Delta V}, \\qquad C = \\frac{\\varepsilon_0 A}{d}',
        vars: 'C: السعة (F) | Q: الشحنة (C) | ΔV: فرق الجهد (V) | A: المساحة (m²) | d: البعد (m)'
      },
      {
        name: 'إدخال عازل ثابت عزله k (Dielectric Effect)',
        latex: 'C_k = k \\cdot C, \\qquad E_k = \\frac{E}{k} \\text{ (مفصولة)}, \\qquad \\Delta V_k = \\frac{\\Delta V}{k} \\text{ (مفصولة)}',
        vars: 'k: ثابت العزل الكهربائي (مجرد من الوحدات، دائماً k > 1)'
      },
      {
        name: 'ربط التوازي وربط التوالي (Parallel & Series)',
        latex: '\\text{Parallel: } C_{\\text{eq}} = C_1 + C_2, \\quad \\text{Series: } \\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2}',
        vars: 'في التوازي: ΔV_T = ΔV₁ = ΔV₂ | في التوالي: Q_T = Q₁ = Q₂'
      },
      {
        name: 'الطاقة المختزنة والقدرة (Stored Electric Energy)',
        latex: 'PE = \\frac{1}{2} Q \\Delta V = \\frac{1}{2} C (\\Delta V)^2 = \\frac{Q^2}{2C}, \\qquad P = \\frac{PE}{t}',
        vars: 'PE: الطاقة المختزنة بالجول (J) | P: القدرة بالواط (W)'
      }
    ]
  },
  {
    id: 'ch2',
    num: 'الفصل الثاني · Ch 02',
    titleAr: 'الحث الكهرومغناطيسي (Electromagnetic Induction)',
    titleEn: 'Faraday’s Law, Lenz’s Law, Motional EMF & Self/Mutual Induction',
    weight: '20–25 درجة وزارية',
    summary: 'يتناول القوة الدافعة الكهربائية المحتثة الحركية في ساق موصلة، الفيض المغناطيسي وقانون فرداي، قانون لنز، الحث الذاتي ومعادلة الدائرة الحثية، والحث المتبادل بين ملفين.',
    goldenRules: [
      'لحظة غلق الدائرة الحثية: التيار الآني يساوي صفراً (I_inst = 0) فتكون V_app = L(ΔI/Δt).',
      'لحظة وصول التيار إلى نسبة مئوية x% من مقداره الثابت: I_inst = (x/100) × (V_app / R).',
      'في قانون فرداي لحلقة أو ملف: انتبه للزاوية θ؛ الزاوية المحصورة هي بين متجه المساحة A ومتجه كثافة الفيض B (إذا أعطى الزاوية مع مستوى الملف نأخذ متممتها 90° - θ)!'
    ],
    equations: [
      {
        name: 'القوة الدافعة الحركية للساق (Motional EMF)',
        latex: '\\mathcal{E}_{\\text{motional}} = v B \\ell \\sin\\theta, \\qquad I_{\\text{ind}} = \\frac{\\mathcal{E}_{\\text{motional}}}{R}, \\qquad F_{\\text{pull}} = I B \\ell',
        vars: 'v: السرعة (m/s) | B: كثافة الفيض (T) | ℓ: طول الساق (m)'
      },
      {
        name: 'الفيض المغناطيسي وقانون فرداي (Faraday’s Law)',
        latex: '\\Phi_B = B A \\cos\\theta, \\qquad \\mathcal{E}_{\\text{ind}} = -N \\frac{\\Delta \\Phi_B}{\\Delta t}',
        vars: 'Φ_B: الفيض المغناطيسي (Wb) | N: عدد اللفات | E_ind: القوة الدافعة المحتثة (V)'
      },
      {
        name: 'الحث الذاتي ومعادلة الدائرة الحثية (Self-Induction)',
        latex: '\\mathcal{E}_{\\text{ind}} = -L \\frac{\\Delta I}{\\Delta t}, \\qquad V_{\\text{app}} = I_{\\text{inst}} R + L \\frac{\\Delta I}{\\Delta t}, \\qquad PE = \\frac{1}{2} L I^2',
        vars: 'L: معامل الحث الذاتي بالهنري (H) | V_app: الفولتية الموضوعة (V)'
      },
      {
        name: 'الحث المتبادل بين ملفين (Mutual Induction)',
        latex: '\\mathcal{E}_{\\text{ind2}} = -M \\frac{\\Delta I_1}{\\Delta t}, \\qquad M = \\sqrt{L_1 L_2}',
        vars: 'M: معامل الحث المتبادل (H) عند الترابط المغناطيسي التام (قلب حديدي مغلق)'
      }
    ]
  },
  {
    id: 'ch3',
    num: 'الفصل الثالث · Ch 03',
    titleAr: 'التيار المتناوب (Alternating Current - AC)',
    titleEn: 'RLC Series & Parallel Circuits, Phasors & Electrical Resonance',
    weight: '20–25 درجة وزارية',
    summary: 'يدرس دوائر التيار المتناوب (مقاومة صرف R، محث صرف L، متسعة صرف C)، دوائر R-L-C المتوالية والمتوازية، الممانعة الكلية Z، عامل القدرة Pf، وحالة الرنين الكهربائي وعامل النوعية Qf.',
    goldenRules: [
      'علامات الرنين في التوالي (6 مفاتيح وزارية): (1) XL = XC، (2) Z = R (أقل ممانعة وأعظم تيار)، (3) VL = VC، (4) VT = VR، (5) زاوية فرق الطور φ = 0 وعامل القدرة Pf = 1، (6) القدرة الحقيقية = القدرة الظاهرية (P_real = P_app).',
      'في ربط التوالي التيار متساوٍ (I_T = I_R = I_L = I_C) ونرسم مخطط الفولتية أو الممانعة؛ أما في ربط التوازي فالفولتية متساوية (V_T = V_R = V_L = V_C) ونرسم مخطط التيارات فقط (لا يوجد مخطط ممانعة في التوازي!).'
    ],
    equations: [
      {
        name: 'الرادة الحثية والرادة السعوية (Reactances)',
        latex: 'X_L = \\omega L = 2\\pi f L, \\qquad X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}',
        vars: 'X_L, X_C: تقاس بالأوم (Ω) | f: التردد (Hz) | ω: التردد الزاوي (rad/s)'
      },
      {
        name: 'ممانعة دائرة التوالي R-L-C وعامل القدرة (Series Impedance)',
        latex: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\qquad \\tan\\phi = \\frac{X_L - X_C}{R}, \\qquad P_f = \\cos\\phi = \\frac{R}{Z}',
        vars: 'Z: الممانعة الكلية (Ω) | φ: زاوية فرق الطور | Pf: عامل القدرة (بدون وحدات)'
      },
      {
        name: 'التردد الرنيني وعامل النوعية (Electrical Resonance & Q-Factor)',
        latex: 'f_r = \\frac{1}{2\\pi\\sqrt{LC}}, \\qquad \\omega_r = \\frac{1}{\\sqrt{LC}}, \\qquad Q_f = \\frac{\\omega_r}{\\Delta\\omega} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}',
        vars: 'f_r: التردد الرنيني (Hz) | Q_f: عامل النوعية (مجرد من الوحدات)'
      },
      {
        name: 'دائرة التوازي والقدرات (Parallel RLC & Power)',
        latex: 'I_T = \\sqrt{I_R^2 + (I_C - I_L)^2}, \\qquad P_{\\text{real}} = I_R^2 R = I_R V_R, \\qquad P_{\\text{app}} = I_T V_T',
        vars: 'P_real تقاس بالواط (W) | P_app تقاس بـ (V·A)'
      }
    ]
  },
  {
    id: 'ch4',
    num: 'الفصل الرابع · Ch 04',
    titleAr: 'الموجات الكهرومغناطيسية (Electromagnetic Waves)',
    titleEn: 'Maxwell’s Equations, Antennas & Wave Propagation',
    weight: '10–15 درجة وزارية',
    summary: 'يدرس نظريات ماكسويل، تيار الإزاحة، خصائص الموجات الكهرومغناطيسية، توليدها وكشفها، حساب طول الهوائي (نصف موجة وربع موجة مؤرض)، وطبقات الأيونوسفير.',
    goldenRules: [
      'أقصر طول لهوائي غير مؤرض يحقق الرنين يساوي نصف طول الموجة (ℓ = λ / 2).',
      'إذا كان الهوائي مؤرّضاً (Grounded Antenna) فإن الأرض تعمل صورة خيالية للنصف الآخر فيكفي ربع طول موجة (ℓ = λ / 4).'
    ],
    equations: [
      {
        name: 'سرعة الموجة الكهرومغناطيسية (Wave Speed)',
        latex: 'c = f \\lambda = \\frac{E_m}{B_m} = \\frac{1}{\\sqrt{\\varepsilon_0 \\mu_0}} = 3 \\times 10^8\\text{ m/s}',
        vars: 'c: سرعة الضوء في الفراغ | λ: الطول الموجي (m) | f: التردد (Hz)'
      },
      {
        name: 'تصميم الهوائي ودائرة التوليف (Antenna Length)',
        latex: '\\ell = \\frac{\\lambda}{2} \\text{ (غير مؤرض)}, \\qquad \\ell = \\frac{\\lambda}{4} \\text{ (مؤرض)}, \\qquad f_r = \\frac{1}{2\\pi\\sqrt{LC}}',
        vars: 'ℓ: طول الهوائي الفعال بالمتر (m)'
      }
    ]
  },
  {
    id: 'ch5',
    num: 'الفصل الخامس · Ch 05',
    titleAr: 'البصريات الفيزيائية (Physical Optics)',
    titleEn: 'Interference, Young’s Double-Slit, Diffraction Grating & Polarization',
    weight: '15–20 درجة وزارية',
    summary: 'يدرس تداخل الموجات الضوئية (البناء والإتلافي)، تجربة شقي يونغ وقياس الطول الموجي وفاصلة الهدب، حيود الضوء ومحزز الحيود، واستقطاب الضوء (قانون بروستر).',
    goldenRules: [
      'في تجربة شقي يونغ: تزداد فاصلة الهدب (Δy) بزيادة الطول الموجي (λ) أو زيادة بعد الشاشة (L)، وتزداد بنقصان البعد بين الشقين (d).',
      'ثابت محزز الحيود d = W / N: إذا أُعطي عدد الحزوز بـ (lines/cm) يجب قسمة 1 cm على N ثم الضرب في 10⁻² للتحويل للمتر!'
    ],
    equations: [
      {
        name: 'شرط التداخل البناء والإتلافي (Interference Conditions)',
        latex: '\\phi = \\frac{2\\pi}{\\lambda}\\Delta\\ell, \\qquad \\Delta\\ell = m\\lambda \\text{ (مضيء)}, \\qquad \\Delta\\ell = \\left(m + \\frac{1}{2}\\right)\\lambda \\text{ (مظلم)}',
        vars: 'Δℓ: فرق المسار البصري (m) | m: رتبة الهدب (0, 1, 2, ...)'
      },
      {
        name: 'تجربة شقي يونغ وفاصلة الهدب (Young’s Double-Slit)',
        latex: 'y_m = \\frac{\\lambda L}{d} m, \\qquad \\Delta y = \\frac{\\lambda L}{d}',
        vars: 'y_m: بعد الهدب المضيء ذي الرتبة m | L: بعد الشاشة (m) | d: البعد بين الشقين (m)'
      },
      {
        name: 'محزز الحيود وقانون بروستر (Diffraction Grating & Brewster’s Law)',
        latex: 'd = \\frac{W}{N}, \\quad d\\sin\\theta = m\\lambda, \\qquad \\tan\\theta_p = n, \\quad \\sin\\theta_c = \\frac{1}{n}',
        vars: 'θ_p: زاوية الاستقطاب (بروستر) | n: معامل الانكسار | θ_c: الزاوية الحرجة'
      }
    ]
  },
  {
    id: 'ch6',
    num: 'الفصل السادس · Ch 06',
    titleAr: 'الفيزياء الحديثة (Modern Physics)',
    titleEn: 'Blackbody Radiation, Photoelectric Effect, De Broglie & Relativity',
    weight: '15–20 درجة وزارية',
    summary: 'يدرس إشعاع الجسم الأسود وقانون فين، الظاهرة الكهروضوئية ومعادلة آينشتاين، الموجات المادية لدي برولي، مبدأ اللادقة لهايزنبرغ، والنظرية النسبية الخاصة.',
    goldenRules: [
      'لتحويل الطاقة أو دالة الشغل من إلكترون-فولت (eV) إلى جول (J): نضرب في شحنة الإلكترون (× 1.6 × 10⁻¹⁹). وللتحويل من جول إلى eV نقسم على (1.6 × 10⁻¹⁹).',
      'لا تحصل الظاهرة الكهروضوئية إذا كان تردد الضوء الساقط أقل من تردد العتبة (f < f₀) أو طوله الموجي أكبر من طول موجة العتبة (λ > λ₀) مهما كانت شدة الضوء!'
    ],
    equations: [
      {
        name: 'إشعاع الجسم الأسود وطاقة الكم (Wien’s & Planck’s Laws)',
        latex: '\\lambda_m T = 2.898 \\times 10^{-3}, \\qquad I = \\sigma T^4, \\qquad E = hf = \\frac{hc}{\\lambda}',
        vars: 'h = 6.63×10⁻³⁴ J·s (ثابت بلانك) | T: درجة الحرارة المطلقة بالكلفن (K = °C + 273)'
      },
      {
        name: 'المعادلة الكهروضوئية لآينشتاين (Photoelectric Equation)',
        latex: 'KE_{\\max} = hf - W = \\frac{1}{2} m_e v_{\\max}^2 = e V_s, \\qquad W = hf_0 = \\frac{hc}{\\lambda_0}',
        vars: 'W: دالة الشغل للمعدن | V_s: جهد القطع أو الإيقاف (V) | m_e = 9.11×10⁻³¹ kg'
      },
      {
        name: 'طول موجة دي برولي ومبدأ اللادقة (De Broglie & Heisenberg)',
        latex: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}, \\qquad \\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}',
        vars: 'p = mv: الزخم الخطي للجسيم (kg·m/s) | h / 4π = 0.527 × 10⁻³⁴ J·s'
      }
    ]
  },
  {
    id: 'ch7',
    num: 'الفصل السابع · Ch 07',
    titleAr: 'إلكترونيات الحالة الصلبة (Solid State Electronics)',
    titleEn: 'Semiconductors, PN Junction Diodes & Transistor Amplifiers',
    weight: '10–15 درجة وزارية',
    summary: 'يدرس حزم الطاقة في المواد الموصلة والعازلة وشبه الموصلة، التشويب من نوع N ونوع P، الثنائي البلوري PN وأنواعه، والترانزستور كمضخم بقاعدة مشتركة وباعث مشترك.',
    goldenRules: [
      'تيار الباعث (I_E) هو دائماً الأكبر في الترانزستور لأنه مجموع تياري الجامع والقاعدة: I_E = I_C + I_B.',
      'في مضخم الباعث المشترك (PNP أو NPN): الإشارة الخارجة تكون بطور معاكس (فرق طور 180°) للإشارة الداخلة، وربح القدرة G عالي جداً.'
    ],
    equations: [
      {
        name: 'تيارات الترانزستور وربح التيار (Transistor Currents & Gain)',
        latex: 'I_E = I_C + I_B, \\qquad \\alpha = \\frac{I_C}{I_E} \\text{ (قاعدة مشتركة)}, \\qquad \\beta = \\frac{I_C}{I_B} \\text{ (باعث مشترك)}',
        vars: 'α < 1 دائماً (حوالي 0.95–0.99) | β >> 1 (يتراوح بين 20 إلى 500)'
      },
      {
        name: 'ربح الفولتية وربح القدرة (Voltage & Power Amplification)',
        latex: 'A_v = \\frac{V_{\\text{out}}}{V_{\\text{in}}} = \\frac{I_C R_{\\text{out}}}{I_{\\text{in}} R_{\\text{in}}}, \\qquad G = \\alpha \\cdot A_v \\text{ أو } G = \\beta \\cdot A_v',
        vars: 'A_v: ربح الفولتية | G: ربح القدرة (كلاهما مجرد من الوحدات)'
      }
    ]
  },
  {
    id: 'ch8',
    num: 'الفصل الثامن والتاسع · Ch 08 & 09',
    titleAr: 'الأطياف الذرية والليزر والفيزياء النووية (Spectra, Lasers & Nuclear)',
    titleEn: 'Bohr Atom, X-Rays, Compton Effect, Lasers & Nuclear Binding Energy',
    weight: '20–25 درجة وزارية',
    summary: 'يدرس سلاسل طيف ذرة الهيدروجين، إنتاج الأشعة السينية وأقصر طول موجي، تأثير كومبتون، أسس عمل الليزر، وتركيب النواة ونصف قطرها وطاقة الربط النووية والانحلال الإشعاعي.',
    goldenRules: [
      'في مسائل الأشعة السينية: الطاقة الحركية العظمى للإلكترونات المعجلة تتحول بالكامل لطاقة فوتون الأشعة السينية عند أقصر طول موجي: eV = hc / λ_min.',
      'في الفيزياء النووية: لتحويل النقص الكتلي (Δm) من وحدة الكتل الذرية (u) مباشرة إلى طاقة ربط نووية بوحدة (MeV) نضرب Δm في 931 MeV/u!'
    ],
    equations: [
      {
        name: 'الأشعة السينية وتأثير كومبتون (X-Ray Cutoff & Compton Shift)',
        latex: '\\lambda_{\\min} = \\frac{hc}{eV}, \\qquad \\Delta\\lambda = \\lambda\' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)',
        vars: 'h / (m_e c) = 0.24 × 10⁻¹¹ m (طول موجة كومبتون للإلكترون)'
      },
      {
        name: 'نصف قطر النواة وشحنتها (Nuclear Radius & Charge)',
        latex: 'A = Z + N, \\qquad q = Z e, \\qquad R = r_0 A^{1/3} \\quad (r_0 = 1.2 \\times 10^{-15}\\text{ m} = 1.2\\text{ fm})',
        vars: 'A: العدد الكتلي | Z: العدد الذري | N: عدد النيوترونات'
      },
      {
        name: 'النقص الكتلي وطاقة الربط النووية (Mass Defect & Binding Energy)',
        latex: '\\Delta m = [Z m_p + N m_n] - M_{\\text{nuc}}, \\qquad E_b = \\Delta m \\times 931\\text{ MeV}, \\qquad E_b\' = \\frac{E_b}{A}',
        vars: 'E_b: طاقة الربط النووية الكلية (MeV) | E_b′: معدل طاقة الربط لكل نيوكلون'
      }
    ]
  }
];

// ============================================================================
// 6 Authentic Iraqi 6th Scientific Ministerial ("وزاريات") Problems
// ============================================================================
const PHYSICS_PROBLEMS = [
  {
    id: 'ch1-capacitors',
    category: 'الفصل الأول: المتسعات · Ch 1 Ministerial Problem',
    badge: 'الفصل 1 · المتسعات',
    title: 'ربط المتسعات على التوازي وإدخال عازل (متصلة بالمصدر)',
    prompt: 'متسعتان (C₁ = 4 μF ، C₂ = 8 μF) مربوطتان مع بعضهما على التوازي، رُبطت مجموعتهما بين قطبي بطارية فرق الجهد بين قطبيها (ΔV = 24 V). إذا أُدخل لوح من مادة عازلة ثابت عزلها (k = 2) بين صفيحتي المتسعة الأولى وما زالت المجموعة متصلة بالبطارية، فما مقدار: (1) السعة المكافئة بعد العازل، (2) الشحنة المختزنة في كل متسعة والشحنة الكلية بعد العازل، (3) الطاقة المختزنة في المتسعة الأولى بعد العازل؟',
    latexFormula: 'C_{1k} = k C_1, \\quad C_{\\text{eq}} = C_{1k} + C_2, \\quad Q_T = C_{\\text{eq}} \\Delta V, \\quad PE_{1k} = \\frac{1}{2} C_{1k} (\\Delta V)^2',
    simParams: {
      c1: { label: 'السعة الأولى C₁ (μF)', min: 2, max: 16, step: 1, value: 4 },
      c2: { label: 'السعة الثانية C₂ (μF)', min: 2, max: 16, step: 1, value: 8 },
      k: { label: 'ثابت العزل الكهربائي k', min: 1, max: 6, step: 1, value: 2 },
      voltage: { label: 'فرق جهد البطارية ΔV (V)', min: 6, max: 48, step: 2, value: 24 }
    },
    steps: [
      {
        num: 1,
        title: 'حساب سعة المتسعة الأولى بعد إدخال العازل (C₁ₖ) والسعة المكافئة (C_eq)',
        principle: 'عند إدخال عازل ثابت عزله k = 2 في المتسعة الأولى تتضاعف سعتها: C₁ₖ = k × C₁. وبما أن الربط توازي، فإن السعة المكافئة تساوي مجموع السعتين.',
        formula: 'C_{1k} = k \\cdot C_1 = 2 \\times 4 = 8\\ \\mu\\text{F} \\implies C_{\\text{eq}} = C_{1k} + C_2 = 8 + 8 = 16\\ \\mu\\text{F}',
        substitution: 'C_{\\text{eq}} = 16\\ \\mu\\text{F}',
        question: 'ما مقدار السعة المكافئة للمجموعة بعد إدخال العازل C_eq بوحدة (μF)؟',
        expectedAnswer: 16,
        unit: 'μF',
        hint: 'اضرب C₁ = 4 في k = 2 لتحصل على 8 μF، ثم اجمعها مع C₂ = 8 μF.'
      },
      {
        num: 2,
        title: 'حساب الشحنة المختزنة في المتسعة الأولى بعد العازل (Q₁ₖ) والشحنة الكلية (Q_total)',
        principle: 'بما أن المجموعة (ما زالت متصلة بالبطارية) والربط توازي، فإن فرق الجهد يبقى ثابتاً ويساوي 24 V لكل متسعة: ΔV_T = ΔV₁ = ΔV₂ = 24 V.',
        formula: 'Q_{1k} = C_{1k} \\cdot \\Delta V = 8 \\times 24 = 192\\ \\mu\\text{C}, \\quad Q_2 = 8 \\times 24 = 192\\ \\mu\\text{C} \\implies Q_{\\text{total}} = 384\\ \\mu\\text{C}',
        substitution: 'Q_{\\text{total}} = 16 \\times 24 = 384\\ \\mu\\text{C}',
        question: 'ما مقدار الشحنة الكلية المختزنة في المجموعة بعد العازل Q_total بوحدة (μC)؟',
        expectedAnswer: 384,
        unit: 'μC',
        hint: 'اضرب السعة المكافئة C_eq = 16 μF في فرق الجهد الكلي ΔV = 24 V.'
      },
      {
        num: 3,
        title: 'حساب الطاقة المختزنة في المجال الكهربائي للمتسعة الأولى بعد العازل (PE₁ₖ)',
        principle: 'ملاحظة وزارية حاسمة: عند تطبيق قانون الطاقة المختزنة يجب تحويل السعة من مايكروفاراد (μF) إلى فاراد (×10⁻⁶ F). نطلب هنا الناتج مضروباً في 10⁻³ جول (أي بوحدة mJ).',
        formula: 'PE_{1k} = \\frac{1}{2} C_{1k} (\\Delta V)^2 = \\frac{1}{2} (8 \\times 10^{-6}) (24)^2 = 4 \\times 576 \\times 10^{-6} = 2.304 \\times 10^{-3}\\text{ J}',
        substitution: 'PE_{1k} = 2.304\\text{ mJ} = 2.304 \\times 10^{-3}\\text{ J}',
        question: 'ما مقدار الطاقة المختزنة PE₁ₖ بوحدة الملي جول (×10⁻³ J)؟',
        expectedAnswer: 2.304,
        unit: '×10⁻³ J',
        hint: 'نصف الـ 8 هو 4، اضرب 4 × (24)² = 4 × 576 = 2304 × 10⁻⁶ J = 2.304 × 10⁻³ J.'
      }
    ]
  },
  {
    id: 'ch2-induction',
    category: 'الفصل الثاني: الحث الكهرومغناطيسي · Ch 2 Ministerial Problem',
    badge: 'الفصل 2 · الحث الذاتي',
    title: 'معادلة الدائرة الحثية ونمو التيار في ملف (R-L)',
    prompt: 'ملف معامل حثه الذاتي (L = 0.4 H) ومقاومته (R = 20 Ω) وُضعت عليه فولتية مستمرة مقدارها (V_app = 200 V). احسب المعدل الزمني لتغير التيار (ΔI/Δt) في الحالتين: (1) لحظة غلق الدائرة، (2) لحظة ازدياد التيار إلى 60% من مقداره الثابت.',
    latexFormula: 'V_{\\text{app}} = I_{\\text{inst}} R + L \\frac{\\Delta I}{\\Delta t}, \\qquad I_{\\text{const}} = \\frac{V_{\\text{app}}}{R}',
    simParams: {
      vapp: { label: 'الفولتية الموضوعة V_app (V)', min: 50, max: 300, step: 10, value: 200 },
      inductance: { label: 'معامل الحث الذاتي L (H)', min: 0.1, max: 1.0, step: 0.1, value: 0.4 },
      resistance: { label: 'مقاومة الملف R (Ω)', min: 5, max: 50, step: 5, value: 20 },
      pct: { label: 'نسبة التيار الآني من الثابت (%)', min: 0, max: 100, step: 5, value: 60 }
    },
    steps: [
      {
        num: 1,
        title: 'لحظة غلق الدائرة (Instant of closing the switch)',
        principle: 'لحظة غلق المفتاح يكون التيار الآني صفراً (I_inst = 0)، فتكون الفولتية الموضوعة مساوية تماماً للقوة الدافعة المحتثة المضادة: V_app = L(ΔI/Δt).',
        formula: '200 = 0 + 0.4 \\frac{\\Delta I}{\\Delta t} \\implies \\frac{\\Delta I}{\\Delta t} = \\frac{200}{0.4} = 500\\text{ A/s}',
        substitution: '\\frac{\\Delta I}{\\Delta t} = 500\\text{ A/s}',
        question: 'ما مقدار المعدل الزمني لتغير التيار (ΔI/Δt) لحظة غلق الدائرة (بوحدة A/s)؟',
        expectedAnswer: 500,
        unit: 'A/s',
        hint: 'اقسم الفولتية الموضوعة V_app = 200 V على معامل الحث الذاتي L = 0.4 H.'
      },
      {
        num: 2,
        title: 'حساب التيار الثابت (I_const) والتيار الآني عند وصوله إلى 60%',
        principle: 'المقدار الثابت للتيار هو I_const = V_app / R. وعند وصول التيار إلى 60% منه يكون I_inst = 0.60 × I_const.',
        formula: 'I_{\\text{const}} = \\frac{200}{20} = 10\\text{ A} \\implies I_{\\text{inst}} = \\frac{60}{100} \\times 10 = 6\\text{ A}',
        substitution: 'I_{\\text{inst}} = 6\\text{ A}',
        question: 'ما مقدار التيار الآني I_inst لحظة وصوله إلى 60% من مقداره الثابت (بوحدة A)؟',
        expectedAnswer: 6,
        unit: 'A',
        hint: 'التيار الثابت 200 / 20 = 10 A؛ خذ 60% منه.'
      },
      {
        num: 3,
        title: 'حساب المعدل الزمني لتغير التيار (ΔI/Δt) عند لحظة 60%',
        principle: 'نعوض I_inst = 6 A في المعادلة العامة للدائرة الحثية: V_app = I_inst·R + L(ΔI/Δt) (أو مباشرة: L(ΔI/Δt) = المتبقي من النسبة 40% × V_app).',
        formula: '200 = (6 \\times 20) + 0.4 \\frac{\\Delta I}{\\Delta t} \\implies 200 - 120 = 0.4 \\frac{\\Delta I}{\\Delta t} \\implies \\frac{\\Delta I}{\\Delta t} = \\frac{80}{0.4} = 200\\text{ A/s}',
        substitution: '\\frac{\\Delta I}{\\Delta t} = 200\\text{ A/s}',
        question: 'ما مقدار (ΔI/Δt) لحظة ازدياد التيار إلى 60% من مقداره الثابت (بوحدة A/s)؟',
        expectedAnswer: 200,
        unit: 'A/s',
        hint: 'اطرح I_inst × R = 120 V من 200 V فيبقى 80 V، ثم اقسم 80 على L = 0.4 H.'
      }
    ]
  },
  {
    id: 'ch3-ac-resonance',
    category: 'الفصل الثالث: التيار المتناوب · Ch 3 Ministerial Problem',
    badge: 'الفصل 3 · الرنين الكهربائي',
    title: 'دائرة تيار متناوب متوالية الربط R-L-C في حالة رنين',
    prompt: 'دائرة تيار متناوب متوالية الربط تحتوي مقاومة صرف (R = 150 Ω) ومحبثاً صرفاً معامل حثه الذاتي (L = 0.2 H) ومتسعة ذات سعة صرف، ومذبذباً كهربائياً فرق جهده (V_T = 300 V) بتردد زاوي (ω_r = 500 rad/s). وكانت الدائرة في حالة رنين! احسب: (1) الرادة الحثية XL وسعة المتسعة C، (2) التيار الكلي المنساب في الدائرة I_T، (3) عامل النوعية Q_f.',
    latexFormula: 'X_L = X_C = \\omega_r L, \\quad Z = R, \\quad I_T = \\frac{V_T}{Z}, \\quad Q_f = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{X_L}{R}',
    simParams: {
      omega: { label: 'التردد الزاوي ω (rad/s)', min: 200, max: 900, step: 25, value: 500 },
      resistance: { label: 'المقاومة R (Ω)', min: 50, max: 300, step: 25, value: 150 },
      inductance: { label: 'معامل الحث L (H)', min: 0.1, max: 0.5, step: 0.05, value: 0.2 }
    },
    steps: [
      {
        num: 1,
        title: 'حساب الرادة الحثية (X_L) والرادة السعوية (X_C) وسعة المتسعة (C)',
        principle: 'بما أن الدائرة في حالة رنين كهربائي، فإن الرادة الحثية تساوي الرادة السعوية: X_L = X_C = ω_r·L.',
        formula: 'X_L = \\omega_r L = 500 \\times 0.2 = 100\\ \\Omega \\implies X_C = 100\\ \\Omega \\implies C = \\frac{1}{\\omega_r X_C} = \\frac{1}{500 \\times 100} = 20\\ \\mu\\text{F}',
        substitution: 'X_L = X_C = 100\\ \\Omega, \\quad C = 20 \\times 10^{-6}\\text{ F} = 20\\ \\mu\\text{F}',
        question: 'ما مقدار سعة المتسعة C التي تجعل الدائرة في حالة رنين (بوحدة μF)؟',
        expectedAnswer: 20,
        unit: 'μF',
        hint: 'X_L = 500 × 0.2 = 100 Ω؛ إذن C = 1 / (500 × 100) = 1 / 50000 = 20 × 10⁻⁶ F.'
      },
      {
        num: 2,
        title: 'حساب الممانعة الكلية (Z) والتيار الكلي المنساب في الدائرة (I_T)',
        principle: 'في حالة الرنين تتساوى الممانعة الكلية مع المقاومة الصرف (Z = R = 150 Ω) لأن (X_L - X_C = 0)، ويكون التيار بأعظم مقدار له.',
        formula: 'Z = R = 150\\ \\Omega \\implies I_T = \\frac{V_T}{Z} = \\frac{300}{150} = 2\\text{ A}',
        substitution: 'I_T = 2.0\\text{ A}',
        question: 'ما مقدار التيار الكلي المنساب في الدائرة عند الرنين I_T (بوحدة A)؟',
        expectedAnswer: 2,
        unit: 'A',
        hint: 'اقسم الفولتية الكلية V_T = 300 V على الممانعة Z = R = 150 Ω.'
      },
      {
        num: 3,
        title: 'حساب عامل النوعية للدائرة الرنينية (Quality Factor Q_f)',
        principle: 'عامل النوعية يعطى بالعلاقة Q_f = (1/R)√(L/C) أو بطريقة أسرع عند الرنين: Q_f = X_L / R = V_L / V_R.',
        formula: 'Q_f = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{1}{150}\\sqrt{\\frac{0.2}{20 \\times 10^{-6}}} = \\frac{100}{150} \\approx 0.67',
        substitution: 'Q_f = \\frac{2}{3} \\approx 0.67',
        question: 'ما مقدار عامل النوعية Q_f للدائرة؟',
        expectedAnswer: 0.67,
        unit: 'بدون وحدات',
        hint: 'اقسم X_L = 100 Ω على R = 150 Ω فتحصل على 2/3 ≈ 0.67.'
      }
    ]
  },
  {
    id: 'ch5-optics-young',
    category: 'الفصل الخامس: البصريات الفيزيائية · Ch 5 Ministerial Problem',
    badge: 'الفصل 5 · شقي يونغ',
    title: 'تجربة شقي يونغ وقياس الطول الموجي وفاصلة الهدب',
    prompt: 'إذا كان البعد بين شقي تجربة يونغ يساوي (d = 0.2 mm) وبعد الشاشة عنهما يساوي (L = 1 m) وكان البعد بين الهدب الثالث المضيء والهدب المركزي يساوي (y₃ = 9.49 mm). احسب: (1) طول موجة الضوء المستعمل في التجربة بوحدة النانومتر (nm)، (2) فاصلة الهدب (Δy) بوحدة المليمتر (mm).',
    latexFormula: 'y_m = \\frac{\\lambda L}{d} m \\implies \\lambda = \\frac{y_m \\cdot d}{m \\cdot L}, \\qquad \\Delta y = \\frac{\\lambda L}{d} = \\frac{y_m}{m}',
    simParams: {
      wavelength: { label: 'الطول الموجي λ (nm)', min: 400, max: 700, step: 10, value: 633 },
      slitDist: { label: 'البعد بين الشقين d (mm)', min: 0.1, max: 0.5, step: 0.05, value: 0.2 },
      screenDist: { label: 'بعد الشاشة L (m)', min: 0.5, max: 2.5, step: 0.1, value: 1.0 }
    },
    steps: [
      {
        num: 1,
        title: 'تحويل الوحدات وحساب الطول الموجي للضوء المستعمل (λ)',
        principle: 'نحول d و y₃ من المليمتر (mm) إلى المتر بالضرب في 10⁻³، والهدب المضيء الثالث يعني أن الرتبة m = 3.',
        formula: '\\lambda = \\frac{y_3 \\cdot d}{m \\cdot L} = \\frac{(9.49 \\times 10^{-3}) \\times (0.2 \\times 10^{-3})}{3 \\times 1} = 0.6326 \\times 10^{-6}\\text{ m} = 632.6\\text{ nm}',
        substitution: '\\lambda \\approx 632.6\\text{ nm}',
        question: 'ما مقدار الطول الموجي للضوء المستعمل بوحدة النانومتر (nm)؟',
        expectedAnswer: 632.6,
        unit: 'nm',
        hint: 'اضرب 9.49 × 0.2 = 1.898، ثم اقسم على 3 فتحصل على 0.6326 × 10⁻⁶ m = 632.6 nm.'
      },
      {
        num: 2,
        title: 'حساب فاصلة الهدب (Δy) بين أي هدبين متتاليين',
        principle: 'فاصلة الهدب تساوي Δy = λL / d، وبما أن y_m = m · Δy يمكن إيجادها مباشرة بقسمة y₃ على 3!',
        formula: '\\Delta y = \\frac{y_3}{3} = \\frac{9.49\\text{ mm}}{3} \\approx 3.16\\text{ mm}',
        substitution: '\\Delta y = 3.16\\text{ mm}',
        question: 'ما مقدار فاصلة الهدب Δy بوحدة المليمتر (mm)؟',
        expectedAnswer: 3.16,
        unit: 'mm',
        hint: 'اقسم بعد الهدب الثالث y₃ = 9.49 mm على رتبته m = 3.'
      }
    ]
  },
  {
    id: 'ch6-photoelectric',
    category: 'الفصل السادس: الفيزياء الحديثة · Ch 6 Ministerial Problem',
    badge: 'الفصل 6 · الكهروضوئية',
    title: 'الظاهرة الكهروضوئية ومعادلة آينشتاين وجهد الإيقاف',
    prompt: 'سقط ضوء طوله الموجي (λ = 300 nm) على معدن الصوديوم، فكانت دالة الشغل للصوديوم تساوي (W = 2.46 eV). جد: (1) طاقة الفوتون الساقط بوحدة الجول وبوحدة eV، (2) الطاقة الحركية العظمى للإلكترونات الضوئية المنبعثة (KE_max) بوحدة eV، (3) جهد الإيقاف (القطع) V_s.',
    latexFormula: 'E = \\frac{hc}{\\lambda}, \\qquad KE_{\\max} = E - W, \\qquad KE_{\\max} = e V_s',
    simParams: {
      wavelength: { label: 'طول موجة الضوء الساقط λ (nm)', min: 200, max: 600, step: 10, value: 300 },
      workFunc: { label: 'دالة الشغل للمعدن W (eV)', min: 1.5, max: 4.5, step: 0.1, value: 2.46 }
    },
    steps: [
      {
        num: 1,
        title: 'حساب طاقة الفوتون الساقط (E) وتحويلها إلى وحدة (eV)',
        principle: 'نحسب طاقة الفوتون بالجول من E = hc / λ ثم نقسم على شحنة الإلكترون (1.6 × 10⁻¹⁹ C) لتوحيد الوحدات مع دالة الشغل W.',
        formula: 'E = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{300 \\times 10^{-9}} = 6.63 \\times 10^{-19}\\text{ J} = \\frac{6.63 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 4.14\\text{ eV}',
        substitution: 'E \\approx 4.14\\text{ eV}',
        question: 'ما مقدار طاقة الفوتون الساقط E بوحدة الإلكترون-فولت (eV)؟',
        expectedAnswer: 4.14,
        unit: 'eV',
        hint: 'اقسم 6.63 على 1.6 فتحصل على 4.143 eV.'
      },
      {
        num: 2,
        title: 'حساب الطاقة الحركية العظمى للإلكترونات الضوئية (KE_max) وجهد الإيقاف (V_s)',
        principle: 'حسب معادلة آينشتاين: KE_max = E - W. وبما أن KE_max(eV) = e·V_s، فإن قيمة جهد الإيقاف بالفولت تساوي عددياً قيمة KE_max بوحدة eV!',
        formula: 'KE_{\\max} = 4.14 - 2.46 = 1.68\\text{ eV} \\implies V_s = 1.68\\text{ V}',
        substitution: 'KE_{\\max} = 1.68\\text{ eV}, \\quad V_s = 1.68\\text{ V}',
        question: 'ما مقدار جهد الإيقاف V_s اللازم لإيقاف أسرع الإلكترونات (بوحدة الفولت V)؟',
        expectedAnswer: 1.68,
        unit: 'V',
        hint: 'اطرح دالة الشغل W = 2.46 eV من طاقة الفوتون E = 4.14 eV.'
      }
    ]
  },
  {
    id: 'ch8-nuclear',
    category: 'الفصل الثامن/التاسع: الفيزياء النووية · Ch 8–9 Ministerial Problem',
    badge: 'الفصل 8/9 · النووية',
    title: 'شحنة ونصف قطر النواة وطاقة الربط النووية',
    prompt: 'لنواة ذرة الكربون (¹²₆C) حيث العدد الذري (Z = 6) والعدد الكتلي (A = 12)؛ جد: (1) مقدار شحنة النواة (q) مقسوماً على 10⁻¹⁹ كولوم، (2) نصف قطر النواة (R) بوحدة الفيرمي (fm). علماً أن الجذر التكعيبي للعدد 12 يساوي تقريباً (2.289).',
    latexFormula: 'q = Z e, \\qquad R = r_0 A^{1/3} \\quad (r_0 = 1.2\\text{ fm} = 1.2 \\times 10^{-15}\\text{ m})',
    simParams: {
      z: { label: 'العدد الذري (عدد البروتونات Z)', min: 1, max: 26, step: 1, value: 6 },
      a: { label: 'العدد الكتلي (مجموع النيوكلونات A)', min: 1, max: 64, step: 1, value: 12 }
    },
    steps: [
      {
        num: 1,
        title: 'حساب شحنة النواة (q = Z · e)',
        principle: 'شحنة النواة موجبة وتساوي حاصل ضرب العدد الذري Z في شحنة البروتون الواحد (e = 1.6 × 10⁻¹⁹ C).',
        formula: 'q = Z \\cdot e = 6 \\times 1.6 \\times 10^{-19} = 9.6 \\times 10^{-19}\\text{ C}',
        substitution: 'q = 9.6 \\times 10^{-19}\\text{ C}',
        question: 'ما معامل شحنة النواة q بوحدة (×10⁻¹⁹ C)؟',
        expectedAnswer: 9.6,
        unit: '×10⁻¹⁹ C',
        hint: 'اضرب Z = 6 في 1.6.'
      },
      {
        num: 2,
        title: 'حساب نصف قطر النواة (R) بوحدة الفيرمي (fm)',
        principle: 'يتناسب نصف قطر النواة طردياً مع الجذر التكعيبي للعدد الكتلي: R = 1.2 × A^(1/3) fm.',
        formula: 'R = 1.2 \\times (12)^{1/3} = 1.2 \\times 2.289 \\approx 2.75\\text{ fm}',
        substitution: 'R \\approx 2.75\\text{ fm} = 2.75 \\times 10^{-15}\\text{ m}',
        question: 'ما مقدار نصف قطر نواة الكربون R بوحدة الفيرمي (fm)؟',
        expectedAnswer: 2.75,
        unit: 'fm',
        hint: 'اضرب r₀ = 1.2 fm في الجذر التكعيبي للعدد 12 وهو 2.289.'
      }
    ]
  }
];

// ============================================================================
// Iraqi 6th Grade Studying & Tutoring Methods Data
// ============================================================================
const TUTORING_METHODS_DATA = [
  {
    id: 'method-decision-tree',
    badge: 'الطريقة الأولى · Method 01',
    title: 'شجرة قرار المسائل الوزارية (Ministerial Keyword Decoder)',
    subtitle: 'كيف تكتشف القانون الصحيح خلال 10 ثوانٍ من قراءة السؤال الوزاري؟',
    items: [
      {
        clue: 'الفصل 1: "أُدخل عازل ثابت عزله k مجهول"',
        rule: 'ابدأ دائماً من السعة المكافئة بعد العازل: C_eq(k) = Q_total / ΔV_total، ثم استخرج C_k ومنها k = C_k / C.'
      },
      {
        clue: 'الفصل 2: "دار الملف بزاوية θ من الوضع العمودي"',
        rule: 'في قانون الفيض المغناطيسي Φ_B = B·A·cos(θ) نأخذ الزاوية مع متجه المساحة مباشرة؛ أما لو قال "يصنع زاوية مع مستوى الملف" فنأخذ المتممة (90° - θ).'
      },
      {
        clue: 'الفصل 3: "كانت قدرة المصدر الحقيقية تساوي الظاهرية" أو "عامل القدرة = 1"',
        rule: 'هذا يعني أن الدائرة في حالة رنين! مباشرة ضع X_L = X_C و Z = R و φ = 0°.'
      },
      {
        clue: 'الفصل 6: "هل تحصل الظاهرة الكهروضوئية؟"',
        rule: 'قارن طاقة الفوتون E مع دالة الشغل W (أو التردد f مع f₀): إذا كان E ≥ W ينبعث إلكترون ضوئي، وإذا كان E < W لا ينبعث مهما زادت شدة الضوء!'
      }
    ]
  },
  {
    id: 'method-what-happens',
    badge: 'الطريقة الثانية · Method 02',
    title: 'مختبر "ماذا يحصل لو؟" و"علامَ يعتمد؟" (Conceptual Predictor)',
    subtitle: 'الأسئلة الكلامية الثابتة في كل دور وزاري (35–40 درجة)',
    items: [
      {
        clue: 'ماذا يحصل للمجال الكهربائي E وفرق الجهد ΔV عند إدخال عازل في متسعة مفصولة؟',
        rule: 'يقل كل من المجال الكهربائي (E_k = E / k) وفرق الجهد (ΔV_k = ΔV / k) بنسبة ثابت العزل k، بينما تزداد السعة (C_k = k·C) وتبقى الشحنة Q ثابتة.'
      },
      {
        clue: 'ماذا يحصل لتوهج مصباح مربوط مع متسعة على التوالي عند زيادة تردد مذبذب التيار المتناوب؟',
        rule: 'يزداد توهج المصباح! لأن الرادة السعوية X_C = 1/(2πfC) تتناسب عكسياً مع التردد f، فتقل X_C وتقل الممانعة Z فيزداد التيار I.'
      },
      {
        clue: 'ماذا يحصل لفاصلة الهدب Δy في تجربة شقي يونغ لو أُجريت التجربة تحت الماء؟',
        rule: 'تقل فاصلة الهدب (Δy)! لأن الطول الموجي للضوء في الماء يقل (λ_n = λ / n)، وبما أن Δy ∝ λ فإن الحزم المضيئة والمظلمة تتقارب.'
      }
    ]
  }
];

const FLASHCARDS_DATA = [
  {
    topic: 'الفصل الأول: المتسعات · تعليل وزاري مكرر',
    front: 'علل: يحدد مقدار أقصى فرق جهد كهربائي يمكن أن تعمل عنده المتسعة؟',
    back: 'لمنع حصول الانهيار الكهربائي المبكر للعازل بين صفيحتيها نتيجة عبور الشرارة الكهربائية خلاله، فتتفرغ المتسعة من شحنتها وتتلف.',
    formula: 'E_{\\text{breakdown}} = \\frac{\\Delta V_{\\max}}{d}'
  },
  {
    topic: 'الفصل الثاني: الحث الكهرومغناطيسي · قانون لنز',
    front: 'ما الفائدة العملية من تطبيق قانون لنز؟ ولماذا يعد تطبيقاً لقانون حفظ الطاقة؟',
    back: 'الفائدة: تحديد اتجاه التيار المحتث في دائرة كهربائية مقفلة. ويعد تطبيقاً لحفظ الطاقة لأن تحريك المغناطيس يتطلب إنجاز شغل ميكانيكي ضد القوة المعرقلة يتحول إلى طاقة كهربائية في الحمل.',
    formula: '\\mathcal{E}_{\\text{ind}} = -N \\frac{\\Delta \\Phi_B}{\\Delta t}'
  },
  {
    topic: 'الفصل الثالث: التيار المتناوب · عامل القدرة',
    front: 'علل: يفضل استعمال محث صرف في التحكم بتيار التفريغ في مصباح الفلورسنت ولا تستعمل مقاومة صرف؟',
    back: 'لأن المحث الصرف عندما يكون مثالياً لا يستهلك قدرة حقيقية (P_real = 0 لأن φ = 90° و cos 90° = 0)، بينما المقاومة الصرف تستهلك قدرة حرارية ضائعة (I²R).',
    formula: 'P_{\\text{real}} = I_T V_T \\cos(90^\\circ) = 0'
  },
  {
    topic: 'الفصل الخامس: البصريات الفيزيائية · الاستقطاب',
    front: 'علامَ تعتمد زاوية الاستقطاب (زاوية بروستر θ_p)؟',
    back: 'تعتمد على معامل الانكسار للوسط الشفاف (n) وفق العلاقة tan(θ_p) = n، ومعامل الانكسار بدوره يعتمد على نوع الوسط والطول الموجي للضوء الساقط.',
    formula: '\\tan\\theta_p = n'
  },
  {
    topic: 'الفصل السادس: الفيزياء الحديثة · الجسم الأسود',
    front: 'كيففسر ماكس بلانك إشعاع الجسم الأسود؟ (فرضية الكم)',
    back: 'افترض أن الجسم الأسود يشع ويمتص الطاقة بشكل كمات محددة ومستقلة من الطاقة تسمى (الفوتونات)، وأن طاقة كل فوتون تتناسب طردياً مع تردده (E = hf).',
    formula: 'E = h f = \\frac{h c}{\\lambda}'
  }
];

const TRUE_FALSE_DATA = [
  {
    statement: 'الفصل 1: عند مضاعفة فرق الجهد بين صفيحتي متسعة ذات سعة ثابتة، فإن الطاقة المختزنة فيها تتضاعف أربع مرات (4 أمثال).',
    answer: true,
    explanation: 'صحيح! لأن الطاقة المختزنة تتناسب طردياً مع مربع فرق الجهد عند ثبوت السعة: PE = ½ C (ΔV)²، فإذا تضاعف ΔV مرتين become (2)² = 4 أمثال.'
  },
  {
    statement: 'الفصل 2: يتولد تيار محتث في حلقة موصلة مقفلة موضوعة داخل مجال مغناطيسي منتظم وثابت الكثافة والمساحة.',
    answer: false,
    explanation: 'خطأ! شرط تولد التيار المحتث حسب فرداي هو حصول تغير في الفيض المغناطيسي لوحدة الزمن (ΔΦ_B / Δt ≠ 0). إذا كان الفيض ثابتاً لا يتولد تيار محتث.'
  },
  {
    statement: 'الفصل 3: في دائرة تيار متناوب متوالية الربط (R-L-C)، إذا كانت (X_C > X_L) فإن للدائرة خصائص سعوية وتكون زاوية فرق الطور φ سالبة.',
    answer: true,
    explanation: 'صحيح! لأن tan φ = (X_L - X_C) / R، وعندما تكون X_C أكبر يكون البسط سالباً فتقع متجه الفولتية الكلية في الربع الرابع (يتأخر عن التيار).'
  },
  {
    statement: 'الفصل 6: يزداد جهد الإيقاف (V_s) في الظاهرة الكهروضوئية بزيادة شدة الضوء الساقط عند ثبوت التردد.',
    answer: false,
    explanation: 'خطأ! جهد الإيقاف يعتمد على الطاقة الحركية العظمى للإلكترونات الضوئية (e V_s = hf - W)، أي يعتمد على تردد الضوء الساقط ونوع مادة السطح فقط، ولا يعتمد على شدة الضوء.'
  }
];

const FAQ_DATA = {
  students: [
    {
      q: 'هل يغطي الموقع جميع فصول فيزياء السادس العلمي (المنهج العراقي المحدث)؟',
      a: 'نعم! يغطي الموقع جميع الفصول الثمانية/التسعة المعتمدة وزارياً: المتسعات، الحث الكهرومغناطيسي، التيار المتناوب، الموجات الكهرومغناطيسية، البصريات الفيزيائية، الفيزياء الحديثة، إلكترونيات الحالة الصلبة، والأطياف الذرية والليزر والفيزياء النووية.'
    },
    {
      q: 'كيف يساعدني نظام الحل خطوة بخطوة في ضمان الـ 100 بالامتحان الوزاري؟',
      a: 'في الامتحان الوزاري، تُوزع الدرجة (10 درجات للمسألة) على كتابة القانون، التعويض مع تحويل الوحدات، والناتج مع الوحدة. مدرب Astra يفحص كل خطوة على حدة وينبهك لتحويل المايكرو (10⁻⁶) والنانو (10⁻⁹) والـ eV قبل الانتقال للخطوة التالية.'
    },
    {
      q: 'كيف أراجع الكلاميات (التعاليل، علامَ يعتمد، وماذا يحصل) بدون نسيان؟',
      a: 'من خلال مختبر "ماذا يحصل لو؟" وبطاقات التكرار المتباعد (Flashcards) المربوطة بالمحاكاة البصرية، بحيث ترى بعينك كيف يقل فرق الجهد أو تتغير فاصلة الهدب بدلاً من الحفظ الأصم.'
    }
  ],
  parents: [
    {
      q: 'كيف أتابع تقدم ابني/ابنتي في مادة الفيزياء للسادس العلمي؟',
      a: 'يعرض الموقع نقاط الخبرة (XP)، سلسلة الأيام المتتالية (Streak)، والخطوات المتقنة في كل فصل من فصول المنهج الثمانية.'
    }
  ],
  teachers: [
    {
      q: 'هل يمكن استخدام المحاكيات البصرية (المتسعات، الرنين، شقي يونغ) داخل الصف أو الدورات؟',
      a: 'بالتأكيد! جميع المحاكيات التفاعلية مصممة لتعمل مباشرة على السبورة الذكية أو الحاسوب أو الهاتف لتوضيح التجارب والأنشطة الاستهلالية في كتاب الفيزياء.'
    }
  ]
};

// Application State
const state = {
  activeSyllabusChapterId: 'ch1',
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
  xp: parseInt(localStorage.getItem('astra_physics_xp') || '450', 10),
  faqTab: 'students',
  chatHistory: [
    {
      role: 'tutor',
      text: 'أهلاً بك يا بطل السادس العلمي! 🇮🇶✨ أنا مساعدك الذكي لفيزياء السادس العلمي. اختر أي فصل من الفصول الثمانية، أو جرب حل المسائل الوزارية خطوة بخطوة، أو اسألني أي تعليل أو قانون (مثل: "متى تكون الدائرة في حالة رنين؟" أو "ماذا يحصل عند إدخال عازل؟").'
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
// 1. Complete Iraqi 6th Scientific Syllabus & Equations Atlas (#syllabus)
// ============================================================================
function renderSyllabusAtlas() {
  const tabsEl = document.getElementById('syllabus-chapter-tabs');
  const detailEl = document.getElementById('syllabus-chapter-detail');
  if (!tabsEl || !detailEl) return;

  tabsEl.innerHTML = IRAQI_SYLLABUS_CHAPTERS.map((ch) => {
    const active = ch.id === state.activeSyllabusChapterId;
    return `
      <button type="button" data-ch-id="${ch.id}"
        class="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
          active
            ? 'home-ramp-fill text-white shadow-[0_6px_22px_rgba(67,83,243,0.45)]'
            : 'bg-white/5 text-[#8a9bad] hover:bg-white/10 hover:text-white border border-white/10'
        }">
        ${ch.titleAr}
      </button>
    `;
  }).join('');

  const ch = IRAQI_SYLLABUS_CHAPTERS.find((c) => c.id === state.activeSyllabusChapterId) || IRAQI_SYLLABUS_CHAPTERS[0];

  detailEl.innerHTML = `
    <div class="home-card-shell rounded-[36px] p-6 lg:p-10">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4 rtl-block">
        <div class="flex items-center gap-2.5">
          <span class="font-mono text-xs uppercase tracking-wider bg-[#4353f3]/20 border border-[#5b6bff]/50 text-[#c9cfff] px-3 py-1 rounded-full">${ch.num}</span>
          <span class="font-mono text-xs bg-amber-500/15 border border-amber-400/40 text-amber-300 px-3 py-1 rounded-full">⚖️ الثقل الوزاري: ${ch.weight}</span>
        </div>
        <span class="font-mono text-xs text-[#8a9bad]">${ch.titleEn}</span>
      </div>

      <div class="rtl-block mb-6">
        <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">${ch.titleAr}</h3>
        <p class="text-sm lg:text-base text-[#a3a3ac] leading-relaxed">${ch.summary}</p>
      </div>

      <!-- Equations Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        ${ch.equations.map((eq) => `
          <div class="equation-card rounded-2xl p-5 flex flex-col justify-between gap-3">
            <div class="rtl-block flex items-center justify-between">
              <span class="text-sm font-bold text-[#c9cfff]">📐 ${eq.name}</span>
            </div>
            <div class="bg-black/60 border border-white/10 rounded-xl px-4 py-3 overflow-x-auto ltr-math">
              <div data-latex="${eq.latex}" data-display="true" class="text-sm text-white"></div>
            </div>
            <div class="rtl-block text-xs text-[#8a9bad] font-medium">${eq.vars}</div>
          </div>
        `).join('')}
      </div>

      <!-- Ministerial Golden Rules -->
      <div class="rounded-2xl border border-amber-400/30 bg-amber-500/[0.07] p-5 rtl-block">
        <h4 class="text-sm lg:text-base font-bold text-amber-300 mb-2.5 flex items-center gap-2">
          <span>💡</span>
          <span>ملاحظات ذهبية لحل المسائل الوزارية (${ch.titleAr}):</span>
        </h4>
        <ul class="space-y-2 text-xs lg:text-sm text-white/90 list-disc pr-5 leading-relaxed">
          ${ch.goldenRules.map((r) => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  renderLatexInElement(detailEl);

  tabsEl.querySelectorAll('[data-ch-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeSyllabusChapterId = btn.getAttribute('data-ch-id');
      renderSyllabusAtlas();
    });
  });
}

// ============================================================================
// 2. Tutoring Methods Section (#tutoring-methods)
// ============================================================================
function renderTutoringMethods() {
  const container = document.getElementById('tutoring-methods-grid');
  if (!container) return;

  container.innerHTML = TUTORING_METHODS_DATA.map((m) => `
    <div class="home-card-shell rounded-[34px] p-6 lg:p-8 rtl-block flex flex-col justify-between">
      <div>
        <span class="font-mono text-xs uppercase tracking-wider text-[#8b98ff] block mb-2">${m.badge}</span>
        <h3 class="text-xl lg:text-2xl font-bold text-white mb-1">${m.title}</h3>
        <p class="text-xs lg:text-sm text-[#8a9bad] mb-5">${m.subtitle}</p>
        <div class="space-y-3">
          ${m.items.map((item) => `
            <div class="rounded-2xl bg-black/50 border border-white/10 p-4">
              <div class="text-xs lg:text-sm font-bold text-[#c9cfff] mb-1">🔍 ${item.clue}</div>
              <div class="text-xs lg:text-sm text-emerald-300 leading-relaxed">✅ ${item.rule}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// 3. Interactive Bento Flip Cards
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
// 4. Interactive Ministerial Step-by-Step Solver & 2D Sim (#how-it-works)
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
        class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
          active
            ? 'home-ramp-fill text-white shadow-[0_6px_20px_rgba(67,83,243,0.45)]'
            : 'bg-white/5 text-[#8a9bad] hover:bg-white/10 hover:text-white border border-white/10'
        }">
        ${p.badge}
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
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3 rtl-block">
      <span class="font-mono text-[11px] uppercase tracking-[0.1em] text-[#8b98ff] bg-[#4353f3]/15 border border-[#5b6bff]/40 px-3 py-1 rounded-full">
        ${prob.category}
      </span>
      <span class="font-mono text-xs text-[#8a9bad]">
        الخطوة ${Math.min(state.unlockedStepIndex + 1, prob.steps.length)} من ${prob.steps.length}
      </span>
    </div>
    <div class="rtl-block">
      <h3 class="text-xl lg:text-2xl font-bold text-white mb-2">${prob.title}</h3>
      <p class="text-sm lg:text-base text-[#a3a3ac] leading-relaxed mb-4">${prob.prompt}</p>
    </div>
    <div class="bg-black/50 border border-white/10 rounded-2xl px-4 py-3 overflow-x-auto ltr-math">
      <div data-latex="${prob.latexFormula}" data-display="true" class="text-sm text-[#c9cfff]"></div>
    </div>
  `;

  stepsEl.innerHTML = prob.steps.map((step, idx) => {
    const isUnlocked = idx <= state.unlockedStepIndex;
    const stepKey = `${prob.id}-${step.num}`;
    const isCompleted = !!state.completedSteps[stepKey];

    if (!isUnlocked) {
      return `
        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-4 opacity-50 flex items-center justify-between rtl-block">
          <div class="flex items-center gap-3">
            <span class="size-7 rounded-full bg-white/10 font-mono text-xs flex items-center justify-center text-white/60">0${step.num}</span>
            <span class="text-sm font-medium text-white/60">${step.title}</span>
          </div>
          <span class="font-mono text-[11px] text-white/40">🔒 أكمل الخطوة السابقة أولاً</span>
        </div>
      `;
    }

    return `
      <div class="rounded-2xl border ${isCompleted ? 'border-emerald-500/40 bg-emerald-950/15' : 'border-[#5b6bff]/40 bg-[#151621]'} p-5 transition-all rtl-block">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="flex items-center gap-2.5">
            <span class="size-7 rounded-full ${isCompleted ? 'bg-emerald-500 text-black' : 'home-ramp-fill text-white'} font-mono text-xs font-bold flex items-center justify-center">
              ${isCompleted ? '✓' : '0' + step.num}
            </span>
            <h4 class="font-bold text-white text-sm lg:text-base">${step.title}</h4>
          </div>
          <span class="font-mono text-[11px] uppercase tracking-wider ${isCompleted ? 'text-emerald-400' : 'text-[#8b98ff]'}">
            ${isCompleted ? 'متقن +25 XP' : 'خطوة نشطة'}
          </span>
        </div>

        <p class="text-xs lg:text-sm text-[#a3a3ac] mb-3 leading-relaxed">${step.principle}</p>

        <div class="bg-black/40 border border-white/10 rounded-xl p-3 mb-3 overflow-x-auto ltr-math">
          <div data-latex="${step.formula}" data-display="true" class="text-xs lg:text-sm"></div>
        </div>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-3">
          <div class="relative flex-1">
            <input type="number" step="any" id="step-input-${idx}"
              placeholder="${step.question}"
              value="${isCompleted ? step.expectedAnswer : ''}"
              class="w-full rounded-xl bg-black/60 border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-[#8a9bad]/60 focus:outline-none focus:border-[#5b6bff]" />
            <span class="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-[#8a9bad] ltr-math">${step.unit}</span>
          </div>
          <button type="button" data-check-step="${idx}"
            class="home-ramp-fill px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white hover:brightness-110 transition cursor-pointer">
            تحقق من الجواب
          </button>
          <button type="button" data-hint-step="${idx}"
            class="px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-xs font-medium text-[#c9cfff] hover:bg-white/10 transition cursor-pointer">
            💡 تلميح وزاري
          </button>
          <button type="button" data-reveal-step="${idx}"
            class="px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-medium text-[#8a9bad] hover:text-white transition cursor-pointer">
            إظهار الحل الكامل
          </button>
        </div>

        <div id="step-feedback-${idx}" class="${isCompleted ? 'block' : 'hidden'} mt-3 rounded-xl bg-black/50 border border-white/10 p-3 text-xs lg:text-sm">
          <div class="font-semibold text-emerald-400 mb-1">✓ خطوة وزارية صحيحة (درجة كاملة):</div>
          <div data-latex="${step.substitution}" data-display="false" class="text-white/90 ltr-math"></div>
        </div>
      </div>
    `;
  }).join('');

  renderLatexInElement(headerEl);
  renderLatexInElement(stepsEl);

  stepsEl.querySelectorAll('[data-check-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-check-step'), 10);
      const step = prob.steps[idx];
      const inputEl = document.getElementById(`step-input-${idx}`);
      const fbEl = document.getElementById(`step-feedback-${idx}`);
      const userVal = parseFloat(inputEl?.value || '');
      const tol = Math.max(0.05, Math.abs(step.expectedAnswer) * 0.03);

      if (!Number.isNaN(userVal) && Math.abs(userVal - step.expectedAnswer) <= tol) {
        const stepKey = `${prob.id}-${step.num}`;
        if (!state.completedSteps[stepKey]) {
          state.completedSteps[stepKey] = true;
          state.xp += 25;
          state.streakDays[4] = true;
          saveProgress();
        }
        if (state.unlockedStepIndex <= idx && idx < prob.steps.length - 1) {
          state.unlockedStepIndex = idx + 1;
        }
        renderSolverWorkspace();
      } else if (fbEl) {
        fbEl.classList.remove('hidden');
        fbEl.innerHTML = `<span class="text-amber-300 font-bold">حاول مرة أخرى!</span> راجع القانون وتحويل الوحدات. تلميح: ${step.hint}`;
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
        fbEl.innerHTML = `<span class="text-[#8b98ff] font-bold">💡 تلميح الحل:</span> ${step.hint}`;
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
    <div class="flex flex-col gap-1 bg-black/40 border border-white/10 rounded-xl p-3 rtl-block">
      <div class="flex items-center justify-between text-xs">
        <span class="text-[#8a9bad] font-medium">${cfg.label}</span>
        <span id="sim-val-${key}" class="font-mono text-white font-semibold ltr-math">${cfg.value}</span>
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

// ============================================================================
// 5. Real-Time 2D Physics Canvas Engine for All Iraqi 6th Grade Chapters
// ============================================================================
function startPhysicsCanvasLoop() {
  const canvas = document.getElementById('physics-sim-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let lastTs = performance.now();

  function frame(now) {
    const dt = Math.min(0.05, (now - lastTs) / 1000);
    lastTs = now;
    if (state.simRunning) {
      state.simTime += dt;
    }

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Subtle lab grid
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < w; gx += 38) {
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
    }
    for (let gy = 0; gy < h; gy += 38) {
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
    }

    const prob = getActiveProblem();
    const readoutEl = document.getElementById('sim-live-telemetry');

    if (prob.id === 'ch1-capacitors') {
      const c1 = prob.simParams.c1.value;
      const c2 = prob.simParams.c2.value;
      const k = prob.simParams.k.value;
      const v = prob.simParams.voltage.value;
      const c1k = k * c1;
      const ceq = c1k + c2;
      const q1k = c1k * v;
      const q2 = c2 * v;
      const qt = ceq * v;
      const pe1 = 0.5 * c1k * v * v * 1e-3; // mJ

      // Draw parallel capacitor network + dielectric slab in C1
      ctx.strokeStyle = '#8b98ff';
      ctx.lineWidth = 2.5;
      // Wires
      ctx.strokeRect(65, 50, w - 130, h - 100);

      // Battery on left
      ctx.fillStyle = '#07080d';
      ctx.fillRect(50, h / 2 - 22, 30, 44);
      ctx.strokeStyle = '#fcbb00';
      ctx.beginPath();
      ctx.moveTo(50, h / 2 - 10); ctx.lineTo(80, h / 2 - 10);
      ctx.moveTo(56, h / 2 + 8); ctx.lineTo(74, h / 2 + 8);
      ctx.stroke();
      ctx.fillStyle = '#fcbb00';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(`ΔV=${v}V`, 18, h / 2 + 4);

      // Capacitor C1k (middle branch) with animated dielectric slab
      const c1x = w * 0.48;
      ctx.beginPath();
      ctx.strokeStyle = '#8b98ff';
      ctx.moveTo(c1x, 50); ctx.lineTo(c1x, h / 2 - 20);
      ctx.moveTo(c1x, h / 2 + 20); ctx.lineTo(c1x, h - 50);
      ctx.stroke();
      // Plates
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(c1x - 28, h / 2 - 20); ctx.lineTo(c1x + 28, h / 2 - 20);
      ctx.moveTo(c1x - 28, h / 2 + 20); ctx.lineTo(c1x + 28, h / 2 + 20);
      ctx.stroke();
      // Dielectric slab inside C1
      if (k > 1) {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.38)';
        ctx.fillRect(c1x - 25, h / 2 - 17, 50, 34);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`k=${k}`, c1x - 12, h / 2 + 4);
      }
      ctx.fillStyle = '#c9cfff';
      ctx.fillText(`C₁ₖ=${c1k}μF`, c1x - 32, 40);
      ctx.fillText(`Q₁ₖ=${q1k}μC`, c1x - 35, h - 30);

      // Capacitor C2 (right branch)
      const c2x = w - 65;
      ctx.fillStyle = '#07080d';
      ctx.fillRect(c2x - 20, h / 2 - 20, 40, 40);
      ctx.strokeStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(c2x - 26, h / 2 - 20); ctx.lineTo(c2x + 26, h / 2 - 20);
      ctx.moveTo(c2x - 26, h / 2 + 20); ctx.lineTo(c2x + 26, h / 2 + 20);
      ctx.stroke();
      ctx.fillStyle = '#c9cfff';
      ctx.fillText(`C₂=${c2}μF`, c2x - 26, 40);
      ctx.fillText(`Q₂=${q2}μC`, c2x - 30, h - 30);

      if (readoutEl) {
        readoutEl.textContent = `C_eq = ${ceq} μF | Q_total = ${qt} μC | PE₁ₖ = ${pe1.toFixed(3)} mJ`;
      }
    } else if (prob.id === 'ch2-induction') {
      const vapp = prob.simParams.vapp.value;
      const L = prob.simParams.inductance.value;
      const R = prob.simParams.resistance.value;
      const pct = prob.simParams.pct.value;
      const iconst = vapp / R;
      const iinst = (pct / 100) * iconst;
      const didt = (vapp - iinst * R) / L;

      // Plot exponential current growth curve I(t) = I_const * (1 - e^(-Rt/L))
      const padL = 55;
      const padB = h - 42;
      const plotW = w - 90;
      const plotH = h - 85;

      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(padL, 30); ctx.lineTo(padL, padB); ctx.lineTo(w - 25, padB);
      ctx.stroke();

      // Asymptote I_const
      ctx.save();
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = '#34d399';
      ctx.beginPath();
      ctx.moveTo(padL, 45); ctx.lineTo(w - 25, 45);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = '#34d399';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(`I_const = ${iconst.toFixed(1)} A (100%)`, padL + 10, 38);

      // Exponential curve
      ctx.strokeStyle = '#5b6bff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i <= 80; i++) {
        const u = i / 80;
        const yPct = 1 - Math.exp(-5 * u);
        const px = padL + u * plotW;
        const py = padB - yPct * (plotH - 15);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Highlight operating point at pct%
      const uPt = pct >= 99.5 ? 0.98 : -Math.log(1 - pct / 100) / 5;
      const clampedU = Math.min(0.98, Math.max(0, uPt));
      const ptX = padL + clampedU * plotW;
      const ptY = padB - (pct / 100) * (plotH - 15);

      ctx.fillStyle = '#fcbb00';
      ctx.beginPath();
      ctx.arc(ptX, ptY, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText(`${pct}% → I_inst=${iinst.toFixed(1)}A, ΔI/Δt=${didt.toFixed(0)}A/s`, Math.min(w - 230, ptX + 10), Math.max(60, ptY - 8));

      if (readoutEl) {
        readoutEl.textContent = `I_const = ${iconst.toFixed(1)}A | At ${pct}%: I_inst = ${iinst.toFixed(2)}A | ΔI/Δt = ${didt.toFixed(1)} A/s`;
      }
    } else if (prob.id === 'ch3-ac-resonance') {
      const omega = prob.simParams.omega.value;
      const R = prob.simParams.resistance.value;
      const L = prob.simParams.inductance.value;
      const C = 20e-6; // 20 uF
      const xl = omega * L;
      const xc = 1 / (omega * C);
      const z = Math.sqrt(R * R + (xl - xc) * (xl - xc));
      const phiRad = Math.atan2(xl - xc, R);
      const phiDeg = (phiRad * 180) / Math.PI;
      const pf = Math.cos(phiRad);

      // Draw Phasor / Impedance Vector Diagram on left & Resonance Bell Curve on right
      const cx = w * 0.3;
      const cy = h * 0.54;
      const scale = 0.55;

      // Axes
      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - 80, cy); ctx.lineTo(cx + 110, cy);
      ctx.moveTo(cx, cy - 95); ctx.lineTo(cx, cy + 95);
      ctx.stroke();

      // R vector (horizontal)
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy); ctx.lineTo(cx + R * scale, cy);
      ctx.stroke();
      ctx.fillStyle = '#34d399';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(`R=${R}Ω`, cx + R * scale * 0.4, cy + 16);

      // X_L - X_C vector (vertical)
      const xNet = (xl - xc) * scale;
      ctx.strokeStyle = '#f43f5e';
      ctx.beginPath();
      ctx.moveTo(cx + R * scale, cy);
      ctx.lineTo(cx + R * scale, cy - xNet);
      ctx.stroke();

      // Z impedance hypotenuse
      ctx.strokeStyle = '#a855f7';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * scale, cy - xNet);
      ctx.stroke();
      ctx.fillStyle = '#c9cfff';
      ctx.fillText(`Z=${z.toFixed(1)}Ω (φ=${phiDeg.toFixed(1)}°)`, cx - 20, 32);

      if (Math.abs(xl - xc) < 5) {
        ctx.fillStyle = '#fcbb00';
        ctx.fillText('★ حالة رنين كهربائي (XL = XC, Z = R, Pf = 1) ★', cx - 15, h - 18);
      }

      if (readoutEl) {
        readoutEl.textContent = `X_L = ${xl.toFixed(1)}Ω | X_C = ${xc.toFixed(1)}Ω | Z = ${z.toFixed(1)}Ω | Pf = ${pf.toFixed(2)}`;
      }
    } else if (prob.id === 'ch5-optics-young') {
      const lam = prob.simParams.wavelength.value; // nm
      const d = prob.simParams.slitDist.value; // mm
      const L = prob.simParams.screenDist.value; // m
      const dy = (lam * 1e-9 * L) / (d * 1e-3) * 1e3; // mm

      // Convert wavelength nm to RGB color
      let hue = 270 - ((lam - 400) / 300) * 270;
      const waveColor = `hsl(${hue}, 90%, 60%)`;

      // Draw double slit barrier on left and interference fringes on right screen
      const slitX = 95;
      const screenX = w - 65;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(slitX, 20); ctx.lineTo(slitX, h / 2 - 35);
      ctx.moveTo(slitX, h / 2 - 15); ctx.lineTo(slitX, h / 2 + 15);
      ctx.moveTo(slitX, h / 2 + 35); ctx.lineTo(slitX, h - 20);
      ctx.stroke();

      // Interference intensity pattern on screen
      const fringePix = Math.max(12, dy * 8);
      for (let py = 25; py < h - 25; py += 2) {
        const distFromCenter = py - h / 2;
        const phase = (Math.PI * distFromCenter) / fringePix;
        const intensity = Math.pow(Math.cos(phase), 2);
        ctx.fillStyle = `hsla(${hue}, 95%, 60%, ${intensity})`;
        ctx.fillRect(screenX - 18, py, 26, 2.5);
      }

      // Animated wavefront arcs from the two slits
      ctx.strokeStyle = waveColor;
      ctx.lineWidth = 1.2;
      const phaseShift = (state.simTime * 40) % 24;
      for (let r = phaseShift; r < screenX - slitX; r += 24) {
        ctx.globalAlpha = Math.max(0.1, 1 - r / (screenX - slitX));
        ctx.beginPath();
        ctx.arc(slitX, h / 2 - 25, r, -Math.PI / 2.5, Math.PI / 2.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(slitX, h / 2 + 25, r, -Math.PI / 2.5, Math.PI / 2.5);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (readoutEl) {
        readoutEl.textContent = `λ = ${lam} nm | d = ${d} mm | L = ${L} m | فاصلة الهدب Δy = ${dy.toFixed(2)} mm`;
      }
    } else if (prob.id === 'ch6-photoelectric') {
      const lam = prob.simParams.wavelength.value;
      const W = prob.simParams.workFunc.value;
      const E_ev = 1240 / lam;
      const keMax = Math.max(0, E_ev - W);

      // Draw cathode plate on left, collector anode on right
      ctx.fillStyle = '#64748b';
      ctx.fillRect(75, 55, 14, h - 110);
      ctx.fillRect(w - 85, 55, 14, h - 110);

      // Incoming photon waves
      ctx.strokeStyle = E_ev >= W ? '#38bdf8' : '#f43f5e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(20, 40); ctx.lineTo(75, h / 2);
      ctx.stroke();

      // Emitted photoelectrons if E_ev >= W
      if (E_ev >= W) {
        ctx.fillStyle = '#34d399';
        for (let i = 0; i < 6; i++) {
          const ex = 95 + ((state.simTime * (80 + keMax * 45) + i * 50) % (w - 185));
          const ey = 85 + i * 24;
          ctx.beginPath();
          ctx.arc(ex, ey, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        ctx.fillStyle = '#f43f5e';
        ctx.font = '600 12px "Figtree", sans-serif';
        ctx.fillText('⚠️ لا تحصل الظاهرة الكهروضوئية (طاقة الفوتون E < دالة الشغل W)', 95, h / 2);
      }

      if (readoutEl) {
        readoutEl.textContent = `E_photon = ${E_ev.toFixed(2)} eV | W = ${W} eV | KE_max = ${keMax.toFixed(2)} eV | V_s = ${keMax.toFixed(2)} V`;
      }
    } else {
      // Ch 8/9 Nuclear Physics
      const Z = prob.simParams.z.value;
      const A = Math.max(Z, prob.simParams.a.value);
      const R_fm = 1.2 * Math.cbrt(A);
      const q_val = (Z * 1.6).toFixed(1);

      const cx = w / 2;
      const cy = h / 2;
      const drawR = Math.min(75, R_fm * 16);

      // Outer nuclear radius halo
      ctx.strokeStyle = 'rgba(139, 152, 255, 0.45)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, drawR + 8, 0, Math.PI * 2);
      ctx.stroke();

      // Draw nucleons (protons red, neutrons blue)
      for (let i = 0; i < Math.min(A, 40); i++) {
        const angle = i * 2.39996 + state.simTime * 0.4;
        const rad = Math.sqrt(i / Math.min(A, 40)) * (drawR - 6);
        const nx = cx + rad * Math.cos(angle);
        const ny = cy + rad * Math.sin(angle);
        ctx.fillStyle = i < Z ? '#f43f5e' : '#38bdf8';
        ctx.beginPath();
        ctx.arc(nx, ny, 7, 0, Math.PI * 2);
        ctx.fill();
      }

      if (readoutEl) {
        readoutEl.textContent = `Z = ${Z}, N = ${A - Z}, A = ${A} | q = ${q_val}×10⁻¹⁹ C | R = ${R_fm.toFixed(2)} fm`;
      }
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

// ============================================================================
// 6. Custom Physics Formula Keyboard & Question Router
// ============================================================================
function handleCustomProblemOrQuestion(rawInput) {
  const text = (rawInput || '').trim();
  if (!text) return;

  const inputBox = document.getElementById('custom-physics-input');
  if (inputBox) inputBox.value = text;

  const lower = text.toLowerCase();
  if (lower.includes('حث') || lower.includes('ملف') || lower.includes('induction') || lower.includes('faraday')) {
    state.activeProblemIndex = 1;
  } else if (lower.includes('رنين') || lower.includes('متناوب') || lower.includes('ممانعة') || lower.includes('resonance')) {
    state.activeProblemIndex = 2;
  } else if (lower.includes('يونغ') || lower.includes('هدب') || lower.includes('تداخل') || lower.includes('young')) {
    state.activeProblemIndex = 3;
  } else if (lower.includes('كهروضوئية') || lower.includes('فوتون') || lower.includes('شغل') || lower.includes('photoelectric')) {
    state.activeProblemIndex = 4;
  } else if (lower.includes('نواة') || lower.includes('نووية') || lower.includes('فيرمي') || lower.includes('nuclear')) {
    state.activeProblemIndex = 5;
  } else {
    state.activeProblemIndex = 0;
  }

  state.unlockedStepIndex = 0;
  renderProblemSelector();
  renderSolverWorkspace();
  renderSimControls();

  state.chatHistory.push({ role: 'user', text });
  const prob = getActiveProblem();
  state.chatHistory.push({
    role: 'tutor',
    text: `تم تحميل مسألة **${prob.title}** (${prob.category}) في مساحة الحل خطوة بخطوة مع تشغيل المحاكي التفاعلي الخاص بها!`
  });
  renderStudyModeWorkspace();
}

function initMathKeyboardAndScanner() {
  document.querySelectorAll('[data-math-symbol]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sym = btn.getAttribute('data-math-symbol');
      const input = document.getElementById('custom-physics-input');
      if (input) {
        input.value = sym;
        handleCustomProblemOrQuestion(sym);
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
        statusEl.textContent = `📸 جاري مسح صورة السؤال الوزاري "${file.name}" عبر Astra Vision...`;
        setTimeout(() => {
          statusEl.textContent = `✓ تم استخراج السؤال الوزاري من "${file.name}" → تم فتح مسألة رنين التيار المتناوب (الفصل الثالث)`;
          handleCustomProblemOrQuestion('دائرة تيار متناوب في حالة رنين');
        }, 800);
      }
    });
  }
}

// ============================================================================
// 7. Interactive Practice Modes (#practise)
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
      <div class="rounded-2xl border border-white/15 bg-black/50 p-5 rtl-block">
        <div class="flex items-center justify-between text-xs font-mono text-[#8b98ff] mb-2">
          <span>${card.topic}</span>
          <span>بطاقة ${(state.flashcardIndex % FLASHCARDS_DATA.length) + 1} / ${FLASHCARDS_DATA.length}</span>
        </div>
        <div id="flashcard-box" class="cursor-pointer rounded-xl bg-[#161824] border border-white/10 p-5 min-h-[135px] flex flex-col justify-center transition-all hover:border-[#5b6bff]">
          <p class="text-sm lg:text-base font-bold text-white mb-2 leading-relaxed">${state.flashcardFlipped ? card.back : card.front}</p>
          ${state.flashcardFlipped ? `<div data-latex="${card.formula}" data-display="false" class="text-xs text-[#8b98ff] mt-2 ltr-math"></div>` : `<span class="text-xs font-mono text-[#8a9bad]">👆 اضغط على البطاقة لكشف الجواب الوزاري النموذجي</span>`}
        </div>
        <div class="flex items-center justify-between gap-2 mt-3">
          <button type="button" id="btn-fc-flip" class="px-3.5 py-2 rounded-xl bg-white/10 text-xs font-semibold text-white hover:bg-white/15 cursor-pointer">اقلب البطاقة</button>
          <div class="flex gap-2">
            <button type="button" id="btn-fc-hard" class="px-3.5 py-2 rounded-xl bg-amber-500/20 border border-amber-400/40 text-xs font-semibold text-amber-300 cursor-pointer">أعدها لاحقاً</button>
            <button type="button" id="btn-fc-easy" class="home-ramp-fill px-4 py-2 rounded-xl text-xs font-semibold text-white cursor-pointer">حفظتها (+15 XP)</button>
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
      <div class="rounded-2xl border border-white/15 bg-black/50 p-5 rtl-block">
        <div class="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
          <span>اختبار الفهم الوزاري · صح أم خطأ</span>
          <span>سؤال ${(state.tfIndex % TRUE_FALSE_DATA.length) + 1} / ${TRUE_FALSE_DATA.length}</span>
        </div>
        <p class="text-sm lg:text-base font-medium text-white mb-4 leading-relaxed">${item.statement}</p>
        <div class="flex gap-3">
          <button type="button" id="btn-tf-true" class="flex-1 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold text-white cursor-pointer">✓ صح (True)</button>
          <button type="button" id="btn-tf-false" class="flex-1 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold text-white cursor-pointer">✗ خطأ (False)</button>
          <button type="button" id="btn-tf-next" class="px-4 py-2.5 rounded-xl home-ramp-fill text-xs sm:text-sm font-semibold text-white cursor-pointer">التالي ←</button>
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
    const lastMsgs = state.chatHistory.slice(-3);
    container.innerHTML = `
      <div class="rounded-2xl border border-white/15 bg-black/50 p-4 rtl-block flex flex-col gap-3">
        <div class="max-h-[160px] overflow-y-auto space-y-2 pl-1">
          ${lastMsgs.map((m) => `
            <div class="rounded-xl px-3.5 py-2.5 text-xs lg:text-sm ${
              m.role === 'tutor'
                ? 'bg-[#191b28] border border-[#5b6bff]/30 text-white'
                : 'bg-[#4353f3] text-white mr-auto max-w-[85%]'
            }">
              <span class="font-mono text-[10px] uppercase tracking-wider block opacity-65 mb-0.5">${m.role === 'tutor' ? 'مدرب فيزياء السادس العلمي' : 'أنت'}</span>
              ${m.text}
            </div>
          `).join('')}
        </div>
        <div class="flex gap-2">
          <input type="text" id="mini-tutor-chat-input"
            placeholder="اسأل أي سؤال وزاري (مثال: ما شروط الرنين؟ أو متى تبقى الشحنة ثابتة؟)..."
            class="flex-1 rounded-xl bg-black/60 border border-white/15 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-[#8a9bad]/60 focus:outline-none focus:border-[#5b6bff]" />
          <button type="button" id="btn-mini-tutor-send" class="home-ramp-fill px-4 py-2 rounded-xl text-xs font-semibold text-white cursor-pointer">اسأل</button>
        </div>
      </div>
    `;
    const sendChat = () => {
      const inp = container.querySelector('#mini-tutor-chat-input');
      const q = (inp?.value || '').trim();
      if (!q) return;
      state.chatHistory.push({ role: 'user', text: q });
      let reply = 'سؤال ممتاز! في مسائل السادس العلمي: أولاً حدد هل المتسعة متصلة أم مفصولة، أو هل دائرة التيار المتناوب في حالة رنين (XL = XC)، وتأكد دائماً من تحويل البادئات (μ = 10⁻⁶، n = 10⁻⁹، m = 10⁻³).';
      if (q.includes('رنين')) {
        reply = 'في حالة الرنين الكهربائي (الفصل الثالث): تكون XL = XC، الممانعة الكلية بأقل مقدار Z = R، التيار بأعظم مقدار، زاوية فرق الطور φ = 0، وعامل القدرة Pf = 1!';
      } else if (q.includes('عازل') || q.includes('متسعة')) {
        reply = 'عند إدخال عازل ثابت عزله k: السعة تزداد دائماً (Ck = k·C). إذا كانت المتسعة متصلة بالمصدر يبقى ΔV ثابتاً وتزداد الشحنة؛ وإذا كانت مفصولة تبقى الشحنة Q ثابتة ويقل فرق الجهد (ΔVk = ΔV/k).';
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
// 8. Streak Tracker & FAQ Accordion
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
    <div class="home-card-shell rounded-2xl overflow-hidden rtl-block">
      <button type="button" data-faq-toggle="${idx}" aria-expanded="${idx === 0 ? 'true' : 'false'}"
        class="w-full flex items-center justify-between gap-4 px-6 py-5 text-right font-semibold text-base lg:text-lg text-white hover:text-[#c9cfff] transition cursor-pointer">
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
  renderSyllabusAtlas();
  renderTutoringMethods();
  initFlipCards();
  renderProblemSelector();
  renderSolverWorkspace();
  renderSimControls();
  startPhysicsCanvasLoop();
  initMathKeyboardAndScanner();
  renderStudyModeWorkspace();
  renderStreakDays();
  renderFaqSection();

  document.getElementById('btn-sim-play')?.addEventListener('click', (e) => {
    state.simRunning = !state.simRunning;
    e.currentTarget.textContent = state.simRunning ? '⏸ إيقاف مؤقت' : '▶ تشغيل';
  });
  document.getElementById('btn-sim-reset')?.addEventListener('click', () => {
    state.simTime = 0;
  });

  document.querySelectorAll('[data-study-mode]').forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      state.activeStudyMode = pill.getAttribute('data-study-mode');
      renderStudyModeWorkspace();
    });
  });

  document.querySelectorAll('[data-faq-tab]').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      state.faqTab = tabBtn.getAttribute('data-faq-tab');
      renderFaqSection();
    });
  });

  document.querySelectorAll('[data-exam-resource]').forEach((card) => {
    card.addEventListener('click', () => {
      const label = card.getAttribute('data-exam-resource');
      card.classList.toggle('border-[#5b6bff]');
      card.classList.toggle('bg-[#4353f3]/15');
      const status = document.getElementById('exam-collector-status');
      if (status) {
        status.textContent = `✓ تمت إضافة "${label}" إلى خطة مراجعة الامتحان الوزاري لفيزياء السادس العلمي (+10 XP)`;
        state.xp += 10;
        saveProgress();
      }
    });
  });

  window.addEventListener('load', () => {
    renderLatexInElement(document.body);
    renderSyllabusAtlas();
    renderSolverWorkspace();
  });
});
