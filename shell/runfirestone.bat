@echo off
cd %FR_ENG_HOME%
pipenv run firestone 000000 --hours 13 14 17 --minutes * * * -v --md
rem pipenv run firestone 000000 -v --md