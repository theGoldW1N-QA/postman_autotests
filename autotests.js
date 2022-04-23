// autotest for method https://swapi.dev/api/people/10
pm.test("Yes! It's Obi-Wan", function () {
    pm.expect(pm.response.text()).to.include("Obi-Wan Kenobi");
});

// autotest for method https://swapi.dev/api/planets/7
pm.test("Wow! It's pretty fast. Response time is less than 100ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(100);
});

// autotest for method https://swapi.dev/api/starships/5
pm.test("Status code is 200", function(){
    pm.expect(pm.response.code).to.be.oneOf([201,203,300]);
})

// autotest for method https://api.chucknorris.io/jokes/search?query=roman
pm.test("It contains 'Roman' word", function () {
    pm.expect(pm.response.text()).to.include("Roman");
});


//autotest for method https://api.hh.ru/educational_institutions?id=39108
pm.test("Status code is not 500", function () {
    pm.response.to.not.status(500);
});