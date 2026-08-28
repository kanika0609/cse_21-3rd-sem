async function test() {
    console.log("This is asynchronous function and we want to use fetch() in console");

    const response = await fetch("./student.json");
    console.log(response.status);

    const std = await response.json();

    console.log("Finally data fetched");

    return std;
}

test()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });