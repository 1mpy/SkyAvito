function parseJwt(token) {
    let jsonPayload;

    try {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        jsonPayload = JSON.parse(jsonPayload);
    }
    catch (e) {
        jsonPayload = {};
    }

    return jsonPayload;
}


export function isExpired(token){
    if(!token) return true;
    const tokenObject = parseJwt(token);
    const current = Date.now();
    return (tokenObject?.exp*1000 || 0) < current;
}