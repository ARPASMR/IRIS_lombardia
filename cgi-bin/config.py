#!/usr/bin/python

'''
Alcune configurazioni di base
'''

#eventuale proxy server:
global proxies
#proxies = {'http': 'http://proxy.arpa.piemonte.it:3128/'}
proxies = {'http': 'http://meteo@proxy2.arpa.local:8080/'}

#connessione al DB - utente in lettura:
db_name = 'iris_base'
db_port = '5432'
db_host = 'localhost'
db_user = 'webgis'
db_pwd = ''

#permessi di scrittura su alcune tabelle config
global dns
dns = "postgresql://radar@%s:%s/%s" % (db_host, db_port, db_name)

