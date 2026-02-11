export const projects = {
  'cicd-pipeline': {
    id: 'cicd-pipeline',
    name: 'CI/CD Pipeline Automation',
    description: 'Complete automated deployment pipeline with Jenkins, GitHub Actions, Docker, and Kubernetes for seamless application delivery.',
    longDescription: 'Built a comprehensive CI/CD pipeline that automates the entire software delivery process from code commit to production deployment. The system includes automated testing, security scanning, container building, and progressive deployment strategies with rollback capabilities.',
    technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'SonarQube', 'Trivy', 'ArgoCD'],
    mainImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dhankarabhi',
    stats: {
      duration: '3 Months',
      complexity: 'Advanced',
      impact: '80% Faster'
    },
    features: [
      'Automated code quality checks with SonarQube integration',
      'Container vulnerability scanning with Trivy',
      'Multi-environment deployment (Dev, Staging, Production)',
      'Blue-green deployment strategy for zero-downtime releases',
      'Automated rollback mechanisms on deployment failures',
      'Slack/Email notifications for pipeline status',
      'Parallel job execution for faster build times',
      'Infrastructure as Code with Terraform integration'
    ],
    challenges: [
      {
        problem: 'Complex multi-service dependencies during deployment',
        solution: 'Implemented dependency graphs and sequential deployment with health checks between services'
      },
      {
        problem: 'Managing secrets and environment variables securely',
        solution: 'Integrated HashiCorp Vault for centralized secret management with automatic rotation'
      },
      {
        problem: 'Scaling pipeline for multiple teams and repositories',
        solution: 'Created reusable pipeline templates and self-service deployment workflows'
      }
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Jenkins Pipeline Dashboard'
      },
      {
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Kubernetes Deployment Status'
      },
      {
        url: 'https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'ArgoCD GitOps Interface'
      },
      {
        url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'SonarQube Code Quality Gates'
      }
    ],
    architecture: {
      diagram: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Complete CI/CD architecture showing the flow from code commit through various stages including build, test, security scan, containerization, and deployment to Kubernetes clusters.'
    }
  },

  'cloud-infrastructure': {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Setup',
    description: 'Scalable and secure cloud infrastructure on AWS using Infrastructure as Code with Terraform and configuration management with Ansible.',
    longDescription: 'Designed and implemented a production-ready cloud infrastructure on AWS that supports high availability, auto-scaling, and disaster recovery. The infrastructure includes VPC setup, security groups, load balancers, RDS databases, and monitoring solutions.',
    technologies: ['AWS', 'Terraform', 'Ansible', 'CloudWatch', 'Route53', 'RDS', 'ElastiCache', 'S3'],
    mainImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dhankarabhi',
    stats: {
      duration: '4 Months',
      complexity: 'Expert',
      impact: '99.9% Uptime'
    },
    features: [
      'Multi-AZ deployment for high availability',
      'Auto Scaling Groups with custom scaling policies',
      'Application Load Balancer with SSL termination',
      'RDS Multi-AZ with automated backups',
      'ElastiCache for Redis caching layer',
      'CloudWatch monitoring and alerting',
      'S3 for static assets with CloudFront CDN',
      'Route53 for DNS management and health checks'
    ],
    challenges: [
      {
        problem: 'Cost optimization while maintaining performance',
        solution: 'Implemented Reserved Instances, Spot Instances for non-critical workloads, and automated resource scheduling'
      },
      {
        problem: 'Security compliance and network isolation',
        solution: 'Created private subnets, NAT gateways, security groups with least privilege access, and AWS Config for compliance monitoring'
      },
      {
        problem: 'Disaster recovery and backup strategies',
        solution: 'Set up cross-region replication, automated snapshots, and documented disaster recovery procedures with RTO/RPO targets'
      }
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'AWS VPC Architecture Overview'
      },
      {
        url: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'CloudWatch Monitoring Dashboard'
      },
      {
        url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Terraform State Management'
      },
      {
        url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Auto Scaling Configuration'
      }
    ],
    architecture: {
      diagram: 'https://images.pexels.com/photos/3184483/pexels-photo-3184483.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'AWS infrastructure architecture showing VPC design, public/private subnets, load balancers, auto scaling groups, RDS setup, and monitoring components across multiple availability zones.'
    }
  },

  'monitoring-observability': {
    id: 'monitoring-observability',
    name: 'Monitoring & Observability',
    description: 'Comprehensive monitoring and observability platform using Prometheus, Grafana, and ELK Stack for real-time insights and alerting.',
    longDescription: 'Built a complete observability platform that provides real-time monitoring, logging, and alerting for microservices architecture. The system includes metrics collection, log aggregation, distributed tracing, and custom dashboards for different stakeholders.',
    technologies: ['Prometheus', 'Grafana', 'Elasticsearch', 'Logstash', 'Kibana', 'Jaeger', 'AlertManager', 'Fluentd'],
    mainImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dhankarabhi',
    stats: {
      duration: '2 Months',
      complexity: 'Advanced',
      impact: '95% Faster'
    },
    features: [
      'Real-time metrics collection with Prometheus',
      'Custom Grafana dashboards for different teams',
      'Centralized logging with ELK Stack',
      'Distributed tracing with Jaeger',
      'Intelligent alerting with AlertManager',
      'Log parsing and enrichment with Logstash',
      'Real-time log streaming with Fluentd',
      'SLA/SLO monitoring and reporting'
    ],
    challenges: [
      {
        problem: 'High volume of logs causing storage and performance issues',
        solution: 'Implemented log sampling, retention policies, and index lifecycle management in Elasticsearch'
      },
      {
        problem: 'Alert fatigue from too many notifications',
        solution: 'Created intelligent alerting rules with grouping, inhibition, and escalation policies'
      },
      {
        problem: 'Correlating metrics, logs, and traces across services',
        solution: 'Implemented unified tagging strategy and correlation IDs for end-to-end visibility'
      }
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Grafana System Overview Dashboard'
      },
      {
        url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Prometheus Metrics and Alerts'
      },
      {
        url: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Kibana Log Analysis Interface'
      },
      {
        url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Jaeger Distributed Tracing'
      }
    ],
    architecture: {
      diagram: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Observability stack architecture showing data flow from applications through collection agents to storage systems and visualization tools, including alerting and notification mechanisms.'
    }
  },

  'containerization': {
    id: 'containerization',
    name: 'Containerization Projects',
    description: 'Complete containerization strategy using Docker, Kubernetes, and Helm Charts for scalable microservices deployment.',
    longDescription: 'Containerized a monolithic application into microservices architecture using Docker and orchestrated deployment using Kubernetes. Implemented service mesh, ingress controllers, and automated scaling based on custom metrics.',
    technologies: ['Docker', 'Kubernetes', 'Helm', 'Istio', 'NGINX Ingress', 'HPA', 'Prometheus Operator', 'Cert-Manager'],
    mainImage: 'https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg?auto=compress&cs=tinysrgb&w=1600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dhankarabhi',
    stats: {
      duration: '3 Months',
      complexity: 'Advanced',
      impact: '70% Resource'
    },
    features: [
      'Multi-stage Docker builds for optimized images',
      'Kubernetes deployments with rolling updates',
      'Helm charts for templated deployments',
      'Istio service mesh for traffic management',
      'Horizontal Pod Autoscaler (HPA) configuration',
      'NGINX Ingress with SSL termination',
      'Persistent volume management',
      'Network policies for security isolation'
    ],
    challenges: [
      {
        problem: 'Managing configuration across multiple environments',
        solution: 'Created environment-specific Helm values files and implemented GitOps workflow with ArgoCD'
      },
      {
        problem: 'Service-to-service communication and security',
        solution: 'Implemented Istio service mesh with mTLS, circuit breakers, and traffic policies'
      },
      {
        problem: 'Resource optimization and cost management',
        solution: 'Implemented resource requests/limits, vertical pod autoscaling, and cluster autoscaling'
      }
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Kubernetes Dashboard Overview'
      },
      {
        url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Helm Chart Templates'
      },
      {
        url: 'https://images.pexels.com/photos/3184483/pexels-photo-3184483.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Istio Service Mesh Topology'
      },
      {
        url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Pod Autoscaling Metrics'
      }
    ],
    architecture: {
      diagram: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Kubernetes cluster architecture showing microservices deployment, service mesh configuration, ingress routing, and autoscaling components with persistent storage and monitoring integration.'
    }
  },

  'awx-automation': {
    id: 'awx-automation',
    name: 'AWX Ansible Automation Platform',
    description: 'Enterprise-grade Ansible automation platform deployment with AWX for centralized playbook management and job scheduling.',
    longDescription: 'Deployed and configured AWX (Ansible Tower open-source version) to provide a web-based interface for managing Ansible playbooks, inventories, and job scheduling. The platform enables team collaboration, credential management, and provides detailed job execution logs and reporting.',
    technologies: ['AWX', 'Ansible', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'LDAP', 'Nginx'],
    mainImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dhankarabhi',
    stats: {
      duration: '6 Weeks',
      complexity: 'Advanced',
      impact: '90% Faster'
    },
    features: [
      'Web-based Ansible playbook management interface',
      'Role-based access control (RBAC) with LDAP integration',
      'Centralized credential and inventory management',
      'Scheduled and on-demand job execution',
      'Real-time job monitoring and logging',
      'RESTful API for automation integration',
      'Multi-tenant organization support',
      'Detailed reporting and audit trails'
    ],
    challenges: [
      {
        problem: 'Complex credential management across multiple environments',
        solution: 'Implemented encrypted credential storage with LDAP integration and role-based access controls'
      },
      {
        problem: 'Scaling job execution for large infrastructure',
        solution: 'Configured distributed execution nodes and optimized job queuing with Redis backend'
      },
      {
        problem: 'Integration with existing CI/CD pipelines',
        solution: 'Developed REST API integrations and webhook triggers for seamless automation workflows'
      }
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'AWX Dashboard Overview'
      },
      {
        url: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Job Template Configuration'
      },
      {
        url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Inventory and Host Management'
      },
      {
        url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Job Execution Monitoring'
      }
    ],
    architecture: {
      diagram: 'https://images.pexels.com/photos/3184483/pexels-photo-3184483.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'AWX architecture showing web interface, API gateway, job execution nodes, PostgreSQL database, Redis cache, and integration with external LDAP and Git repositories for comprehensive automation management.'
    }
  },

  'openstack-kolla': {
    id: 'openstack-kolla',
    name: 'Multi-Node OpenStack Kolla Deployment',
    description: 'Production-ready multi-node OpenStack cloud deployment using Kolla-Ansible with high availability and automated container orchestration.',
    longDescription: 'Designed and deployed a scalable multi-node OpenStack cloud infrastructure using Kolla-Ansible for containerized deployment. The setup includes Nova, Neutron, Cinder, Glance, Keystone, and Horizon services with high availability configuration, load balancing, and comprehensive monitoring.',
    technologies: ['OpenStack', 'Kolla-Ansible', 'Docker', 'HAProxy', 'MariaDB Galera', 'RabbitMQ', 'Memcached', 'Ceph'],
    mainImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dhankarabhi',
    stats: {
      duration: '8 Weeks',
      complexity: 'Expert',
      impact: '10x Scale'
    },
    features: [
      'Multi-node OpenStack deployment with HA configuration',
      'Containerized services using Kolla-Ansible automation',
      'Neutron networking with VXLAN and provider networks',
      'Cinder block storage with Ceph backend integration',
      'Load balancing with HAProxy for API endpoints',
      'MariaDB Galera cluster for database high availability',
      'Integrated monitoring with Prometheus and Grafana',
      'Automated backup and disaster recovery procedures'
    ],
    challenges: [
      {
        problem: 'Complex networking configuration across multiple nodes',
        solution: 'Implemented VXLAN overlay networks with proper VLAN tagging and routing configuration'
      },
      {
        problem: 'Database cluster synchronization and split-brain scenarios',
        solution: 'Configured MariaDB Galera cluster with proper quorum settings and automated recovery procedures'
      },
      {
        problem: 'Storage performance optimization for virtual machines',
        solution: 'Integrated Ceph distributed storage with SSD caching and optimized placement groups'
      }
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'OpenStack Horizon Dashboard'
      },
      {
        url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Nova Compute Service Overview'
      },
      {
        url: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Neutron Network Topology'
      },
      {
        url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Ceph Storage Cluster Status'
      }
    ],
    architecture: {
      diagram: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'OpenStack multi-node architecture showing controller nodes with HA, compute nodes, storage nodes with Ceph, network nodes with Neutron, and load balancers providing high availability for all API services.'
    }
  }
};

export const getProject = (id: string) => {
  return projects[id as keyof typeof projects];
};

export const getAllProjects = () => {
  return Object.values(projects);
};