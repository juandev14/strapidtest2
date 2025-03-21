pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'  // Cambié el nombre del archivo aquí
    }

    stages {
        stage('Clonar Repo') {
            steps {
                // Clonar el repositorio con el archivo docker-compose.yml
                git 'https://github.com/juandev14/strapidtest2.git'
            }
        }

        stage('Construir y Desplegar Contenedores') {
            steps {
                script {
                    // Asegurarse de que Docker y Docker Compose están disponibles
                    sh 'docker --version'
                    sh 'docker-compose --version'
                    
                    // Detener y eliminar cualquier contenedor anterior que tenga conflicto
                    sh 'docker rm -f mysql_container1 || true'
                    sh 'docker rm -f strapi_container || true'
                    
                    // Ejecutar docker-compose para levantar los contenedores en segundo plano
                    sh "docker-compose -f $DOCKER_COMPOSE_FILE down"
                    sh "docker-compose -f $DOCKER_COMPOSE_FILE up -d --build"
                }
            }
        }

        stage('Esperar que MySQL esté listo') {
            steps {
                script {
                    // Asegurarse de que MySQL está listo antes de iniciar Strapi
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
                    // Verificar si Strapi está corriendo correctamente
                    sh 'docker ps'
                    sh 'docker-compose logs strapi'
                }
            }
        }
    }

    post {
        always {
            // Limpiar los contenedores al finalizar
            echo 'Limpiando contenedores...'
            sh 'docker-compose down'
        }

        success {
            echo '¡Despliegue exitoso!'
        }

        failure {
            echo '¡Hubo un error en el despliegue!'
        }
    }
}
