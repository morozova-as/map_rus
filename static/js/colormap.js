export default function cmap(valcnt, cyclelen = null, s = 100, l = 50, stepsize=1) {
    if (cyclelen == null)
        cyclelen = valcnt;
    var cm = new Array(valcnt);
    /* Deliberately exclude the endpoint because it's cyclic. */
	if (cyclelen <= 2)
		var step = 360;
	else
    	var step = 360. / (cyclelen - 1);
    for (var i = 0; i < valcnt * stepsize; i += stepsize) {
        let h = Math.round((i % cyclelen) * step);
        // Use this if you want hsl values:
        //cm[i] = 'hsl(' + h + ',' + s + '%,' + l + '%)';
        // Use this if you want rgb values:
        let rgb = hslToRgb(h / 360., s / 100., l / 100.);
        cm[i] = 'rgb(' + Math.round(rgb[0]) + ',' +
            Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ')';
    }
    return cm;
}