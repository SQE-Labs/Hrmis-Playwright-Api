pipeline {
    agent any

    tools {
        // ✅ MUST MATCH Jenkins → Manage Jenkins → Tools → NodeJS name
        nodejs 'NodeJS'
    }

    parameters {
        string(name: 'BRANCH', defaultValue: 'main', description: 'Git branch to build')
    }

    environment {
        CI = 'true'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: "${params.BRANCH}",
                    url: 'https://github.com/SQE-Labs/Hrmis-Playwright-Api.git',
            }
        }

        stage('Verify Node & NPM') {
            steps {
                sh '''
                    echo "Node Version:"
                    node -v
                    echo "NPM Version:"
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm ci
                    npx playwright install --with-deps
                '''
            }
        }

        stage('Run Playwright API Tests') {
            steps {
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    sh '''
                        npx playwright test
                    '''
                }
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: false
            }
        }
    }

    post {
        success {
            echo "🎉 HRMIS API tests passed successfully"
        }
        failure {
            echo "❌ HRMIS API tests failed"
        }
        always {
            echo "✅ Pipeline finished"
        }
    }
}
