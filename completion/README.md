# Completion for gargle
> Thanks to gulp team
> Thanks to grunt team and Tyler Kellen

To enable tasks auto-completion in shell you should add `eval "$(gargle --completion=shell)"` in your `.shellrc` file.

## Bash

Add `eval "$(gargle --completion=bash)"` to `~/.bashrc`.

## Zsh

Add `eval "$(gargle --completion=zsh)"` to `~/.zshrc`.

## Powershell

Add `Invoke-Expression ((gargle --completion=powershell) -join [System.Environment]::NewLine)` to `$PROFILE`.

## Fish

Add `gargle --completion=fish | source` to `~/.config/fish/config.fish`.
