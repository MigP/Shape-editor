// Adds a style to the overlay map
  function styleThis(mapStyle) {
    if (mapStyle == "regional") {
      return [{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"color":"#ff00ff"},{"weight":2}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#fa61fa"},{"weight":2}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#57c95b"},{"weight":2}]},{"featureType":"administrative.neighborhood","elementType":"geometry.stroke","stylers":[{"color":"#188018"},{"weight":2}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#824313"},{"weight":2}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ccc8cc"}]}];
    } else if (mapStyle == "dark_gray") {
      return [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];
    } else if (mapStyle == "dark_blue") {
      return [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}];
    } else if (mapStyle == "retro") {
      return [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}];
    }
  }

// Changes fill and stroke
  function changeProperties() {
    if (_selection == null) {
      $("#thicknessPicker").css("border-width", thicknessPicker.value +"px");
      drawingManager.polygonOptions.fillColor = colourPicker.value;
      drawingManager.polygonOptions.strokeColor = colourPicker.value;
      drawingManager.polygonOptions.strokeWeight = thicknessPicker.value;
    } else {
      $("#thicknessPicker").css("border-width", thicknessPicker.value +"px");
      _selection.setOptions({fillColor: colourPicker.value});
      _selection.setOptions({strokeColor: colourPicker.value});
      _selection.setOptions({strokeWeight: thicknessPicker.value});
      $("#thicknessPicker").css("border-width", thicknessPicker.value +"px");
      drawingManager.polygonOptions.fillColor = colourPicker.value;
      drawingManager.polygonOptions.strokeColor = colourPicker.value;
      drawingManager.polygonOptions.strokeWeight = thicknessPicker.value;
    }
  }

// Changes overlay map opacity
  function changeOpacity() {
    document.getElementById("map").style.opacity = opacity.value;
    if (opacity.value == "0") {
      document.getElementById("map").style.display = "none";
    } else {
      document.getElementById("map").style.display = "block";
    }
  }

// Freezes part of the page while a popup window is open
  function showFreeze() {
    document.getElementById("freeze").style.display = "block";
  }

// Unfreezes the page after a popup window is closed
  function hideFreeze() {
    document.getElementById("freeze").style.display = "none";
  }

// Opens up a popup window displaying the input fields for the shape clicked
  function showNameInput(a) {
    if (a == "1") {
      showFreeze();
    }

    // Gets the popup's coordinates
      var x0 = mouseX;
      var y0 = mouseY;
      var x1 = x0 + 274;
      var y1 = y0 + 154;

    document.getElementById("shape_properties").style.top = y0+"px";
    document.getElementById("shape_properties").style.left = x0+"px";
    document.getElementById("shape_properties").focus();
    document.getElementById("shape_properties").style.display = "block";
  }

// Clears the value of an element's field
  function clearValue(id) {
    document.getElementById(id).value = "";
  }

// Clears the placeholder of an element's field
  function clearPlaceholder(id) {
    document.getElementById(id).placeholder = "";
  }

// Disables an element's field
  function disableThis(id) {
    document.getElementById(id).disabled = true;
  }

// Enables an element's field
  function enableThis(id) {
    document.getElementById(id).disabled = false;
  }

// Closes the popup window with the input fields for the shape
  function hideNameInput() {
    // Clears all input fields
      clearValue("shapeCountryName");
      clearValue("shapeRegionName");
      clearValue("shapeZoneName");
      clearValue("shapeTypeName");
      document.getElementById("shapeType").value = "0";
    // Closes the popup window
      document.getElementById("shape_properties").style.display = "none";
    // Closes the marker icon options dropdown
      closeIconOptions();
    // Disables all input fields except the first one
      disableThis("shapeTypeName");
      disableThis("shapeCountryName");
      disableThis("shapeRegionName");
      disableThis("shapeZoneName");
    // Clears all placeholders
      clearPlaceholder("shapeTypeName");
      clearPlaceholder("shapeCountryName");
      clearPlaceholder("shapeRegionName");
      clearPlaceholder("shapeZoneName");
    // Unfreeze page
      hideFreeze();
  }

// Replaces Google's default marker icon with the custom selected one
  function initialReplaceIconPic() {
    var markerButton = $(".gmnoprint div")[24];
    markerButton = $(markerButton).find("img").parent();
    $(markerButton).css("overflow", "visible");
    $(markerButton).append("<img id='iconButton' src='images/markers/" + files[0] + "' draggable='false' style='background-color: white; position: absolute; left: -4px; top: -4px; -webkit-user-select: none; border: 0px; padding: 2px; margin: 0px; max-width: none; width: 20px; height: 20px;'>");
  }

// Replaces the marker icon button with the one that's been selected
  function replaceIconPic(el) {
    document.getElementById('iconButton').src=el.src;
  }

// Opens marker dropdown
  function openIconOptions() {
    // Closes all open dropdowns
      clickToggle("");
    document.getElementById("icon_list").style.display = "flex";
  }

// Closes marker dropdown
  function closeIconOptions() {
    document.getElementById("icon_list").style.display = "none";
  }

// Fires up when a marker is selected from the marker dropdown
  function iconClicked(el, nr) {
    replaceIconPic(el);
    markerIcon = nr;
    var image = {
        url: el.src,
        // This marker is 20 pixels wide by 20 pixels high.
        size: new google.maps.Size(20, 20),
        scaledSize: new google.maps.Size(20, 20),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (12, 12).
        anchor: new google.maps.Point(12, 12)
    };
    if (_selection == null) {
      drawingManager.markerOptions.icon = image;
    } else {
      _selection.setOptions({icon: image});
      drawingManager.markerOptions.icon = image;
    }
    closeIconOptions();
  }

// Submits form where all shapes are stored
  function submitForm() {
    document.submit_form.submit();
  }

// Hides unselected shapes
  function hideTheseShapes(type, name) {
    if (type == "type") {
      if (name == "regions") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "9") {
            _shapes[a].setOptions({visible: false});
          }
        }
      } else if (name == "countries") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "8") {
            _shapes[a].setOptions({visible: false});
          }
        }
      } else if (name == "divisions1") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "7") {
            _shapes[a].setOptions({visible: false});
          }
        }
      } else if (name == "divisions2") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "6") {
            _shapes[a].setOptions({visible: false});
          }
        }
      } else if (name == "divisions3") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "5") {
            _shapes[a].setOptions({visible: false});
          }
        }
      } else if (name == "metro_areas") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "4") {
            _shapes[a].setOptions({visible: false});
          }
        }
      } else if (name == "cities") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "3") {
            _shapes[a].setOptions({visible: false});
          }
        }
      } else if (name == "city_divisions") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "2") {
            _shapes[a].setOptions({visible: false});
          }
        }
      } else if (name == "neighbourhoods") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "1") {
            _shapes[a].setOptions({visible: false});
          }
        }
      }
    } else if (type == "country") {
      for (a=0; a<_shapes.length; a++) {
        var currentString = _shapes[a].itemname;
        var currentArray = currentString.split("#");
        var currentCountry = currentArray[0];

        if (currentCountry == name) {
          _shapes[a].setOptions({visible: false});
        }
      }
    } else if (type == "region") {
      for (a=0; a<_shapes.length; a++) {
        var currentString = _shapes[a].itemname;
        var currentArray = currentString.split("#");
        var currentCountry  = currentArray[0];
        var currentRegion = currentArray[1];
        var passedCountry = (name.split("#"))[0];
        var passedRegion = (name.split("#"))[1];

        if (currentCountry == passedCountry && currentRegion == passedRegion) {
          _shapes[a].setOptions({visible: false});
        }
      }
    } else if (type == "zone") {
      for (a=0; a<_shapes.length; a++) {
        var currentString = _shapes[a].itemname;
        var currentArray = currentString.split("#");
        var currentCountry  = currentArray[0];
        var currentRegion  = currentArray[1];
        var currentZone = currentArray[2];
        var passedCountry = (name.split("#"))[0];
        var passedRegion = (name.split("#"))[1];
        var passedZone = (name.split("#"))[2];

        if (currentCountry == passedCountry && currentRegion == passedRegion && currentZone == passedZone) {
          _shapes[a].setOptions({visible: false});
        }
      }
    }
  }

// Unhides selected shapes
  function showTheseShapes(type, name) {
    if (type == "type") {
      if (name == "regions") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "9") {
            _shapes[a].setOptions({visible: true});
          }
        }
      } else if (name == "countries") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "8") {
            _shapes[a].setOptions({visible: true});
          }
        }
      } else if (name == "divisions1") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "7") {
            _shapes[a].setOptions({visible: true});
          }
        }
      } else if (name == "divisions2") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "6") {
            _shapes[a].setOptions({visible: true});
          }
        }
      } else if (name == "divisions3") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "5") {
            _shapes[a].setOptions({visible: true});
          }
        }
      } else if (name == "metro_areas") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "4") {
            _shapes[a].setOptions({visible: true});
          }
        }
      } else if (name == "cities") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "3") {
            _shapes[a].setOptions({visible: true});
          }
        }
      } else if (name == "city_divisions") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "2") {
            _shapes[a].setOptions({visible: true});
          }
        }
      } else if (name == "neighbourhoods") {
        for (a=0; a<_shapes.length; a++) {
          if (_shapes[a].zonetype == "1") {
            _shapes[a].setOptions({visible: true});
          }
        }
      }
    } else if (type == "country") {
      for (a=0; a<_shapes.length; a++) {
        var currentString = _shapes[a].itemname;
        var currentArray = currentString.split("#");
        var currentCountry = currentArray[0];

        if (currentCountry == name) {
          _shapes[a].setOptions({visible: true});
        }
      }
    } else if (type == "region") {
      for (a=0; a<_shapes.length; a++) {
        var currentString = _shapes[a].itemname;
        var currentArray = currentString.split("#");
        var currentCountry  = currentArray[0];
        var currentRegion = currentArray[1];
        var passedCountry = (name.split("#"))[0];
        var passedRegion = (name.split("#"))[1];

        if (currentCountry == passedCountry && currentRegion == passedRegion) {
          _shapes[a].setOptions({visible: true});
        }
      }
    } else if (type == "zone") {
      for (a=0; a<_shapes.length; a++) {
        var currentString = _shapes[a].itemname;
        var currentArray = currentString.split("#");
        var currentCountry  = currentArray[0];
        var currentRegion  = currentArray[1];
        var currentZone = currentArray[2];
        var passedCountry = (name.split("#"))[0];
        var passedRegion = (name.split("#"))[1];
        var passedZone = (name.split("#"))[2];

        if (currentCountry == passedCountry && currentRegion == passedRegion && currentZone == passedZone) {
          _shapes[a].setOptions({visible: true});
        }
      }
    }
  }

// Fires up when something is checked or unchecked on the dropdown
  function dropboxChange(el, checked, type, name) {

    if (el != "") {
      var el_input = $(el).find("input");

      for (var a = 0; a < el_input.length; a++) {
        if (checked) {
          el_input[a].checked = true;
        } else {
          el_input[a].checked = false;
        }
      }
    }

    if (checked) {
      showTheseShapes(type, name);
    } else {
      hideTheseShapes(type, name);
    }
  }

// Toggles expand and collapse arrows
  function arrowClick(el) {
    var el_arrows = $(el).find(".arrows")[0];
    if ($(el_arrows).text() == "↑") {
      collapse(el);
    } else {
      expand(el);
    }
  }

// Expands a sub-section
  function expand(el) {
    var el_arrows = $(el).find(".arrows")[0];
    $(el_arrows).text("↑");
    $(el_arrows).attr("title", "Collapse");
    var eee = $(el).children("div");
    if ($(eee).hasClass("collapsed")) {
      $(eee).removeClass("collapsed");
      $(eee).addClass("expanded");
    } else {
      $(eee).removeClass("expanded");
      $(eee).addClass("collapsed");
    }
  }

// Collapses a sub-section
  function collapse(el) {
    var el_arrows = $(el).find(".arrows")[0];
    $(el_arrows).text("↓");
    $(el_arrows).attr("title", "Expand");
    var eee = $(el).children("div");
    if ($(eee).hasClass("collapsed")) {
      $(eee).removeClass("collapsed");
      $(eee).addClass("expanded");
    } else {
      $(eee).removeClass("expanded");
      $(eee).addClass("collapsed");
    }
  }

// Populates the dropdown with the shapes categories
  function populateDropbox() {
    // Countries
      var countries = [], country_occurrences = [];
      for (var zi = 0; zi < _shapes.length; zi++) {
        var regionString = (_shapes[zi].itemname).split("#");
        countries.push(regionString[0]);  
      }

      for (var i = 0, j = countries.length; i < j; i++) {
         country_occurrences[countries[i]] = (country_occurrences[countries[i]] || 0) + 1;
      }
      var i, len=countries.length, unique_countries=[], obj={};
      for (i=0;i<len;i++) {
        obj[countries[i]]=0;
      }
      for (i in obj) {
        unique_countries.push(i);
      }

    // Regions
      var regions = [], region_occurrences = [];
      for (var zi = 0; zi < _shapes.length; zi++) {
        var regionString = (_shapes[zi].itemname).split("#");
        regions.push(regionString[0] + "#" + regionString[1]);  
      }

      for (var i = 0, j = regions.length; i < j; i++) {
         region_occurrences[regions[i]] = (region_occurrences[regions[i]] || 0) + 1;
      }
      var i, len=regions.length, unique_regions=[], obj={};
      for (i=0;i<len;i++) {
        obj[regions[i]]=0;
      }
      for (i in obj) {
        unique_regions.push(i);
      }

    // Zones
      var zones = [], zone_occurrences = [];
      for (var zi = 0; zi < _shapes.length; zi++) {
        zones.push(_shapes[zi].itemname);  
      }

      for (var i = 0, j = zones.length; i < j; i++) {
         zone_occurrences[zones[i]] = (zone_occurrences[regions[i]] || 0) + 1;
      }
      var i, len=zones.length, unique_zones=[], obj={};
      for (i=0;i<len;i++) {
        obj[zones[i]]=0;
      };
      for (i in obj) {
        unique_zones.push(i);
      }

    for (var i = 0; i < unique_countries.length; i++) {
      $("#hideAndShow").append("<span class='dropbox dropbox_list separator'>-----------------------</span>");
      $("#hideAndShow").append("<div id='country_" + i + "' class='dropbox dropbox_list green1'><input type='checkbox' checked onchange='dropboxChange(country_" + i + ", this.checked, \"country\", \"" + unique_countries[i] + "\");'>" + unique_countries[i] + "<span class='arrows' title='Expand' onclick='arrowClick(country_" + i + ");'>↓</span></div>");
      for (var i2 = 0; i2 < unique_regions.length; i2++) {
        if (((unique_regions[i2]).split("#"))[0] == unique_countries[i]) {
          $("#country_" + i).append("<div id='region_" + i + "_" + i2 + "' class='dropbox dropbox_list green2 collapsed'><input type='checkbox' checked onchange='dropboxChange(region_" + i + "_" + i2 + ", this.checked, \"region\", \"" + unique_regions[i2] + "\");'>&nbsp;&nbsp;- " + ((unique_regions[i2]).split("#"))[1] + "<span class='arrows' title='Expand' onclick='arrowClick(region_" + i + "_" + i2 + ");'>↓</span></div>");
        }
        for (var i3 = 0; i3 < unique_zones.length; i3++) {
          if (((unique_zones[i3]).split("#"))[0] == unique_countries[i] && (((unique_zones[i3]).split("#"))[0] + "#" + ((unique_zones[i3]).split("#"))[1]) == unique_regions[i2]) {
            $("#region_" + i + "_" + i2).append("<div id='zone_" + i + "_" + i2 + "_" + i3 + "' class='dropbox dropbox_list green3 collapsed'><input type='checkbox' checked onchange='dropboxChange(zone_" + i + "_" + i2 + "_" + i3 + ", this.checked, \"zone\", \"" + unique_zones[i3] + "\");'>&nbsp;&nbsp;&nbsp;&nbsp;-- " + ((unique_zones[i3]).split("#"))[2] + "</div>");
          }
        }
      }
    }
  }

// Handles the shape's information popup
  function nameChanged(nr) {
    if (nr == 1) {
      if (document.getElementById("shapeType").value != "0") {
        // Disable all following fields
          disableThis("shapeTypeName");
          disableThis("shapeCountryName");
          disableThis("shapeRegionName");
          disableThis("shapeZoneName");
        // Clear all following fields
          clearValue("shapeTypeName");
          clearValue("shapeCountryName");
          clearValue("shapeRegionName");
          clearValue("shapeZoneName");
        // Clear all following placeholders
          clearPlaceholder("shapeTypeName");
          clearPlaceholder("shapeCountryName");
          clearPlaceholder("shapeRegionName");
          clearPlaceholder("shapeZoneName");
        // Enable following field
          enableThis("shapeTypeName");
        // This field black
          $("#shapeType").css("color", "black");
        // Fill in next placeholder
          if (document.getElementById("shapeType").value == "8") {
            // Disable following 3 fields and enable the one after
              disableThis("shapeTypeName");
              disableThis("shapeCountryName");
              enableThis("shapeRegionName");
              document.getElementById("shapeZoneName").disabled = false;
            // Fill in value of following 3 fields
              document.getElementById("shapeTypeName").value = "Country";
              $("#shapeTypeName").css("color", "black");
              document.getElementById("shapeCountryName").value = "World";
              $("#shapeCountryName").css("color", "black");
              document.getElementById("shapeRegionName").value = "World";
              $("#shapeRegionName").css("color", "black");
            // Clear the next 3 placeholders and fill in the one after
              clearPlaceholder("shapeTypeName");
              clearPlaceholder("shapeCountryName");
              clearPlaceholder("shapeRegionName");
              document.getElementById("shapeZoneName").placeholder="Enter " + document.getElementById("shapeTypeName").value + " name";
          } else {
            document.getElementById("shapeTypeName").placeholder="Enter division type name";
          }
      } else {
        // Disable all following fields
          disableThis("shapeTypeName");
          disableThis("shapeCountryName");
          disableThis("shapeRegionName");
          disableThis("shapeZoneName");
        // Clear all following fields
          clearValue("shapeTypeName");
          clearValue("shapeCountryName");
          clearValue("shapeRegionName");
          clearValue("shapeZoneName");
        // Clear all following placeholders
          clearPlaceholder("shapeTypeName");
          clearPlaceholder("shapeCountryName");
          clearPlaceholder("shapeRegionName");
          clearPlaceholder("shapeZoneName");
        // This field white
          $("#shapeType").css("color", "white");
      }
    } else if (nr == 2) {
      if (document.getElementById("shapeTypeName").value != "") {
        // Enable following field
          enableThis("shapeCountryName");
        // This field black
          $("#shapeTypeName").css("color", "black");
        // Fill in next placeholder
          if (document.getElementById("shapeType").value == "1") {
            document.getElementById("shapeCountryName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "2") {
            document.getElementById("shapeCountryName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "3") {
            document.getElementById("shapeCountryName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "4") {
            // Disable following field and enable the one after
              disableThis("shapeCountryName");
              enableThis("shapeRegionName");
            // Fill in value of following field
              document.getElementById("shapeCountryName").value = "World";
              $("#shapeCountryName").css("color", "black");
            // Clear the next placeholder and fill in the one after
              clearPlaceholder("shapeCountryName");
              document.getElementById("shapeRegionName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "5") {
            document.getElementById("shapeCountryName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "6") {
            document.getElementById("shapeCountryName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "7") {
            // Disable following field and enable the one after
              disableThis("shapeCountryName");
              enableThis("shapeRegionName");
            // Fill in value of following field
              document.getElementById("shapeCountryName").value = "World";
              $("#shapeCountryName").css("color", "black");
            // Clear the next placeholder and fill in the one after
              clearPlaceholder("shapeCountryName");
              document.getElementById("shapeRegionName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "8") {
            // Disable following 2 fields and enable the one after
              disableThis("shapeCountryName");
              disableThis("shapeRegionName");
              enableThis("shapeZoneName");
            // Fill in value of following 2 fields
              document.getElementById("shapeCountryName").value = "World";
              $("#shapeCountryName").css("color", "black");
              document.getElementById("shapeRegionName").value = "World";
              $("#shapeRegionName").css("color", "black");
            // Clear the next 2 placeholders and fill in the one after
              clearPlaceholder("shapeCountryName");
              clearPlaceholder("shapeRegionName");
              document.getElementById("shapeZoneName").placeholder="Enter " + document.getElementById("shapeTypeName").value + " name";
          } else if (document.getElementById("shapeType").value == "9") {
            // Disable following 2 fields and enable the one after
              disableThis("shapeCountryName");
              disableThis("shapeRegionName");
              enableThis("shapeZoneName");
            // Fill in value of following 2 fields
              document.getElementById("shapeCountryName").value = "World";
              $("#shapeCountryName").css("color", "black");
              document.getElementById("shapeRegionName").value = "World";
              $("#shapeRegionName").css("color", "black");
            // Clear the next 2 placeholders and fill in the one after
              clearPlaceholder("shapeCountryName");
              clearPlaceholder("shapeRegionName");
              document.getElementById("shapeZoneName").placeholder="Enter " + document.getElementById("shapeTypeName").value + " name";
          }
      } else {
        // Disable all following fields
          disableThis("shapeCountryName");
          disableThis("shapeRegionName");
          disableThis("shapeZoneName");
        // Clear all following fields
          clearValue("shapeCountryName");
          clearValue("shapeRegionName");
          clearValue("shapeZoneName");
        // Clear all following placeholders
          clearPlaceholder("shapeCountryName");
          clearPlaceholder("shapeRegionName");
          clearPlaceholder("shapeZoneName");
        // This field white
          $("#shapeTypeName").css("color", "white");
      }
    } else if (nr == 3) {
      if (document.getElementById("shapeCountryName").value != "") {
        // Enable following field
          enableThis("shapeRegionName");
        // This field black
          $("#shapeCountryName").css("color", "black");
        // Fill in next placeholder
          if (document.getElementById("shapeType").value == "1") {
            document.getElementById("shapeRegionName").placeholder="Enter city name";
          } else if (document.getElementById("shapeType").value == "2") {
            document.getElementById("shapeRegionName").placeholder="Enter city name";
          } else if (document.getElementById("shapeType").value == "3") {
            document.getElementById("shapeRegionName").placeholder="Enter metropolitan area name (or 'none')";
          } else if (document.getElementById("shapeType").value == "4") {
            document.getElementById("shapeRegionName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "5") {
            document.getElementById("shapeRegionName").placeholder="Enter 2nd administrative division name";
          } else if (document.getElementById("shapeType").value == "6") {
            document.getElementById("shapeRegionName").placeholder="Enter 1st administrative division name";
          } else if (document.getElementById("shapeType").value == "7") {
            document.getElementById("shapeRegionName").placeholder="Enter country name";
          } else if (document.getElementById("shapeType").value == "8") {
            // Disable following field and enable the one after
              disableThis("shapeRegionName");
              enableThis("shapeZoneName");
            // Fill in value of following field
              document.getElementById("shapeRegionName").value = "World";
              $("#shapeRegionName").css("color", "black");
            // Clear the next placeholder and fill in the one after
              clearPlaceholder("shapeRegionName");
              document.getElementById("shapeZoneName").placeholder="Enter " + document.getElementById("shapeTypeName").value + " name";
          } else if (document.getElementById("shapeType").value == "9") {
            // Disable following field and enable the one after
              disableThis("shapeRegionName");
              enableThis("shapeZoneName");
            // Fill in value of following field
              document.getElementById("shapeRegionName").value = "World";
              $("#shapeRegionName").css("color", "black");
            // Clear the next placeholder and fill in the one after
              clearPlaceholder("shapeRegionName");
              document.getElementById("shapeZoneName").placeholder="Enter " + document.getElementById("shapeTypeName").value + " name";
          }
      } else {
        // Disable all following fields
          disableThis("shapeRegionName");
          disableThis("shapeZoneName");
        // Clear all following fields
          clearValue("shapeRegionName");
          clearValue("shapeZoneName");
        // Clear all following placeholders
          clearPlaceholder("shapeRegionName");
          clearPlaceholder("shapeZoneName");
        // This field white
          $("#shapeCountryName").css("color", "white");
      }
    } else if (nr == 4) {
      if (document.getElementById("shapeRegionName").value != "") {
        // Enable following field
          enableThis("shapeZoneName");
        // This field black
          $("#shapeRegionName").css("color", "black");
        // Fill in next placeholder
          document.getElementById("shapeZoneName").placeholder="Enter " + document.getElementById("shapeTypeName").value + " name";
      } else {
        // Disable all following fields
          disableThis("shapeZoneName");
        // Clear all following fields
          clearValue("shapeZoneName");
        // Clear all following placeholders
          clearPlaceholder("shapeZoneName");
        // This field white
          $("#shapeRegionName").css("color", "white");
      }
    } else if (nr == 5) {
      if (document.getElementById("shapeZoneName").value != "") {
        // This field black
          $("#shapeZoneName").css("color", "black");
      } else {
        // This field white
          $("#shapeZoneName").css("color", "white");
      }
    }
  }

// Handles events for the dragging of the popup window
  function addListenersToInputBox() {
    document.getElementById('shape_properties').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
  }

  function mouseUp() {
    window.removeEventListener('mousemove', moveDiv, true);
  }

  function mouseDown(e) {
    if ($("#shapeType").is(':focus') == false && $("#shapeTypeName").is(':focus') == false && $("#shapeCountryName").is(':focus') == false && $("#shapeRegionName").is(':focus') == false && $("#shapeZoneName").is(':focus') == false) {
      var div = document.getElementById('shape_properties');
      offY= e.clientY-parseInt(div.offsetTop);
      offX= e.clientX-parseInt(div.offsetLeft);
      window.addEventListener('mousemove', moveDiv, true);
    }
  }

  function moveDiv(e) {
    var div = document.getElementById('shape_properties');
    div.style.position = 'fixed';
    div.style.top = (e.clientY-offY) + 'px';
    div.style.left = (e.clientX-offX) + 'px';
  }

// Changes the location of the maps
  function changeLocation() {
    document.getElementById("lastSearch").value = base_location.value;
    document.getElementById("map_embed").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCrkmmU2-WAAlfWghYpeEcwAy4zTT5h63c&q=" + (base_location.value).replace(" ", "+");

    var geocoder = new google.maps.Geocoder();
  
    function geocodeAddress(geocoder, resultsMap) {
        geocoder.geocode({'address': base_location.value}, function(results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                search_marker.setMap(null);
                search_marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location,
                    title: results[0].formatted_address
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    geocodeAddress(geocoder, map);
  }

// Clears marker generated from map search
  function clearMarker() {
    search_marker.setMap(null);
  }

// Handles Overlay map's type, style, and overlays
  function  selectMapType(mapType) {
    clickToggle("hiddenTypes");
    chosenMapType  = mapType;
    $("#types-button").css("background-image", "url(images/" + chosenMapType + ".jpg)");
    document.getElementById("chosenMapType").value = mapType;
  }

  function  selectMapStyle(mapStyle) {
    clickToggle("hiddenStyles");
    chosenStyles = styleThis(mapStyle);
    if (mapStyle == "none") {
      document.getElementById("styles-button").innerHTML = "None";
      $("#styles-button").css("background-image", "");
    } else {
      document.getElementById("styles-button").innerHTML = "";
      $("#styles-button").css("background-image", "url(images/" + mapStyle + ".jpg)");
    }
    document.getElementById("chosenStyle").value = mapStyle;
  }

  function  selectMapOverlay(mapOverlay) {
    clickToggle("hiddenOverlays");

    if (mapOverlay == "none") {
      document.getElementById("overlays-button").innerHTML = "None";
      $("#overlays-button").css("background-image", "");
      trafficLayer.setMap(null);
      transitLayer.setMap(null);
      bikeLayer.setMap(null);
    } else if (mapOverlay == "transit") {
      document.getElementById("overlays-button").innerHTML = "";
      $("#overlays-button").css("background-image", "url(images/" + mapOverlay + ".jpg)");
      trafficLayer.setMap(null);
      transitLayer.setMap(map);
      bikeLayer.setMap(null);
    } else if (mapOverlay == "traffic") {
      document.getElementById("overlays-button").innerHTML = "";
      $("#overlays-button").css("background-image", "url(images/" + mapOverlay + ".jpg)");
      trafficLayer.setMap(map);
      transitLayer.setMap(null);
      bikeLayer.setMap(null);
    } else if (mapOverlay == "bike") {
      document.getElementById("overlays-button").innerHTML = "";
      $("#overlays-button").css("background-image", "url(images/" + mapOverlay + ".jpg)");
      trafficLayer.setMap(null);
      transitLayer.setMap(null);
      bikeLayer.setMap(map);
    }
    document.getElementById("chosenOverlay").value = mapOverlay;
  }

// Closes open dropdowns when another one is opened
  function clickToggle(id) {
    if (id != openDropdown) {
      if (id != "") {
        if (openDropdown == "") {
          $("#"+id).css("display", "block");
          $("#"+id).css("overflow-y", "auto");
          $("#"+id).css("border-width", "1px");
          openDropdown = id;
        } else {
          $("#"+id).css("display", "block");
          $("#"+id).css("overflow-y", "auto");
          $("#"+id).css("border-width", "1px"); 
          $("#"+openDropdown).css("display", "none");
          $("#"+openDropdown).css("overflow-y", "hidden");
          $("#"+openDropdown).css("border-width", "0");
          openDropdown = id;
        }
      } else {
        $("#"+openDropdown).css("display", "none");
        $("#"+openDropdown).css("overflow-y", "hidden");
        $("#"+openDropdown).css("border-width", "0");
        openDropdown = "";
      }
    } else {
      if ($("#"+openDropdown).css("display") == "none") {
          $("#"+id).css("display", "block");
          $("#"+id).css("overflow-y", "auto");
          $("#"+id).css("border-width", "1px"); 
      } else {
          $("#"+id).css("display", "none");
          $("#"+id).css("overflow-y", "hidden");
          $("#"+id).css("border-width", "0");
      }
    }
    closeIconOptions();
  }

// Populates dropdown with marker icons
    function populateIconDropdown(images) {
        for (var a = 0; a < images.length; a++) {
            var strToAppend = "<img src='images/markers/" + images[a] + "' class='icons' onclick='iconClicked(this, " + a + ");''>";
            $("#icon_list").append(strToAppend);
        }
        document.getElementById("icon_list").style.width = 24 * (images.length % 6) + 24 * parseInt(images.length / 6) + "px";
    }

// Handles overlay shapes map and all its functions
    function ShapesMap(_mapContainer, _deleteButton, _clearButton, _messageBox) {
        // Variables
            var _map = null;
            var _drawingManager = null;
     
        // Shape types
            var RECTANGLE = google.maps.drawing.OverlayType.RECTANGLE;
            var CIRCLE = google.maps.drawing.OverlayType.CIRCLE;
            var POLYGON = google.maps.drawing.OverlayType.POLYGON;
            var POLYLINE = google.maps.drawing.OverlayType.POLYLINE;
            var MARKER = google.maps.drawing.OverlayType.MARKER; 
         
            function typeDesc(type) {
                switch (type) {
                case RECTANGLE:
                    return "rectangle";
         
                case CIRCLE:
                    return "circle";
         
                case POLYGON:
                    return "polygon";
         
                case POLYLINE:
                    return "polyline";
         
                case MARKER:
                    return "marker";
         
                case null:
                    return "null";
         
                default:
                    return "Unknown type";
                }
            }
     
        // Read Json
            function jsonReadPath(jsonPath) {
                var path = new google.maps.MVCArray();
         
                for (var i = 0; i < jsonPath.path.length; i++) {
                    var latlon = 
                        new google.maps.LatLng(jsonPath.path[i].lat, jsonPath.path[i].lon);
                    path.push(latlon);
                }
         
                return path;
            }
         
            function jsonReadRectangle(jsonRectangle) {
                var jr = jsonRectangle;

                var southWest = new google.maps.LatLng(
                    jr.bounds.southWest.lat, 
                    jr.bounds.southWest.lon);
                var northEast = new google.maps.LatLng(
                    jr.bounds.northEast.lat, 
                    jr.bounds.northEast.lon);
                var bounds = new google.maps.LatLngBounds(southWest, northEast);
         
                var rectangleOptions = {
                    bounds: bounds,
                    editable: false,
                    fillColor: jr.color,
                    strokeColor: jr.color,
                    strokeOpacity: 1,
                    fillOpacity: overlayOpacity,
                    strokeWeight: jr.strokeWeight,
                    itemname: jr.itemname,
                    title: jr.title,
                    zonetype: jr.zonetype,
                    zonename: jr.zonename,
                    optimized: false,
                    map: _map
                };
             
                var rectangle = new google.maps.Rectangle(rectangleOptions);
         
                return rectangle;
            }
         
            function jsonReadCircle(jsonCircle) {
                var jc = jsonCircle;
         
                var center = new google.maps.LatLng(
                    jc.center.lat, 
                    jc.center.lon);
         
                var circleOptions = {
                    center: center,
                    radius: parseFloat(jc.radius),
                    editable: false,
                    fillColor: jc.color,
                    strokeColor: jc.color,
                    strokeOpacity: 1,
                    fillOpacity: overlayOpacity,
                    strokeWeight: jc.strokeWeight,
                    itemname: jc.itemname,
                    title: jc.title,
                    zonetype: jc.zonetype,
                    zonename: jc.zonename,
                    optimized: false,
                    map: _map
                };
             
                var circle = new google.maps.Circle(circleOptions);
         
                return circle;
            }
         
            function jsonReadPolyline(jsonPolyline) {
                var path = jsonReadPath(jsonPolyline);

                var polylineOptions = {
                    path: path, 
                    editable: false,
                    strokeColor: jsonPolyline.color,
                    strokeOpacity: 1,
                    strokeWeight: jsonPolyline.strokeWeight,
                    itemname: jsonPolyline.itemname,
                    title: jsonPolyline.title,
                    zonetype: jsonPolyline.zonetype,
                    zonename: jsonPolyline.zonename,
                    optimized: false,
                    map: _map
                };
         
                var polyline = new google.maps.Polyline(polylineOptions);
         
                return polyline;
            }
         
            function jsonReadPolygon(jsonPolygon) {
                var paths = new google.maps.MVCArray();

                for (var i = 0; i < jsonPolygon.paths.length; i++) {
                    var path = jsonReadPath(jsonPolygon.paths[i]);
                    paths.push(path);
                }
         
                var polygonOptions = {
                    paths: paths, 
                    editable: false,
                    fillColor: jsonPolygon.color,
                    strokeColor: jsonPolygon.color,
                    strokeOpacity: 1,
                    fillOpacity: overlayOpacity,
                    strokeWeight: jsonPolygon.strokeWeight,
                    itemname: jsonPolygon.itemname,
                    title: jsonPolygon.title,
                    zonetype: jsonPolygon.zonetype,
                    zonename: jsonPolygon.zonename,
                    optimized: false,
                    map: _map
                };
         
                var polygon = new google.maps.Polygon(polygonOptions);
         
                return polygon;
            }

            function jsonReadMarker(jsonMarker) {
                var jm = jsonMarker;

                var image = {
                    url: jsonMarker.icon,
                    // This marker is 20 pixels wide by 20 pixels high.
                    size: new google.maps.Size(20, 20),
                    scaledSize: new google.maps.Size(20, 20),
                    // The origin for this image is (0, 0).
                    origin: new google.maps.Point(0, 0),
                    // The anchor for this image is the base of the flagpole at (12, 12).
                    anchor: new google.maps.Point(12, 12)
                };

                var position = new google.maps.LatLng(
                    jm.position.lat, 
                    jm.position.lon);

                var markerOptions = {
                    icon: image,
                    title: jm.title,
                    editable: true,
                    draggable: true,
                    position: position,
                    itemname: jsonMarker.itemname,
                    optimized: false,
                    zonetype: jsonMarker.zonetype,
                    zonename: jsonMarker.zonename,
                    map: _map
                };
         
                var marker = new google.maps.Marker(markerOptions);
         
                return marker;
            }

            function jsonRead(json) { 
                var jsonObject = eval("(" + json + ")"); // This stores an object "Shapes" containing an array of objects (shapes themselves)
         
                for (i = 0; i < jsonObject.shapes.length; i++) {
                    switch (jsonObject.shapes[i].type) {
                        case RECTANGLE:
                            var rectangle = jsonReadRectangle(jsonObject.shapes[i]);
                            newShapeSetProperties(rectangle, RECTANGLE);
                            newShapeAddListeners(rectangle);
                            shapesAdd(rectangle);
                            break;
             
                        case CIRCLE:
                            var circle = jsonReadCircle(jsonObject.shapes[i]);
                            newShapeSetProperties(circle, CIRCLE);
                            newShapeAddListeners(circle);
                            shapesAdd(circle);
                            break;
             
                        case POLYLINE:
                            var polyline = jsonReadPolyline(jsonObject.shapes[i]);
                            newShapeSetProperties(polyline, POLYLINE);
                            newShapeAddListeners(polyline);
                            shapesAdd(polyline);
                            break;
             
                        case POLYGON:
                            var polygon = jsonReadPolygon(jsonObject.shapes[i]);
                            newShapeSetProperties(polygon, POLYGON);
                            newShapeAddListeners(polygon);
                            shapesAdd(polygon);
                            break;
             
                        case MARKER:
                            var marker = jsonReadMarker(jsonObject.shapes[i]);
                            newShapeSetProperties(marker, MARKER);
                            newShapeAddListeners(marker);
                            shapesAdd(marker);
                            break;
                    }
                }
            }
     
        // Write Json
            function comma(i) {
                return (i > 0) ? ',' : '';
            }
         
            function jsonMakeLatlon(latlon) {
                var tempStr = 
                    '"lat":"' + latlon.lat() + '","lon":"' + latlon.lng() + '"';

                return tempStr;
            }
         
            function jsonMakeBounds(bounds) {
                var tempStr = 
                    '"bounds":{'
                    + '"northEast":{' + jsonMakeLatlon(bounds.getNorthEast()) + '},'
                    + '"southWest":{' + jsonMakeLatlon(bounds.getSouthWest()) + '}'
                    + '}';
         
                return tempStr;
            }
         
            function jsonMakeTypeName(zonename) {
                var tempStr = '"zonename":"' + zonename + '"';
         
                return tempStr;
            }

            function jsonMakeType(type) {
                var tempStr = '"type":"' + typeDesc(type) + '"';
         
                return tempStr;
            }

            function jsonMakeColor(color) {
                var tempStr = '"color":"' + color + '"';
         
                return tempStr;
            }

            function jsonMakeThickness(thickness) {
                var tempStr = '"strokeWeight":"' + thickness + '"';
         
                return tempStr;
            }

            function jsonMakeZoneType(zonetype) {
                var tempStr = '"zonetype":"' + zonetype + '"';
         
                return tempStr;
            }

            function jsonMakeName(itemname) {
                var tempStr = '"itemname":"' + itemname + '"';
         
                return tempStr;
            }

            function jsonMakeTitle(title) {
                var arr = title.split("#");
                var str = arr[2] + " (" + arr[1] + ")";
                var tempStr = '"title":"' + str + '"';
         
                return tempStr;
            }

            function jsonMakeIcon(icon) {
                var str = icon.icon.url;

                var tempStr = '"icon":"' + str + '"';
         
                return tempStr;
            }

            function jsonMakeCenter(center) {
                var tempStr = '"center":{' + jsonMakeLatlon(center) + '}';
         
                return tempStr;
            }

            function jsonMakePosition(position) {
                var tempStr = '"position":{' + jsonMakeLatlon(position.position) + '}';

                return tempStr;
            }

            function jsonMakeRadius(radius) {
                var tempStr = '"radius":"' + radius + '"';
         
                return tempStr;
            }
         
            function jsonMakePath(path) {
                var n = path.getLength();
         
                var tempStr = '"path":[';
                for (var i = 0; i < n; i++) {
                    var latlon = path.getAt(i);
         
                    tempStr += comma(i) + '{' + jsonMakeLatlon(latlon) + '}';
                }
                tempStr += ']';
         
                return tempStr;
            }
         
            function jsonMakePaths(paths) {
                var n = paths.getLength();
         
                var tempStr = '"paths":[';
                for (var i = 0; i < n; i++) {
                    var path = paths.getAt(i);
         
                    tempStr += comma(i) + '{' + jsonMakePath(path) + '}';
                }
                tempStr += ']';
         
                return tempStr;
            }
         
            function jsonMakeRectangle(rectangle) {
                var tempStr = 
                    jsonMakeType(RECTANGLE) + ','
                    + jsonMakeZoneType(rectangle.zonetype) + ','
                    + jsonMakeTitle(rectangle.itemname) + ','
                    + jsonMakeTypeName(rectangle.zonename) + ','
                    + jsonMakeColor(rectangle.fillColor) + ','
                    + jsonMakeThickness(rectangle.strokeWeight) + ','
                    + jsonMakeBounds(rectangle.bounds) + ','
                    + jsonMakeName(rectangle.itemname);

                return tempStr;
            }
         
            function jsonMakeCircle(circle) {
                var tempStr = 
                    jsonMakeType(CIRCLE) + ','
                    + jsonMakeZoneType(circle.zonetype) + ','
                    + jsonMakeTitle(circle.itemname) + ','
                    + jsonMakeTypeName(circle.zonename) + ','
                    + jsonMakeColor(circle.fillColor) + ','
                    + jsonMakeCenter(circle.center) + ','
                    + jsonMakeThickness(circle.strokeWeight) + ','
                    + jsonMakeRadius(circle.radius) + ','
                    + jsonMakeName(circle.itemname);

                return tempStr;
            }
         
            function jsonMakePolyline(polyline) {
                var tempStr = 
                    jsonMakeType(POLYLINE) + ','
                    + jsonMakeZoneType(polyline.zonetype) + ','
                    + jsonMakeTitle(polyline.itemname) + ','
                    + jsonMakeTypeName(polyline.zonename) + ','
                    + jsonMakeColor(polyline.strokeColor) + ','
                    + jsonMakeThickness(polyline.strokeWeight) + ','
                    + jsonMakePath(polyline.getPath() + ','
                    + jsonMakeName(polyline.itemname));
         
                return tempStr;
            }
         
            function jsonMakePolygon(polygon) {
                var tempStr = 
                    jsonMakeType(POLYGON) + ','
                    + jsonMakeZoneType(polygon.zonetype) + ','
                    + jsonMakeTitle(polygon.itemname) + ','
                    + jsonMakeTypeName(polygon.zonename) + ','
                    + jsonMakeColor(polygon.fillColor) + ','
                    + jsonMakeThickness(polygon.strokeWeight) + ','
                    + jsonMakeName(polygon.itemname) + ','
                    + jsonMakePaths(polygon.getPaths());
         
                return tempStr;
            }
     
            function jsonMakeMarker(marker) {
                var tempStr = 
                    jsonMakeType(MARKER) + ','
                    + jsonMakeIcon(marker) + ','
                    + jsonMakeTypeName(marker.zonename) + ','
                    + jsonMakeZoneType(marker.zonetype) + ','
                    + jsonMakeTitle(marker.itemname) + ','
                    + jsonMakePosition(marker) + ','
                    + jsonMakeName(marker.itemname);

                return tempStr;
            }

            function jsonMake() {
                // Finds all unique regions and stores them in the array x_regions
                    var regions = [], shapesToSave = [], region_occurrences = [];
                    x_regions=[];          

                    for (ii = 0; ii < _shapes.length; ii++) {
                       regions.push(((_shapes[ii].itemname).split("#"))[0]+"#"+((_shapes[ii].itemname).split("#"))[1]);
                    }
                    for (var ai = 0, aj = regions.length; ai < aj; ai++) {
                       region_occurrences [regions[ai]] = (region_occurrences [regions[ai]] || 0) + 1;
                    }
                    var zi, len=regions.length, Robj={};
                    for (zi=0;zi<len;zi++) {
                      Robj[regions[zi]]=0;
                    }
                    for (zi in Robj) {
                      x_regions.push(zi);
                    }
                // Stores all shapes in the array shapesToSaveUnformatted according to their region -- unformatted
                    var shapesToSaveUnformatted = [];
                    for (w = 0; w < x_regions.length; w++) {
                        shapesToSaveUnformatted[w] = {"name": x_regions[w], "shapes": []};
                        for (z = 0; z < _shapes.length; z++) {
                            if ((((_shapes[z].itemname).split("#"))[0]+"#"+((_shapes[z].itemname).split("#"))[1]) == x_regions[w]) {
                                shapesToSaveUnformatted[w].shapes.push(_shapes[z]);
                            }
                        }
                    }
                // Stores all shapes in the array shapesToSave according to their region -- formatted JSON
                    for (ww = 0; ww < x_regions.length; ww++) {
                        var tempObj = '{"shapes":[';
                        for (var vi = 0; vi < shapesToSaveUnformatted[ww].shapes.length; vi++) {
                            switch (shapesToSaveUnformatted[ww].shapes[vi].type) {
                                case RECTANGLE:
                                    tempObj += comma(vi) + '{' + jsonMakeRectangle(shapesToSaveUnformatted[ww].shapes[vi]) + '}';
                                    break;
                     
                                case CIRCLE:
                                    tempObj += comma(vi) + '{' + jsonMakeCircle(shapesToSaveUnformatted[ww].shapes[vi]) + '}';
                                    break;
                     
                                case POLYLINE:
                                    tempObj += comma(vi) + '{' + jsonMakePolyline(shapesToSaveUnformatted[ww].shapes[vi]) + '}';
                                    break;
                     
                                case POLYGON:
                                    tempObj += comma(vi) + '{' + jsonMakePolygon(shapesToSaveUnformatted[ww].shapes[vi]) + '}';
                                    break;
                     
                                case MARKER:
                                    tempObj += comma(vi) + '{' + jsonMakeMarker(shapesToSaveUnformatted[ww].shapes[vi]) + '}';
                                    break;
                            }
                        }
                        tempObj += ']}';
                        shapesToSave.push(tempObj);
                    }
                    return shapesToSave;
            }
     
        // Shapes add, delete, hide, delete all, save, and load
            function shapesAdd(shape) {
                _shapes.push(shape);
            }
         
            function shapesDelete(shape) {
                var found = false;
         
                for (var i = 0; i < _shapes.length && !found; i++) {
                    if (_shapes[i] === shape) {
                        _shapes.splice(i, 1);
                        found = true;
                    }
                }
                print(((shape.itemname).split("#"))[2] + ": deleted\n");
            }
         
            function shapesHideAll() {
                for (var i = 0; i < _shapes.length; i++) {
                    _shapes[i].setMap(null);
                }
            }
         
            function shapesDeleteAll() {
                print(_shapes.length + " shapes deleted\n");
         
                _shapes.splice(0, _shapes.length);
            }
         
            function shapesSave() { 
                var shapes = jsonMake(), shapesToAdd = [];
                for (var i = 0; i < shapes.length; i++) {
                    shapesToAdd.push("shapes=" + escape(shapes[i]));
                }
                document.getElementById("dataToSubmit").value = JSON.stringify(shapesToAdd);
            }
         
            function shapesLoad() {
                var start_length = _shapes.length;
                var shapes_array = document.getElementById("data").innerHTML.split(";");

                for (var i = 0; i < shapes_array.length; i++) {
                    var key = shapes_array[i].substr(0, shapes_array[i].indexOf("="));
                    key = key.replace("/^\s+|\s+$/g", "");
         
                    if (key == "shapes") {
                        var value = shapes_array[i].substr(shapes_array[i].indexOf("=") + 1);
                        jsonRead(unescape(value));
                    }
                }

                var n_loaded = _shapes.length - start_length;
                print(n_loaded + " shapes loaded\n");
            }
     
        // Print on message box
            function print(string) {
                _messageBox.innerHTML += string;
                _messageBox.scrollTop = _messageBox.scrollHeight;
            }
         
            function printDrawingMode(drawingManager) {
                print(
                    "drawing mode set to "
                    + typeDesc(drawingManager.getDrawingMode())
                    + "\n");
            }
     
        // Shape selection
            function selectionPrint() {
                if (_selection == null) {
                    print("selection cleared\n");
                }
                else {
                    print(((_selection.itemname).split("#"))[2] + ": selected\n");
                }
            }
         
            function selectionIsSet() {
                return _selection != null;
            }
         
            function selectionSet(newSelection) {
                if (newSelection == _selection) {
                    return;
                }
         
                if (_selection != null) {
                    if (_selection.type != "marker") {
                        _selection.setEditable(false);
                    };
                    _selection = null;
                    hideNameInput();
                }
         
                if (newSelection != null) {
                    var temp_arr = (newSelection.itemname).split("#");
                    _selection = newSelection;
                    if (_selection.type != "marker") {
                        _selection.setEditable(true);
                        document.getElementById("colourPicker").value = _selection.strokeColor;
                        document.getElementById("thicknessPicker").value = _selection.strokeWeight;
                        $("#thicknessPicker").css("border-width", thicknessPicker.value +"px");                    
                    }

                    shapeType.value = _selection.zonetype;
                    shapeTypeName.value = _selection.zonename;
                    shapeCountryName.value = temp_arr[0];
                    shapeRegionName.value = temp_arr[1];
                    shapeZoneName.value = temp_arr[2];
                    enableThis("shapeType");
                    enableThis("shapeTypeName");
                    enableThis("shapeCountryName");
                    enableThis("shapeRegionName");
                    enableThis("shapeZoneName");

                    shape = _selection;
                    showNameInput("0");
                }
         
                selectionPrint();
            }
         
            function selectionClear() {
                selectionSet(null);
            }
         
            function selectionDelete() {
                if (_selection != null) {
                    _selection.setMap(null);
                    selectionClear();
                }
            }
     
        // New shape integration
            function newShapeAddPathListeners(shape, path) {
                google.maps.event.addListener(
                    path, 
                    'insert_at', 
                    function() {onShapeEdited(shape)});
                google.maps.event.addListener(
                    path, 
                    'remove_at',
                    function() {onShapeEdited(shape)});
                google.maps.event.addListener(
                    path, 
                    'set_at',
                    function() {onShapeEdited(shape)});
            }
         
            function newShapeAddListeners(shape) {
                google.maps.event.addListener(
                    shape, 
                    'click', 
                    function() {
                        onShapeClicked(shape);
                    });
         
                switch (shape.type) {
                case RECTANGLE:
                    google.maps.event.addListener(
                        shape, 
                        'bounds_changed', 
                        function() {onShapeEdited(shape);});
                    break;
         
                case CIRCLE:
                    google.maps.event.addListener(
                        shape,
                        'center_changed',
                        function() {onShapeEdited(shape);});
                    google.maps.event.addListener(
                        shape,
                        'radius_changed',
                        function() {onShapeEdited(shape);});
                    break;
         
                case POLYLINE:
                    var path = shape.getPath();
                    newShapeAddPathListeners(shape, path);
                    break;
         
                case POLYGON:
                    var paths = shape.getPaths();
         
                    var n = paths.getLength();
                    for (var i = 0; i < n; i++) {
                        var path = paths.getAt(i);
                        newShapeAddPathListeners(shape, path);
                    }
                    break;

                case MARKER:
                    google.maps.event.addListener(
                        shape,
                        'dragend',
                        function() {onMarkerDragged(shape);});
                    break;
                }
            }
         
            function newShapeSetProperties(shape, type) {
                shape.type = type;
            }
     
        // Map creation
            function createMap(mapContainer) {
                // Creates base map
                    document.getElementById("map_embed").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCrkmmU2-WAAlfWghYpeEcwAy4zTT5h63c&q=" + base_location.value;

                // Creates overlay map
                    if (chosenMapType == "roadmap") {
                        mapOptions = {
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            zoomControl: true,
                            mapTypeControl: false,
                            scaleControl: true,
                            streetViewControl: true,
                            rotateControl: false,
                            fullscreenControl: true,
                            zoom: chosenZoom,
                            styles: chosenStyles
                        };
                    } else if (chosenMapType == "satellite") {
                        mapOptions = {
                            mapTypeId: google.maps.MapTypeId.SATELLITE,
                            zoomControl: true,
                            mapTypeControl: false,
                            scaleControl: true,
                            streetViewControl: true,
                            rotateControl: false,
                            fullscreenControl: true,
                            zoom: chosenZoom,
                            styles: chosenStyles
                        };
                    } else if (chosenMapType == "hybrid") {
                        mapOptions = {
                            mapTypeId: google.maps.MapTypeId.HYBRID,
                            zoomControl: true,
                            mapTypeControl: false,
                            scaleControl: true,
                            streetViewControl: true,
                            rotateControl: false,
                            fullscreenControl: true,
                            zoom: chosenZoom,
                            styles: chosenStyles
                        };
                    } else if (chosenMapType == "terrain") {
                        mapOptions = {
                            mapTypeId: google.maps.MapTypeId.TERRAIN,
                            zoomControl: true,
                            mapTypeControl: false,
                            scaleControl: true,
                            streetViewControl: true,
                            rotateControl: false,
                            fullscreenControl: true,
                            zoom: chosenZoom,
                            styles: chosenStyles
                        };
                    }

                    map = new google.maps.Map(mapContainer, mapOptions);

                    var geocoder = new google.maps.Geocoder();
                  
                    function geocodeAddress(geocoder, resultsMap) {
                        geocoder.geocode({'address': base_location.value}, function(results, status) {
                            if (status === 'OK') {
                                resultsMap.setCenter(results[0].geometry.location);
                                search_marker = new google.maps.Marker({
                                    map: resultsMap,
                                    position: results[0].geometry.location,
                                    title: results[0].formatted_address
                                });
                            } else {
                                alert('Geocode was not successful for the following reason: ' + status);
                            }
                        });
                    }
                    geocodeAddress(geocoder, map);
                    google.maps.event.addListener(map, 'click', onMapClicked);

                return map;
            }
     
        // Drawing manager creation
            function drawingManagerCreate() {
                // Create drawing manager
                    var drawingModes = new Array(
                        RECTANGLE, CIRCLE, POLYGON, POLYLINE, MARKER);
             
                    var drawingControlOptions = {
                        drawingModes: drawingModes,
                        position: google.maps.ControlPosition.TOP_LEFT
                    };
             
                    var polyOptions = {
                        fillColor: colourPicker.value,
                        fillOpacity: overlayOpacity,
                        strokeColor: colourPicker.value,
                        strokeWeight: borderThickness,
                        strokeOpacity: 1,
                        editable: true
                    };

                    var image = {
                        url: files[0],
                        // This marker is 20 pixels wide by 20 pixels high.
                        size: new google.maps.Size(20, 20),
                        scaledSize: new google.maps.Size(20, 20),
                        // The origin for this image is (0, 0).
                        origin: new google.maps.Point(0, 0),
                        // The anchor for this image is the base of the flagpole at (12, 12).
                        anchor: new google.maps.Point(12, 12)
                    };

                    drawingManagerOptions = {
                        drawingMode: null,
                        drawingControlOptions: drawingControlOptions,
                        markerOptions: { draggable: true, icon: image },
                        polylineOptions: { editable: true },
                        rectangleOptions: polyOptions,
                        circleOptions: polyOptions,
                        polygonOptions: polyOptions,
                        map: _map
                    };
             
                    drawingManager = new google.maps.drawing.DrawingManager(drawingManagerOptions);
         
                // Tie events to map
                    google.maps.event.addListener(
                        drawingManager, 
                        'overlaycomplete', 
                        onNewShape);
                    google.maps.event.addListener(
                        drawingManager, 
                        'drawingmode_changed',
                        onDrawingModeChanged);
         
                // Initial message box printing
                    printDrawingMode(drawingManager); 
                    selectionPrint();
         
                return drawingManager;
            }
     
        // Events
            $("#thicknessPicker").change(function() {
              shapesSave();
            });

            $("#colourPicker").change(function() {
              shapesSave();
            });

            $(".icons").click(function() {
                shapesSave();
            });

            $("#close_shape_properties").click(function(e) {
                if (shapeCountryName.value != "" && shapeRegionName.value != "" && shapeZoneName.value != "" && shapeType.value != "0" && shapeTypeName.value != "") {
                    var nameToWrite = shapeCountryName.value + "#" + shapeRegionName.value + "#" + shapeZoneName.value;
                    if (newShapeCreateTracker == 1) {
                        shape.itemname= nameToWrite;
                        shape.zonename = shapeTypeName.value;
                        shape.zonetype = shapeType.value;
                        newShapeSetProperties(shape, globalEvent.type);
                        newShapeAddListeners(shape);
                        shapesAdd(shape);
                        shapesSave();
                        selectionSet(shape);
                        print("new " + typeDesc(globalEvent.type) + " created ("
                              + shapeZoneName.value + ")\n");
                    } else {
                        shape.itemname= nameToWrite;
                        shapesSave();
                        selectionSet(shape);
                    }
                    hideNameInput();
                    newShapeCreateTracker = 0;
                } else {
                    alert ("Please fill in all fields.");
                }
            });

            $(".hiddenTypesList").click(function() {
                if (chosenMapType == "roadmap") {
                    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                } else if (chosenMapType == "satellite") {
                    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                } else if (chosenMapType == "hybrid") {
                    map.setMapTypeId(google.maps.MapTypeId.HYBRID);
                } else if (chosenMapType == "terrain") {
                    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                }
            });

            $(".hiddenStylesList").click(function() {
                var mapOptions = {
                    styles: chosenStyles 
                };
                map.setOptions(mapOptions);
            });

            function onNewShape(event) {
                newShapeCreateTracker = 1;
                globalEvent = event;
                shape = event.overlay;
                showNameInput("1");
                shape.fillColor = colourPicker.value;
                shape.strokeColor = colourPicker.value;
                shape.strokeWeight = thicknessPicker.value;
            }
         
            function onShapeEdited(shape) {
                print(((shape.itemname).split("#"))[2] + ": shape edited\n");
                shapesSave();
            }
         
            function onShapeClicked(shape) {
                print(((shape.itemname).split("#"))[2] + ": shape clicked\n");
                selectionSet(shape);
                closeIconOptions();
            }

            function onMarkerDragged(shape) {
                print(((shape.itemname).split("#"))[2] + ": marker dragged\n");
                shapesSave();
                closeIconOptions();
            }

            function onMapClicked() {
                print("map clicked\n");
                selectionClear();
                closeIconOptions();
            }
         
            function onDeleteButtonClicked() {
                print("delete button clicked\n");
         
                if (selectionIsSet()) {
                    shapesDelete(_selection);
                    shapesSave();
                    selectionDelete();
                }
                closeIconOptions();
            }
         
            function onClearButtonClicked() {
                print("clear button clicked\n");
         
                selectionClear();
                shapesHideAll();
                shapesDeleteAll();
                shapesSave();
                closeIconOptions();
            }

            function onDrawingModeChanged() {
                closeIconOptions();
                if (drawingManager.drawingMode == "marker") {
                    openIconOptions();
                } else {
                    clickToggle("");
                }
                printDrawingMode(drawingManager); 
                selectionClear();
            }
         
            function onCreate() {
                _map = createMap(_mapContainer);
                _drawingManager = drawingManagerCreate(_map);
                
                google.maps.event.addDomListener(
                    _deleteButton, 
                    'click', 
                    onDeleteButtonClicked);
                google.maps.event.addDomListener(
                    _clearButton, 
                    'click', 
                    onClearButtonClicked);

                google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
                    //this part runs when the mapobject is created and rendered
                    initialReplaceIconPic();
                    populateDropbox();
                    initialisePassedVars();
                    $("body").click(function(event) {
                        mouseX = event.clientX;
                        mouseY = event.clientY;
                    });

                    google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
                        //this part runs when the mapobject is shown for the first time
                        for (var a=0; a<_shapes.length; a++) {
                            var sh = _shapes[a];
                            google.maps.event.addListener(sh,'mouseover',function(){
                                 this.getMap().getDiv().setAttribute('title',this.get('title'));
                             });

                            google.maps.event.addListener(sh,'mouseout',function(){
                                 this.getMap().getDiv().removeAttribute('title');
                             });
                        };
                     });
                });
                
                shapesLoad();
            }
     
        // Initialisation
            onCreate();
    }
