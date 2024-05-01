javascript:
const dropdocBaseURL = "https://docdrop.org/video";
const url = new URL(location.href);

switch (url.host) {
    case "youtu.be":
        location.href = `${dropdocBaseURL}${url.pathname}`;
        break;
    case "m.youtube.com":
    case "www.youtube.com":
        location.href = `${dropdocBaseURL}/${url.searchParams.get("v")}`;
        break;
    default:
        alert("Not a recognized Youtube URL");
}
