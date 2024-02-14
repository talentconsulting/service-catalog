function Mappings() {
    this.pillars = {
        "Architecture": [
            "Enterprise Architecture",
            "Solution Architecture",
            "Technology Planning and Resourcing",
            "Application Architecture"
        ],
        "Data Engineering": [
            "Data Architecture"            
        ],
        "Delivery": [
            "Analysis",
            "Delivery"
        ],
        "Cloud and infrastructure": [
            "Dev-ops",
            "Sec-ops"
        ]
    };

    this.getTeams = () => {
        let teams = [];

        Object.keys(this.pillars).forEach((k) => {
            this.pillars[k].forEach(t => {
                teams.push({ name: t, pillar: k});
            });

        })

        return teams;
    }

    this.getDistinctTeams = () => {
        let teams = [];

        Object.keys(this.pillars).forEach((k) => {
            this.pillars[k].forEach(t => {
                teams.push(t);
            });
        })

        return teams;
    }

    this.getPillars = () => {
        return this.pillars;
    }

    this.isTeamInPillar = (pillar, team) => {
        if (!this.pillars[pillar]) {
            return false;
        }

        return this.pillars[pillar].includes(team);
    }
}


module.exports = new Mappings();
