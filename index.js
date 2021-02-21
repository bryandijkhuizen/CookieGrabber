function cookiegrabber(options){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${options.name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

module.exports.cookiegrabber = cookiegrabber;