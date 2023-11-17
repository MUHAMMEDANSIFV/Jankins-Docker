pipeline {
    agent any

    stages {
        stage('Clone and Push') {
            steps {
                script {
                    // Define your repository URLs and credentials
                    def sourceRepo = 'https://github.com/MUHAMMEDANSIFV/Jankins-Docker.git'
                    def destinationRepo = 'https://github.com/MUHAMMEDANSIFV/Clone-Jankins-Docker.git'
                    def sourceCredentialsId = 'b5c46823-d8d3-4833-8064-4b2d087dd48d'
                    def destinationCredentialsId = 'b5c46823-d8d3-4833-8064-4b2d087dd48d'

                    // Define the branch name
                    def branchName = 'master'

                    // Clone the source repository
                    checkout([$class: 'GitSCM',
                        branches: [[name: "refs/remotes/origin/${branchName}"]],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [[$class: 'CleanBeforeCheckout']],
                        submoduleCfg: [],
                        userRemoteConfigs: [[credentialsId: sourceCredentialsId, url: sourceRepo]]
                    ])

                    // Check if the branch exists in the destination repository
                    def branchExists = sh(script: "git ls-remote --heads ${destinationRepo} ${branchName}", returnStatus: true) == 0

                    if (!branchExists) {
                        // If the branch doesn't exist, create a new branch in the destination repository
                        sh "git push ${destinationRepo} ${branchName}:${branchName}"
                    } else {
                        // If the branch exists, push changes to the existing branch in the destination repository
                        sh "git push ${destinationRepo} ${branchName}"
                    }
                }
            }
        }
    }
}