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
            .setTitle("Priority message from Paladin Rahmani!")
            .setURL("https://www.worldanvil.com/w/bos3A-operation-hope4future-head-librarian-carlson/a/patrol-system-article")
            .attachFiles(['./includes/patrol.png'])
            .setThumbnail("attachment://patrol.png")
            .setFooter ("© Brotherhood of Steel: Operation hOpe4FUTURE");

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
            var randIndex = Math.floor(Math.random() * arr.length);
            return arr[randIndex];
        };

        if (args[0] === "solo") {
            let index = randomize(soloLocations);

            embed.setDescription("\u201cThe Brotherhood of Steel needs you to search for usable supplies at this location.\u201d");
            embed.addFields({name: "Location", value: index.location + " in " + index.zone});

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
                typeIndex.id === "12" ||
                typeIndex.id === "14" ||
                typeIndex.id === "16" ||
                typeIndex.id === "17" ||
                typeIndex.id === "18") {
                let locationIndex = randomize(soloLocations);

                embed.setDescription("\u201c" + typeIndex.icly + "\u201c");
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type, inline: true},
                    {name: "Location", value: locationIndex.location + " in " + locationIndex.zone, inline: true},
                    {name: "Additional information", value: typeIndex.description}
                );

                return message.channel.send(embed);
            };

            if (typeIndex.id === "4") {
                embed.setDescription("\u201c" + typeIndex.icly + "\u201c");
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type},
                    {name: "Additional information", value: typeIndex.description}
                );

                return message.channel.send(embed);
            };

            if (typeIndex.id === "7") {
                let locationIndex = randomize(scopeLocations);

                embed.setDescription("\u201c" + typeIndex.icly + "\u201c");
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type, inline: true},
                    {name: "Location", value: locationIndex.location + " in " + locationIndex.zone, inline: true},
                    {name: "Additional information", value: typeIndex.description}
                );

                return message.channel.send(embed);
            };

            if (typeIndex.id === "8") {
                let locationIndex = randomize(munitionsLocations);

                embed.setDescription("\u201c" + typeIndex.icly + "\u201c");
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type, inline: true},
                    {name: "Location", value: locationIndex.location + " in " + locationIndex.zone, inline: true},
                    {name: "Additional information", value: typeIndex.description}
                );

                return message.channel.send(embed);
            };

            if (typeIndex.id === "9") {
                let locationIndex = randomize(atlasObservationLocations);

                embed.setDescription("\u201c" + typeIndex.icly + "\u201c");
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type, inline: true},
                    {name: "Location", value: locationIndex.location + " in " + locationIndex.zone, inline: true},
                    {name: "Additional information", value: typeIndex.description}
                );

                return message.channel.send(embed);
            };

            if (typeIndex.id === "10") {
                let locationIndex = randomize(feedPeopleLocations);

                embed.setDescription("\u201c" + typeIndex.icly + "\u201c");
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type, inline: true},
                    {name: "Location", value: locationIndex.location + " in " + locationIndex.zone, inline: true},
                    {name: "Additional information", value: typeIndex.description}
                );

                return message.channel.send(embed);
            };

            if (typeIndex.id === "13") {
                let locationIndex = randomize(containmentLocations);

                embed.setDescription("\u201c" + typeIndex.icly + "\u201c");
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type, inline: true},
                    {name: "Location", value: locationIndex.location + " in " + locationIndex.zone, inline: true},
                    {name: "Additional information", value: typeIndex.description}
                );

                return message.channel.send(embed);
            };

            if (typeIndex.id === "15") {
                let locationIndex = randomize(friendlyRxLocations);

                embed.setDescription("\u201c" + typeIndex.icly + "\u201c");
                embed.addFields(
                    {name: "Patrol type", value: typeIndex.type, inline: true},
                    {name: "Location", value: locationIndex.location + " in " + locationIndex.zone, inline: true},
                    {name: "Additional information", value: typeIndex.description}
                );

                return message.channel.send(embed);
            };
        };
    },
};