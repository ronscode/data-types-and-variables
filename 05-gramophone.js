/* 5. Gramophone
Write a ​function​ which as ​input​ will receive ​3 parameters​ (strings)
● First string​ is the name of the ​band
● Second string​ is the name of the ​album
● The third​ is holding a ​song​ name from the album
You have to find out how many ​times​ the plate will ​rotate​ the given song from the album. The plate makes a full rotation every ​2.5​ seconds.
The song ​duration in seconds​ is calculate by the given formula:
(albumName.length * bandName.length) * songName.length / 2 As ​output​ you should print the following message:
​"The plate was rotated {rotations} times." Rotations should be ​rounded up​. */

function gramophone(bandName, albumName, songName) {
	let time = (bandName.length * albumName.length * songName.length) / 2;
	let rotations = Math.ceil(time / 2.5);
	console.log(`The plate was rotated ${rotations} times.`);
}
gramophone("Black Sabbath", "Parinoid", "War Pigs");
