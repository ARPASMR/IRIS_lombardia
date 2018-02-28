/* Portate naturali annue */

var style_portate_nat_annue_tiny = new OpenLayers.Style({
        strokeColor: "black", strokeWidth: 0.8, fillOpacity: 0.5
        // strokeWidth: 0.8, fillOpacity: 0.5
        ,title: "${ci_nome}\nPortata naturale annua [m3/s]: ${portata_annua}"
        //,label: "${portata_annua}", labelAlign: "cm", fontWeight: "bold", fontFamily: "sans-serif", labelYOffset: -10
        }, {
        rules: [

        
       new OpenLayers.Rule({
                title: "Dato non valido",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.LESS_THAN,
                        property: "portata_annua", value: 0.
                })
                ,symbolizer: {fillColor: "#daf1d3"}
        }),
        new OpenLayers.Rule({
                title: "Portata 0.0 - 0.1",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",         
                        lowerBoundary: 0.0,
                        upperBoundary: 0.1

                })
                ,symbolizer: {fillColor: "#c6e5bf"}
        }),
        new OpenLayers.Rule({
                title: "Portata 0.1 - 0.5",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",         
                        lowerBoundary: 0.1,
                        upperBoundary: 0.5
                })
                ,symbolizer: {fillColor: "#b2d9ac"}
        }),
        new OpenLayers.Rule({
                title: "Portata 0.5 - 1.0",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",
                        lowerBoundary: 0.5,
                        upperBoundary: 1.0
                })
                ,symbolizer: {fillColor: "#9ecd99"}
        }),
        new OpenLayers.Rule({
                title: "Portata 1.0 - 2.5",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",
                        lowerBoundary: 2.5,
                        upperBoundary: 5.0
                })
                ,symbolizer: {fillColor: "#8ac286"}

        }),
        new OpenLayers.Rule({
                title: "Portata 2.5 - 5.0",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",
                        lowerBoundary: 2.5,
                        upperBoundary: 5.0
                })
                ,symbolizer: {fillColor: "#76b673"}
        }), 
        new OpenLayers.Rule({
                title: "Portata 5.0 - 10.0",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",
                        lowerBoundary: 5.0,
                        upperBoundary: 10.0
                })
                ,symbolizer: {fillColor: "#63aa5f"}
        }),


               new OpenLayers.Rule({
                title: "Portata 10.0 - 25.0",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",
                        lowerBoundary: 10.0,
                        upperBoundary: 25.0
                })
                ,symbolizer: {fillColor: "#4f9e4c"}
        }),

        new OpenLayers.Rule({
                title: "Portata 25.0 - 50.0",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",
                        lowerBoundary: 25.0,
                        upperBoundary: 50.0
                })
                ,symbolizer: {fillColor: "#3b9339"}
        }),        
        
        new OpenLayers.Rule({
                title: "Portata 50.0 - 100.0",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",
                        lowerBoundary: 50.0,
                        upperBoundary: 100.0
                })
                ,symbolizer: {fillColor: "#278726"}
        }),        
        
        new OpenLayers.Rule({
                title: "Portata 100.0 - 200.0",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
                        property: "portata_annua",
                        lowerBoundary: 100.0,
                        upperBoundary: 200.0
                })
                ,symbolizer: {fillColor: "#137b13"}
        }),        

        
        new OpenLayers.Rule({
                title: "Portata > 200. ",
                filter: new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.GREATER_THAN,
                        property: "portata_annua", value: 200.
                })
                ,symbolizer: {fillColor: "#007000"}
        })

       /* 
       ,new OpenLayers.Rule({
                 title: "Modello di Bilancio RIBASIM",
                 filter: new OpenLayers.Filter.Comparison({
                         type: OpenLayers.Filter.Comparison.LIKE,
                         property: "bilancio_idrologico", value: "RIBASIM"
                 })
                 ,symbolizer: {strokeColor: "yellow", strokeWidth: 0.8, fillOpacity: 0.5}
       })
       */

]});


var styleMap_portate_nat_annue_tiny = new OpenLayers.StyleMap({
        "default": style_portate_nat_annue_tiny
       ,"temporary": new OpenLayers.Style({strokeWidth:4, strokeOpacity:1, fillOpacity: 0.4})
});

var portate_nat_annue_tiny = new OpenLayers.Layer.Vector(default_layer_name, {
        styleMap: styleMap_portate_nat_annue_tiny,
        strategies: [new OpenLayers.Strategy.Fixed()],
        projection: OL_32632,
        protocol: new OpenLayers.Protocol.WFS({
                url: url_tinyows, featureType: "v_portate_naturali_annuali",
                featureNS: "http://www.tinyows.org/",
                srsName: "epsg:32632",
                geometryName: "the_geom"
        })
});

portate_nat_annue_tiny.setVisibility(false);

store_portate_nat_annue_tiny = new GeoExt.data.FeatureStore({
        fields: [
                {name: "gid", type: "integer"},
                {name: "ci_nome", type: "string"},
                {name: "area_kmq", type: "float"},
                {name: "portata_annua",  type: "float"},
                {name: "bilancio_idrologico",  type: "string"}
        ],
        layer: portate_nat_annue_tiny
});

store_portate_nat_annue_tiny.on('load', function(store){
      store.sort('id', 'ASC');
});
var columns_portate_nat_annue_tiny = new Ext.grid.ColumnModel({
    defaults: {
        sortable: true
    },
        columns: [
                {header: "<b>Nome</b>", dataIndex: "ci_nome", width: 180},
                {header: "Area [km2]", dataIndex: "area_kmq", decimalPrecision: 3, align: "center"},
                {header: "Portata annua [m3/s]", dataIndex: "portata_annua", decimalPrecision: 2, align: "center"},
                {header: "Modello bilancio idrologico", dataIndex: "bilancio_idrologico", align: "center"}
        ]
});
