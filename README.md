# Minneapolis Police Incident Analysis

# Models
1. b_eda.ipynb
2. b_model.ipynb
3. b_prophet.ipynb
4. b_time_series_final.ipynb
5. b_time_series_test.ipynb
6. randomforest_abp.ipynb<br>
a. Random Forest model to predict ucrCode<br>
b. Generates a Top 10 Features barchart<br>
c. Generates a Tree Plot of the model<br>
d. Performs hyperparameter tuning using GridSearchCV:<br>

# Visualizations
1. Tableau Crime Rate Story
2. Tableau Crime Heat Map
3. Leaflet.js Cluster Group Map<br>
a. Loads Data from the GeoIncident.json file created by the csv_geojson.py app.<br>
b. Loads Minneapolis neighborhood shape data from the Minneapolis_Neighborhoods.geojson file which was downloaded from opendata.minneapolismn.gov.<br>
c. Creates a ClusterGroup of the incident markers<br>
d. Creates a polyline of the neighborhood markers<br>
e. Marker includes case number, neighborhood, crime, and date of incident popup.<br>

# Misc

1. incident_data/data_clean.ipynb <br>
a. Cleans the incident csv files and combines them into one csv file.<br>
2. csv_geojson.py<br>
a. Creates a geojson file of the combined incident data.<br>
3. csv_to_html.ipynb<br>
a. Creates html files of interactive Plotly visualizations.
