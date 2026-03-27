import type { Project } from './types';

export const projects: Project[] = [
  {
    title: "Sign Language Detection",
    subtitle: "Computer Vision",
    description: "A computer vision project that detects sign language gestures using YOLO in real-time.",
    tech: ["Python", "YOLO", "OpenCV", "PyTorch"],
    image: "/images/yolo.jpg",
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
    subtitle: "Backend Development",
    description: "Building scalable and high-performance RESTful APIs for data processing pipelines.",
    tech: ["FastAPI", "Python", "REST API", "Git"],
    image: "/images/ReDA.jpg",
    github: "https://github.com/KheangDS"
  },
  {
    title: "HevNas App",
    subtitle: "ML/DL",
    description: "HevNas-App is a simple and lightweight web application that uses deep learning to classify food images. Built with Streamlit and PyTorch, it allows users to upload an image and quickly get a prediction of the food category — such as Meat, Noodles/Pasta, Rice, Soup, or Vegetables/Fruits.",
    tech: ["Pytorch", "Pillow", "Python", "Streamlit"],
    image: "/images/Deep Learning.jpg",
    github: "https://github.com/KheangDS/HevNas-App"
  },
  {
    title: "BodyFat Prediction",
    subtitle: "ML/DL",
    description: "Web application that predicts 'Body Fat Percentage' from anthropometric body measurements using a Multiple Linear Regression (MLR) model trained on the classic Body Fat dataset. The app provides an interactive prediction tool alongside exploratory data analysis (EDA) visualizations, making it easy to understand the relationship between body measurements and body fat.",
    tech: ["Scikit-learn", "Python", "Streamlit"],
    image: "/images/bodyfat.jpg",
    github: "https://github.com/KheangDS/BodyFat-Prediction-with-MLR/"
  }
];
