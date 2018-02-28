/***************************************************************
* Name:        IRIS - Integrated Radar Information System
* Purpose:     WebGis System for Meteorological Monitoring
*
* Author:      Roberto Cremonini, Armando Gaeta, Rocco Pispico
* Email:       sistemi.previsionali@arpa.piemonte.it
*
* Created:     01/04/2016
* Licence:     EUPL 1.1 Arpa Piemonte 2016
***************************************************************/

///////////////// DEFINIZIONE WFS VECTOR LAYER //////////////////////


/*BACINI*/
var style_bacini_tiny = new OpenLayers.Style();
/*var bacini_rule = new OpenLayers.Rule({
	title: "Bacini Lombardia",
	symbolizer: {strokeColor: "black", strokeWidth: 0.8, strokeOpacity: 0.5, fillColor: "#0b9d3c", fillOpacity: 0.3
	,title: "${bacini_agg}", fontSize: "0px"
        ,label: "${bacini_agg}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
	}
});*/
var style_bacini_tiny = new OpenLayers.Style({
        strokeColor: "black", strokeWidth: 0.8, fillOpacity: 0.5, fillColor: "#0b9d3c", fillOpacity: 0.3
        ,title: "${bacini_agg}"
        ,label: "${bacini_agg}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
        rules: [
	        new OpenLayers.Rule({
                title: "Bacini Lombardia",
                minScaleDenominator: 250000,
                symbolizer: {fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: "Bacini Lombardia",
                maxScaleDenominator: 250000,
                symbolizer: {
                        fontSize: "0px"
                }
        })
]});
//style_bacini_tiny.addRules([bacini_rule]);
var styleMap_bacini_tiny = new OpenLayers.StyleMap({
	"default": style_bacini_tiny
	, "temporary": new OpenLayers.Style({strokeWidth:4, strokeOpacity:1, fillOpacity: 0.4, cursor: "pointer", fontSize: 0})
});
var bacini_tiny = new OpenLayers.Layer.Vector(default_layer_name, {
	styleMap: styleMap_bacini_tiny,
	strategies: [new OpenLayers.Strategy.Fixed()],
	projection: OL_3003,
	protocol: new OpenLayers.Protocol.WFS({
		url: url_tinyows, featureType: "bacini",
		featureNS: "http://www.tinyows.org/",
		srsName: "epsg:3003",
		geometryName: "the_geom"
	})
});
bacini_tiny.setVisibility(false);
store_bacini_tiny = new GeoExt.data.FeatureStore({
	fields: [
		{name: "gid", type: "integer"},
		{name: "bacini_agg", type: "string"},
		{name: "area", type: "integer"}
	],
	layer: bacini_tiny
});
store_bacini_tiny.on('load', function(store){
      store.sort('id', 'ASC');
});
var columns_bacini_tiny = new Ext.grid.ColumnModel({
    defaults: {
        sortable: true
    },
	columns: [
		{header: "<b>Nome</b>", dataIndex: "bacini_agg", width: 180},
		{header: "Area [km2]", dataIndex: "area", decimalPrecision: 3, align: "center"}
	]
});



/*FIUMI*/
var style_fiumi_tiny = new OpenLayers.Style({
        strokeColor: "#4181c4", strokeWidth: 2.7, fillOpacity: 0.5 
        ,title: "${topo_princ}"
        ,label: "${topo_princ}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
        rules: [
                new OpenLayers.Rule({
                title: "Fiumi Lombardia",
                minScaleDenominator: 250000,
                symbolizer: {fontSize: "0px", strokeWidth:1.0}
        }),
        new OpenLayers.Rule({
                title: "Fiumi Lombardia",
                maxScaleDenominator: 250000,
                symbolizer: {
                        fontSize: "0px"
                }
        })
]});

var styleMap_fiumi_tiny = new OpenLayers.StyleMap({
        "default": style_fiumi_tiny
        ,"temporary": new OpenLayers.Style({strokeWidth:4, strokeOpacity:1, fillOpacity: 0.4, cursor: "pointer", fontSize: 0})
});

var fiumi_tiny = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_fiumi_tiny,
        strategies: [new OpenLayers.Strategy.Fixed()],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "fiumi",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632",
                geometryName: "the_geom"
        })
});

fiumi_tiny.setVisibility(false);

store_fiumi_tiny = new GeoExt.data.FeatureStore({
        fields: [
                {name: "gid", type: "integer"},
                {name: "topo_princ", type: "string"}
                
        ],
        layer: fiumi_tiny
});

store_fiumi_tiny.on('load', function(store){
      store.sort('id', 'ASC');
});



/*LIMITI COMUNALI*/
var style_lim_comunali_tiny = new OpenLayers.Style();
/*var bacini_rule = new OpenLayers.Rule({
	title: "Bacini Lombardia",
	symbolizer: {strokeColor: "black", strokeWidth: 0.8, strokeOpacity: 0.5, fillColor: "#0b9d3c", fillOpacity: 0.3
	,title: "${bacini_agg}", fontSize: "0px"
        ,label: "${bacini_agg}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
	}
});*/
var style_lim_comunali_tiny = new OpenLayers.Style({
        strokeColor: "black", strokeWidth: 0.8, fillOpacity: 0.5, fillColor: "#e0f0f0", fillOpacity: 0.3
        ,title: "${nome_com}"
        ,label: "${nome_com}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
        rules: [
	        new OpenLayers.Rule({
                title: "Limiti comunali",
                minScaleDenominator: 250000,
                symbolizer: {fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: "Limiti comunali",
                maxScaleDenominator: 250000,
                symbolizer: {
                        fontSize: "0px"
                }
        })
]});
//style_bacini_tiny.addRules([bacini_rule]);
var styleMap_lim_comunali_tiny = new OpenLayers.StyleMap({
	"default": style_lim_comunali_tiny
	, "temporary": new OpenLayers.Style({strokeWidth:4, strokeOpacity:1, fillOpacity: 0.4, cursor: "pointer", fontSize: 0})
});
var lim_comunali_tiny = new OpenLayers.Layer.Vector(default_layer_name, {
	styleMap: styleMap_lim_comunali_tiny,
	strategies: [new OpenLayers.Strategy.Fixed()],
	projection: OL_3003,
	protocol: new OpenLayers.Protocol.WFS({
		url: url_tinyows, featureType: "limiti_comunali",
		featureNS: "http://www.tinyows.org/",
		srsName: "epsg:3003",
		geometryName: "the_geom"
	})
});
lim_comunali_tiny.setVisibility(false);
store_lim_comunali_tiny = new GeoExt.data.FeatureStore({
	fields: [
		{name: "gid", type: "integer"},
		{name: "nome_com", type: "string"},
	],
	layer: lim_comunali_tiny
});
store_lim_comunali_tiny.on('load', function(store){
      store.sort('id', 'ASC');
});

/*var columns_lim_comunali_tiny = new Ext.grid.ColumnModel({
    defaults: {
        sortable: true
    },
	columns: [
		{header: "Id bacino", dataIndex: "gid"},
		{header: "<b>Nome</b>", dataIndex: "bacini_agg", width: 180},
		{header: "Area [km2]", dataIndex: "area", decimalPrecision: 3, align: "center"}
	]
});*/

/*LIMITI PROVINCIALI*/
//var style_lim_provinciali_tiny = new OpenLayers.Style();
/*var bacini_rule = new OpenLayers.Rule({
	title: "Bacini Lombardia",
	symbolizer: {strokeColor: "black", strokeWidth: 0.8, strokeOpacity: 0.5, fillColor: "#0b9d3c", fillOpacity: 0.3
	,title: "${bacini_agg}", fontSize: "0px"
        ,label: "${bacini_agg}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
	}
});*/
var style_lim_provinciali_tiny = new OpenLayers.Style({
        strokeColor: "red", strokeWidth: 0.8, fillOpacity: 0.5, fillColor: "#e0f0f0", fillOpacity: 0.3
        ,title: "${nome}"
        ,label: "${nome}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
        rules: [
	        new OpenLayers.Rule({
                title: "Limiti provinciali",
                minScaleDenominator: 250000,
                symbolizer: {fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: "Limiti provinciali",
                maxScaleDenominator: 250000,
                symbolizer: {
                fontSize: "0px"
                }
        })
]});
//style_bacini_tiny.addRules([bacini_rule]);
var styleMap_lim_provinciali_tiny = new OpenLayers.StyleMap({
	"default": style_lim_provinciali_tiny
       ,"temporary": new OpenLayers.Style({strokeWidth:4, strokeOpacity:1, fillOpacity: 0.4, cursor: "pointer", fontSize: 0})
});
var lim_provinciali_tiny = new OpenLayers.Layer.Vector(default_layer_name, {
	styleMap: styleMap_lim_provinciali_tiny,
	strategies: [new OpenLayers.Strategy.Fixed()],
	projection: OL_32632,
	protocol: new OpenLayers.Protocol.WFS({
		url: url_tinyows, featureType: "limiti_provinciali",
		featureNS: "http://www.tinyows.org/",
		srsName: "epsg:32632",
		geometryName: "the_geom"
	})
});
lim_provinciali_tiny.setVisibility(false);
store_lim_provinciali_tiny = new GeoExt.data.FeatureStore({
	fields: [
		{name: "gid", type: "integer"},
		{name: "nome", type: "string"},
		/*{name: "sigla", type: "string"}*/
	],
	layer: lim_provinciali_tiny
});
store_lim_provinciali_tiny.on('load', function(store){
      store.sort('id', 'ASC');
});


/*Aree Allerta Idro-Meteo*/
//var style_aree_allerta_tiny = new OpenLayers.Style();
var style_aree_allerta_tiny = new OpenLayers.Style({
        strokeColor: "blue", strokeWidth: 0.8, fillOpacity: 0.5, fillColor: "blue", fillOpacity: 0.1
        ,title: "Area allerta idro-meteo \n${codice_im}"
        ,label: "Aree allerta idro-meteo", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
        rules: [
                new OpenLayers.Rule({
                title: "Aree allerta idro-meteo",
                minScaleDenominator: 250000,
                symbolizer: {fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: "Aree allerta idro-meteo",
                maxScaleDenominator: 250000,
                symbolizer: {
                fontSize: "0px"
                }
        })
]});

var styleMap_aree_allerta_tiny = new OpenLayers.StyleMap({
         "default": style_aree_allerta_tiny
        ,"temporary": new OpenLayers.Style({strokeWidth:4, strokeOpacity:1, fillOpacity: 0.4, cursor: "pointer", fontSize: 0})
});
var aree_allerta_tiny = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_aree_allerta_tiny,
        strategies: [new OpenLayers.Strategy.Fixed()],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "aree_allerta",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632",
                geometryName: "the_geom"
        })
});
aree_allerta_tiny.setVisibility(false);
store_aree_allerta_tiny = new GeoExt.data.FeatureStore({
        fields: [
                {name: "gid", type: "integer"},
                {name: "nome", type: "string"},
                /*{name: "sigla", type: "string"}*/
        ],
        layer: aree_allerta_tiny
});
store_aree_allerta_tiny.on('load', function(store){
      store.sort('id', 'ASC');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Variabili che definiscono i campi da mostrare nelle tabelle delle anagrafiche e dei delle reti tematiche  */


var fields_store_staz_lm = [
        {name: "idstazione", type: "string"},
                {name: "denominazione", type: "string"},
                {name: "proprieta", type: "string"},
                {name: "quota", type: "integer"},
                {name: "utm_nord", type: "integer"},
                {name: "utm_est", type: "integer"},
                {name: "nometipologie", type: "string"},
                {name: "idsensori", type: "string"}
        ];


var col_columns_staz_lm = [
                {header: "Denominazione", dataIndex: "denominazione", align: "center", width: 200},
                {header: "Ente gestore", dataIndex: "proprieta", align: "center", width: 200},
                {header: "Codice stazione", dataIndex: "idstazione"},
                {header: "Quota [m slm]", dataIndex: "quota"},
                {header: "Utm X [m]", dataIndex: "utm_est"},
                {header: "Utm Y [m]", dataIndex: "utm_nord"},
                {header: "Tipo sensori", dataIndex: "nometipologie"},
                {header: "ID sensori", dataIndex: "idsensori"}
                ];

var columns_staz_lm = new Ext.grid.ColumnModel({
    defaults: {
    sortable: true
    }
   ,columns: col_columns_staz_lm
});


/* Creo una variabile "gemella" columns_stazaltri_lm per la rete altri enti (eventualmente per diversificare le due trattazioni)*/
var columns_stazaltri_lm = new Ext.grid.ColumnModel({
    defaults: {
    sortable: true
     }   
   ,columns:col_columns_staz_lm 
});



// rule comuni per i layer  di anagrafica
var minScale = new OpenLayers.Rule({
                 title: " "
                ,minScaleDenominator: 250000
                ,symbolizer: {fontSize: "0px", strokeWidth:0.6}
               });
        
var maxScale = new OpenLayers.Rule({
                title: " "
               ,maxScaleDenominator: 250000
               ,symbolizer: {fontSize: "12px"}
                });

 // Per reti non Arpa (id di rete > 4), metto un bordino grigio al simbolo stazione
var rule_rete = new OpenLayers.Rule({
                  title: " "
                 ,filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.GREATER_THAN,
                        property: "rete", value: 4
                        })
                 ,symbolizer: {strokeWidth:5., strokeColor: "gray"}
               });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*STAZIONI IDRONIVOMETEO*/
var style_staz = new OpenLayers.Style({
        pointRadius: 7, strokeColor: "black", strokeWidth: 0.4, fillOpacity: 0.9, strokeOpacity: 0.5, fillColor: "red"
        ,title: "${denominazione} \nEnte gestore: ${proprieta}"
        ,label: "${denominazione}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
        rules: [

        new OpenLayers.Rule({
                title: "Idrometrica",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "meteo_tab", value: 'Idrometrica'
                })
                ,symbolizer: {pointRadius: 5, strokeWidth:0.5, fillColor: "green"}
        }),
	new OpenLayers.Rule({
                title: "Meteorologica",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "meteo_tab", value: 'Meteorologica'
                })
                ,symbolizer: {pointRadius: 5, strokeWidth:0.5, fillColor: "red"}
        }),
	new OpenLayers.Rule({
                title: "Pluviometrica",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "meteo_tab", value: 'Pluviometrica'
                })
                ,symbolizer: {graphicName: "triangle", pointRadius: 5, strokeWidth:0.5, fillColor: "blue"}
        }),

        new OpenLayers.Rule({
                title: "Nivometrica",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "meteo_tab", value: 'Nivometrica'
                })
                ,symbolizer: {graphicName: "star", pointRadius: 5, strokeWidth:0.5, fillColor: "Turquoise"}
        }),


        new OpenLayers.Rule({
                title: "Anemometrica",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "meteo_tab", value: 'Anemometrica'
                })
                ,symbolizer: {graphicName: "square", pointRadius: 5, strokeWidth:0.5, fillColor: "orange"}
        })
        
        ,minScale
        ,maxScale   
        // Per reti non Arpa (id di rete > 4), metto un bordino grigio al simbolo stazione
        ,rule_rete
]});


var styleMap_staz = new OpenLayers.StyleMap({
         "default": style_staz
        ,"select": new OpenLayers.Style({pointRadius: 8, fillColor: "blue", fillOpacity: 0.8})
        ,"temporary": new OpenLayers.Style({pointRadius: 8, fontSize: 13, cursor: "pointer"})
});
var staz = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_staz,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagraficasensori",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});
staz.setVisibility(false);

store_staz_lm = new GeoExt.data.FeatureStore({
         fields: fields_store_staz_lm
        ,layer: staz
        ,autoLoad: true
});



store_staz_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');
});




/***********************************************************************************************************/
// RETE ALTRI ENTI: utilizzo lo stesso stile della rete Arpa 

/*var style_stazaltri = new OpenLayers.Style({
        pointRadius: 7, strokeColor: "black", strokeWidth: 0.4, fillOpacity: 0.9, strokeOpacity: 0.5,  fillColor: "gray"
        ,title: "${denominazione} \nEnte gestore: ${proprieta}"
        ,label: "${denominazione}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
        rules: [
        new OpenLayers.Rule({
                title: " ",
                minScaleDenominator: 250000,
                symbolizer: {fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: " ",
                maxScaleDenominator: 250000,
                symbolizer: {
                 fontSize: "12px"
                }
        })
]});
*/

var styleMap_stazaltri = new OpenLayers.StyleMap({
        //"default": style_stazaltri,
         "default":style_staz
        ,"select": new OpenLayers.Style({pointRadius: 8, fillColor: "blue", fillOpacity: 0.8})
        ,"temporary": new OpenLayers.Style({pointRadius: 8, fontSize: 13, cursor: "pointer"})
});

var stazaltri = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_stazaltri,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagraficasensorialtri",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});
stazaltri.setVisibility(false);


store_stazaltri_lm = new GeoExt.data.FeatureStore({
         fields: fields_store_staz_lm
        ,layer: stazaltri
        ,autoLoad: true
});


store_stazaltri_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');
});




/***********************************************************************************************************/
/*DEFINIZIONE STILI STAZIONI DIVERSIFICATE PER TIPO DI SENSORE: IDRO, PLUVIO, TERMO, NIVO, VENTO, UMIDIT RELAT, RAD GLOB   */
/* UTILIZZO PER TUTTI  style_staz COME default.*/

/********************************************IDRO**************************************/


var style_staz_idro = new OpenLayers.Style({
        pointRadius: 7, strokeColor: "black", strokeWidth: 0.5, fillOpacity: 0.9, strokeOpacity: 0.5, fillColor: "green"
        ,title: "${denominazione} \nEnte gestore: ${proprieta}"
        ,label: "${denominazione}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
	rules: [
                minScale
               ,maxScale
                // Per reti non Arpa (id di rete > 4), metto un bordino grigio al simbolo stazione
               ,rule_rete                            
               ]
});


var styleMap_staz_idro = new OpenLayers.StyleMap({
         "default": style_staz_idro
        ,"select": new OpenLayers.Style({pointRadius: 8, fillColor: "blue", fillOpacity: 0.8})
        ,"temporary": new OpenLayers.Style({pointRadius: 8, fontSize: 13, cursor: "pointer"})
});


var staz_idro = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_staz_idro,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagrafica_idro",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});

staz_idro.setVisibility(false);

store_staz_idro_lm = new GeoExt.data.FeatureStore({
         fields: fields_store_staz_lm
        ,layer: staz_idro
        ,autoLoad: false 
});


store_staz_idro_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');

});


// IDRO ALTRI ENTI: 

var staz_altri_idro = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_staz_idro,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagrafica_altri_idro",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});

staz_altri_idro.setVisibility(false);

store_staz_altri_idro_lm = new GeoExt.data.FeatureStore({
        fields: fields_store_staz_lm
        ,layer: staz_altri_idro
        ,autoLoad: false
});


store_staz_altri_idro_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');

});
 




/********************************************PLUVIO**************************************/


var style_staz_pluvio = new OpenLayers.Style({
        pointRadius: 7, strokeColor: "black", strokeWidth: 0.5, fillOpacity: 0.9, strokeOpacity: 0.5, fillColor: "RoyalBlue"
        ,title: "${denominazione} \nEnte gestore: ${proprieta}"
        ,label: "${denominazione}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
		rules: [
        new OpenLayers.Rule({
                title: " ",
                minScaleDenominator: 250000,
                symbolizer: {graphicName: "triangle", fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: " ",
                maxScaleDenominator: 250000,
                symbolizer: {graphicName: "triangle", fontSize: "12px" }
        })

        // Per reti non Arpa (id di rete > 4), metto un bordino grigio al simbolo stazione
        ,rule_rete                            
]});


var styleMap_staz_pluvio = new OpenLayers.StyleMap({
         "default": style_staz_pluvio
        ,"select": new OpenLayers.Style({pointRadius: 8, fillColor: "blue", fillOpacity: 0.8})
        ,"temporary": new OpenLayers.Style({pointRadius: 8, fontSize: 13, cursor: "pointer"})
});


var staz_pluvio = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_staz_pluvio,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagrafica_pluvio",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});

staz_pluvio.setVisibility(false);

store_staz_pluvio_lm = new GeoExt.data.FeatureStore({
         fields: fields_store_staz_lm
        ,layer: staz_pluvio
        ,autoLoad: false 
});


store_staz_pluvio_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');

});


// PLUVIO ALTRI ENTI: 

//console.log('Test store_staz 2');





/*******************************************NIVO****************************************************************/

var style_staz_nivo = new OpenLayers.Style({
        pointRadius: 7, strokeColor: "black", strokeWidth: 0.5, fillOpacity: 0.9, strokeOpacity: 0.5, fillColor: "Turquoise"
        ,title: "${denominazione} \nEnte gestore: ${proprieta}"
        ,label: "${denominazione}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
		rules: [
        new OpenLayers.Rule({
                title: " ",
                minScaleDenominator: 250000,
                symbolizer: {graphicName: "star", fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: " ",
                maxScaleDenominator: 250000,
                symbolizer: {graphicName: "star", fontSize: "12px" }
        })
]});


var styleMap_staz_nivo = new OpenLayers.StyleMap({
         "default": style_staz_nivo
        ,"select": new OpenLayers.Style({pointRadius: 8, fillColor: "blue", fillOpacity: 0.8})
        ,"temporary": new OpenLayers.Style({pointRadius: 8, fontSize: 13, cursor: "pointer"})
});


var staz_nivo = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_staz_nivo,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagrafica_nivo",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});

staz_nivo.setVisibility(false);

store_staz_nivo_lm = new GeoExt.data.FeatureStore({
         fields: fields_store_staz_lm
        ,layer: staz_nivo
        ,autoLoad: false
});


store_staz_nivo_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');

});


/*******************************************Termo****************************************************************/
var style_staz_termo = new OpenLayers.Style({
        pointRadius: 7, strokeColor: "black", strokeWidth: 0.5, fillOpacity: 0.9, strokeOpacity: 0.5, fillColor: "Tomato"
        ,title: "${denominazione} \nEnte gestore: ${proprieta}"
        ,label: "${denominazione}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
		rules: [
        new OpenLayers.Rule({
                title: " ",
                minScaleDenominator: 250000,
                symbolizer: {fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: " ",
                maxScaleDenominator: 250000,
                symbolizer: {fontSize: "12px" }
        })
]});


var styleMap_staz_termo = new OpenLayers.StyleMap({
         "default": style_staz_termo
        ,"select": new OpenLayers.Style({pointRadius: 8, fillColor: "blue", fillOpacity: 0.8})
        ,"temporary": new OpenLayers.Style({pointRadius: 8, fontSize: 13, cursor: "pointer"})
});


var staz_termo = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_staz_termo,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagrafica_termo",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});

staz_termo.setVisibility(false);

store_staz_termo_lm = new GeoExt.data.FeatureStore({
         fields: fields_store_staz_lm
        ,layer: staz_termo
        ,autoLoad: false
});


store_staz_termo_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');

});

/*******************************************Igrometri****************************************************************/

var style_staz_igro = new OpenLayers.Style({
        pointRadius: 7, strokeColor: "black", strokeWidth: 0.4, fillOpacity: 0.9, strokeOpacity: 0.5, fillColor: "#8da5ed"
        ,title: "${denominazione} \nEnte gestore: ${proprieta}"
        ,label: "${denominazione}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
                rules: [
        new OpenLayers.Rule({
                title: " ",
                minScaleDenominator: 250000,
                symbolizer: {fontSize: "0px", strokeWidth:0.5}
        }),
        new OpenLayers.Rule({
                title: " ",
                maxScaleDenominator: 250000,
                symbolizer: {fontSize: "12px" }
        })
]});


var styleMap_staz_igro = new OpenLayers.StyleMap({
         "default": style_staz_igro
        ,"select": new OpenLayers.Style({pointRadius: 8, fillColor: "blue", fillOpacity: 0.8})
        ,"temporary": new OpenLayers.Style({pointRadius: 8, fontSize: 13, cursor: "pointer"})
});


var staz_igro = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_staz_igro,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagrafica_igro",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});

staz_igro.setVisibility(false);

store_staz_igro_lm = new GeoExt.data.FeatureStore({
         fields: fields_store_staz_lm
         ,layer: staz_igro
         ,autoLoad: false
});
store_staz_igro_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');

});


/*************************************Anemometri*********************************************************************/

var style_staz_anemo = new OpenLayers.Style({
        pointRadius: 7, strokeColor: "black", strokeWidth: 0.5, fillOpacity: 0.9, strokeOpacity: 0.5, fillColor: "orange"
        ,title: "${denominazione} \nEnte gestore: ${proprieta}"
        ,label: "${denominazione}", labelAlign: "ct", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
		rules: [
        new OpenLayers.Rule({
                title: " ",
                minScaleDenominator: 250000,
                symbolizer: {graphicName: "square", fontSize: "0px", strokeWidth:0.6}
        }),
        new OpenLayers.Rule({
                title: " ",
                maxScaleDenominator: 250000,
                symbolizer: {graphicName: "square", fontSize: "12px" }
        })
]});


var styleMap_staz_anemo = new OpenLayers.StyleMap({
         "default": style_staz_anemo
        ,"select": new OpenLayers.Style({pointRadius: 8, fillColor: "blue", fillOpacity: 0.8})
        ,"temporary": new OpenLayers.Style({pointRadius: 8, fontSize: 13, cursor: "pointer"})
});


var staz_anemo = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_staz_anemo,
        strategies: [new OpenLayers.Strategy.BBOX()
        ],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_anagrafica_anemo",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632", geometryName: "the_geom"
        })
});

staz_anemo.setVisibility(false);

store_staz_anemo_lm = new GeoExt.data.FeatureStore({
         fields: fields_store_staz_lm
        ,layer: staz_anemo
        ,autoLoad: false
});


store_staz_anemo_lm.on('load', function(store){
        store.sort('denominazione', 'ASC');

});


/***********************************************************************************************************/
/***********************************************************************************************************/
