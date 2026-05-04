pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "jiya2022/app"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/JiyaKeswani/jenkins-docker-k8s.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jiya2022/app .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker login -u jiya2022 -p dckr_pat_JCu1wWqdu6jRL1G6SMyIYhZCrrA'
                sh 'docker push jiya2022/app'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}
