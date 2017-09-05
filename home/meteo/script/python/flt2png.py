#!/usr/bin/python

# assegno un metadato data-ora ai file tiff della parte IDRO
# richiamato dallo shell script "flt2png.sh"

import os,sys
#import cgi
#import cgitb; cgitb.enable()

try:
    from osgeo import gdal
    from osgeo.gdalconst import *
    gdal.TermProgress = gdal.TermProgress_nocb
except ImportError:
    import gdal
    from gdalconst import *

#try:
#    import numpy as Numeric
#    Numeric.arrayrange = Numeric.arange
#except ImportError:
#    import Numeric

try:
    infile = sys.argv[1]
    datetime = sys.argv[2]

except:
    print "usage: flt2png [infile] [datetime]"
    os._exit(0)

#infile_path = '/var/www/html/webgis/idro/PLUV/'
#infileIDRO = infile_path + infile
infileIDRO = infile
indataset = gdal.Open(infileIDRO, gdal.GA_Update)
if indataset == None:
	print('Cannot open', infileIDRO)
        sys.exit(2)

indataset.SetMetadata( [('DATETIME='+datetime)] )
