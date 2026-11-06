/* AI Video Quiz — contenu et affichage des pages légales (FR / EN / AR).
   Pages : privacy.html, terms.html, legal-notice.html, cookies.html, contact.html
   Pour modifier un texte (ex. l'e-mail de contact), il suffit de le changer ici, une seule fois. */
(function () {
  'use strict';

  var PAGES = {
    "fr": {
        "privacy": {
            "kicker": "CONFIDENTIALITE",
            "title": "Politique de confidentialite",
            "lead": "Cette page explique de maniere generale quelles donnees AI Video Quiz peut traiter et dans quel but.",
            "blocks": [
                [
                    "1. Donnees de compte",
                    "Lors de la creation d un compte, le service traite notamment l adresse e-mail et les informations necessaires a l authentification."
                ],
                [
                    "2. Donnees de jeu",
                    "Le service peut enregistrer le score total et, lorsque la fonctionnalite sera activee, l historique des videos jouees, les resultats et les evaluations associees."
                ],
                [
                    "3. Firebase",
                    "L authentification et certaines donnees du compte sont gerees avec Firebase Authentication et Firestore. Les donnees sont associees au compte Firebase de l utilisateur."
                ],
                [
                    "4. Videos YouTube",
                    "Les videos sont diffusees depuis YouTube. Lorsque vous utilisez le lecteur YouTube integre, YouTube peut traiter certaines informations selon ses propres conditions et politiques."
                ],
                [
                    "5. Questions generees par IA",
                    "Pour generer les questions, des informations issues de la video, notamment son texte disponible, peuvent etre transmises au service d intelligence artificielle utilise par AI Video Quiz."
                ],
                [
                    "6. Finalites",
                    "Les donnees sont utilisees pour permettre la connexion, sauvegarder le score, faire fonctionner le jeu, ameliorer le service et repondre aux demandes d assistance."
                ],
                [
                    "7. Conservation",
                    "Les donnees sont conservees pendant la periode necessaire au fonctionnement du compte et aux finalites indiquees, sous reserve des obligations legales applicables."
                ],
                [
                    "8. Vos demandes",
                    "Pour demander l acces, la correction ou la suppression de donnees associees a votre compte, contactez l editeur a l adresse indiquee sur la page Contact."
                ],
                [
                    "9. Securite",
                    "Des mesures techniques et organisationnelles sont mises en place pour proteger les donnees. Aucun systeme en ligne ne peut toutefois garantir une securite absolue."
                ],
                [
                    "10. Mise a jour",
                    "Cette politique peut etre mise a jour lorsque le fonctionnement du service evolue. La date de derniere mise a jour doit etre indiquee lors de la publication."
                ]
            ]
        },
        "terms": {
            "kicker": "CONDITIONS",
            "title": "Conditions d utilisation",
            "lead": "Les presentes conditions encadrent l utilisation de AI Video Quiz.",
            "blocks": [
                [
                    "1. Utilisation du service",
                    "AI Video Quiz permet de regarder des videos YouTube et de repondre a des questions generees a partir de leur contenu."
                ],
                [
                    "2. Compte",
                    "L utilisateur est responsable de l exactitude des informations fournies lors de la creation du compte et de la confidentialite de ses identifiants."
                ],
                [
                    "3. Regles du jeu",
                    "Le systeme de points est celui affiche dans le service : une manche rapporte 1 point lorsque les quatre reponses sont correctes, et 0 point dans les autres cas."
                ],
                [
                    "4. Contenu YouTube",
                    "Les videos sont fournies par YouTube. L utilisateur doit respecter les conditions applicables a l utilisation du lecteur et du contenu YouTube."
                ],
                [
                    "5. Questions generees par IA",
                    "Les questions sont generees automatiquement a partir du contenu disponible. Elles sont fournies a des fins de jeu et d apprentissage et ne constituent pas une garantie d exactitude."
                ],
                [
                    "6. Utilisations interdites",
                    "Il est interdit d utiliser le service pour tenter d acceder aux comptes d autrui, contourner les mesures de securite, perturber le service ou utiliser le site d une maniere contraire aux lois applicables."
                ],
                [
                    "7. Disponibilite",
                    "AI Video Quiz peut etre modifie, suspendu ou interrompu temporairement pour maintenance, securite ou evolution technique."
                ],
                [
                    "8. Compte et donnees",
                    "L utilisateur peut demander la suppression de son compte et des donnees associees en utilisant les coordonnees de contact publiees."
                ],
                [
                    "9. Modifications",
                    "Les conditions peuvent etre mises a jour lorsque le service evolue. La version publiee sur le site constitue la version applicable a compter de sa date d entree en vigueur."
                ]
            ]
        },
        "legal": {
            "kicker": "MENTIONS LEGALES",
            "title": "Mentions legales",
            "lead": "Les informations ci-dessous doivent etre completees avec les informations legales reelles de l editeur avant la mise en production.",
            "blocks": [
                [
                    "Editeur du site",
                    "Nom / raison sociale : <span class=\"legal-placeholder\">[A RENSEIGNER]</span><br>Adresse : <span class=\"legal-placeholder\">[A RENSEIGNER]</span><br>E-mail : <span class=\"legal-placeholder\">[A RENSEIGNER]</span>"
                ],
                [
                    "Responsable de publication",
                    "Nom : <span class=\"legal-placeholder\">[A RENSEIGNER]</span>"
                ],
                [
                    "Hebergement",
                    "Interface web : GitHub Pages.<br>API : Railway.<br>Authentification et donnees du compte : Firebase / Google Cloud."
                ],
                [
                    "Videos",
                    "Les videos sont diffusees depuis YouTube au moyen de son lecteur integre. AI Video Quiz ne revendique pas la propriete des videos diffusees par des tiers."
                ],
                [
                    "Important",
                    "Les champs entre crochets doivent etre remplaces par les informations exactes de l editeur et adaptes aux exigences legales du pays ou le service est exploite."
                ]
            ]
        },
        "cookies": {
            "kicker": "COOKIES",
            "title": "Cookies et technologies similaires",
            "lead": "AI Video Quiz peut utiliser des cookies, le stockage local du navigateur et des technologies de session pour faire fonctionner le service.",
            "blocks": [
                [
                    "Stockage local",
                    "Le site peut utiliser le stockage local du navigateur pour conserver certaines preferences d interface, par exemple la langue choisie."
                ],
                [
                    "Authentification",
                    "Firebase Authentication peut utiliser des mecanismes necessaires au maintien de la session de connexion."
                ],
                [
                    "Lecteur YouTube",
                    "Le lecteur YouTube integre peut utiliser des cookies ou technologies similaires selon le fonctionnement et les parametres de YouTube."
                ],
                [
                    "Gestion des preferences",
                    "Les preferences du navigateur peuvent permettre de limiter ou supprimer certains cookies. La desactivation de mecanismes necessaires peut toutefois affecter certaines fonctions du site."
                ],
                [
                    "Mise a jour",
                    "Cette page doit etre ajustee si de nouveaux outils d analyse, de publicite ou de suivi sont ajoutes au service."
                ]
            ]
        },
        "contact": {
            "kicker": "CONTACT",
            "title": "Contactez AI Video Quiz",
            "lead": "Pour une question, un probleme technique ou une demande concernant vos donnees, utilisez les coordonnees officielles du service.",
            "blocks": [
                [
                    "Support",
                    "Adresse e-mail : <span class=\"legal-placeholder\">[EMAIL DE CONTACT A RENSEIGNER]</span>"
                ],
                [
                    "Probleme technique",
                    "Indiquez votre adresse e-mail de compte, le probleme rencontre et, si possible, une capture d ecran. Ne communiquez jamais votre mot de passe."
                ],
                [
                    "Demande relative aux donnees",
                    "Pour demander une information, une correction ou la suppression de donnees associees a votre compte, utilisez l adresse de contact officielle du service."
                ],
                [
                    "Informations a renseigner",
                    "Avant publication, remplacez les champs entre crochets par les coordonnees reelles de l editeur."
                ]
            ]
        }
    },
    "en": {
        "privacy": {
            "kicker": "PRIVACY",
            "title": "Privacy Policy",
            "lead": "This page generally explains what data AI Video Quiz may process and why.",
            "blocks": [
                [
                    "1. Account data",
                    "When you create an account, the service processes information such as your email address and data required for authentication."
                ],
                [
                    "2. Game data",
                    "The service may store your total score and, when enabled, your played-video history, results and related evaluations."
                ],
                [
                    "3. Firebase",
                    "Authentication and some account data are handled with Firebase Authentication and Firestore and associated with your Firebase user account."
                ],
                [
                    "4. YouTube videos",
                    "Videos are streamed from YouTube. When you use the embedded YouTube player, YouTube may process certain information under its own terms and policies."
                ],
                [
                    "5. AI-generated questions",
                    "To generate questions, information from the video, including available text, may be sent to the artificial intelligence service used by AI Video Quiz."
                ],
                [
                    "6. Purposes",
                    "Data is used to provide login, save scores, operate the game, improve the service and respond to support requests."
                ],
                [
                    "7. Retention",
                    "Data is retained for as long as needed for the account and stated purposes, subject to applicable legal requirements."
                ],
                [
                    "8. Your requests",
                    "To request access, correction or deletion of account data, contact the publisher using the address on the Contact page."
                ],
                [
                    "9. Security",
                    "Technical and organizational measures are used to protect data. No online system can guarantee absolute security."
                ],
                [
                    "10. Updates",
                    "This policy may be updated when the service changes. A last-updated date should be added when the page is published."
                ]
            ]
        },
        "terms": {
            "kicker": "TERMS",
            "title": "Terms of Use",
            "lead": "These terms govern the use of AI Video Quiz.",
            "blocks": [
                [
                    "1. Service use",
                    "AI Video Quiz lets users watch YouTube videos and answer questions generated from their content."
                ],
                [
                    "2. Account",
                    "Users are responsible for the accuracy of information provided when creating an account and for keeping their credentials confidential."
                ],
                [
                    "3. Game rules",
                    "The scoring system displayed by the service applies: a round gives 1 point when all four answers are correct, and 0 points otherwise."
                ],
                [
                    "4. YouTube content",
                    "Videos are provided by YouTube. Users must comply with the terms applicable to use of the YouTube player and content."
                ],
                [
                    "5. AI questions",
                    "Questions are automatically generated from available content. They are provided for game and learning purposes and are not a guarantee of factual accuracy."
                ],
                [
                    "6. Prohibited use",
                    "Users must not attempt to access other users accounts, bypass security measures, disrupt the service or use the site in violation of applicable laws."
                ],
                [
                    "7. Availability",
                    "AI Video Quiz may be modified, temporarily suspended or interrupted for maintenance, security or technical changes."
                ],
                [
                    "8. Account and data",
                    "Users may request account and associated data deletion using the published contact details."
                ],
                [
                    "9. Changes",
                    "These terms may be updated when the service changes. The version published on the site applies from its effective date."
                ]
            ]
        },
        "legal": {
            "kicker": "LEGAL NOTICE",
            "title": "Legal Notice",
            "lead": "The information below must be completed with the publisher s actual legal details before launch.",
            "blocks": [
                [
                    "Site publisher",
                    "Name / company: <span class=\"legal-placeholder\">[TO BE COMPLETED]</span><br>Address: <span class=\"legal-placeholder\">[TO BE COMPLETED]</span><br>Email: <span class=\"legal-placeholder\">[TO BE COMPLETED]</span>"
                ],
                [
                    "Publication manager",
                    "Name: <span class=\"legal-placeholder\">[TO BE COMPLETED]</span>"
                ],
                [
                    "Hosting",
                    "Web interface: GitHub Pages.<br>API: Railway.<br>Authentication and account data: Firebase / Google Cloud."
                ],
                [
                    "Videos",
                    "Videos are displayed through the embedded YouTube player. AI Video Quiz does not claim ownership of third-party videos."
                ],
                [
                    "Important",
                    "Replace bracketed fields with the publisher s exact information and adapt this page to the legal requirements of the country where the service operates."
                ]
            ]
        },
        "cookies": {
            "kicker": "COOKIES",
            "title": "Cookies and Similar Technologies",
            "lead": "AI Video Quiz may use cookies, browser local storage and session technologies needed to operate the service.",
            "blocks": [
                [
                    "Local storage",
                    "The site may use browser local storage to keep interface preferences such as the selected language."
                ],
                [
                    "Authentication",
                    "Firebase Authentication may use mechanisms needed to maintain the login session."
                ],
                [
                    "YouTube player",
                    "The embedded YouTube player may use cookies or similar technologies depending on YouTube s operation and settings."
                ],
                [
                    "Managing preferences",
                    "Browser settings may allow you to limit or delete certain cookies. Disabling necessary mechanisms may affect some site features."
                ],
                [
                    "Updates",
                    "This page should be updated if analytics, advertising or additional tracking tools are added."
                ]
            ]
        },
        "contact": {
            "kicker": "CONTACT",
            "title": "Contact AI Video Quiz",
            "lead": "For a question, technical issue or request about your data, use the official service contact details.",
            "blocks": [
                [
                    "Support",
                    "Email address: <span class=\"legal-placeholder\">[CONTACT EMAIL TO BE ADDED]</span>"
                ],
                [
                    "Technical issue",
                    "Include your account email, the problem you encountered and, if possible, a screenshot. Never share your password."
                ],
                [
                    "Data request",
                    "To request information, correction or deletion of data associated with your account, use the official contact address."
                ],
                [
                    "Before publication",
                    "Replace the bracketed fields with the real publisher contact details."
                ]
            ]
        }
    },
    "ar": {
        "privacy": {
            "kicker": "الخصوصية",
            "title": "سياسة الخصوصية",
            "lead": "توضح هذه الصفحة بشكل عام البيانات التي قد يعالجها AI Video Quiz والغرض من استخدامها.",
            "blocks": [
                [
                    "1. بيانات الحساب",
                    "عند إنشاء حساب، تتم معالجة معلومات مثل عنوان البريد الإلكتروني والبيانات اللازمة للمصادقة."
                ],
                [
                    "2. بيانات اللعب",
                    "قد يتم حفظ مجموع النقاط، وعند تفعيل الميزة، سجل الفيديوهات التي تم لعبها والنتائج والتقييمات المرتبطة بها."
                ],
                [
                    "3. Firebase",
                    "تتم إدارة المصادقة وبعض بيانات الحساب باستخدام Firebase Authentication وFirestore وربطها بحساب Firebase الخاص بالمستخدم."
                ],
                [
                    "4. فيديوهات YouTube",
                    "يتم تشغيل الفيديوهات من YouTube. عند استخدام مشغل YouTube المدمج، قد يعالج YouTube بعض المعلومات وفقا لشروطه وسياساته الخاصة."
                ],
                [
                    "5. الأسئلة المولدة بالذكاء الاصطناعي",
                    "لتوليد الأسئلة، قد يتم إرسال معلومات من الفيديو، بما في ذلك النص المتاح، إلى خدمة الذكاء الاصطناعي المستخدمة من طرف AI Video Quiz."
                ],
                [
                    "6. الأغراض",
                    "تستخدم البيانات لتوفير تسجيل الدخول وحفظ النقاط وتشغيل اللعبة وتحسين الخدمة والرد على طلبات الدعم."
                ],
                [
                    "7. مدة الاحتفاظ",
                    "يتم الاحتفاظ بالبيانات للمدة اللازمة لتشغيل الحساب وتحقيق الأغراض المذكورة، مع مراعاة المتطلبات القانونية المطبقة."
                ],
                [
                    "8. طلباتك",
                    "لطلب الوصول إلى البيانات أو تصحيحها أو حذفها، تواصل مع الناشر عبر العنوان الموجود في صفحة الاتصال."
                ],
                [
                    "9. الأمان",
                    "يتم استخدام إجراءات تقنية وتنظيمية لحماية البيانات، لكن لا يمكن ضمان أمان مطلق لأي نظام متصل بالإنترنت."
                ],
                [
                    "10. التحديثات",
                    "قد يتم تحديث هذه السياسة عند تغيير الخدمة. يجب إضافة تاريخ آخر تحديث عند نشر الصفحة."
                ]
            ]
        },
        "terms": {
            "kicker": "الشروط",
            "title": "شروط الاستخدام",
            "lead": "تنظم هذه الشروط استخدام AI Video Quiz.",
            "blocks": [
                [
                    "1. استخدام الخدمة",
                    "يسمح AI Video Quiz للمستخدمين بمشاهدة فيديوهات YouTube والإجابة عن أسئلة مولدة من محتواها."
                ],
                [
                    "2. الحساب",
                    "المستخدم مسؤول عن صحة المعلومات التي يقدمها عند إنشاء الحساب وعن الحفاظ على سرية بيانات الدخول."
                ],
                [
                    "3. قواعد اللعبة",
                    "يطبق نظام النقاط المعروض في الخدمة: تمنح الجولة نقطة واحدة عند صحة الإجابات الأربع، وصفر في الحالات الأخرى."
                ],
                [
                    "4. محتوى YouTube",
                    "يتم توفير الفيديوهات بواسطة YouTube. يجب على المستخدم احترام الشروط المطبقة على استخدام مشغل ومحتوى YouTube."
                ],
                [
                    "5. أسئلة الذكاء الاصطناعي",
                    "يتم توليد الأسئلة تلقائيا من المحتوى المتاح. وهي مخصصة للعب والتعلم ولا تشكل ضمانا للدقة الواقعية."
                ],
                [
                    "6. الاستخدامات الممنوعة",
                    "يمنع محاولة الوصول إلى حسابات الآخرين أو تجاوز إجراءات الأمان أو تعطيل الخدمة أو استخدام الموقع بما يخالف القوانين المطبقة."
                ],
                [
                    "7. توفر الخدمة",
                    "قد يتم تعديل AI Video Quiz أو تعليقه أو إيقافه مؤقتا لأسباب تتعلق بالصيانة أو الأمان أو التطوير التقني."
                ],
                [
                    "8. الحساب والبيانات",
                    "يمكن للمستخدم طلب حذف الحساب والبيانات المرتبطة به باستخدام معلومات الاتصال المنشورة."
                ],
                [
                    "9. التعديلات",
                    "قد يتم تحديث هذه الشروط عند تغيير الخدمة، وتصبح النسخة المنشورة على الموقع سارية من تاريخ نفاذها."
                ]
            ]
        },
        "legal": {
            "kicker": "إشعار قانوني",
            "title": "الإشعارات القانونية",
            "lead": "يجب استكمال المعلومات التالية بالبيانات القانونية الحقيقية للناشر قبل إطلاق الموقع.",
            "blocks": [
                [
                    "ناشر الموقع",
                    "الاسم / الشركة: <span class=\"legal-placeholder\">[يتم الاستكمال]</span><br>العنوان: <span class=\"legal-placeholder\">[يتم الاستكمال]</span><br>البريد الإلكتروني: <span class=\"legal-placeholder\">[يتم الاستكمال]</span>"
                ],
                [
                    "مسؤول النشر",
                    "الاسم: <span class=\"legal-placeholder\">[يتم الاستكمال]</span>"
                ],
                [
                    "الاستضافة",
                    "واجهة الموقع: GitHub Pages.<br>واجهة API: Railway.<br>المصادقة وبيانات الحساب: Firebase / Google Cloud."
                ],
                [
                    "الفيديوهات",
                    "يتم عرض الفيديوهات عبر مشغل YouTube المدمج. لا يدعي AI Video Quiz ملكية فيديوهات الجهات الأخرى."
                ],
                [
                    "مهم",
                    "استبدل الحقول بين الأقواس بالمعلومات الدقيقة للناشر وكيّف هذه الصفحة مع المتطلبات القانونية في البلد الذي تعمل فيه الخدمة."
                ]
            ]
        },
        "cookies": {
            "kicker": "ملفات الارتباط",
            "title": "ملفات الارتباط والتقنيات المشابهة",
            "lead": "قد يستخدم AI Video Quiz ملفات الارتباط والتخزين المحلي للمتصفح وتقنيات الجلسات اللازمة لتشغيل الخدمة.",
            "blocks": [
                [
                    "التخزين المحلي",
                    "قد يستخدم الموقع التخزين المحلي للمتصفح لحفظ بعض تفضيلات الواجهة مثل اللغة المختارة."
                ],
                [
                    "المصادقة",
                    "قد تستخدم Firebase Authentication آليات ضرورية للحفاظ على جلسة تسجيل الدخول."
                ],
                [
                    "مشغل YouTube",
                    "قد يستخدم مشغل YouTube المدمج ملفات ارتباط أو تقنيات مشابهة حسب طريقة عمل YouTube وإعداداته."
                ],
                [
                    "إدارة التفضيلات",
                    "يمكن لإعدادات المتصفح أن تسمح بالحد من بعض ملفات الارتباط أو حذفها. وقد يؤثر تعطيل الآليات الضرورية على بعض وظائف الموقع."
                ],
                [
                    "التحديثات",
                    "يجب تحديث هذه الصفحة إذا تمت إضافة أدوات تحليل أو إعلانات أو تقنيات تتبع إضافية."
                ]
            ]
        },
        "contact": {
            "kicker": "اتصل بنا",
            "title": "تواصل مع AI Video Quiz",
            "lead": "لطرح سؤال أو الإبلاغ عن مشكلة تقنية أو طلب يتعلق ببياناتك، استخدم معلومات الاتصال الرسمية للخدمة.",
            "blocks": [
                [
                    "الدعم",
                    "البريد الإلكتروني: <span class=\"legal-placeholder\">[يتم إضافة بريد الاتصال]</span>"
                ],
                [
                    "مشكلة تقنية",
                    "اذكر بريد حسابك والمشكلة التي واجهتها، ويمكنك إضافة لقطة شاشة إذا أمكن. لا ترسل كلمة المرور أبدا."
                ],
                [
                    "طلب متعلق بالبيانات",
                    "لطلب معلومات أو تصحيح أو حذف بيانات مرتبطة بحسابك، استخدم عنوان الاتصال الرسمي."
                ],
                [
                    "قبل النشر",
                    "استبدل الحقول الموجودة بين الأقواس ببيانات الاتصال الحقيقية للناشر."
                ]
            ]
        }
    }
};

  var UI = {
    "fr": {
        "home": "← Accueil",
        "privacy": "Politique de confidentialité",
        "terms": "Conditions d'utilisation",
        "legal": "Mentions légales",
        "cookies": "Cookies",
        "contact": "Contact",
        "copyright": "© 2026 AI Video Quiz. Tous droits réservés.",
        "noscript": "Active JavaScript pour afficher cette page."
    },
    "en": {
        "home": "← Home",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use",
        "legal": "Legal Notice",
        "cookies": "Cookies",
        "contact": "Contact",
        "copyright": "© 2026 AI Video Quiz. All rights reserved.",
        "noscript": "Enable JavaScript to display this page."
    },
    "ar": {
        "home": "→ الرئيسية",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الاستخدام",
        "legal": "الإشعارات القانونية",
        "cookies": "ملفات الارتباط",
        "contact": "اتصل بنا",
        "copyright": "© 2026 AI Video Quiz. جميع الحقوق محفوظة.",
        "noscript": "فعّل JavaScript لعرض هذه الصفحة."
    }
};

  var FILES = { privacy: 'privacy.html', terms: 'terms.html', legal: 'legal-notice.html', cookies: 'cookies.html', contact: 'contact.html' };
  var ORDER = ['privacy', 'terms', 'legal', 'cookies', 'contact'];

  var pageKey = document.body.getAttribute('data-page');
  var lang = 'fr';
  try { lang = localStorage.getItem('aivq_interface_language') || 'fr'; } catch (error) { /* stockage indisponible */ }
  if (!PAGES[lang]) lang = 'fr';

  function el(id) { return document.getElementById(id); }

  var SUPPORT_LABEL = { fr: 'Adresses e-mail :', en: 'Email addresses:', ar: 'عناوين البريد الإلكتروني:' };

  // Page Contact : les adresses viennent de contact.html (window.SUPPORT_EMAILS)
  function contactBlocks(blocks) {
    var emails = window.SUPPORT_EMAILS;
    if (pageKey !== 'contact' || !Array.isArray(emails) || !emails.length) return blocks;

    var links = emails.map(function (email) {
      return '<bdi dir="ltr"><a href="mailto:' + email + '">' + email + '</a></bdi>';
    }).join('<br>');

    var copy = blocks.slice(0, -1); // le dernier bloc est le rappel « remplacer les champs entre crochets »
    copy[0] = [copy[0][0], SUPPORT_LABEL[lang] + '<br>' + links];
    return copy;
  }

  function render() {
    var page = PAGES[lang][pageKey];
    var ui = UI[lang];
    if (!page) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = 'AI Video Quiz - ' + page.title;

    el('kicker').textContent = page.kicker;
    el('title').textContent = page.title;
    el('lead').textContent = page.lead;
    el('content').innerHTML = contactBlocks(page.blocks).map(function (block) {
      return '<article class="info-block"><h3>' + block[0] + '</h3><p>' + block[1] + '</p></article>';
    }).join('');

    el('homeLink').textContent = ui.home;
    el('copyright').textContent = ui.copyright;
    el('footerNav').innerHTML = ORDER.map(function (key) {
      return '<a href="' + FILES[key] + '"' + (key === pageKey ? ' aria-current="page"' : '') + '>' + ui[key] + '</a>';
    }).join('');

    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (button) {
      button.classList.toggle('active', button.getAttribute('data-lang') === lang);
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (button) {
    button.addEventListener('click', function () {
      lang = button.getAttribute('data-lang');
      try { localStorage.setItem('aivq_interface_language', lang); } catch (error) { /* ignoré */ }
      render();
    });
  });

  render();
})();
