pipeline {
    agent any

    tools {
        nodejs "Node.js" // Assuming "Node.js" is configured in Jenkins
    }

    stages {
        stage('checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/MUHAMMEDANSIFV/Jankins-Docker.git'
            }
        }

        stage('Execute Node.js Build') {
            steps {
                sh 'npm install' // Modify this as needed based on your Node.js project setup
                // Add other Node.js build steps as needed
            }
        }

        stage('Docker Build and Tag') {
            steps {
                sh 'docker build -t samplewebapp:latest .'
                sh 'docker tag samplewebapp nikhilnidhi/samplewebapp:latest'
                //sh 'docker tag samplewebapp nikhilnidhi/samplewebapp:$BUILD_NUMBER'
            }
        }

        stage('Publish image to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: "dockerHub", url: ""]) {
                    sh 'docker push nikhilnidhi/samplewebapp:latest'
                    //sh 'docker push nikhilnidhi/samplewebapp:$BUILD_NUMBER'
                }
            }
        }

        stage('Run Docker container on Jenkins Agent') {
            steps {
                sh "docker run -d -p 8003:8080 nikhilnidhi/samplewebapp"
            }
        }

        stage('Run Docker container on remote hosts') {
            steps {
                // Modify this step based on your requirements for running on remote hosts
                // Example: sh "ssh jenkins@172.31.28.25 'docker run -d -p 8003:8080 nikhilnidhi/samplewebapp'"
            }
        }
    }
}
