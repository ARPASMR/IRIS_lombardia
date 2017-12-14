# Struttura del sistema webgis IRIS Lombardia

*copia_www.sh*       script per la copia dei file correnti nel repository

*creaanagrafica.sh*  script per la copia dell'anagrafica dal dBMETEO al dBIRIS

*./cgi-bin*          directory contenente la copia dei file necessari in /var/www/cgi-bin

*./html*             directory contenente la copia dei file necessari in /var/www/html

*./etc*              directory contenente la copia dei file necessari in /etc

*NOTA* le password sono settate in config.py ma nel repository sono state cancellate per motivi di sicurezza

come ulteriore sicurezza la password per creare l'anagrafica è nella variabile di ambiente PGPASSWORD: basta fare l'export!!!
