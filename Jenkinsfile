pipeline {
    agent any

    stages {

        stage('Push to Another Repository') {
            steps {
                script {
                    // Set up Git configurations for the new repository
                    sh 'git config --global user.email "muhammadansif9633@gmail.com"'
                    sh 'git config --global user.name "MUHAMMEDANSIFV"'

                    // Add the new repository as a remote
                    sh 'git remote add new_origin https://github.com/MUHAMMEDANSIFV/Clone-Jankins-Docker.git'

                    // Push the code to the new repository
                    sh 'git push new_origin master'
                }
            }
        }
    }
}
