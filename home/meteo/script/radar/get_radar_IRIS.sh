#!/bin/bash

declare -x LANG="us_US.UTF-8"
export LC_TIME="en_GB"
export LC_NUMERIC=C

###
RADAR=/var/www/html/common/DATA/raster/meteoswiss
BIN=$HOME/bin
SCRIPT=/home/meteo/script/radar
TMP_DIR=/tmp

#--Variabili radar
ftp_radar="ftp://ftp.arpalombardia.it/Prisma"
ip_radar=ftp.arpalombardia.it
usr_radar=radar
pwr_radar=radch!
node_radar="-u radar -p radch! $ftp_radar"

###
#Se elab_tiff=1 lo script chiama anche ras2png_lombardia.sh
elab_tiff=0
if [ "$1" -eq 1 ]; then
    elab_tiff=1
fi  

echo $elab_tiff

echo
echo
dataoggi=$(date +%Y%m%d%H) && echo $dataoggi
data_acquisizione=$(date +%Y%m%d"@"%H:%M) && echo "data acquisizione: $data_acquisizione"
nomescript=`basename $0 .sh`

### trap processi
export LOCKDIR=$TMP_DIR/$nomescript-$dataoggi.lock && echo "lockdir -----> $LOCKDIR"
T_MAX=3600

if mkdir "$LOCKDIR" 2>/dev/null
then
        echo "acquisito lockdir: $LOCKDIR"
        echo $$ > $LOCKDIR/PID
else
        echo "Script \"$nomescript.sh\" già in esecuzione alle ore `date +%H%M` con PID: $(<$LOCKDIR/PID)"
        echo "controllo durata esecuzione script"
        ps --no-heading -o etime,pid,lstart -p $(<$LOCKDIR/PID)|while read PROC_TIME PROC_PID PROC_LSTART
        do
                SECONDS=$[$(date +%s) - $(date -d"$PROC_LSTART" +%s)]
                echo "------Script \"$nomescript.sh\" con PID $(<$LOCKDIR/PID) in esecuzione da $SECONDS secondi"
                if [ $SECONDS -gt $T_MAX ]
                then
                        echo "$PROC_PID in esecuzione da più di $T_MAX secondi, lo killo"
                        pkill -15 -g $PROC_PID
                fi
        done
        echo "*********************************************************"
        exit
fi

trap 'echo;
rm -vR $LOCKDIR;
find $RADAR -type f -iname "*.tiff" -mmin +180 -exec rm -v {} \;
echo \"** fine script `basename $0`: `date` ***************************************\";
exit' EXIT HUP INT QUIT TERM

echo
echo "** inizio script `basename $0` ore: `date` ***************************************"
echo

$BIN/ncftpls $node_radar |grep -i '\.tiff$' |tail -n24 >$LOCKDIR/lista_radar.txt

ftp_code=$? && echo "codice uscita ftp: $ftp_code"
if [[ $ftp_code != 0 ]]
then
        echo "ftp server $node_radar irraggiungibile"
        exit
fi

for nome in `cat $LOCKDIR/lista_radar.txt`
do
        echo $nome
        $BIN/ncftpget -u radar -p radch\! $ip_radar $RADAR Prisma/$nome
done

ls -tr1 $RADAR/*.tiff | xargs -n1 basename | tail -n24 >$RADAR/lista_realtime.txt


if [ "$elab_tiff" -eq 1 ]; then
   $SCRIPT/ras2png_lombardia.sh
fi
    

exit

