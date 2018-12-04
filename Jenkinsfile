pipeline {
  agent any
  stages {
    stage('publish') {
      agent any
      steps {
        mail(subject: 'Pushed', body: 'published', cc: 'mirnes.halilovic@gmail.com', from: 'mirke.ha@gmail.com', replyTo: 'mirnes.halilovic@serapion.net')
      }
    }
  }
  environment {
    test = ''
  }
}