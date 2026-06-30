import { Project } from "./types";

import hooklineImg from "./assets/images/hookline.png";
import semisImg from "./assets/images/semis.png";
import aiRiskImg from "./assets/images/ai-risk.png";
import coffeeShopImg from "./assets/images/coffee-shop.png";
import gymImg from "./assets/images/gym.png";
import socHomelabImg from "./assets/images/soc-homelab.png";
import indoStaysImg from "./assets/images/indostays.png";
import cafeAppImg from "./assets/images/cafeapp.png";

export const PERSONAL_INFO = {
fullName: "Halima Abdirizak Mohamed",
titleAndRole: "Full-Stack Developer | Security-Focused Developer",
officialTitle: "SOC Analyst Intern Candidate | Security-Focused Developer",
location: "Bekasi, Indonesia",
email: "[halimamohamedabdirizak@email.com](mailto:halimamohamedabdirizak@email.com)",
github: "github.com/hal-imaxabdi",
linkedin: "linkedin.com/in/halimaabdirizak-mohamed",
githubUrl: "https://github.com/hal-imaxabdi",
linkedinUrl: "https://www.linkedin.com/in/halima-abdirizak-mohamed/",
};

export const PROFESSIONAL_SUMMARY =
"I am a highly motivated Informatics student specializing in Cybersecurity at President University. I build secure modern web applications and design comprehensive defensive systems. Combining modular full-stack development with real-world Security Operations (SOC) practices like log auditing, threat detection, and incident response, I turn security principles into robust, production-ready systems. I love solving complex technical challenges, and my work bridges development and defense to create technologies that are resilient by default.";

export const EDUCATION = {
institution: "President University",
degree: "BSc Informatics (Cybersecurity)",
duration: "2024 – 2027 (Expected)",
coursework: [
"Network Security",
"Cryptography",
"Web Development",
"Risk Management",
],
};

export const CERTIFICATIONS = [
{
title: "Google Cybersecurity Professional Certificate",
issuer: "Google",
id: "CERT-GOOG-SEC",
},
{
title: "AWS Security Fundamentals",
issuer: "Amazon Web Services",
id: "CERT-AWS-SEC",
},
{
title: "Information Security Certification",
issuer: "freeCodeCamp",
id: "CERT-FCC-ISEC",
},
{
title: "Google AI Certificate",
issuer: "Google",
id: "CERT-GOOG-AI",
},
{
title: "Pre-Security Learning Path",
issuer: "TryHackMe",
id: "CERT-THM-PRESEC",
},
{
title: "Certification in Cybersecurity",
issuer: "TechCrush",
id: "CERT-TC-CYB",
},
];

export const PROJECTS: Project[] = [
{
id: "hookline",
number: "01",
title: "Hookline",
description:
"Chrome extension that detects phishing via typosquatting, homoglyphs, and brand-impersonation analysis.",
tech: ["Chrome Extension", "JavaScript", "NLP", "Phishing Detection"],
githubUrl: "https://github.com/hal-imaxabdi/hookline",
imageUrl: hooklineImg,
},
{
id: "semis",
number: "02",
title: "SEMIS — Secure Employee Management System",
description:
"Security-first full-stack HR system with MFA, RBAC, JWT, and OWASP-minded design.",
tech: ["React", "Node.js", "MongoDB", "RBAC", "MFA"],
githubUrl:
"https://github.com/hal-imaxabdi/SEMIS-Secure-Employee-Management-Information-System",
imageUrl: semisImg,
},
{
id: "ai-security-audit",
number: "03",
title: "AI-Assisted Security Audit Platform",
description:
"AI-driven cybersecurity risk assessment that recommends guided audit steps and mitigations.",
tech: ["NIST CSF", "RBAC", "Risk Scoring", "AI-Assisted Audit"],
githubUrl:
"https://github.com/hal-imaxabdi/AI-Assisted-Risk-Assessment-Security-Audit-Platform",
imageUrl: aiRiskImg,
},
{
id: "flask-auth-lab",
number: "04",
title: "Secure Flask Authentication Lab",
description:
"Hands-on lab comparing vulnerable vs. hardened authentication with BCrypt, JWT, rate limits, and CSRF.",
tech: ["Python", "Flask", "BCrypt", "JWT", "CSRF Protection"],
githubUrl:
"https://github.com/hal-imaxabdi/Secure-Flask-Authentication-Lab",
imageUrl: coffeeShopImg,
},
{
id: "Flexity-Gym-Management-System",
number: "05",
title: "Flexity — Gym Management & Fitness App",
description:
"Gym app for class scheduling, memberships, trainers, and workout tracking.",
tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
githubUrl: "https://github.com/hal-imaxabdi/flexity",
imageUrl: gymImg,
},
{
id: "soc-homelab",
number: "06",
title: "SOC Homelab",
description:
"Hybrid SOC homelab sending Windows and Kali VM logs to Elastic Cloud SIEM for detection practice.",
tech: ["Elastic SIEM", "Windows", "Kali Linux", "Log Analysis"],
githubUrl: "https://github.com/hal-imaxabdi/Soc-Homelab",
imageUrl: socHomelabImg,
},
{
id: "indostays-app",
number: "07",
title: "IndoStays App",
description:
"Flutter mobile app for browsing and booking accommodations with Firebase-backed features.",
tech: ["Flutter/Dart", "Firebase", "REST APIs"],
githubUrl: "https://github.com/hal-imaxabdi/IndoStays-App",
imageUrl: indoStaysImg,
},
{
id: "cafe-app",
number: "08",
title: "Cafe App",
description:
"Modern Android café ordering app built with Kotlin and Jetpack Compose showcasing native app development.",
tech: ["Kotlin", "Jetpack Compose", "Android"],
githubUrl: "https://github.com/hal-imaxabdi/cafe-app",
imageUrl: cafeAppImg,
},
];

export const FRONTEND_PROJECTS_SUMMARY =
"Built interactive client-side web applications using core JavaScript, optimized DOM manipulation, and event handling models.";
