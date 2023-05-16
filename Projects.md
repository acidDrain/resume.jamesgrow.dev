# Projects

List of projects I've worked on that demonstrate my knowledge, expertise, experience.

## Compliance Automation

 As the leader of technical vision and strategy for our product development I lead through example and support my team in our objectives, which include:

* software development
  * JavaScript - both node.js (back-end) and front-end (React)
  * Rego (Open Policy Agent)
  * Python
* build and maintain our cloud environments and CI/CD systems
* build and maintain our authentication/authorization systems implemented in OIDC and OAuth2
* strategize and execute our organization's effort to transition from consulting services into product development and software
* lead the product development efforts

### Project Highlight

Compliance automation solution using Open Policy Agent and Policy-As-Code (written in Rego) to check Terraform plans in the CI/CD pipeline against NIST 800-53.

The solution provided a gatekeeper to the CI/CD pipeline that failed the build/prevented deployment when a Terraform plan was evaluated to be out of compliance.

The solution also provided feedback to developers/engineers listing the specific parts of the Terraform plan that were out of compliance with references to the related NIST 800-53 controls.

If the findings were addressed and brought back into compliance, resulting in an passing evaluation, the deployment would be authorized to continue.

#### Background

Government contractor with NIST 800-53/Fedramp requirements needing a solution to help ease the burden of compliance audit and controls for their cloud infrastructure.

#### Requirements and Features

**The solution should**

* integrate with the CI/CD pipeline
* integrate with Terraform
* enable rich expression of policy
* be platform agnostic
* provide fast and rich feedback to developers/engineers to enable self-service - allowing engineers to identify and resolve findings immediately

#### Design

* First, we identified the technical controls from NIST 800-53
  * Of those technical controls, we identified controls that were applicable to the cloud deployment/environment (run time checks were not in scope, for example)
  * Finally, we designed a tagging and classification strategy to describe the systems, applications, environments, and data to adequately model in the policy language
* Translated controls into policy code, modeling relationships in data using the tagging and classification strategy we developed
* Developed Terraform module examples that passed policy evaluation and could be added to a library of reusable infrastructure components.
* Deployed the Open Policy Agent service running as a container in Kubernetes
* Developed CI scripts used to retrieve the Terraform plan from Terraform Cloud and subsequently submit to the Open Policy Agent API for evaluation

**The underlying tech stack I used to build the solution:**

* NIST 800-53 / Fedramp
* Open Policy Agent / Rego
* Kubernetes
* Terraform
* Microsoft Azure (cloud provider)
* Python and Bash (CI integration scripts)

## Vulnerability Scanning-as-a-Service API

### Project Highlight

Scanning-as-a-Service API written in JavaScript (Typescript) for creating vulnerability scanning jobs of AMIs (Amazon Machine Images).

#### Background

Client (health information technology services) adopted infrastructure-as-code early on, allowing development teams to produce their own golden AMIs for their respective software stacks. Instead of logging in to individual EC2 instances to make changes or run updates, they would have their CI/CD Pipeline build a new golden AMI using HashiCorp's Packer tool, then re-deploy their instances from the AMI.

The client was looking for a solution that could take webhooks from their CI/CD pipeline to handle vulnerability scanning of each new AMI produced while abstracting the underlying scanning solution behind the API.

The goal was to produce a platform agnostic, custom implementation of the concept outlined in How to Set Up Continuous Golden AMI Vulnerability Assessments with Amazon Inspector

#### Requirements and Features

* The solution must be stateless: state should be tracked/stored within components of the solution concerned with persistence
* The solution must scale horizontally
* The solution must be idempotent - adding more instances of the API should not have any effect on overall operations
* The solution must be asynchronous to avoid being a bottleneck or blocker
* The solution must be portable to support potential separate, independent deployments
* The solution must be event driven - its actions are in response to something happening (e.g. a new request to scan an AMI, a failure to connect to another API, etc.)

#### Design

The solution was built platform agnostic. AWS, GCP, Azure, VMware, etc. for the initial roadmap, with AWS being the initial cloud platform supported in MVP.

The underlying vulnerability scanning solution was Tenable.io, using a Nessus scanner deployed locally to the VPC.

**The underlying tech stack I used to build the solution:**

* Written in Typescript (only external dependencies were Express.js and AWS SDK)
* Containerized, deployed to Kubernetes running in EC2
* RabbitMQ - for distributed messaging and queuing
* CouchDB - job persistence and tracking
* ElasticSearch - data-lake / backend where results were stored long-term
