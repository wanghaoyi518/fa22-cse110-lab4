let statistics = {
    reaCars: 21,
    blueCars: 45,
    greenCars:12,
    raceCars:5,
    blackcars:40,
    rarecars:2
};

for (const property in statistics) {
    if(property[0]=='r' || statistics[property]%2==1)
        console.log(statistics[property]);
}
