import type { ExperienceEntry } from '../types/portfolio'

export const experience: ExperienceEntry[] = [
  {
    organization: 'NextGen Healthcare',
    role: 'Sr. Staff Engineer, Data & AI Platform',
    period: 'Dec 2024–Present',
    highlights: [
      'Directed modernization of enterprise data transformation on Snowflake and dbt, introducing schema contracts that accelerated data preparation by 40% across clinical product lines.',
      'Defined Apache Iceberg on S3 lakehouse and governance patterns, including snapshot maintenance, compaction, dynamic masking and row-level controls for HIPAA-aligned analytics and secure clinical AI inference.',
      'Enabled AI-ready clinical data models for patient summarization and CPT code recommendation, aligning curated data structures with downstream LLM workflows and access requirements.',
    ],
  },
  {
    organization: 'UpGrad Education',
    role: 'Lead Data & AI Platform Engineer',
    period: 'Nov 2021–Dec 2024',
    highlights: [
      'Led 8+ data engineers and established technical direction, CI/CD and Agile delivery practices, improving cross-team velocity by 30%.',
      'Designed Kafka Connect and Debezium CDC across MySQL, PostgreSQL and MongoDB; reduced source database CPU contention from 85% to under 15% while maintaining sub-30-minute freshness SLAs.',
      'Optimized AWS Redshift to improve query throughput by 30% and reduce storage TCO by 20%; delivered LLM-assisted assignment evaluation that cut manual grading spend by 80%.',
      'Built reusable Spark data pipelines and AI-enabled learner workflows, including vector retrieval and agent-based evaluation, with ingestion from product, marketing and CRM sources.',
    ],
  },
  {
    organization: 'GlobalFoundries Pvt. Ltd.',
    role: 'Senior Data Platform & Integration Engineer',
    period: 'Aug 2015–Oct 2021',
    highlights: [
      'Owned AWS Redshift central data warehouse design; applied compound sort keys and AZ64 compression to improve manufacturing analytics query performance by 25%.',
      'Built PySpark and Airflow ETL across Oracle ERP, SQL Server and Salesforce, plus Kafka and Spark Streaming telemetry pipelines that reduced operational data latency by 30%.',
      'Integrated manufacturing and analytics datasets to improve data availability and dependable reporting across production workflows.',
    ],
  },
  {
    organization: 'Dell International Pvt. Ltd.',
    role: 'Data Platform Engineer / Software Dev. Sr. Analyst',
    period: 'Nov 2012–Aug 2015',
    highlights: [
      'Built enterprise integration frameworks and automated Oracle EBS-to-AWS data pipelines; shaped curated datasets for executive Power BI reporting and maintained SQL/database integrations and reconciliation workflows.',
    ],
  },
  {
    organization: 'Mobility Info Tech / Sonata Software',
    role: 'ERP Specialist / Systems Analyst',
    period: 'Jan 2009–Nov 2012',
    highlights: [
      'Delivered Oracle ERP customizations, database interfaces and component integrations; managed schema maintenance, production issue resolution and optimization of enterprise reporting queries.',
    ],
  },
]
