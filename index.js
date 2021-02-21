function getCookie(options){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${options.name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(options){
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*options.days);
    document.cookie = options.name + "=" + options.value + ";path=/;expires=" + d.toGMTString();
}

module.exports.cookiegrabber = cookiegrabber;