terraform {
    required_providers {
        aws = {
        source  = "hashicorp/aws"
        version = "~> 4.0"
        }
    }
}
provider "aws" {
  region = var.aws_region
}


# TERRAFORM --> AZURE STORAGE ACCOUNT --> BLOB CONTAINER --> BACKEND CONFIGURATION
# TERRAFORM --> AWS S3 BUCKET --> BACKEND CONFIGURATION