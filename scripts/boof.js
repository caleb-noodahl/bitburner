/** @param {NS} ns */
export async function main(ns) {
	const targets = ns.scan();
	for (const target of targets) {
		if (ns.scriptRunning('beans.js', target)) {
			ns.scriptKill('beans.js', target);
		}
		if(ns.hasRootAccess(target) && target != "home" && !target.includes("bakery")) {
			let ram = Math.round((ns.getServerMaxRam(target) - ns.getServerUsedRam(target)) / ns.getScriptRam('beans.js', target)) -1
			if (ram <= 0) {
				ram = 1;
			}
			ns.exec('beans.js', target, ram);
		}
	}
}