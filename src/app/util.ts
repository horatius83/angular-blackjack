/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
export function shuffle(items: any[]) {
    if(items.length == 0) {
        return;
    }
    for (var i = items.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }
}