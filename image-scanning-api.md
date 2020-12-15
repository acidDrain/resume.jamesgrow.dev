## Project

Scanning-as-a-Service API written in JavaScript (Typescript) for creating
vulnerability scanning jobs of AMIs (Amazon Machine Images).

## Background

Client (health information technology services) adopted infrastructure-as-code
early on, allowing development teams to produce their own golden AMIs for their
respective software stacks. Instead of logging in to individual EC2 instances
to make changes or run updates, they would have their CI/CD Pipeline build a
new golden AMI using HashiCorp's Packer tool, then re-deploy their instances
from the AMI.

The client was looking for a solution that could take webhooks from their CI/CD
pipeline to handle vulnerability scanning of each new AMI produced while
abstracting the underlying scanning solution behind the API.

The goal was to produce a platform agnostic, custom implementation of the
concept outlined in [How to Set Up Continuous Golden AMI Vulnerability
Assessments with Amazon
Inspector](https://aws.amazon.com/blogs/security/how-to-set-up-continuous-golden-ami-vulnerability-assessments-with-amazon-inspector/)

### Requirements and Features

- The solution must be stateless: state should be tracked/stored within
  components of the solution concerned with persistence
- The solution must scale horizontally
- The solution must be idempotent - adding more instances of the API should not
  have any affect on overall operations
- The solution must be asynchronous to avoid being a bottleneck or blocker
- The solution must be portable to support potential separate, independent
  deployments
- The solution must be event driven - it's actions are in response to something
  happening (e.g. a new request to scan an AMI, a failure to connect to another
  API, etc.)

## Design

### Solution Overview

The solution was built platform agnostic. AWS, GCP, Azure, VMware, etc. for the
initial roadmap, with AWS being the initial cloud platform supported in MVP.

The underlying vulnerability scanning solution was Tenable.io, using a Nessus
scanner deployed locally to the VPC.

The underlying tech stack I used to build the solution:

- Written in Typescript (only external dependencies were Express.js and AWS SDK)
- Containerized, deployed to Kubernetes running in EC2
- RabbitMQ - for distributed messaging and queuing
- CouchDB - job persistence and tracking
- ElasticSearch - data-lake / backend where results were stored long-term
