stage('Checkout: Code') {
steps {
sh "mkdir -p $WORKSPACE/repo;\
git config --global user.email 'email@address.com';\
git config --global user.name 'myname';\
git config --global push.default simple;\
git clone $BUILD_SCRIPTS_GIT repo/$BUILD_SCRIPTS"
sh "chmod -R +x $WORKSPACE/repo/$BUILD_SCRIPTS"
}
}
