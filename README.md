# Minneapolis Police Incident Analysis

# Models
1. b_eda.ipynb
2. b_model.ipynb
3. b_prophet.ipynb
4. b_time_series_final.ipynb
5. b_time_series_test.ipynb
6. randomforest_abp.ipynb
a. Random Forest model to predict ucrCode
b. Generates a Top 10 Features barchart
c. Generates a Tree Plot

# Visualizations
1. Tableau Story
2. Tableau Heat Map
3. Leaflet.js Cluster Group Map
a. Loads Data from the GeoIncident.json file created by the csv_geojson.py app.
b. Loads Minneapolis neighborhood shape data from the Minneapolis_Neighborhoods.geojson file which was downloaded from opendata.minneapolismn.gov.
c. Creates a ClusterGroup of the incident markers
d. Creates a polyline of the neighborhood markers
e. Marker includes case number, neighborhood, crime, and date of incident popup.

# Misc

1. incident_data/data_clean.ipynb 
a. Cleans the incident csv files and combines them into one csv file.
2. csv_geojson.py
a. Creates a geojson file of the combined incident data.
3. csv_to_html.ipynb
