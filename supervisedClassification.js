var roi = ee.FeatureCollection("projects/ee-learning-rahi/assets/BGD_adm3"),
    vegetationCover = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([91.72182448899297, 24.522472772058013]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([91.72298052107838, 24.522587464689448]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([91.7226586559966, 24.521684562417338]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([91.7647761871133, 24.493271497659872]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([91.76732965009548, 24.49400862825209]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([91.7687824048694, 24.497432028326326]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([91.77057143828233, 24.497449113618387]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([91.78159851510215, 24.49789321408753]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([91.7785461612432, 24.497966436482862]),
            {
              "landcover": 0,
              "system:index": "8"
            })]),
    urban = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([91.7151176405487, 24.511826575019782]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([91.71454901223754, 24.511866842878543]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([91.71436662202453, 24.51166550345563]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([91.66909797859674, 24.53924377827828]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([91.66907920313363, 24.538897305765566]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([91.776655664726, 24.479874224732526]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([91.77628686098645, 24.479797330157353]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([91.77045330146909, 24.4789575809619]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([91.76933213810086, 24.479038137719893]),
            {
              "landcover": 1,
              "system:index": "8"
            })]),
    barrenland = /* color: #0b4a8b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([91.69961669303453, 24.489870548206156]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([91.6999707446245, 24.489792439288106]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([91.7034468875078, 24.490134165446435]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([91.70809004838051, 24.56576772617617]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([91.71617959076943, 24.566880100387493]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([91.70903418595375, 24.564030841438623]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([91.66196527490446, 24.56869646277378]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([91.66326346406767, 24.56944778677498]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([91.66971149453947, 24.56958439065492]),
            {
              "landcover": 2,
              "system:index": "8"
            })]),
    waterBodies = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([91.74587161642512, 24.46207705107672]),
            {
              "landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([91.76709151197657, 24.47038318486707]),
            {
              "landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([91.77396911826018, 24.48642563376538]),
            {
              "landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([91.76819700446013, 24.486738077508864]),
            {
              "landcover": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([91.77227396216277, 24.493328506889828]),
            {
              "landcover": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([91.75703901495818, 24.494968737866007]),
            {
              "landcover": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([91.78731579031829, 24.493406613611878]),
            {
              "landcover": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([91.72659607425999, 24.511489391152132]),
            {
              "landcover": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([91.70752162166002, 24.526517681022845]),
            {
              "landcover": 3,
              "system:index": "8"
            })]);

var upzla = roi.filter(ee.Filter.eq("NAME_3", "Maulvibazar S."))
Map.centerObject(upzla,10)
Map.addLayer(upzla,{},"Maulvibazar S.")
            
var trainingPolygons = vegetationCover.merge(urban).merge(barrenland).merge(waterBodies);
            
            var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
                      .filterBounds(upzla)
                      .filterDate('2023-01-01', '2023-12-31')
                      .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",10))
                      .median()
            var bands = ['B2', 'B3', 'B4', 'B8'];
            var image = s2.select(bands)
            
            print(image)
            
            var training = image.sampleRegions({
              collection: trainingPolygons,
              properties: ['landcover'],
              scale: 10
            });
            
            var classifier = ee.Classifier.smileCart().train({
              features: training,
              classProperty: 'landcover',
              inputProperties: bands
            });
            
            var classified = image.classify(classifier);
            Map.addLayer(classified.clip(upzla), 
                        {min: 0, 
                         max: 3, 
                         palette: ['green', 'red', 'yellow', 'blue']}, 
                         'Land Cover Classification');
            Export.image.toDrive({
              image: classified.clip(upzla),
              description: 'LandCoverClassification',
              folder: 'GEE_exports',
              region: upzla.geometry(),
              scale: 10
            });