pipeline {
    agent any
    stages {
        stage('Clonar Repo') {
            steps {
                git 'https://github.com/juandev14/strapidtest2.git'
            }
        }
        stage('Construir Contenedor Strapi') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d --build strapi'
            }
        }
    }
}
