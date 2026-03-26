// src/projectData.ts

export type Project = {
  id: string;
  featured: boolean;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  mainImage: string;
  liveUrl: string;
  githubUrl: string;
  stats: {
    duration: string;
    complexity: string;
    impact: string;
  };
  features: string[];
  challenges: {
    problem: string;
    solution: string;
  }[];
  screenshots?: {
    url: string;
    caption: string;
  }[];
  architecture?: {
    diagram: string;
    description: string;
  };
};

export const projects: Record<string, Project> = {
  // ===============================
  // 1️⃣ OPENSTACK KOLLA (DETAILED)
  // ===============================
  "openstack-kolla": {
    id: "openstack-kolla",
    featured: true,
    name: "Multi-Node OpenStack Deployment with Kolla-Ansible",
    description:
      "Production-style 6-node OpenStack deployment using Kolla-Ansible with HA control plane and Ceph storage backend.",
    longDescription:
      "This project involved building a complete multi-node OpenStack environment using Kolla-Ansible. The setup consists of three controller nodes and three compute nodes configured for high availability.\n\nCeph was integrated as a shared storage backend for block storage and images. HAProxy and virtual IPs were used to distribute API traffic across controller nodes. Additional services like Octavia, Magnum, and Masakari were enabled to simulate a real production-ready cloud environment.\n\nThe main objective was to understand service dependencies, networking overlays, storage integration, and failure recovery scenarios in distributed cloud infrastructure.",
    technologies: [
      "OpenStack",
      "Kolla-Ansible",
      "Ansible",
      "Docker",
      "Ceph (RBD)",
      "Octavia",
      "Magnum",
      "Masakari",
      "HAProxy",
      "MariaDB Galera",
      "RabbitMQ",
      "Linux Networking"
    ],
    mainImage: "/projects/openstack_main.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Dhankarabhi",
    stats: {
      duration: "8 Weeks",
      complexity: "Advanced",
      impact: "HA Cloud Deployment"
    },
    features: [
      "Three-controller HA control plane with VIP and HAProxy",
      "Ceph RBD backend for Cinder and Glance",
      "Octavia Load Balancer-as-a-Service",
      "Magnum container orchestration enablement",
      "Masakari-based instance recovery testing",
      "Fully automated deployment lifecycle with Kolla-Ansible"
    ],
    challenges: [
      {
        problem: "VXLAN overlay networking caused intermittent connectivity issues.",
        solution:
          "Standardized MTU across interfaces and validated Neutron encapsulation settings."
      },
      {
        problem: "Ceph volume creation failed due to keyring mismatch.",
        solution:
          "Corrected Ceph auth configuration and validated pool permissions."
      },
      {
        problem: "Controller failover caused temporary API instability.",
        solution:
          "Tuned HAProxy health checks and verified Galera quorum behavior."
      }
    ],
    // screenshots: [
    //   { url: "/projects/openstack_1.jpg", caption: "Horizon dashboard overview" },
    //   { url: "/projects/openstack_2.jpg", caption: "Ceph cluster status" },
    //   { url: "/projects/openstack_3.jpg", caption: "Octavia load balancer config" }
    // ],
    architecture: {
      diagram: "/projects/openstack_arch.jpg",
      description:
        "Architecture includes 3 controller nodes behind HAProxy, Galera cluster, RabbitMQ cluster, Ceph storage backend, and 3 compute nodes connected via VXLAN networking."
    }
  },

  // ===============================
  // 2️⃣ CI/CD PIPELINE
  // ===============================
  "cicd-pipeline": {
    id: "cicd-pipeline",
    featured: true,
    name: "CI/CD Pipeline Automation",
    description:
      "Automated build, test, scan, and Kubernetes deployment pipeline using Jenkins and GitHub Actions.",
    longDescription:
      "Implemented a CI/CD pipeline to automate application delivery from code commit to Kubernetes deployment. The pipeline includes automated testing, Docker image build, security scanning, and progressive deployment strategies.\n\nThe goal was to reduce manual deployment effort and ensure consistent release workflows across environments.",
    technologies: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Helm",
      "SonarQube"
    ],
    mainImage: "/projects/cicd_main.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Dhankarabhi",
    stats: {
      duration: "3 Months",
      complexity: "Advanced",
      impact: "Faster Deployments"
    },
    features: [
      "Automated Docker image builds",
      "Security scanning integration",
      "Multi-environment deployment",
      "Blue-Green strategy support"
    ],
    challenges: [
      {
        problem: "Managing secrets securely in pipelines.",
        solution: "Used encrypted credentials and secure environment variables."
      }
    ],
    // screenshots: [
    //   { url: "/projects/cicd_1.jpg", caption: "Pipeline stages" }
    // ],
  },

  // ===============================
  // 3️⃣ CLOUD INFRASTRUCTURE
  // ===============================
  "cloud-infrastructure": {
    id: "cloud-infrastructure",
    featured: true,
    name: "AWS Cloud Infrastructure Setup",
    description:
      "Designed scalable AWS infrastructure using Terraform and Ansible.",
    longDescription:
      "Provisioned production-style AWS infrastructure including VPC, subnets, load balancers, EC2 instances, and RDS databases using Infrastructure as Code.\n\nFocus was on high availability, cost optimization, and automation.",
    technologies: ["AWS", "Terraform", "Ansible", "RDS", "CloudWatch"],
    mainImage: "/projects/aws_main.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Dhankarabhi",
    stats: {
      duration: "4 Months",
      complexity: "Advanced",
      impact: "99.9% Uptime"
    },
    features: [
      "Multi-AZ architecture",
      "Auto Scaling configuration",
      "Infrastructure as Code provisioning"
    ],
    challenges: [
      {
        problem: "Cost management in multi-AZ setup.",
        solution: "Optimized instance sizing and reserved capacity."
      }
    ],
    // screenshots: [
    //   { url: "/projects/aws_1.jpg", caption: "VPC architecture" }
    // ],
  },

  // ===============================
  // 4️⃣ MONITORING STACK
  // ===============================
  "monitoring-observability": {
    id: "monitoring-observability",
    featured: false,
    name: "Monitoring & Observability Stack",
    description:
      "Prometheus, Grafana and ELK based monitoring setup.",
    longDescription:
      "Built centralized logging and metrics monitoring stack to track application performance and infrastructure health.",
    technologies: ["Prometheus", "Grafana", "ELK Stack"],
    mainImage: "/projects/monitoring_main.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Dhankarabhi",
    stats: {
      duration: "2 Months",
      complexity: "Intermediate",
      impact: "Improved Visibility"
    },
    features: [
      "Custom dashboards",
      "Centralized logging",
      "Alerting rules"
    ],
    challenges: [
      {
        problem: "High log storage consumption.",
        solution: "Implemented retention and index lifecycle policies."
      }
    ],
    // screenshots: [
    //   { url: "/projects/monitoring_1.jpg", caption: "Grafana dashboard" }
    // ],
  }
};

export const getProject = (id: string) => {
  return projects[id as keyof typeof projects];
};

export const getAllProjects = () => {
  return Object.values(projects);
};
