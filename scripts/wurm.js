/** @param {NS} ns */
export async function main(ns) {
	//list all targets available to the perespective of this server
	const targets = ns.scan();
	for (const target of targets) {
		//update the local copy of wurm
		if (target != "home") {
			await ns.scp('wurm.js', target);
			await ns.scp('beans.js', target);
			await ns.scp('boof.js', target);
			if (ns.fileExists("BruteSSH.exe", "home")) {
				ns.brutessh(target);
			}
			if (ns.fileExists("FTPCrack.exe", "home")) {
				ns.ftpcrack(target);
			}
			if (ns.getServerNumPortsRequired(target) <= 2) {
				ns.nuke(target);
			}
			
		}
	}
}