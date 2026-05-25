output "backend_url" {
  value = aws_ecr_repository.my_backend_ecr_repo.repository_url
}

output "frontend_url" {
  value = aws_ecr_repository.my_frontend_ecr_repo.repository_url
}

## React + Node Full 
# Dockerized 
# Github actions CI
# Tirvy Filesystem Scan
# Trivy image Scan
# terraform-managed ECR repositories
# ECR image scanning on push
# ECR push workflow in Github actions
# Sonar prepared for future ec2 