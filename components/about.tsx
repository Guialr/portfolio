"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
      Sou Guilherme Rodrigues, designer focado em <span className="font-bold">branding</span> e <span className="font-bold">desenvolvimento de sites</span>. Com experiência em <span className="font-bold">Photoshop</span>, <span className="font-bold">Illustrator</span>, <span className="font-bold">Figma</span> e <span className="font-bold">WordPress</span>. Crio projetos estratégicos que conectam marcas ao público certo.
      </p>

    </motion.section>
  );
}
