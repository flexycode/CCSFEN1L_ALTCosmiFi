# Define co-authors' names and emails
$COAUTHOR_1_NAME = "Jay Arre Talosig"
$COAUTHOR_1_EMAIL = "flexycode.dev@gmail.com"

$COAUTHOR_2_NAME = "Jay"
$COAUTHOR_2_EMAIL = "flexyledger@gmail.com"

$COAUTHOR_3_NAME = "Flexy Zephyrus"
$COAUTHOR_3_EMAIL = "flexyzephyrus@gmail.com"

# Loop to create and merge pull requests 10 times
for ($i = 1; $i -le 10; $i++) {
    Write-Host "Processing change #$i..."

    # Make a change in the dev branch
    Add-Content -Path .envexample -Value "NEW_ENV_VARIABLE='value_$i'"

    # Stick changes to git
    git add .envexample

    # Commit with multiple co-authors
    $commitMessage = @"
Update .envexample for change #$i.

Co-authored-by: $COAUTHOR_1_NAME <$COAUTHOR_1_EMAIL>
Co-authored-by: $COAUTHOR_2_NAME <$COAUTHOR_2_EMAIL>
Co-authored-by: $COAUTHOR_3_NAME <$COAUTHOR_3_EMAIL>
"@
    git commit -m $commitMessage

    # Push changes to the dev branch
    git push origin dev

    # Create a pull request from dev to main using GitHub CLI
    $title = "Merge dev to main for change #$i"
    $body = "Merging changes from dev to main for change #$i."
    
    # Capture the output to get the PR URL/Number if needed, or just let it print
    gh pr create --base main --head dev --title $title --body $body

    # Slight delay to ensure GitHub processes the PR creation
    Start-Sleep -Seconds 2

    # Merge the pull request (assumes specific PR lookup isn't needed if we trust the order, but --auto merge is safer if supported)
    # Alternatively, use 'gh pr merge --merge --auto' if you want it to wait for checks.
    # Here we just merge the current branch's PR context or finding it via head.
    
    # More robust: Get the PR number for the dev branch
    $prNumber = gh pr list --head dev --json number --jq '.[0].number'
    
    if ($prNumber) {
        Write-Host "Merging PR #$prNumber"
        gh pr merge $prNumber --merge --delete-branch=false
        Write-Host "Merged pull request #$prNumber"
    } else {
        Write-Host "Error: Could not find PR number for dev branch."
    }

    # Optional: Wait for a short period to ensure timing
    $sleepDuration = Get-Random -Minimum 1 -Maximum 4
    Write-Host "Sleeping for $sleepDuration seconds..."
    Start-Sleep -Seconds $sleepDuration
}
