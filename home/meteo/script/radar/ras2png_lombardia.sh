#! /bin/bash
#######################################################################################
#                                                                                     #
# Autore         : RICCARDO GAETA                                                     #
# Data Creazione : 10/08/2017                                                         #
# Descrizione    : Script per la conversione da raster HDR/FLT/GTiff a PNG            #
# Parametri      :                                                                    #
#                                                                                     #
#######################################################################################

# ISTRUZIONI in breve:
#0-identificare lo SRID di partenza. Nel caso MeteoSwiss pare essere il 21781
#gdalsrsinfo meteoswiss.radar.precip.201705190850.tiff
#00-convertire il tiff nello srid di destinazione, il 3857
#gdalwarp -s_srs 'EPSG:21781' -t_srs 'EPSG:3857' -overwrite -of GTiff -srcnodata 0 meteoswiss.radar.precip.201705190850.tiff meteoswiss.radar.precip.3857.tiff
#1-creare vrt file dal raster convertito: gdalbuildvrt <output_vrt_file>.vrt <input_raster_file>
#gdalbuildvrt meteoswiss.radar.precip.vrt meteoswiss.radar.precip.3857.tiff
#2-modificare il vrt specificando: ColorTable e LUT (cioe' le classi)
#3-specificare il SRS se non presente
#4-passare il DataByte da Float32 a Byte
#5-passare da SimpleSource a ComplexSource
#A questo punto il .vrt e' pronto per generare tiff e png

echo "ras2png.sh - inizio elaborazione" `date +%Y%m%d%H%M%S`

INIT_DATE=`date +"%s"`

#INIZIALIZZIAMO LA PARTE METEOSWISS RADAR:
IN_DIR=/var/www/html/common/DATA/raster/meteoswiss
OUT_DIR=/var/www/html/common/DATA/raster/meteoswiss/elaborati
ANIME_DIR=/var/www/html/common/DATA/raster/meteoswiss/animazione

cd $IN_DIR

#I file vengono passati gia' in formato tiff:
for nomeflt in *.tiff
do

otfile=`basename $nomeflt .tiff`
#otfile e' solo il nome del file senza estensione
#nomeflt e' il file completo di estensione
echo "Elaboro il file " $nomeflt

if [[ $nomeflt == *".3857"* ]]
  then
    echo 'Salto elaborazione file tiff precedente'
    continue
fi

#In questo caso devo rinominare il file in modo uguale a tutti gli altri.
#Prelevo le info dal nome del file:
prefisso_raster=${otfile:0:23}
data_raster=${otfile:24:8}
ora_raster=${otfile:32:4}
datetime_raster=$data_raster" "$ora_raster
#Converto la DATARASTER in un formato standard per associarlo al nome del png:
file_date2=`date -d "$datetime_raster" +'%Y-%m-%d %H:00'`

src_filename="$prefisso_raster"".vrt"
dst_filename="$prefisso_raster"".png"
tiff_filename="$prefisso_raster"".3857.tiff"
anime_filename="$prefisso_raster"".""$data_raster""$ora_raster"".png"
#salvo DATAORA nel PNG:
#file_date=`stat -c "%y" $nomeflt`
#file_date2=`date -d "$file_date" +"%Y-%m-%d %H:%M"`

# Creo il GTiff e il PNG per mapserver
#Conversione da SR Svizzero EPSG:21781 a Pseudo_Mercatore EPSG:3857 (SDP 14/08/2017)
gdalwarp -s_srs 'EPSG:21781' -t_srs 'EPSG:3857' -overwrite -of GTiff -srcnodata 0 $nomeflt $tiff_filename
/home/meteo/script/python/flt2png.py $tiff_filename "$file_date2"
gdal_translate -a_srs 'EPSG:3857' -of PNG -a_nodata 255 -mo "DATETIME=$file_date2" $src_filename $dst_filename
#In questo caso il tiff ha gia' una sua palette che non riesco a sovrascrivere. Tanto vale usarla, pecato non abbia la trasparenza:
#gdal_translate -a_srs 'EPSG:3857' -of PNG -a_nodata 255 -mo "DATETIME=$file_date2" $tiff_filename $dst_filename

#Copio il png nella cartella animazione lasciando l'informazione sulla data-ora:
cp $dst_filename $ANIME_DIR/$anime_filename

#Muovo il file tiff elaborato:
mv $nomeflt $OUT_DIR

done

#Rimuovo i png troppo vecchi (time_stamp oltre "days_ago") dalla cartella animazione
days_ago=7
find $ANIME_DIR/ -type f -iname "*.png" -mtime +$days_ago -exec rm -f {} \; 


END_DATE=`date +"%s"`
ELAPSED=$(( $END_DATE - $INIT_DATE ))

echo "Fine elaborazioni. Tempo trascorso: " $ELAPSED
