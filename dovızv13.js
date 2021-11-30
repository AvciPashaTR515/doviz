const Doviz = require('tcmb-doviz');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    const prefix = "!" // Burayı istediğiniz prefixle değiştirebilirsiniz
    const tarih = await Doviz.getData() // Tarihi çekmek için tarih yaptim yoksa öyle değil

    if (!args[0]) {
        let embed = new MessageEmbed();
        embed.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        embed.setDescription(`:x: Hata | Örnek Kullanım;\n${prefix}döviz **USD**\nKur Birim Kodları;\n\n\`\`USD EUR AUD DKK GBP CHF SEK CAD KWD NOK JPY SAR BGN RON RUB IRR CNY PKR QAR\`\``);
        embed.setColor("RED");
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "USD") {
        const res = await Doviz.getExchangeRate("USD");
        let embed = new MessageEmbed();
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL);
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir.\n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`);
        embed.setColor("RED");
        embed.addField(`Alış`, res.buying);
        embed.addField(`Satış`, res.selling, true);
        embed.addField(`Birim Kodu`, res.code, true);
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "EUR") {
        const res = await Doviz.getExchangeRate("EUR");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "AUD") {
        const res = await Doviz.getExchangeRate("AUD");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "DKK") {
        const res = await Doviz.getExchangeRate("DKK");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "GBP") {
        const res = await Doviz.getExchangeRate("GBP");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "CHF") {
        const res = await Doviz.getExchangeRate("CHF");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "SEK") {
        const res = await Doviz.getExchangeRate("SEK");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "CAD") {
        const res = await Doviz.getExchangeRate("CAD");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "KWD") {
        const res = await Doviz.getExchangeRate("KWD");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "NOK") {
        const res = await Doviz.getExchangeRate("NOK");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "JPY") {
        const res = await Doviz.getExchangeRate("JPY");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "SAR") {
        const res = await Doviz.getExchangeRate("SAR");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "BGN") {
        const res = await Doviz.getExchangeRate("BGN");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "RON") {
        const res = await Doviz.getExchangeRate("RON");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "RUB") {
        const res = await Doviz.getExchangeRate("RUB");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "IRR") {
        const res = await Doviz.getExchangeRate("IRR");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "CNY") {
        const res = await Doviz.getExchangeRate("CNY");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "PKR") {
        const res = await Doviz.getExchangeRate("PKR");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
    if (args[0] === "QAR") {
        const res = await Doviz.getExchangeRate("QAR");
        let embed = new MessageEmbed()
        embed.setAuthor(`${res.name} Güncel Kur Analizi`, message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) üzerinden çekilmektedir. \n \`\`${tarih.date}\`\` tarihinde güncellenmiştir.`)
        embed.setColor("RED")
        embed.addField(`Alış`, res.buying)
        embed.addField(`Satış`, res.selling, true)
        embed.addField(`Birim Kodu`, res.code, true)
        message.channel.send({ embeds: [embed] });
    }
}


exports.conf = {
    enabled: true,
    guildOnly: false, // Arkadaşlar Lütfen burayı kendi altyapınıza göre değiştirin yok name hatasıyla felan "Javascript" kanalına gelmeyin.
    aliases: ["doviz", "kur", "dövizkur", "kuranaliz", "kurgetir", "dövizanaliz", "usd", "euro", "dolar", "eur"],
    permLevel: 0
};
exports.help = {  // Arkadaşlar Lütfen burayı kendi altyapınıza göre değiştirin yok name hatasıyla felan "Javascript" kanalına gelmeyin.
    name: 'döviz',
    description: 'Güncel Döviz kurlarını gösterir.',
    usage: 'döviz'
};