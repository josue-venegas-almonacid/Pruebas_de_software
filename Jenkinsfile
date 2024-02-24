pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    // Instalar dependencias del frontend
                    bat "cd T1_T2_Recetario_CI_CD/frontend && npm install"
                    // Compilar el frontend
                    bat "cd T1_T2_Recetario_CI_CD/frontend && npm run build"
                }
            }
        }
        stage('Deploy') {
            steps {
                // Copiar los archivos compilados al directorio de despliegue
                // bat "xcopy C:\Users\Josue\Desktop\Github\Pruebas_de_software\T1_T2_Recetario_CI_CD\frontend\dist C:\\xampp\htdocs /s/y"
                bat "xcopy T1_T2_Recetario_CI_CD\frontend\dist C:\\xampp\htdocs /s/y"
            }
        }
    }
}
