"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Deep Learning & AI",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "Ollama", "LLM", "RAG", "Hugging Face"],
  },
  {
    title: "Computer Vision",
    skills: ["RF-DETR", "YOLO", "Faster R-CNN", "RT-DETR", "U-Net", "DeepFace", "Facial Recognition", "ANPR", "Thermal Imaging"],
  },
  {
    title: "Real-Time Systems",
    skills: ["RTSP Video Streaming", "Edge AI Optimization", "Real-Time AI Systems"],
  },
  {
    title: "Programming & Data",
    skills: ["Python", "SQL", "AWS"],
  },
  {
    title: "Geospatial Analysis",
    skills: ["QGIS", "ArcGIS", "Roboflow", "SNAP Desktop"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium tracking-widest uppercase text-primary">
              Tools & Technologies
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
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
