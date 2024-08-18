const xhr = new XMLHttpRequest();
xhr.open('get','http://api.openweathermap.org/data/2.5/forecast?id=7280291&appid=441d1e6a6de22a5b43d0cb54f643611b&lang=zh_tw&units=metric',true);
xhr.send();