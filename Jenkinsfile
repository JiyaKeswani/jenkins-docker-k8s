pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "jiya2022/app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

       stage('Push Docker Image') {
    steps {
        sh '''
        docker login -u jiya2022 -p Infinite..0
        docker push $DOCKER_IMAGE
        '''
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
