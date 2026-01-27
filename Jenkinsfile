pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        NODE_ENV = 'qa'
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Playwright API Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'HRMIS API Playwright Report'
                ])
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed'
        }
        success {
            echo '✅ HRMIS API Tests Passed'
        }
        failure {
            echo '❌ HRMIS API Tests Failed'
        }
    }
}
