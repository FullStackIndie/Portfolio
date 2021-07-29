Import-Module -Name ServerManager
$appPool = "Portfolio"

Write-Host "Starting $appPool"
Start-WebAppPool -Name $appPool

Write-Host "Resetting IIS"
& iisreset /start