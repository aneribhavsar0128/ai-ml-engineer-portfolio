"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(result.error || "Something went wrong");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium tracking-widest uppercase text-primary">
              Contact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4 text-balance">
                {"Let's work together"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {"I'm always interested in hearing about new projects and opportunities in AI/ML and Computer Vision. Feel free to reach out!"}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=aneribhavsar0128@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      aneribhavsar0128@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+919426003209"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +91 9426003209
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground"
                  placeholder="Your message..."
                />
              </div>

              {submitStatus !== "idle" && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm">{statusMessage}</span>
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">
                      <Send className="w-4 h-4" />
                    </span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
