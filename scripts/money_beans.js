/** @param {NS} ns */
export async function main(ns) {
	let targets = [
		"n00dles",
		"foodnstuff",
		"joesguns",
		"hong-fang-tea",
		"harakiri-sushi"
	];
	while (true) {
		for (const t of targets) {
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

		}
	}
}