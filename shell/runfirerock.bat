@echo off
cd %FR_ENG_HOME%
pipenv run firerock %1 -m --hours 13 14 17 --minutes * * * -v
rem pipenv run firerock %1 -v