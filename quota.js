function checkQuota(r) {
    if (!r.variables.counter) {
        r.error("NEW COUNTER");
	r.variables.backend = r.variables.server_addr;
        r.return(204);
    } else if (r.variables.counter < r.variables.quota) {
        r.error("QUOTA PASS");
        r.return(204);
    } else {
        r.error("QUOTA EXCEEDED");
        r.return(403);
    }
}
function incrementQuota(r) {
    if (!r.variables.counter) {
        r.variables.counter = 1;
        r.error("CREATING");
    } else {
        r.variables.counter++;
        r.error("INCREMENTING");
    }
    r.error("COUNTER = " + r.variables.counter);
    r.return(204);
}

export default {checkQuota, incrementQuota}
