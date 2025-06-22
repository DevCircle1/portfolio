import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/Dashboard.png";
import triallogin from "../../Assets/Projects/triallogin.png";
import cmngt from "../../Assets/Projects/cmngt.png";
import tezintel from "../../Assets/Projects/tezintellogo.png";
import tezacc from "../../Assets/Projects/tezacc.png";
import gonano from "../../Assets/Projects/gonano.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tezintel}
              isBlog={false}
              title="Tezintel"
              description="TezIntel is a real estate analytics platform that delivers instant property valuation and sales forecasts. I designed and built the entire backend and machine learning pipeline to automate report generation and reduce processing time from weeks to minutes. The system supports scalable APIs and real-time data processing for fast, accurate insights."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://tezintel.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gonano}
              isBlog={false}
              title="Go Nano"
              description="I developed the complete backend for the GoNano website, a platform designed to connect public users with Nano service providers. The system allows users to explore Nano solutions, request quotes, and directly reach out to registered dealers. It also includes a secure login and dashboard for dealers to manage inquiries and respond efficiently."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://maps.gonano.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cmngt}
              isBlog={false}
              title="Cenceirge Management System"
              description="Concierge Portal System
Built a comprehensive backend system for a concierge service platform where all project-related records—such as investments, returns, and client interactions—are securely managed. This portal empowers the concierge team to deliver seamless, personalized experiences.
Technologies used: Django"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https:/cmngt.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Eco Unity Mobile app"
              description="Built a high-performance backend for a gamified eco-app featuring quizzes, missions, and leaderboards. Developed RESTful APIs with FastAPI, integrated Firebase Auth, and optimized PostgreSQL for real-time data. Ensured scalability for 10K+ users with efficient query handling. Contributed to sustainability by tracking recycling impact via data-driven rewards."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://eco-unity.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tezacc}
              isBlog={false}
              title="Tezintel Accounts"
              description="Developed a robust accounting backend with investment tracking, expense management, and contribution systems. Built secure RESTful APIs using Django for core logic and FastAPI for high-performance microservices. Designed a PostgreSQL database for real-time financial data processing and reporting. Integrated JWT authentication for secure user access and role-based permissions. Automated transaction reconciliations and generated analytics for user spending trends. Optimized queries to handle high-volume financial data with low latency. Ensured compliance with data encryption standards for sensitive financial operations. Streamlined peer-to-peer contributions with audit logs for transparency."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://dev.accounts.tezintel.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={triallogin}
              isBlog={false}
              title="Accounting Software"
              description={`Role: Full-Stack Developer\n
Tech Stack: React (Frontend), Node.js + Express (Backend), MySQL (Database)\n
Project Overview:\n
Developed a complete account management system for tracking finances, expenses, and transactions. My first full-stack project combining React, Node.js, and MySQL.\n
Key Features:\n
• Expense tracking with categorization\n
• Complete transaction history\n
• Multi-bank account integration\n
• Financial report generation\n
• Interactive dashboard analytics`}
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://accounting-app-6e5bh.ondigitalocean.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
