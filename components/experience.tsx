"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI/ML Engineer",
    company: "Maharshi Industries Pvt. Ltd",
    period: "June 2025 – Present",
    description:
      "AI/ML Engineer specializing in Computer Vision, Deep Learning, and Vision-Language Models (VLMs) with hands-on experience in developing and deploying AI solutions for defense, surveillance, and industrial inspection applications.",
    technologies: ["PyTorch", "TensorFlow", "RF-DETR", "OpenCV", "AWS"],
  },
  {
    title: "Data Science Intern",
    company: "BISAG-N",
    period: "January 2025 – April 2025",
    description:
      "Worked on developing and optimizing deep learning models for geospatial AI applications, focusing on object detection and segmentation using satellite and UAV imagery.",
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "QGIS", "Roboflow"],
  },
  {
    title: "Java Developer Intern",
    company: "kyszTech Pvt. Ltd",
    period: "May 2023 – June 2023",
    description:
      "Completed a comprehensive training program on Java, gaining a strong foundation in core Java concepts, web development, server-side programming, and database integration.",
    technologies: ["Java", "Servlets", "SQL", "Web Development"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
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
              Experience
            </h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
