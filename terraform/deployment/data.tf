data "aws_caller_identity" "current" {
}

data "aws_vpc" "main" {
    tags = {
	  Name = "social-analytics-vpc"
  }
}

data "aws_subnet_ids" "public" {
  vpc_id = data.aws_vpc.main.id
  tags = {
	  Type = "public"
  }
}

data "aws_subnet_ids" "private" {
  vpc_id = data.aws_vpc.main.id
  tags = {
	  Type = "private"
  }
}