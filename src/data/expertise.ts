import type { ExpertiseDomain } from '../types/portfolio'

export const expertise: ExpertiseDomain[] = [
  {
    name: 'Data platform architecture',
    summary: 'Enterprise data platforms, cloud-native architecture, data contracts and platform governance.',
    technologies: ['Data contracts', 'Schema registry', 'Architecture RFCs', 'Design reviews'],
  },
  {
    name: 'Distributed data processing',
    summary: 'Batch processing, reusable data pipelines and distributed transformation.',
    technologies: ['Python', 'Scala', 'Java', 'SQL', 'Apache Spark', 'PySpark', 'Apache Airflow', 'dbt'],
  },
  {
    name: 'Streaming and CDC',
    summary: 'Change data capture and event-driven data processing across operational sources.',
    technologies: ['Kafka', 'Kafka Connect', 'Debezium', 'Spark Streaming'],
  },
  {
    name: 'Cloud data engineering',
    summary: 'AWS services for data ingestion, processing, warehousing and AI workloads.',
    technologies: ['AWS S3', 'AWS EMR', 'AWS Glue', 'AWS Redshift', 'AWS Bedrock', 'AWS Lambda', 'AWS EC2'],
  },
  {
    name: 'Lakehouse and warehousing',
    summary: 'Lakehouse storage, cloud warehouses, semantic models and analytics.',
    technologies: ['Snowflake', 'Snowpark', 'Snowflake Cortex', 'Apache Iceberg', 'Delta Lake', 'Databricks'],
  },
  {
    name: 'AI, machine learning and GenAI',
    summary: 'Machine learning frameworks and LLM-based application patterns.',
    technologies: ['Azure OpenAI', 'OpenAI', 'Gemini', 'Llama', 'Mistral', 'PyTorch', 'TensorFlow', 'NLP'],
  },
  {
    name: 'RAG and AI application engineering',
    summary: 'Retrieval, vector search and application frameworks for AI workflows.',
    technologies: ['RAG', 'Embeddings', 'Vector search', 'LangChain', 'LlamaIndex', 'FAISS', 'ChromaDB', 'FastAPI', 'Flask', 'Streamlit'],
  },
  {
    name: 'Data governance and responsible access',
    summary: 'Governance and access patterns represented in the resume.',
    technologies: ['RBAC', 'Dynamic masking', 'Row-level controls', 'HIPAA/GDPR', 'FinOps'],
  },
  {
    name: 'Analytics and engineering leadership',
    summary: 'Technical direction, engineering practices, mentoring and reporting.',
    technologies: ['CI/CD', 'Technical mentoring', 'Power BI', 'Apache Superset'],
  },
]
