import React from "react";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import Contact from "./Contact";
import ContactPoint from "./ContactPoint";

export const links = [
  {
    id: 0,
    url: "#home",
    text: "home"
  },
  {
    id: 1,
    url: "#about",
    text: "sobre"
  },
  {
    id: 2,
    url: "#experiences",
    text: "inscreva-se"
  }
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/alisson-rodrigues/",
    icon: <FaLinkedin />,
    name: "LinkedIn"
  }
];
//
export const experiences = [
  {
    id: "destinatario",
    order: 1,
    title: <Contact />,
    company: "Destinatário"
  },
  {
    id: "pontoDeEntrega",
    order: 2,
    title: <ContactPoint />,
    company: "Ponto de Entrega"
  }
];

export const courses = [
  {
    id: "universidade",
    title: "Bacharelado em Ciências Sociais - IFCH",
    field: "Formação",
    institution: "Universidade Federal do Rio Grande do Sul",
    dates: "2018 - atual",
    names: [
      "Bacharelado em Ciências Sociais no Instituto de Filosofia e Ciências Sociais da Universidade Federal do Rio Grande do Sul"
    ],
    certified: []
  }
];

export const skills = [
  {
    subject: "JavaScript",
    nivel: 3,
    fill: "#34a6ed"
  },
  {
    subject: "HTML",
    nivel: 3,
    fill: "#83a6ed"
  },
  {
    subject: "CSS",
    nivel: 3,
    fill: "#83a6ed"
  },
  {
    subject: "Francês",
    nivel: 3,
    fill: "#83a6ed"
  },
  {
    subject: "Espanhol",
    nivel: 4,
    fill: "#8dd1e1"
  },
  {
    subject: "Inglês",
    nivel: 5,
    fill: "#83a6ed"
  },
  {
    subject: "Português",
    nivel: 7,
    fill: "#8884d8"
  }
];

export const infos = [
  {
    id: 1,
    title: "Sobre",
    subtitle: "Como funciona",
    photo:
      "https://patrus.com.br/wp-content/uploads/2018/01/159497-conheca-os-beneficios-do-uso-do-big-data-em-logistica.jpg",
    about: `Nosso objetivo é trazer tranquilidade para você no recebimento de suas encomendas. Para isso contamos com uma rede de parceiros como pontos de recebimento. Escolha um ponto, use o endereço fornecido e lhe informamos quando chegar.`
  }
];
