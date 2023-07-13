
axios({
    url:"https://62f8b7673eab3503d1da1710.mockapi.io/sv",
    method:"GET",

})

    .then(function(res)
    {
        console.log(res.data);

        dssv = res.data;
        console.log("data:",dssv);
    })
    .catch(function(err)
    {
        console.log(err);
            
    });