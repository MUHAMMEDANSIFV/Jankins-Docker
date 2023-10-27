pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 4000:4000'
        }
    }

    environment {
        DOCKER_REGISTRY_URL = 'ansif4031/jankin-with-docker:tagname'  // Replace with your Docker registry URL
        IMAGE_NAME = 'jankins-with-docker'
        IMAGE_TAG = 'v1.0'  // Replace with your desired version or tag
    }

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
               script {
    // Build the Docker image from the Dockerfile in the 'dockerfiles' directory
    docker.build("${DOCKER_REGISTRY_URL}/${IMAGE_NAME}:${IMAGE_TAG}", "-f dockerfiles/Dockerfile .")
}
            }
        }

        stage('Push to Docker Registry') {
            steps {
                script {
                    // Log in to the Docker registry
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        def dockerLogin = "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} ${DOCKER_REGISTRY_URL}"
                        sh "${dockerLogin}"
                    }

                    // Push the Docker image to the registry
                    sh "docker push ${DOCKER_REGISTRY_URL}/${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }
    }

    post {
        success {
            echo 'Docker image build and push were successful!'
        }
        failure {
            echo 'Docker image build or push failed!'
        }
    }
}

