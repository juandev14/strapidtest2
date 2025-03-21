pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Clonar Repo') {
            steps {
                git 'https://github.com/juandev14/strapidtest2.git'
            }
        }

        stage('Construir y Desplegar Contenedores') {
            steps {
                script {
                    sh 'docker --version'
                    sh 'docker-compose --version'
                    
                    sh 'docker-compose down'
                    sh 'docker-compose build'
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Verificar que Strapi está corriendo') {
            steps {
                script {
                    sh 'docker ps'
                    sh 'docker-compose logs strapi'
                }
            }
        }
    }

    post {
        success {
            echo '¡Despliegue exitoso!'
        }

        failure {
            echo '¡Hubo un error en el despliegue!'
        }
    }
}
