import type { Project } from './types';

export const projects: Project[] = [
  {
    title: "Sign Language Detection",
    subtitle: "Computer Vision",
    description: "A computer vision project that detects sign language gestures using YOLO in real-time.",
    tech: ["Python", "YOLO", "OpenCV", "PyTorch"],
    image: "/images/project-cv.jpg",
    github: "https://github.com/KheangDS"
  },
  {
    title: "Weather Prediction — Phnom Penh",
    subtitle: "Data Analysis",
    description: "Predictive modeling for weather patterns in Phnom Penh using historical datasets and machine learning.",
    tech: ["Python", "Pandas", "Scikit-learn", "Power BI"],
    image: "/images/project-data.jpg",
    github: "https://github.com/KheangDS"
  },
  {
    title: "FastAPI Backend",
    subtitle: "Software Engineering",
    description: "Building scalable and high-performance RESTful APIs for data processing pipelines.",
    tech: ["FastAPI", "Python", "REST API", "Git"],
    image: "/images/project-api.jpg",
    github: "https://github.com/KheangDS"
  }
];
