var theta1, theta2, theta3, theta4;
var theta = [];

function loadtheta() {
    readTextFile('../weights_mnist/theta1-0-ver7.txt');
    readTextFile("../weights_mnist/theta2-0-ver7.txt" );
    readTextFile("../weights_mnist/theta3-0-ver7.txt");
    readTextFile("../weights_mnist/theta4-0-ver7.txt");
}

function predict(x) {
    // # Compue Layer

    theta1 = []
    theta2 = theta[1]
    theta3 = theta[2]
    theta4 = theta[3]

    console.log(theta1)

    // theta1 = parseFloat(theta1);
    x = x.reshape(1, x.shape[0])
    one = nj.ones([1,x.shape[0]]);

    a1 = nj.concatenate(one,x)
    a2 = sigmoid(theta1, a1)
    // # Compute
    // Layer3
    // one2 = nj.ones(a2.shape[0])
    // one2 = nj.reshape(one2, (a2.shape[0], 1))
    // a2 = nj.concatenate((one2, a2), axis = 1)
    // a3 = sigmoid(theta2, a2)
    // // # Compute
    // // Layer4
    // one3 = nj.ones(a3.shape[0])
    // one3 = nj.reshape(one3, (a3.shape[0], 1))
    // a3 = nj.concatenate((one3, a3), axis = 1)
    // a4 = sigmoid(theta3, a3)
    // // # Compute
    // // Layer5
    // one4 = nj.ones(len(a4))
    // one4 = nj.reshape(one4, (len(a4), 1))
    // a4 = nj.concatenate((one4, a4), axis = 1)
    // a5 = sigmoid(theta4, a4)
    return a2
}


function sigmoid(theta, x) {
    return 1.0 / (1.0 + nj.exp(-nj.dot(x, theta.T)));
}

function readTextFile(filepath) {

    $.get(filepath, function (data) {
        // console.log(data)
        data = data.split(',')
        // theta = data.forEach(function (i, e) {
        //     e = parseFloat(e)
        // })
        theta.push(data)
    }, 'text')
}