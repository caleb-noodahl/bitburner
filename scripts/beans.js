/** @param {NS} ns */
export async function main(ns) {
	while(true){ 
		await wiggle(ns, ns.getHostname());
	}
}

export async function wiggle(ns, t) {
	try {
		const money = ns.getServerMaxMoney(t) * 0.75;
		const sec = ns.getServerMinSecurityLevel(t) + 5;

		if (ns.getServerMinSecurityLevel(t) > sec) {
			await ns.weaken(t);
		}

		if (ns.getServerMoneyAvailable(t) < money) {
			await ns.grow(t);
		} else {
			await ns.hack(t);
		}
	} catch (error) {
		ns.print(error);
	}

}