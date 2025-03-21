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
                // Detener y eliminar cualquier contenedor con el nombre en conflicto
                sh 'docker rm -f mysql_container1 || true' // Elimina el contenedor si existe
                
                // Ejecuta los comandos docker-compose
                sh 'docker-compose -f mysql-docker-strapi-compose.yaml down'
                sh 'docker-compose -f mysql-docker-strapi-compose.yaml up -d --build strapi'
            }
        }
    }
}
