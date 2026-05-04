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
        stage('Docker Login') {
    steps {
        sh 'docker login -u jiya2022 -p dckr_pat_P8LHWrEvtIRJGQwQk7pDJm4OUgQ'
    }
}


        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jiya2022/app .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker login -u jiya2022 -p dckr_pat_P8LHWrEvtIRJGQwQk7pDJm4OUgQ'
                sh 'docker push jiya2022/app'
            }
        }

        stage('Deploy to Kubernetes') {
    steps {
        sh '''
        export KUBECONFIG=/var/lib/jenkins/.kube/config
        kubectl apply -f deployment.yaml
        kubectl apply -f service.yaml
        '''
    }
}
    }
}
