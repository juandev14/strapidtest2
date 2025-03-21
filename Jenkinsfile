pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        WORKSPACE_DIR = '/var/jenkins_home/workspace/deploy-strapi' // Ajusta según sea necesario
    }

    stages {
        stage('Clonar Repo') {
            steps {
                git 'https://github.com/juandev14/strapidtest2.git'
            }
        }

        stage('Mostrar Directorio') {
            steps {
                script {
                    sh 'pwd'
                    sh 'ls -la'
                }
            }
        }

        stage('Construir y Desplegar Contenedores') {
            steps {
                script {
                    sh 'docker --version'
                    sh 'docker-compose --version'
                    
                    // Parar y eliminar contenedores solo si existen
                    sh 'docker rm -f mysql_container1 || true'
                    sh 'docker rm -f strapi_container || true'
                    
                    // Iniciar los contenedores
                    sh "docker-compose -f $DOCKER_COMPOSE_FILE up -d --build"
                }
            }
        }

        stage('Esperar que MySQL esté listo') {
            steps {
                script {
                    sh """
                        until docker exec strapi_container nc -z mysql 3306; do
                            echo 'Esperando que MySQL esté listo...';
                            sleep 2;
                        done;
                    """
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
        failure {
            echo '¡Hubo un error en el despliegue! Eliminando contenedores...'
            sh 'docker-compose down'
        }

        success {
            echo '¡Despliegue exitoso! Contenedores en ejecución.'
        }
    }
}
