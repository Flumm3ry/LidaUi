$jarFileName = "swagger-codegen-cli.jar"
$swaggerUrl = "swagger.json"
$outputDirectory = "swaggerOutput"
$ouputLanguage = "typescript-axios"
$version = "3.0.25" # This powershell has only been tested with 3.x versions

Write-Host "Starting process..."

# Download the jar file if it does not exist
if (-Not (Test-Path -path $jarFileName)) {
  Write-Host "Downloading jar file..."
  Invoke-WebRequest -OutFile $jarFileName "https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/$version/swagger-codegen-cli-$version.jar"
  Write-Host "Jar file download completed"
}
else {
  Write-Host "Jar file found, skipping download..."
}

Write-Host "Updating files to $outputDirectory"
java -jar $jarFileName generate -i $swaggerUrl -l $ouputLanguage -o $outputDirectory --verbose=false
Write-Host "Moving files..."
New-Item -ItemType Directory -Force -Path ..\src\data\api

Move-Item -Force -Path .\swaggerOutput\*.ts -Destination ..\src\data\api
Copy-Item -Force -Recurse -Path .\swaggerOutput\apis -Destination ..\src\data\api
Copy-Item -Force -Recurse -Path .\swaggerOutput\models -Destination ..\src\data\api


Read-Host -Prompt "Press any key to continue"
