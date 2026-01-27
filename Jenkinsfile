pipeline {
    agent any

    tools {
        nodejs 'node24'
    }

    parameters {
        string(name: 'BRANCH', defaultValue: 'main', description: 'Branch to build')
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: "${params.BRANCH}",
                    url: 'https://github.com/SQE-Labs/HRMIS-Playwright.git'
                echo "Checked out branch: ${params.BRANCH}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    node -v
                    npm -v
                    npm ci
                    npx playwright install --with-deps
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    sh 'npx playwright test -g "@reg"'
                }
            }
        }

        stage('Parse Results') {
            steps {
                script {
                    env.PASSED = "0"
                    env.FAILED = "0"
                    env.SKIPPED = "0"
                    env.TOTAL = "0"
                    env.PASSED_PERCENT = "0"

                    if (fileExists('playwright-report/results.json')) {
                        def results = readJSON file: 'playwright-report/results.json'

                        def passed = results.stats.expected as int
                        def failed = results.stats.unexpected as int
                        def skipped = results.stats.skipped as int

                        def total = passed + failed + skipped

                        env.PASSED = passed.toString()
                        env.FAILED = failed.toString()
                        env.SKIPPED = skipped.toString()
                        env.TOTAL = total.toString()

                        if (total > 0) {
                            env.PASSED_PERCENT = ((passed * 100) / total).toString()
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                def buildStatus = currentBuild.currentResult
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: false

                if (buildStatus != 'ABORTED') {
                    emailext(
                        subject: "HRMIS API Automation - ${buildStatus} - ${env.PASSED_PERCENT}% Passed",
                        // to: "sandeep.kaur@sqelabs.com,archit.khurana@sqelabs.com,paras.sharma@sqelabs.com,prashant.anand@sqelabs.com,shilpa@sqelabs.com,muskan.arora@sqelabs.com",
                        to: "archit.khurana@sqelabs.com",
                        attachmentsPattern: 'playwright-report/**',
                        mimeType: 'text/html',
                        body: """
                        <html>
                            <body style="font-family: Arial;">
                                <h2>HRMIS API Automation Report</h2>
                                <p><b>Build #:</b> ${BUILD_NUMBER}</p>
                                <p><b>Status:</b> ${buildStatus}</p>

                                <h3>Test Summary</h3>
                                <ul>
                                    <li>Total: ${env.TOTAL}</li>
                                    <li>Passed: ${env.PASSED}</li>
                                    <li>Failed: ${env.FAILED}</li>
                                    <li>Skipped: ${env.SKIPPED}</li>
                                </ul>

                                <p><b>Pass Percentage:</b> ${env.PASSED_PERCENT}%</p>
                                <p>
                                    <a href="${BUILD_URL}" target="_blank">
                                        View Jenkins Build
                                    </a>
                                </p>
                            </body>
                        </html>
                        """
                    )
                } else {
                    echo "Build aborted — email not sent."
                }
            }
        }
    }
}
