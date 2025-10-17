export const translations = {
  french: {
    jobTitle: "Ingénieur Informatique",
    description: "Ma soif d’apprentissage est toujours présente.",
    resumeButton: "CV",
    emailCopied: "Email copié !",
    copyEmailAria: "Copier l’email dans le presse-papiers",
    experienceTitle: "Expériences",
    experiences: {
      tasukeru: {
        link: "https://app.tasukeru.org",
        title: "Projet full stack Tasukeru",
        description: "Un gestionnaire de tâches",
        details:
          "J’ai créé Tasukeru pour faciliter l’organisation au quotidien et parce que j’apprécie la philosophie Kanban japonaise. Sur près de trois mois, j’ai conçu une application full-stack : Angular pour le front, Spring Boot + PostgreSQL pour le back, avec une API REST. L’application est collaborative : on peut partager l’ID d’un board pour travailler à plusieurs, et les mises à jour arrivent en temps réel grâce aux Server-Sent Events. J’ai surmonté des points techniques comme le drag-and-drop côté front (listes/colonnes/cartes) et la diffusion temps réel, le tout sécurisé par des tests unitaires, d’intégration et E2E. Le déploiement est dockerisé sur AWS (EC2/RDS derrière Nginx) avec des environnements dev/prod et une CI/CD GitHub Actions ; l’architecture a été pensée pour minimiser les coûts sans sacrifier les performances. Le projet est open source, et le code ainsi que les mises à jour sont disponibles sur mon GitHub.",
      },
      datalog: {
        showSite: false,
        title: "Projet full stack Datalog",
        description: "Plateforme data & logs",
        details:
          "Au départ, nous avons constaté que la plupart des solutions de logging/observabilité s’adressent aux grandes entreprises—puissantes, mais lourdes et coûteuses. À trois, nous avons donc voulu créer une alternative plus légère en webapp : collecte des logs applicatifs, normalisation des champs clés (niveau, source, horodatage), stockage optimisé, puis recherche rapide et tableau de bord simple (comptes, taux d’erreurs) avec un live-tail basique. La stack reposait sur Angular côté front et Spring Boot + PostgreSQL côté back, exposés via une API REST. Le tout était conteneurisé avec Docker et déployé sur AWS (EC2/RDS derrière Nginx), avec des tests et une CI/CD GitHub Actions. Le code demeure privé. Avec le temps, l’avancement a ralenti et le projet a été abandonné progressivement, pour des raisons mêlant facteurs humains, motivation et budget. Nous l’avons archivé avant une mise en production publique, en conservant l’architecture et les bonnes pratiques comme référence.",
      },
      portfolio: {
        link: "https://github.com/Inerio/site-portfolio-cv",
        title: "Git du projet Portfolio",
        description: "Un portfolio en React",
        details:
          "Ce site a été conçu pour mettre en avant ma capacité d’apprentissage et d’adaptation. Après quelques jours d’étude de React, j’ai réalisé ce portfolio et structuré le code en appliquant des pratiques modernes (composants clairs, styles modulaires, accessibilité de base). J’ai également mis en place une intégration continue pour automatiser les mises à jour. Le projet évolue régulièrement : j’ajoute des fonctionnalités, affine le design et améliore les performances au fil des retours. Vous pouvez en suivre l’avancement sur mon GitHub.",
      },
      merieux: {
        link: "https://www.merieuxnutrisciences.com/fr/",
        title: "Mérieux Nutriscience",
        description: "Data developer / Full Stack",
        details:
          "Mon expérience la plus longue. J'ai débuté par une auto-formation sur des outils dédiés à l'analyse de données lors de ma première année couplé à une participation active à la résolution de tickets, ce qui m'a permis d'acquérir une solide compréhension des processus techniques et des défis rencontrés dans ce domaine. La suite de cette expérience a été marquée par la gestion d'un projet ambitieux en React. L'objectif était de remplacer une application devenue obsolète et difficile à maintenir par une solution plus moderne et performante. J'ai travaillé non seulement à la migration et l'optimisation de cette application, mais aussi à la conception de prototypes innovants en m'appuyant sur de nouvelles technologies.",
      },
      abas: {
        link: "https://abas-bs.com/fr",
        title: "ABAS",
        description: "Développeur Java",
        details:
          "Ma toute première expérience professionnelle en entreprise a été particulièrement formatrice et enrichissante. J'ai eu l'opportunité d'être formé à l'utilisation d'un logiciel ERP spécifique à l'entreprise, ce qui m'a permis d'acquérir rapidement une maîtrise technique dans un environnement professionnel réel. En plus de cette formation, j'ai également appris à utiliser le langage propriétaire, ce qui m'a offert une perspective unique sur le développement de solutions sur mesure pour répondre aux besoins de l'entreprise. J'ai travaillé en tant que développeur sur le logiciel ABAS ERP, un outil largement utilisé pour la gestion des ressources et des processus en entreprise. Mes missions principales consistaient à développer des fonctionnalités en utilisant principalement le langage de programmation Java. Ce travail m'a permis de consolider mes compétences en développement, tout en approfondissant mes connaissances sur les systèmes ERP.",
      },
      abbidigital: {
        link: "https://www.abbi.digital/",
        title: "Abbi Studio",
        description: "Développeur Angular",
        details:
          "Maintenant du nom d'Abbidigital, c'est à la suite de ce stage que j'ai eu l'opportunité d'apprendre les bases du framework Angular grâce au soutien de mon tuteur, tout en développant mes compétences en auto-formation. J'ai mené un projet en méthodologie agile, en utilisant des outils collaboratifs comme GitHub et Trello, ce qui m'a permis de bien structurer le travail en équipe. La majorité de mes tâches ont été réalisées sous un environnement Linux, renforçant ainsi mes compétences sur ce système.",
      },
      websiteButton: "Aller vers le site ",
      labels: {
        visitSite: "Voir le site",
        openApp: "Ouvrir l’app",
        viewDemo: "Voir la démo",
        viewCode: "Voir le code",
      },
    },
    skillTitle: "Compétences",
    toolsTitle: "Outils Maitrisés",
    contactTitle: "Me Contacter",
    name: "Nom",
    email: "Courriel",
    message: "Message",
    contactButton: "Envoyer",
    copyright: "Tous droits réservés.",
  },
  english: {
    jobTitle: "IT Engineer",
    description: "My eagerness to learn is ever-present.",
    resumeButton: "Resume",
    emailCopied: "Email copied!",
    copyEmailAria: "Copy email to clipboard",
    experienceTitle: "Experiences ",
    experiences: {
      tasukeru: {
        link: "https://app.tasukeru.org",
        title: "Full stack project Tasukeru",
        description: "A task manager",
        details:
          "I built Tasukeru to make day-to-day organization simpler and because I’m a fan of the Japanese Kanban system. Over almost three months I designed a full-stack app: Angular on the front end, Spring Boot + PostgreSQL on the back end, exposed through a REST API. It’s collaborative: you can share a board ID to work with others, and updates stream in real time via Server-Sent Events. I worked through tricky parts such as front-end drag-and-drop (lists/columns/cards) and the real-time pipeline, backed by unit, integration, and end-to-end tests. The app is Dockerized and deployed on AWS (EC2/RDS behind Nginx) with separate dev/prod environments and GitHub Actions CI/CD; the architecture is tuned to keep costs low while remaining performant. The project is open source, and the code and ongoing updates are available on my GitHub.",
      },
      datalog: {
        showSite: false,
        title: "Full-stack project Datalog",
        description: "Data & logs platform",
        details:
          "At the outset we noticed that most logging/observability solutions target large enterprises—powerful, but heavy and expensive. As a team of three, we set out to build a lighter web-app alternative: collect application logs, normalize key fields (level, source, timestamp), store them efficiently, and offer fast search plus a simple dashboard (counts, error rates) with a basic live-tail view. The stack was Angular on the front end and Spring Boot + PostgreSQL on the back end, exposed through a REST API. Everything was containerized with Docker and deployed on AWS (EC2/RDS behind Nginx), with tests and GitHub Actions CI/CD. The code remains private. Over time, progress slowed and the project was gradually abandoned due to a mix of human factors, motivation, and budget constraints. We archived it before a public release, and I keep the architecture and practices as a reference.",
      },
      portfolio: {
        link: "https://github.com/Inerio/site-portfolio-cv",
        title: "Project Git Portfolio",
        description: "A portfolio in React",
        details:
          "This site was built to highlight my ability to learn and adapt. After a short, focused dive into React, I developed this portfolio and organized the code with modern practices—clear components, modular styles, and basic accessibility. I also set up continuous integration to automate updates. The project evolves regularly: I add features, refine the design, and improve performance based on feedback. You can follow its progress on my GitHub.",
      },
      merieux: {
        link: "https://www.merieuxnutrisciences.com/fr/",
        title: "Mérieux Nutriscience",
        description: "Data Developer / Full Stack",
        details:
          "This was my longest experience. I started with self-training on data analysis tools during my first year, coupled with active participation in ticket resolution. This helped me gain a solid understanding of the technical processes and challenges in this area. The rest of this experience was marked by managing an ambitious React project. The goal was to replace an obsolete and hard-to-maintain application with a more modern and efficient solution. I worked on migrating and optimizing this application, as well as designing innovative prototypes using new technologies.",
      },
      abas: {
        link: "https://abas-bs.com/fr",
        title: "ABAS",
        description: "Java Developer",
        details:
          "My very first professional experience in a company was particularly formative and enriching. I had the opportunity to be trained in the use of an ERP software specific to the company, which allowed me to quickly acquire technical proficiency in a real-world professional environment. In addition to this training, I also learned how to use the proprietary language, giving me a unique perspective on developing tailored solutions to meet the company’s needs. I worked as a developer on the ABAS ERP software, a widely used tool for managing company resources and processes. My main tasks involved developing features primarily using the Java programming language. This work allowed me to solidify my development skills while deepening my understanding of ERP systems.",
      },
      abbidigital: {
        link: "https://www.abbi.digital/",
        title: "Abbi Studio",
        description: "Angular Developer",
        details:
          "Now known as Abbidigital, it was during this internship that I had the opportunity to learn the basics of the Angular framework thanks to the support of my mentor, while also enhancing my self-learning skills. I led a project using agile methodology, utilizing collaborative tools such as GitHub and Trello, which helped me structure teamwork effectively. Most of my tasks were completed in a Linux environment, further strengthening my skills on this system.",
      },
      websiteButton: "Go to the site ",
      labels: {
        visitSite: "Visit site",
        openApp: "Open app",
        viewDemo: "View demo",
        viewCode: "View code",
      },
    },
    skillTitle: "Skills",
    toolsTitle: "Mastered Tools",
    contactTitle: "Contact Me",
    name: "Name",
    email: "Email",
    message: "Message",
    contactButton: "Send",
    copyright: "All rights reserved.",
  },
};
