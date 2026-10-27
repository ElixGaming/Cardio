// js/translations.js
const translations = {
    fr: {
        // --- CONFIG GÉNÉRALE ---
        lang_label: "FR",
        lang_ar: "العربية",
        dir: "ltr",
        site_title: "Cabinet de Cardiologie - Dr. Slim Chtourou - Sfax",
        meta_desc: "Cabinet de cardiologie du Dr. Slim Chtourou à Sfax (Tunisie). Consultations, Écho-Doppler, Épreuve d'effort, Holter, Prévention. RDV en ligne.",

        // --- NAVIGATION ---
        nav_accueil: "Accueil",
        nav_services: "Services",
        nav_conseils: "Conseils",
        nav_rdv: "Rendez-vous",

        // --- HERO (ACCUEIL) ---
        hero_title: "Dr. Slim Chtourou",
        hero_subtitle: "Médecin Cardiologue - Cardiologue Interventionnel",
        hero_tagline: "Votre santé cardiaque, notre priorité absolue.",
        hero_btn_rdv: "Prendre RDV",
        hero_btn_tel: "Appeler le cabinet",

        // --- INFOS CABINET (SFAX) ---
        cabinet_title: "Informations du Cabinet",
        address_label: "Adresse :",
        // ADRESSE COMPLÈTE INTÉGRÉE
        address_text: "Avenue Magida Boulila, Immeuble Lafrane Centre<br>1er étage, Bureau 3<br>Sfax El Jadida 3027, Sfax, Tunisie",
        phone_label: "Téléphone :",
        // ⚠️ REMPLACE +216 XX XXX XXX PAR TON VRAI NUMÉRO
        phone_text: "+216 74 240 844",
        email_label: "Email :",
        // ⚠️ REMPLACE PAR TON VRAI EMAIL
        email_text: "votre.email@domaine.tn",
        hours_label: "Horaires d'ouverture :",
        hours_mon_fri: "Lundi - Vendredi : 08h30 - 16h00",
        hours_sat: "Samedi : 08h00 - 13h30",
        hours_sun: "Dimanche : Fermé",

        // --- SERVICES ---
        services_title: "Nos Services & Examens",
        services_subtitle: "Une prise en charge complète et moderne des pathologies cardiovasculaires au cabinet et en milieu hospitalier partenaire.",
        service_1_title: "Consultation Cardiologique",
        service_1_desc: "Évaluation clinique complète, facteurs de risque, bilan pré-opératoire, avis spécialisé.",
        service_2_title: "Échocardiographie (Écho-Doppler)",
        service_2_desc: "Transthoracique & Transœsophagienne. Analyse fonction ventriculaire, valvulaire, péricardique, masses.",
        service_3_title: "Épreuve d'Effort (Test d'Effort)",
        service_3_desc: "Dépistage ischémie coronaire, évaluation capacité fonctionnelle (VO2 max), troubles rythme à l'effort.",
        service_4_title: "Holter ECG & MAPA",
        service_4_desc: "Holter Rythme (24h-7j) & Holter Tensionnel (MAPA 24h). Diagnostic arythmies, HTA masquée/bascule blanche.",
        service_5_title: "Suivi Insuffisance Cardiaque / Post-Infarctus",
        service_5_desc: "Optimisation thérapeutique guidée (ARNI, SGLT2, Bêta-bloquants, MRA), éducation thérapeutique, réadaptation, télésurveillance.",
        service_6_title: "Cardiologie Interventionnelle (Coronarographie / Angioplastie)",
        service_6_desc: "Réalisée en milieu hospitalier partenaire (Clinique/Hôpital Sfax). Pose stents, lésions complexes, CTO.",

        // --- CONSEILS (CONTENU MÉDICAL VALIDÉ ESC 2024) ---
        conseils_title: "Conseils de Prévention Cardiovasculaire",
        conseils_subtitle: "Recommandations basées sur les guidelines ESC (Société Européenne de Cardiologie) 2024.",
        conseil_1_title: "1. Contrôlez votre Pression Artérielle",
        conseil_1_text: "Cible < 130/80 mmHg (selon profil). Mesurez chez vous (auto-mesure validée : 3 mesures matin, 3 soir, 3 jours). HTA mal contrôlée = 1er facteur AVC & Insuffisance Cardiaque.",
        conseil_2_title: "2. Bougez : 150 min/semaine d'activité modérée",
        conseil_2_text: "Marche rapide, vélo, natation. Sédentarité = facteur risque indépendant. Même 10 min/jour comptent. Renforcement musculaire 2x/semaine.",
        conseil_3_title: "3. Adoptez le régime Méditerranéen",
        conseil_3_text: "Huile d'olive, fruits/légumes à chaque repas, poisson 2-3x/sem, légumineuses, noix (30g/j), peu viande rouge, ZÉRO ultra-transformé. Réduit mortalité CV de 30%.",
        conseil_4_title: "4. Stoppez le Tabac (et la Vape)",
        conseil_4_text: "1 cig/jour = 50% risque gros fumeur. Sevrage divise risque infarctus par 2 à 1 an. Aide médicale (substituts, varénicline, soutien) = 3x plus de succès.",
        conseil_5_title: "5. Connaissez votre LDL-Cholestérol (Cible < 1.0 g/L ou < 0.55 g/L si très haut risque)",
        conseil_5_text: "Ce n'est pas le 'cholestérol total' qui compte, mais le LDL. Si antécédents (infarctus, AVC, artérite) : cible < 0.55 g/L (1.4 mmol/L). Statines + Ézétimibe + Inclisiran/PCSK9 si besoin.",
        conseil_6_title: "6. Dépistez le Diabète & la Dyslipidémie tôt",
        conseil_6_text: "HbA1c, profil lipidique, glycémie à jeun dès 40 ans (ou avant si antécédents familiaux). Pré-diabète & hypercholestérolémie familiale sont silencieux mais traitables.",
        conseil_7_title: "7. Sommeil & Stress : Les oubliés",
        conseil_7_text: "Apnée non traitée = HTA résistante, FA, infarctus. Ronflements + fatigue matinale = Polysomnographie. Stress chronique : Cohérence cardiaque (365 : 3x/j, 6 resp/min, 5 min), activité, thérapies brèves.",

        // --- RDV ---
        rdv_title: "Prise de Rendez-Vous",
        rdv_subtitle: "Choisissez le mode qui vous convient le mieux.",
        rdv_online_title: "En Ligne (Med.tn)",
        rdv_online_text: "Disponible 24h/24. Confirmation immédiate SMS/Email. Rappel auto 48h avant. Gestion annulation/report facile.",
        rdv_online_btn: "Accéder à la plateforme",
        rdv_phone_title: "Par Téléphone",
        rdv_phone_text: "Notre secrétariat est joignable aux horaires d'ouverture pour les urgences ou besoins spécifiques.",
        rdv_phone_btn: "Appeler maintenant",
        rdv_emergency: "🚨 URGENCE VITALE (Douleur thoracique, essoufflement brutal, malaise, paralysie) : Composez le 190 (SAMU Tunisie) ou 112 (Urgences Européennes). N'appelez pas le cabinet, perdez pas de temps.",

        // --- FOOTER ---
        footer_copyright: "© 2026 Dr. Slim Chtourou - Tous droits réservés.",
        footer_mentions: "Mentions Légales | Protection Données (Loi 2004-63) | Hébergeur : [VOTRE HÉBERGEUR]"
    },
    ar: {
        // --- CONFIG GÉNÉRALE ---
        lang_label: "العربية",
        lang_ar: "FR",
        dir: "rtl",
        site_title: "عيادة أمراض القلب - د. [اسمك الكامل] - صفاقس",
        meta_desc: "عيادة أمراض القلب للدكتور [اسمك] بصفاقس (تونس). استشارات، صدى قلب، اختبار جهد، هولتر، وقاية. حجز مواعيد عبر الإنترنت.",

        // --- NAVIGATION ---
        nav_accueil: "الرئيسية",
        nav_services: "خدماتنا",
        nav_conseils: "نصائح طبية",
        nav_rdv: "حجز موعد",

        // --- HERO ---
        hero_title: "الدكتور سليم شطورو",
        hero_subtitle: "طبيب أخصائي في أمراض القلب - قسطرة قلبية",
        hero_tagline: "صحة قلبك، أولويتنا المطلقة.",
        hero_btn_rdv: "حجز موعد",
        hero_btn_tel: "الاتصال بالعيادة",

        // --- INFOS CABINET (SFAX) ---
        cabinet_title: "معلومات العيادة",
        address_label: "العنوان :",
        // ADRESSE EN ARABE LITTÉRAIRE (Ordre logique RTL)
        address_text: "شارع مجيدة بوليلة، عمارة لافران سنتر
الطابق الأول، مكتب رقم 3
صفاقس الجديدة 3027، صفاقس، تونس",
        phone_label: "الهاتف :",
        phone_text: "+216 74 240 844",
        email_label: "البريد الإلكتروني :",
        email_text: "بريدك@النطاق.tn",
        hours_label: "أوقات العمل :",
        hours_mon_fri: "الإثنين - الجمعة : 08:30 - 16:00",
        hours_sat: "السبت : 08:30 - 13:30",
        hours_sun: "الأحد : مغلق",

        // --- SERVICES ---
        services_title: "خدماتنا و فحوصاتنا",
        services_subtitle: "تكامل شامل و حديث لأمراض القلب و الأوعية الدموية بالعيادة و بالمستشفى الشريك.",
        service_1_title: "استشارة قلبية شاملة",
        service_1_desc: "تقييم سريري كامل، عوامل الخطر، تقييم ما قبل الجراحة، رأي اختصاصي.",
        service_2_title: "مخطط صدى القلب (دوبلر)",
        service_2_desc: "عبر الصدر و عبر المريء. تحليل الوظيفة البطينية، الصمامية، التامورية، الكتل القلبية.",
        service_3_title: "اختبار الجهد (إpreuve d'effort)",
        service_3_desc: "كشف نقص تروية الشرايين التاجية، تقييم القدرة الوظيفية (VO2 max)، اضطرابات النظم أثناء الجهد.",
        service_4_title: "هولتر إيقاع و خريطة توتر (MAPA)",
        service_4_desc: "هولتر نظم (24س-7أ) و هولتر توتر (MAPA 24س). تشخيص اضطرابات النظم و ارتفاع التوتر المقنع/القمصان الأبيض.",
        service_5_title: "متابعة قصور القلب / ما بعد الاحتشاق",
        service_5_desc: "تحسين العلاج الموجه (ARNI, SGLT2, بيتا بلوكر, MRA)، التربية العلاجية، إعادة التأهيل، المراقبة عن بعد.",
        service_6_title: "قسطرة قلبية تشخيصية و علاجية",
        service_6_desc: "تجرى في مستشفى شريك (مصحة/مستشفى صفاقس). وضع دعامات، علاج التضيقات المعقدة، CTO.",

        // --- CONSEILS ---
        conseils_title: "نصائح للوقاية القلبية الوعائية",
        conseils_subtitle: "توصيات مبنية على توجيهات الجمعية الأوروبية لأمراض القلب (ESC) 2024.",
        conseil_1_title: "1. راقب ضغطك الشرياني",
        conseil_1_text: "الهدف < 130/80 ملم زئبق (حسب الملف). قسه בביתك (قياس ذاتي معتمد: 3 قياسات صباحاً، 3 مساءً، 3 أيام متتالية). ارتفاع ضغط الدم غير المتوازن هو العامل الأول للسكتة و قصور القلب.",
        conseil_2_title: "2. حرّك نفسك: 150 دقيقة/أسبوع نشاط معتدل",
        conseil_2_text: "مشي سريع، دراجة، سباحة. الخمول عامل خطر مستقل. حتى 10 دقائق يومياً تُحسب. أدخل تقوية عضلية مرتين أسبوعياً.",
        conseil_3_title: "3. اعتمد النظام الغذائي المتوسطي",
        conseil_3_text: "زيت زيتون، فواكه/خضروات بكل وجبة، سمك 2-3 مرات/أسبوع، بقوليات، مكسرات (30غ/يوم)، لحم أحمر قليل، صفر أطعمة فائقة التحول. يقلل الوفيات القلبية 30%.",
        conseil_4_title: "4. أقلع عن التدخين (و الفيب)",
        conseil_4_text: "سيجارة واحدة/يوم = 50% خطر مدخن شره. الإقلاع يقسم خطر الاحتشاء على 2 خلال سنة. تكلم مع طبيبك: بدائل النيكوتين، فارينيكلين، دعم نفسي = نجاح 3 مرات أكثر.",
        conseil_5_title: "5. اعرف كوليسترول LDL هدفك (< 1.0 غ/ل أو < 0.55 غ/ل إذا خطر عالي جداً)",
        conseil_5_text: "ليس 'الكوليسترول الكلي' المهم، بل LDL. إذا كان لديك تاريخ (احتشاء، سكتة، شرياني)، الهدف صارم جداً (< 0.55 غ/ل / 1.4 مليمول/ل). ستاتينات + إزيتيميب + إنكلسيران/مثبطات PCSK9 إن لزم.",
        conseil_6_title: "6. افحص السكري و شحوم الدم باكراً",
        conseil_6_text: "HbA1c، بروفييل دهني، سكرية صيام من 40 سنة (أو قبل إذا تاريخ عائلي). ما قبل السكري و فرط كوليسترول الدم العائلي صامتان لكن قابلتان للعلاج.",
        conseil_7_title: "7. النوم و التوتر: المنسيان",
        conseil_7_text: "انقطاع النفس النومي غير المعالج = ارتفاع ضغط مقاوم، رجفان أذيني، احتشاء. شخير + تعب صباحي = تخطيط نوم. توتر مزمن: تماسك قلبي (365: 3 مرات/يوم، 6 نفس/دقيقة، 5 دقائق)، رياضة، علاجات مختصرة.",

        // --- RDV ---
        rdv_title: "حجز المواعيد",
        rdv_subtitle: "اختر الطريقة التي تناسبك.",
        rdv_online_title: "عبر الإنترنت (Med.tn)",
        rdv_online_text: "متاح 24س/24. تأكيد فوري عبر رسالة قصيرة/بريد. تذكير آلي قبل 48 ساعة. إدارة إلغاء/تأجيل سهلة.",
        rdv_online_btn: "الوصول للمنصة",
        rdv_phone_title: "عبر الهاتف",
        rdv_phone_text: "سكرتيرتنا متاحة خلال أوقات العمل للحالات المستعجلة أو الاحتياجات الخاصة.",
        rdv_phone_btn: "اتصل الآن",
        rdv_emergency: "🚨 طوارئ حيوية (ألم صدري، ضيق تنفس مفاجئ، إغماء، شلل) : اتصل بـ 190 (SAMU تونس) أو 112 (طوارئ أوروبية). لا تتصل بالعيادة، لا تضيع الوقت.",

        // --- FOOTER ---
        footer_copyright: "© 2026 الدكتور سليم شطورو - جميع الحقوق محفوظة",
        footer_mentions: "الإشعارات القانونية | حماية البيانات (قانون 2004-63) | المستضيف: [اسم المستضيف]"
    }
};

// Fonction d'application (NE PAS TOUCHER)
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = t.site_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta_desc);

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = t.lang_label;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });
}
