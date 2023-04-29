// converts array of strings to space seperated long string.

export default function arrayToLongString(arr: Array<string>) {
	let longString = "";
	arr.forEach((element) => {
		longString += element + " ";
	});
	return longString;
}
