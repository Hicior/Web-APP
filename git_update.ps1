# Zmienna z wiadomością commit
$commit_message = "Auto-update"

# Log: Rozpoczęcie procesu
Write-Host "Starting Git auto-update process..."

# Log: Dodanie wszystkich zmian
Write-Host "Staging changes..."
git add .

# Sprawdzanie, czy są zmiany do commitowania
$changes = git diff-index --quiet HEAD --

if ($LASTEXITCODE -eq 1) {
    # Log: Komitowanie zmian
    Write-Host "Committing changes with message: $commit_message"
    git commit -m $commit_message
} else {
    # Log: Brak zmian
    Write-Host "No changes to commit."
}

# Log: Wypychanie zmian na zdalne repozytorium
Write-Host "Pushing changes to remote repository..."
git push origin main

# Log: Proces zakończony
Write-Host "Git auto-update process completed."