// src/projectData.ts

export type Project = {
  id: string;
  featured: boolean;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  mainImage: string;
  githubUrl?: string;
  stats: {
    environment: string;
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
    mainImage: "/projects/openstack_main.png",
    // githubUrl: "https://github.com/Dhankarabhi", // uncomment & set real repo link to enable this project's GitHub button
    stats: {
      environment: "Production",
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
      diagram: "/projects/openstack_arch.png",
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
    mainImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // githubUrl: "https://github.com/Dhankarabhi", // uncomment & set real repo link to enable this project's GitHub button
    stats: {
      environment: "Production",
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
    mainImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // githubUrl: "https://github.com/Dhankarabhi", // uncomment & set real repo link to enable this project's GitHub button
    stats: {
      environment: "Production",
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
    featured: true,
    name: "Monitoring & Observability Stack",
    description:
      "Prometheus, Grafana and ELK based monitoring setup.",
    longDescription:
      "Built centralized logging and metrics monitoring stack to track application performance and infrastructure health.",
    technologies: ["Prometheus", "Grafana", "ELK Stack"],
    mainImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // githubUrl: "https://github.com/Dhankarabhi", // uncomment & set real repo link to enable this project's GitHub button
    stats: {
      environment: "Production",
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
  },

  // ===============================
  // 5️⃣ TERRAFORM AZURE MODULE LIBRARY
  // ===============================
  "terraform-azure-modules": {
    id: "terraform-azure-modules",
    featured: false,
    name: "Enterprise Azure Terraform Module Library",
    description:
      "Production-grade, reusable Terraform module library for Azure, aligned to Microsoft's Cloud Adoption Framework and Azure Landing Zones.",
    longDescription:
      "Designed and built a set of independently usable Terraform modules covering management groups, naming conventions, networking, and AKS — targeting Terraform ≥1.9 and the AzureRM ≥4.x provider.\n\nThe networking module (v2) moved to an object-based configuration style split across dedicated files for subnets, NAT gateways, DNS, and diagnostics, making large environments easier to reason about. The AKS module (v2) was simplified down to around 12 required variables while still supporting CNI Overlay, Cilium, Workload Identity, OIDC issuer, CSI Key Vault integration, autoscaling, and Azure Policy.\n\nEvery module follows the same conventions: for_each over count, optional() attributes with sensible defaults, and outputs designed specifically for downstream module consumption — so teams can compose their own landing zones without fighting the module internals.",
    technologies: [
      "Terraform",
      "AzureRM Provider",
      "Azure CAF",
      "Azure Landing Zones",
      "AKS",
      "Cilium",
      "Workload Identity",
      "OIDC"
    ],
    mainImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    githubUrl: "https://github.com/Dhankarabhi/terraform-az",
    stats: {
      environment: "Multi-Environment",
      complexity: "Advanced",
      impact: "Reusable Across Projects"
    },
    features: [
      "Management-groups module for Azure CAF-aligned org hierarchy",
      "Naming module for consistent resource naming across teams",
      "Networking module v2 — object-based config, dedicated subnets/NAT/DNS/diagnostics files",
      "AKS module v2 — CNI Overlay, Cilium, Workload Identity, OIDC, CSI Key Vault",
      "for_each + optional() conventions throughout for safe, flexible usage",
      "Outputs structured for direct consumption by downstream modules"
    ],
    challenges: [
      {
        problem: "Upgrading to AzureRM ~4.x surfaced several breaking changes across modules.",
        solution:
          "Tested each module against AzureRM 4.79 individually, fixing schema changes iteratively until every module was confirmed independently usable."
      },
      {
        problem: "Early networking module became hard to maintain as a single large file.",
        solution:
          "Refactored into an object-based v2 design split across main.tf, subnets.tf, nat_gateway.tf, dns.tf, diagnostics.tf, and locals.tf."
      },
      {
        problem: "AKS module had grown too many required variables, making it hard to adopt.",
        solution:
          "Redesigned the interface down to ~12 required variables with sensible optional() defaults for everything else."
      }
    ],
    // screenshots: [
    //   { url: "/projects/terraform_1.jpg", caption: "Module structure overview" }
    // ],
  }
};

export const getProject = (id: string) => {
  return projects[id as keyof typeof projects];
};

export const getAllProjects = () => {
  return Object.values(projects);
};