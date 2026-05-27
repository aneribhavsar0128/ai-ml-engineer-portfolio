"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Learn Python: The Complete Python Programming Course",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "https://www.udemy.com",
  },
  {
    title: "Introduction to Gen AI",
    issuer: "Google Cloud",
    date: "2024",
    credentialUrl: "https://www.cloudskillsboost.google",
  },
  {
    title: "Predictive Analytics using IBM SPSS Modeler",
    issuer: "IBM",
    date: "2024",
    credentialUrl: "https://www.ibm.com",
  },
  {
    title: "Data Analysis With Python",
    issuer: "IBM",
    date: "2022",
    credentialUrl: "https://www.ibm.com",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2022",
    credentialUrl: "https://aws.amazon.com",
  },
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "AWS Academy",
    date: "2024",
    credentialUrl: "https://aws.amazon.com",
  },
  {
    title: "Deep Learning Fundamentals",
    issuer: "IBM",
    date: "2024",
    credentialUrl: "https://www.ibm.com",
  },
  {
    title: "Deep Learning with TensorFlow",
    issuer: "IBM",
    date: "2024",
    credentialUrl: "https://www.ibm.com",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
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
              Certifications
            </h2>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {cert.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
