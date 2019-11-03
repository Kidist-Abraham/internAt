def COLOR_MAP = ['SUCCESS': 'good', 'FAILURE': 'danger', 'UNSTABLE': 'danger', 'ABORTED': 'danger']

// def getBuildUser() {
//     return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
// }

pipeline {

  environment {
    PROJECT = "th-eyobofficial"
    APP_NAME = "api"
    FE_SVC_NAME = "${APP_NAME}-frontend"
    CLUSTER = "internat"
    CLUSTER_ZONE = "us-east1-d"
    IMAGE_TAG = "gcr.io/${PROJECT}/${APP_NAME}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"
    JENKINS_CRED = "${PROJECT}"
  }

  agent {
    kubernetes {
      label 'jenkins-app'
      defaultContainer 'jnlp'
      yaml """
apiVersion: v1
kind: Pod
metadata:
labels:
  component: ci
spec:
  # Use service account that can deploy to all namespaces
  serviceAccountName: cd-jenkins
  containers:
  - name: node
    image: node:latest
    command:
    - cat
    tty: true
  - name: gcloud
    image: gcr.io/cloud-builders/gcloud
    command:
    - cat
    tty: true
  - name: kubectl
    image: gcr.io/cloud-builders/kubectl
    command:
    - cat
    tty: true
"""
}
  }
  stages {
    // stage('Test') {
    //   steps {
    //     container('node') {
    //       sh """
    //         npm install
    //         npm test
    //       """
    //     }
    //   }
    // }
    
    stage('Build and push image with Container Builder') {
      steps {
        container('gcloud') {
          sh "PYTHONUNBUFFERED=1 gcloud builds submit -t ${IMAGE_TAG} ."
        }
      }
    }
    
    stage('Deploy Production') {
      // Production branch
      when { branch 'debug' }
      steps{
        container('kubectl') {
        // Change deployed image in canary to the one we just built
          sh("kubectl get ns production")
          sh("sed -i.bak 's#gcr.io/gcr-project/sample:1.0.0#${IMAGE_TAG}#' ./k8s/deployments/production/*.yaml")
          step([$class: 'KubernetesEngineBuilder',namespace:'production', projectId: env.PROJECT, clusterName: env.CLUSTER, zone: env.CLUSTER_ZONE, manifestPattern: 'k8s/services', credentialsId: env.JENKINS_CRED, verifyDeployments: false])
          step([$class: 'KubernetesEngineBuilder',namespace:'production', projectId: env.PROJECT, clusterName: env.CLUSTER, zone: env.CLUSTER_ZONE, manifestPattern: 'k8s/deployments/production', credentialsId: env.JENKINS_CRED, verifyDeployments: true])
          sh("echo http://`kubectl --namespace=staging get service/${FE_SVC_NAME} -o jsonpath='{.status.loadBalancer.ingress[0].ip}'` > ${FE_SVC_NAME}")
        }
      }
    }
    
    stage('Deploy Development') {
      // Developer Branches
      when {
        not { branch 'master' }
      }
      steps {
        container('kubectl') {
          sh("kubectl get ns development")
          sh("sed -i.bak 's#gcr.io/gcr-project/sample:1.0.0#${IMAGE_TAG}#' ./k8s/deployments/development/*.yaml")
          step([$class: 'KubernetesEngineBuilder',namespace: "development", projectId: env.PROJECT, clusterName: env.CLUSTER, zone: env.CLUSTER_ZONE, manifestPattern: 'k8s/services', credentialsId: env.JENKINS_CRED, verifyDeployments: false])
          step([$class: 'KubernetesEngineBuilder',namespace: "development", projectId: env.PROJECT, clusterName: env.CLUSTER, zone: env.CLUSTER_ZONE, manifestPattern: 'k8s/deployments/development', credentialsId: env.JENKINS_CRED, verifyDeployments: true])
        }
      }
    }

    stage('Slack Feedback') {
      steps {
        slackSend channel: "#internat",
          color: COLOR_MAP[currentBuild.currentResult],
          message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n"
      }
    }
}
}
