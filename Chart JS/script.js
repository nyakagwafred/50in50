
let ctxOne = document.getElementById('myChart-one').getContext('2d');

//Generate five random numbers
const generateFiveRandomNums = (max) => {
	let arr = [];
	for (let index = 0; index < 5; index++) {
		arr.push(Math.round(Math.random() * max));
	}
	return arr;
};

const getTime = () => {
    const date = new Date().toLocaleString('es-CO', { timeZone: 'UTC' })
    return date
}


/********CREATE CHAT ONE*********/

const createChatOne =() => {
    let myChartOne = new Chart(ctxOne, {
        type: 'radar',
        data: {
            labels: ['ODM', 'ODM-Kenya', 'Jubilee', 'Fork-K', 'Ford-Asili', 'Wiper'],
            datasets: [{
                label: '',
                data: generateFiveRandomNums(35),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            },
            title: {
                display: true,
                text: `Voting as ${getTime()}`
            }
        }
    });
    
}

//Intervals
//let chatInterval = setInterval(createChatOne, 2000)

createChatOne()

/********END CHAT ONE*********/
/********************CHART TWO  */
let ctxtwo = document.getElementById('myChart-two').getContext('2d');
let myChartTwo = new Chart(ctxtwo, {
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 100)',
            borderColor: 'rgb(99, 99, 132)',
            data: [0, 10, 25, 2, 20, 30, 19]
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            duration: 1000,
            easing: 'easeInElastic'

        },
        legend: {
            display: true
        }
    }
});