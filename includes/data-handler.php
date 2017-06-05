<!DOCTYPE html>
<html>
    <head>
        <script src="//code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    </head>
    <body>
        <?php
            $myFile = "data.json";
            try {
                //Get form data
                    $formdata = $_POST['dataToSubmit'];
                // Write json data into data.json file if there is any data to save
                    if ($formdata != "") {
                        if(file_put_contents($myFile, $formdata)) {
                            echo 'Data successfully saved';
                        } else {
                            echo "error"; echo "<br>";
                        }
                    } else {
                        echo "Nothing to save"; echo "<br>";
                    }
                // Create an invisible form with the data passed
                    echo "<form id='location_form' action='../index.php' method='post' enctype='multipart/form-data' name='location_form' style='display:none'>
                    <input style='display: none' type='text' name='locationToSubmit' id='locationToSubmit' value='" . $_POST['lastSearch'] . "'/>
                    <input style='display: none' type='text' name='mapTypeToSubmit' id='mapTypeToSubmit' value='" . $_POST['chosenMapType'] . "'/>
                    <input style='display: none' type='text' name='mapStyleToSubmit' id='mapStyleToSubmit' value='" . $_POST['chosenStyle'] . "'/>
                    <input style='display: none' type='text' name='mapOverlayToSubmit' id='mapOverlayToSubmit' value='" . $_POST['chosenOverlay'] . "'/>
                    </form>";
            }
            catch (Exception $e) {
                echo 'Caught exception: ',  $e->getMessage(), "\n";
            }

            echo "<script>document.location_form.submit();</script>";
        ?>
  </body>
</html>