bucket                      = "social-analytics-terraform-states"
key                         = "social-analytics-deployment.tfstate"
region                      = "us-east-1"
encrypt                     = true
dynamodb_table              = "terraform-locks"