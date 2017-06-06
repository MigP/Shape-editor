<!DOCTYPE html>
<html>
  <head>
    <title>Shape editor</title>
    <LINK REL="SHORTCUT ICON" HREF="images/shape_editor.ico">
    <!--Metas-->
      <meta charset="utf-8">
      <meta name="viewport" content="width = device-width, initial-scale = 1">
    <!--External CSS-->
      <link type="text/css" rel="stylesheet" href="css/styles.css"/>
    <!--External JS-->
      <script src="//code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrkmmU2-WAAlfWghYpeEcwAy4zTT5h63c&libraries=drawing"></script>
      <script type="text/javascript" src="js/shape-editor.js"></script>
    <!--JS-->
      <script>
        // Global variables
          var map, _selection = null, shape, globalEvent, _shapes = [], shapesToSave = [], x_regions=[], newShapeCreateTracker = 0, _markerButton, markerIcon = 1, offX, offY, openDropdown = "", search_marker, locationSearch, files = [], fileCount, mouseX, mouseY;


          var trafficLayer = new google.maps.TrafficLayer();
          var transitLayer = new google.maps.TransitLayer();
          var bikeLayer = new google.maps.BicyclingLayer();

          var chosenZoom = 12;
          var overlayOpacity = 0.2;

        // Initialises the maps
          function initialise() {
            var shapesMap = new ShapesMap(
              document.getElementById("map"), 
              document.getElementById("delete-button"),
              document.getElementById("clear-button"),
              document.getElementById("message_box"));
          }

        // Listeners and events
          function keyPressListen(e, el) {
            if (e.keyCode == 13) {
              if (el.id == "base_location") {
                $('#search-button').trigger('click');
              } else {
                $('#close_shape_properties').trigger('click');
              }
            }
          }
          google.maps.event.addDomListener(window, 'load', initialise);
          window.onload = addListenersToInputBox;
      </script>
  </head>
  <body>
    <div class="container">
      <header class="header">
        <div class="logo">
          <div class="logo_image_box">
            <img class="logo_image" src="images/logo.jpg">
          </div>
          <div class="logo_header_box">
            <h1 class="logo_header">Shape Editor</h1>
          </div>
        </div>

        <div id="dropbox_selected" class="dropbox">
          <div onclick="clickToggle('hideAndShow');" class="full_text">-- Show or hide shapes --</div>
          <div onclick="clickToggle('hideAndShow');" class="short_text">Show/hide</div>
          <div id="hideAndShow" title="Show or hide items">
            <span class='dropbox dropbox_list separator'>-----------------------</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "regions");'>Regions</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "countries");'>Countries</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "divisions1");'>Country 1st order divisions</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "divisions2");'>Country 2nd order divisions</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "divisions3");'>Country 3rd order divisions</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "metro_areas");'>Metropolitan areas</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "cities");'>Cities</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "city_divisions");'>City divisions</span>
            <span class='dropbox dropbox_list'><input type='checkbox' checked onchange='dropboxChange("", this.checked, "type", "neighbourhoods");'>Neighbourhoods</span>
          </div>
        </div>

        <div class="overlay_map_types" title="Select a map type">
          <div class="types_header_box">
            <h2 class="labels">Map types</h2>
          </div> 
          <button class="button" id="types-button" onclick="clickToggle('hiddenTypes');"></button>
          <div id="hiddenTypes" title="Select a map type" style='display: none;'>
            <img class='hiddenTypesList dropbox_list' src='images/roadmap.jpg' title="Roadmap" onclick="selectMapType('roadmap');">
            <img class='hiddenTypesList dropbox_list' src='images/hybrid.jpg' title="Hybrid" onclick="selectMapType('hybrid');">
            <img class='hiddenTypesList dropbox_list' src='images/satellite.jpg' title="Satellite" onclick="selectMapType('satellite');">
            <img class='hiddenTypesList dropbox_list' src='images/terrain.jpg' title="Terrain" onclick="selectMapType('terrain');">
          </div>
        </div>

        <div class="overlay_map_styles" title="Select a map style">
          <div class="styles_header_box">
            <h2 class="labels">Map styles</h2>
          </div>
          <button class="button" id="styles-button" onclick="clickToggle('hiddenStyles');"></button>
          <div id="hiddenStyles" title="Select a map style" style='display: none;'>
            <span class='hiddenStylesList dropbox_list' title="None" onclick="selectMapStyle('none');" style="background-color: white">None</span>
            <img class='hiddenStylesList dropbox_list' src='images/regional.jpg' title="Regional borders and urbanisation" onclick="selectMapStyle('regional');">
            <img class='hiddenStylesList dropbox_list' src='images/dark_gray.jpg' title="Dark gray" onclick="selectMapStyle('dark_gray');">
            <img class='hiddenStylesList dropbox_list' src='images/dark_blue.jpg' title="Dark blue" onclick="selectMapStyle('dark_blue');">
            <img class='hiddenStylesList dropbox_list' src='images/retro.jpg' title="Retro" onclick="selectMapStyle('retro');">
          </div>
        </div>

        <div class="overlay_map_overlays" title="Select a map overlay">
          <div class="overlays_header_box">
            <h2 class="labels">Map overlays</h2>
          </div>
          <button class="button" id="overlays-button" onclick="clickToggle('hiddenOverlays');">None</button>
          <div id="hiddenOverlays" title="Select a map overlay" style='display: none;'>
            <span class='hiddenOverlaysList dropbox_list' title="None" onclick="selectMapOverlay('none');" style="background-color: white">None</span>
            <img class='hiddenOverlaysList dropbox_list' src='images/transit.jpg' title="Transit" onclick="selectMapOverlay('transit');">
            <img class='hiddenOverlaysList dropbox_list' src='images/traffic.jpg' title="Traffic" onclick="selectMapOverlay('traffic');">
            <img class='hiddenOverlaysList dropbox_list' src='images/bike.jpg' title="Bike" onclick="selectMapOverlay('bike');">
          </div>
        </div>

        <div class="message_box_container" onclick="clickToggle('');">
          <textarea id="message_box" readonly="readonly"></textarea>
        </div>
      </header>
      <main class="main">
        <div class="left-side">
          <section class="base_map_properties" onclick="clickToggle('');">
            <h2 class="labels">Maps location</h2>
            <input onkeypress="keyPressListen(event, this);" name="base_location" id="base_location" title="Search location" type="text" placeholder="Search...">
            <button class="button" id="search-button" title="Search location" onclick="changeLocation();">Search</button>
            <button class="button" id="clear-marker-button" title="Clear search marker" onclick="clearMarker();">Clear marker</button>
          </section>
          <section class="overlay_map_properties" onclick="clickToggle('');">
            <h2 class="labels">Overlay map</h2>
            <label class="labels">Opacity</label>
            <input id="opacity" title="Adjust map opacity" value="1" type="range" min="0" max="1" step="0.1" onchange="changeOpacity();">
            <h2 class="labels">Shapes</h2>
            <label class="labels">Borders</label>
            <input id= "colourPicker" type="color" name="favcolor" value="#800000" onchange="changeProperties();" title="Select colour" onclick="hideNameInput();">
            <input id="thicknessPicker" type="number" min="1" max="9" title="Select thickness" onchange="changeProperties();" value="2" onclick="hideNameInput();">
          </section>
          <nav class="buttons" onclick="clickToggle('');">
            <button class="button" id="delete-button" title="Delete item" onclick="hideNameInput();">Delete item</button>
            <button class="button" id="clear-button" title="Delete all" onclick="hideNameInput();">Delete all</button>
            <button class="button" id="save-button" title=" Save all" onclick="submitForm();">Save all</button>
          </nav>
        </div>
        <div class="map_container">
          <div id="icon_list" style='display: none'>
          </div>
          <div id="map"></div>
          <iframe id="map_embed" src=''></iframe>
        </div>
      </main>
      <footer class="footer" onclick="clickToggle('');">
      </footer>
    </div>

    <form id="submit_form" action="includes/data-handler.php" method="post" enctype="multipart/form-data" name="submit_form" style="display:none">
      <input style='display: none' type="text" name="dataToSubmit" id="dataToSubmit"/>
      <?php 
        // Check for passed variables           
          if (isset($_POST['locationToSubmit'])) {
            $locationPassed = $_POST['locationToSubmit'];
          } else {
            $locationPassed = "Brussels";
          }
          if (isset($_POST['mapTypeToSubmit'])) {
            $mapTypePassed = $_POST['mapTypeToSubmit'];
          } else {
            $mapTypePassed = "roadmap";
          }
          if (isset($_POST['mapStyleToSubmit'])) {
            $mapStylePassed = $_POST['mapStyleToSubmit'];
          } else {
            $mapStylePassed = "regional";
          }
          if (isset($_POST['mapOverlayToSubmit'])) {
            $mapOverlayPassed = $_POST['mapOverlayToSubmit'];
          } else {
            $mapOverlayPassed = "none";
          }

        echo "<input style='display: none' type='text' name='lastSearch' id='lastSearch' value='" . $locationPassed . "'/>";
        echo "<input style='display: none' type='text' name='chosenMapType' id='chosenMapType' value='" . $mapTypePassed . "'/>";
        echo "<input style='display: none' type='text' name='chosenStyle' id='chosenStyle' value='" . $mapStylePassed . "'/>";
        echo "<input style='display: none' type='text' name='chosenOverlay' id='chosenOverlay' value='" . $mapOverlayPassed . "'/>";
      ?>
    </form>
    <div id='shape_properties' style='display: none'>
      <select id="shapeType" class="blue" name="shapeType" autofocus onchange="nameChanged(1);">
        <option value="0">--- Select division type ---</option>
        <option value="1">City neighbourhood</option>
        <option value="2">City division</option>
        <option value="3">City</option>
        <option value="4">Metropolitan area</option>
        <option value="5">Country 3rd order division</option>
        <option value="6">Country 2nd order division</option>
        <option value="7">Country 1st order division</option>
        <option value="8">Country</option>
        <option value="9">Region</option>
      </select>
      <input onkeypress="keyPressListen(event, this);" name="shapeTypeName" id="shapeTypeName" class="blue" type="text" placeholder="" value="" disabled onchange="nameChanged(2);">
      <input onkeypress="keyPressListen(event, this);" name="shapeCountryName" id="shapeCountryName" class="pink" type="text" placeholder="" value="" disabled onchange="nameChanged(3);">
      <input onkeypress="keyPressListen(event, this);" name="shapeRegionName" id="shapeRegionName" class="pink" type="text" placeholder="" value="" disabled onchange="nameChanged(4);">
      <input onkeypress="keyPressListen(event, this);" name="shapeZoneName" id="shapeZoneName" class="pink" type="text" placeholder="" value="" disabled onchange="nameChanged(5);">
      <button id="close_shape_properties">Ok</button>
    </div>
    <div id="freeze" style="display: none"></div>

    <?php
      // Creates an invisible div where the loaded Json data is inserted
        $fetchedData = "";
        $myFile = "includes/data.json";
        $arr_data = array(); // create empty array
        try {
            //Get data from existing json file
                $fetchedData = file_get_contents($myFile);
        }
        catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
        }
        echo "<div id='data' style='display: none'>";
        $fetchedData = str_replace('["', "", "$fetchedData");
        $fetchedData = str_replace('"]', "", "$fetchedData");
        $fetchedData = str_replace('","', ";", "$fetchedData");
        echo $fetchedData;
        echo "</div>";
     ?>
  </body>
  <script>
    // Initialises with the passed values
      document.getElementById("base_location").value = document.getElementById("lastSearch").value;
      var chosenMapType  = document.getElementById("chosenMapType").value;
      var chosenStyle = document.getElementById("chosenStyle").value;
      var chosenStyles = styleThis(chosenStyle);

      function initialisePassedVars() {
        selectMapType(document.getElementById("chosenMapType").value);
        if (chosenMapType == "roadmap") {
            map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        } else if (chosenMapType == "satellite") {
            map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        } else if (chosenMapType == "hybrid") {
            map.setMapTypeId(google.maps.MapTypeId.HYBRID);
        } else if (chosenMapType == "terrain") {
            map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
        }
        selectMapStyle(document.getElementById("chosenStyle").value);
        selectMapOverlay(document.getElementById("chosenOverlay").value);

        clickToggle("");
      }

    // Sets initial UI properties
      var overlayColor = colourPicker.value;
      var borderThickness = thicknessPicker.value;

    // Gets number of files in markers folder and their names
      $.ajax({
          url: "images/markers/",
          success: function(data) {
              var currentFile;
              var parser = new DOMParser(),
                  doc = parser.parseFromString(data, 'text/html');

              fileCount = 0,
                  rows = doc.querySelector('table').querySelectorAll('tr');

              for (var i=0;i<rows.length;i++) {
                  if (rows[i].children[3]) {
                      if (parseInt(rows[i].children[3].innerText)>0) {
                        fileCount++;
                        var tempElement = rows[i].children[1];
                        currentFile = $(tempElement).find("a");
                        currentFile = $(currentFile).attr("href");
                        files.push(currentFile);
                      }
                  }
              }
              populateIconDropdown(files);
          }
      });
  </script>
</html>
