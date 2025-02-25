import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import {MdTravelExplore} from "react-icons/md"
import medicalsystemImg from "@/public/Medical Management System.png"
import lpgif from "@/public/LP.gif"
import marias from "@/public/8 Marias (Id.Visual).jpg" 
import socialmedia from "@/public/Social Media.jpg"
import ilustra from "@/public/Ilustração.jpg"
import badworddetectorImg from "@/public/Badword Detector.png"

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Estudante de Desing Gráfico",
    location: "Natal, Brasil",
    description:
      "Universidade Potiguar",
    icon: React.createElement(LuGraduationCap),
    date: "AGO 2023 - AGO 2025",
  },
  {
    title: "Social Media Designer",
    location: "Natal, Brasil",
    description:
      "Trabalhei na Tag Operations, agência de marketing especializada em hotelaria. Fiquei responsável pelo planejamento e edição de posts dos clientes",
    icon: React.createElement(CgWorkAlt),
    date: "NOV 2023 - FEV 2024",
  },
  {
    title: "Work and Travel",
    location: "Whitefish, Estados Unidos",
    description:
      "Trabalhei como Lift Operator, operando máquinas de ski no resort. Durante essa experiência, aperfeiçoei meu inglês e desenvolvi minhas habilidades de trabalho em equipe.",
    icon: React.createElement(MdTravelExplore),
    date: "DEZ 2022 - MAR 2023",
  },
  {
    title: "Web Designer",
    location: "Natal, Brasil",
    description:
      "Trabalho na Conduzza Digital, agência de marketing especializado em clínicas médicas. Desenvolvo o layout do site até sua construção completa para atender as necessidades dos clientes usando o Figma, Photoshop e Wordpress",
    icon: React.createElement(CgWorkAlt),
    date: "FEV 2024 - Até o momento",
  },
  {
    title: "Freelancer",
    location: "Natal, Brasil",
    description:
      "Crio identidades visuais, desenvolvendo conceitos (desing thinking) e designs que traduzem a essência das marcas.",
    icon: React.createElement(CgWorkAlt),
    date: "AGO 2023 - Até o momento",
  },
  
] as const;

export const projectsData = [
  {
    title: "Páginas para sites",
    description:
      "Desenvolvo interfaces de sites e cuido da implementação para que fiquem totalmente funcionais e ativos",
    tags: ["Wordpress","Figma"],
    imageUrl: lpgif,
  },
  {
    title: "Identidades Visuais",
    description:
      "Crio identidades visuais autênticas que se conectam com o clientes e asseguro sua aplicação harmoniosa em diversos meios",
    tags: ["Ilustrator", "Photoshop"],
    imageUrl: marias,
  },
  {
    title: "Social Media",
    description:
      "Produzo criativos para redes sociais, alinhando estética, performance e estratégia",
    tags: ["Photoshop", "Ilustrator", "Canva", "Capcut", "Premiere"],
    imageUrl: socialmedia,
  },
  {
    title: "Ilustrações",
    description:
      "Transformo conceitos em ilustrações expressivas.",
    tags: ["Ilustrator", "Photoshop"],
    imageUrl: ilustra,
  },
] as const;

export const skillsData = [
  "Wordpress",
  "Photoshop",
  "Ilustrator",
  "Figma",
  "Canva",
  "Capcut",
  "Premiere",
] as const;