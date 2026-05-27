"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology: Computer Science - BDA",
    institution: "Specialization in Big Data Analytics",
    period: "2021 - 2025",
    grade: "8.59 CGPA",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Kendriya Vidyalaya Sabarmati",
    period: "2021",
    grade: "88%",
  },
  {
    degree: "Senior Secondary Education (SSC)",
    institution: "Kendriya Vidyalaya Sabarmati",
    period: "2019",
    grade: "85%",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium tracking-widest uppercase text-primary">
              Education
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                    <p className="text-sm font-medium text-primary">
                      {edu.grade}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
