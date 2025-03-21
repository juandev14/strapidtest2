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
                sh 'docker-compose -f mysql-docker-strapi-compose.yaml down'
                sh 'docker-compose -f mysql-docker-strapi-compose.yaml up -d --build strapi'
            }
        }
    }
}
