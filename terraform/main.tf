resource "aws_ecr_repository" "my_backend_ecr_repo" {
  name = "backend-app"
  image_scanning_configuration {
    scan_on_push = true 
  }
}
resource "aws_ecr_repository" "my_frontend_ecr_repo" {
  name = "frontend-app"
  image_scanning_configuration {
    scan_on_push = true
  }
}


## GIT PUSH --> GITHUB ACTION --> TRIVY FS --> BUILD APP --> PUSH TO ECR REPO 
## TERRAFORM --> EKS --> HELM --> INGRESS --> PORMETHEUS --> GRAFANA