//your JS code here. If required.
const output = document.getElementById('output');

function myPromise() {
	let arr = [1,2,3,4];
	return new Promise((resolve) => {
		let oddNums = arr.filter((num) => num%2==1);
		let doubledEven = [];
		for(let el of arr) {
			if(el%2==0) {
				doubledEven.push(el*2);
			}
		}
		setTimeout(() => resolve([oddNums, doubledEven]), 3000);
	})
}

myPromise()
.then((res) => {
	setTimeout(() => {
		console.log("res", res);
		output.innerText = res[0];
		nextStep(res);
	}, 1000);
})
// .then((finalRes) => {
// 	setTimeout(() => {
// 		console.log("finalRes". finalRes);
// 	}, 2000)
// })
function nextStep(res) {
	console.log("res", res);
	setTimeout(() => {
		output.innerText = res[1];
		nextStep(res);
	}, 2000);
}
