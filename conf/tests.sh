for i in {1..10}
do
   echo "*********************test numero $i *******************************"
   protractor protractorDos.conf.js --params.adresse=http://integration.siga.akka.eu:84
done