module.exports = {
    name: 'patrol',
    description: 'Happy happy description time.',
    guildOnly: true,
    args: true,
    usage: '[solo or group]',
    execute(message, args) {
        const {MessageEmbed} = require("discord.js");

        const embed = new MessageEmbed()
            .setColor("#17a554")
            .setTitle("Priority message from Paladin Rahmani");
 
        const fs = require("fs");
        const patrolData = fs.readFileSync("./includes/patrol.json");

        var patrolParsed = JSON.parse(patrolData);

        var soloLocations = patrolParsed.locations.filter(function (location) { //TODO - refactor to a single reusable function
            return location.isSolo;
        });

        var scopeLocations = patrolParsed.locations.filter(function (location) { //TODO - SAME
            return location.isScope;
        });

        var munitionsLocations = patrolParsed.locations.filter(function (location) { //TODO - SAME
            return location.isMunitions;
        });

        var atlasObservationLocations = patrolParsed.locations.filter(function (location) { //TODO - SAME
            return location.isAtlasObservation;
        });

        var feedPeopleLocations = patrolParsed.locations.filter(function (location) { //TODO - SAME
            return location.isFeedPeople;
        });

        var patrolFutureLocations = patrolParsed.locations.filter(function (location) { //TODO - SAME
            return location.isPatrolFuture;
        });

        var containmentLocations = patrolParsed.locations.filter(function (location) { //TODO - SAME
            return location.isContainment;
        });

        var friendlyRxLocations = patrolParsed.locations.filter(function (location) { //TODO - SAME
            return location.isFriendlyRx;
        });

        var patrolTypes = patrolParsed.types.filter(function (type) { //TODO - SAME
            return type.type;
        });

        function randomize(arr) {
            var min = 0;
            var max = (arr.length - 1);
            var randIndex = Math.floor(Math.random() * (max - min)) + min;
            return arr[randIndex];
        };

        if (args[0] === "solo") {
            let index = randomize(soloLocations);
            const stringLocation = index.location + " in " + index.zone;

            embed.setDescription("Paladin Rahmani has tasked you with searching for usable supplies at a location.");
            embed.addFields({name: "Location", value: stringLocation});

            return message.channel.send(embed);
        };

        if (args[0] === "group") {
            let typeIndex = randomize(patrolTypes);

            if (typeIndex.id === "1" ||
                typeIndex.id === "2" ||
                typeIndex.id === "3" ||
                typeIndex.id === "5" ||
                typeIndex.id === "6" ||
                typeIndex.id === "11" ||
                typeIndex.id === "14" ||
                typeIndex.id === "16") {
                let locationIndex = randomize(soloLocations);

                const stringLocation = locationIndex.location + " in " + locationIndex.zone;

                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Location", value: stringLocation}
                );

                return message.channel.send(embed);
            };
            if (typeIndex.id === "4") {
                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type}
                );

                return message.channel.send(embed);
            };
            if (typeIndex.id === "7") {
                let locationIndex = randomize(scopeLocations);

                const stringLocation = locationIndex.location + " in " + locationIndex.zone;

                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Location", value: stringLocation}
                );

                return message.channel.send(embed);
            };
            if (typeIndex.id === "8") {
                let locationIndex = randomize(munitionsLocations);

                const stringLocation = locationIndex.location + " in " + locationIndex.zone;

                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Location", value: stringLocation}
                );

                return message.channel.send(embed);
            };
            if (typeIndex.id === "9") {
                let locationIndex = randomize(atlasObservationLocations);

                const stringLocation = locationIndex.location + " in " + locationIndex.zone;

                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Location", value: stringLocation}
                );

                return message.channel.send(embed);
            };
            if (typeIndex.id === "10") {
                let locationIndex = randomize(feedPeopleLocations);

                const stringLocation = locationIndex.location + " in " + locationIndex.zone;

                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Location", value: stringLocation}
                );

                return message.channel.send(embed);
            };
            if (typeIndex.id === "12") {
                let locationIndex = randomize(patrolFutureLocations);

                const stringLocation = locationIndex.location + " in " + locationIndex.zone;

                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Location", value: stringLocation}
                );

                return message.channel.send(embed);
            };
            if (typeIndex.id === "13") {
                let locationIndex = randomize(containmentLocations);

                const stringLocation = locationIndex.location + " in " + locationIndex.zone;

                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Location", value: stringLocation}
                );

                return message.channel.send(embed);
            };
            if (typeIndex.id === "15") {
                let locationIndex = randomize(friendlyRxLocations);

                const stringLocation = locationIndex.location + " in " + locationIndex.zone;

                embed.setDescription(typeIndex.description);
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Location", value: stringLocation}
                );

                return message.channel.send(embed);
            };
        };
    },
};