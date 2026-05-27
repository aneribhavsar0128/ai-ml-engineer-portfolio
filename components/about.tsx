"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-base font-semibold tracking-widest uppercase text-primary">
              About
            </h2>
          </div>

          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              Hands-on <span className="text-foreground font-semibold">AI/ML Engineer</span> experienced 
              in <span className="text-foreground font-semibold">Computer Vision</span> and {" "}
              <span className="text-foreground font-semibold">Deep Learning</span>. Skilled in Python, SQL, 
              PyTorch, TensorFlow, and latest machine learning frameworks, empowered with a robust 
              knowledge of data and model optimization.
            </p>
            <p>
              Experienced in the development, training, and deployment of complete AI solutions such as 
              object detection, segmentation, real-time vision systems, and intelligent document-based 
              pipelines. Adept in automation, model optimization, and creating scalable AI systems 
              suitable for real-world applications.
            </p>
            <p>
              Open to AI/ML or Data Science positions where AI/ML and computer vision capabilities 
              can be leveraged to develop impactful, production-ready solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
