mongo 127.0.0.1/firestone --eval "db.dropDatabase(); db.getCollection('hot_concept').drop(); db.getSiblingDB('firestone');" "init.js" 
mongoimport -d firestone -c codes "codes.json"
mongoimport -d firestone -c concepts "concepts.json" 
mongo 127.0.0.1/firestone-data --eval "db.getCollectionNames().forEach(function(c) { if (c.indexOf('system.') == -1) db[c].drop(); })" && exit