mongo 127.0.0.1/firestone --eval "db.dropDatabase(); db.getSiblingDB('firestone');" "init.js" 
mongoimport -d firestone -c codes "codes.json"
mongoimport -d firestone -c concepts "concepts.json" && exit