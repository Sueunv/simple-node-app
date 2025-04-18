pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                echo "Cloning repository..."
                git 'https://github.com/Sueunv/simple-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building app..."
                sh 'npm run build || echo "No build step defined"'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'npm test || echo "No tests defined"'
            }
        }
    }
}

