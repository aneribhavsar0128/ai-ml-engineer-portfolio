"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Based Remote Quality Inspection System",
    description:
      "Detection and analysis of 50+ defect parameters using RF-DETR and Qwen 3 8B Vision-Language Model for industrial quality control and monitoring applications.",
    tags: ["RF-DETR", "Qwen 3 8B", "VLM", "PyTorch", "Quality Inspection"],
    github: "https://github.com/aneri0x4f",
    company: "Maharshi Industries",
  },
  {
    title: "AI Surveillance & Security System",
    description:
      "Developed for the Indian Army - Human, vehicle, helicopter, and animal detection system for border surveillance near PoK using advanced computer vision techniques.",
    tags: ["Object Detection", "PyTorch", "OpenCV", "Surveillance", "Defense"],
    github: "https://github.com/aneri0x4f",
    company: "Maharshi Industries",
  },
  {
    title: "Color Change Detection System",
    description:
      "Robot-operated AI vision system for DRDE Gwalior designed for chemical resistance testing through automated color change detection and analysis.",
    tags: ["Computer Vision", "Robot Vision", "OpenCV", "Image Processing"],
    github: "https://github.com/aneri0x4f",
    company: "Maharshi Industries",
  },
  {
    title: "Tree Detection using Deep Learning",
    description:
      "Built a tree detection and instance segmentation tool using YOLOv8-seg, YOLOv11-seg, and Mask R-CNN on UAV and satellite imagery. Annotated data in Roboflow (COCO & YOLO formats) for exact tree mapping. QGIS was incorporated for geospatial analysis, enabling canopy-based tree counting.",
    tags: ["YOLOv8-seg", "YOLOv11-seg", "Mask R-CNN", "QGIS", "Roboflow"],
    github: "https://github.com/aneri0x4f",
    company: "BISAG-N",
  },
  {
    title: "Rooftop Detection on Satellite Imagery",
    description:
      "Developed a rooftop detection system using YOLOv8s-seg, YOLOv11s-seg, DeepLabV3+ (ResNet50), and U-Net (ResNet50) on satellite imagery. Integrated geospatial analysis to enhance mapping accuracy and support urban planning.",
    tags: ["YOLOv8s-seg", "DeepLabV3+", "U-Net", "ResNet50", "Roboflow"],
    github: "https://github.com/aneri0x4f",
    company: "BISAG-N",
  },
  {
    title: "Collaborative Filtering Recommendation System",
    description:
      "Developed a user-based collaborative filtering recommendation model, leveraging model training techniques to enhance personalized recommendations. Designed and implemented a user-friendly system to improve accessibility and usability.",
    tags: ["Python", "Machine Learning", "Collaborative Filtering", "Data Science"],
    github: "https://github.com/aneri0x4f",
  },
  {
    title: "MediASK",
    description:
      "Built a system that can predict Trauma and cancer using brain and cell images respectively. Via patient symptoms, it tells which disease a particular patient has. The system also includes a chatbot that can answer questions related to medical problems.",
    tags: ["Deep Learning", "Computer Vision", "Medical AI", "Chatbot", "Python"],
    github: "https://github.com/aneri0x4f",
  },
  {
    title: "E-Commerce Website",
    description:
      "Developed a full-featured e-commerce website using Java Servlets with server-side programming, database integration, and responsive web design.",
    tags: ["Java", "Servlets", "SQL", "Web Development"],
    github: "https://github.com/aneri0x4f",
    company: "kyszTech",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
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
              Projects
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                {project.company && (
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary whitespace-nowrap ml-2">
                    {project.company}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium rounded bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
