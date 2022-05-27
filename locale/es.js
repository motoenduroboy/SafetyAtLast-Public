const language = {
  code: "es", // https://www.science.co.il/language/Locale-codes.php
  lang: {}
}

language.lang.BotName                  =                       `SafetyAtlast™`;
language.lang.BotNameBy                = (moto) =>             `SafetyAtlast™ Por ${moto.username}#${moto.discriminator}`;
language.lang.Owner                    =                       `Moto#9138 \n¡Gracias GRIMM_\\_\\_\\_#6413 por ideas, logotipo y alojamiento del bot!`;
language.lang.ThanksToGrimm            =                       `¡Gracias GRIMM_\\_\\_\\_#6413 por ideas, logotipo y alojamiento del bot!`;
language.lang.Cooldown_Message         =                       `¡Cálmate! ¡Quedan 3 segundos! ¡El temporizador no se reiniciará hasta que te detengas!`;
language.lang.CantFindMember           =                       `Lo siento, no puedo encontrar a ese miembro.`;
language.lang.Success                  =                       `✅ | ¡Correcto!`;
language.lang.Nope                     =                       `❌ | ¡Incorrecto!`;
language.lang.ErrorOccured             =                       `¡Ocurrió un error!`;
language.lang.MentionAndNameAndDiscrim = (user) =>             `${user.mention} (${user.username}#${user.discriminator})`;
language.lang.NameAndDiscrim           = (user) =>             `${user.username}#${user.discriminator}`;
language.lang.NameAndDiscrimAndID      = (user) =>             `${user.username}#${user.discriminator} (ID: ${user.id})`;
language.lang.ChannelMentionAndName    = (channel) =>          `${channel.mention} (#${channel.name})`;
language.lang.ChannelName              = (channel) =>          `#${channel.name}`;
language.lang.ClickHere = `Haga clic aquí`

const Embeds = {};

Embeds.Titles = {};
Embeds.Titles.MemberInfo = "Info del miembro";
Embeds.Titles.UserInfo = "Info de usuario";
Embeds.Titles.InviteInfo = "Info de invitación";
Embeds.Titles.GuildInfo = "Info del Servidor";

Embeds.SubTitles = {};
Embeds.SubTitles.Username = "Usuario";
Embeds.SubTitles.UserID = "ID Usuario";
Embeds.SubTitles.JoinedGuild = "Servidor Unido";
Embeds.SubTitles.AccountCreation = "Creación de cuenta";
Embeds.SubTitles.Nickname = "Apodo";
Embeds.SubTitles.CurrentVoiceChannel = "Canal de voz actual";
Embeds.SubTitles.HighestRole = "Rol más alto";
Embeds.SubTitles.Code = "Código";
Embeds.SubTitles.Created = "Creado";
Embeds.SubTitles.Creator = "Creador";
Embeds.SubTitles.MaxAge = "Edad máxima (tiempo restante)";
Embeds.SubTitles.MaxUses = "Usos máximos";
Embeds.SubTitles.Temporary = "Temporario";
Embeds.SubTitles.Uses = "Usos";
Embeds.SubTitles.Owner = "Propietario";
Embeds.SubTitles.MFALevel = "Nivel MFA";
Embeds.SubTitles.ExplicitContentFilter = "Filtro de contenido explícito";
Embeds.SubTitles.DefaultNotifications = "Notificaciones por defecto";
Embeds.SubTitles.Region = "Región";
Embeds.SubTitles.VerificationLevel = "Nivel de verificación";
Embeds.SubTitles.Categories = "Categorías";
Embeds.SubTitles.TextChannels = "Canales de texto";
Embeds.SubTitles.VoiceChannels = "Canales de voz";
Embeds.SubTitles.Roles = "Roles";
Embeds.SubTitles.Emojis = "Emojis";
Embeds.SubTitles.Members = "Miembros";
Embeds.SubTitles.OnlineTotal = "En línea / Total";
Embeds.SubTitles.Bots = "Bots";

Embeds.Values = {};
Embeds.Values.Require2FA = "Los administradores requieren 2FA";
Embeds.Values.DontRequire2FA = "Los administradores no requieren 2FA";
Embeds.Values.DontScanMessages = "No escanear ningún mensaje";
Embeds.Values.ScanMessagesNoRole = "Escanear mensajes de miembros sin un rol";
Embeds.Values.ScanMessagesAll = "Escanear mensajes enviados por todos los miembros";
Embeds.Values.AllMessages = "Todos los mensajes";
Embeds.Values.OnlyMentions = "Solo @menciones";
Embeds.Values.None = "Ninguno";
Embeds.Values.Low = "Bajo";
Embeds.Values.Medium = "Medio";
Embeds.Values.TableFlip = "(╯°□°）╯︵ ┻━┻";
Embeds.Values.DoubleTableFlip = "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻";

language.lang.Embeds = Embeds;

const Commands = {};

Commands.Other = {};
Commands.Other.Credits = {}
Commands.Other.Credits.Title = "Créditos";
Commands.Other.Credits.Description = (moto, grimm) => `**${language.lang.NameAndDiscrim(moto)}** - El Programador\n**${language.lang.NameAndDiscrim(grimm)}** - ¡Creador del logo y alojamiento del bot!`;
Commands.Other.Credits.BetaTestingCritiquing = "Para pruebas y críticas"

Commands.Other.Invite = "¡Invítame con este enlace! <https://www.safetyatlast.net/invite>";

Commands.Other.Ping = {};
Commands.Other.Ping.Ping = "Ping"
Commands.Other.Ping.Pong = "Pong"
Commands.Other.Ping.Pending = (n, sl) => `🏓 ${n}: resultado pendiente\n💓 Latido: ${sl}ms`;
Commands.Other.Ping.Result = (n, ms, sl) => `🏓 ${n}: ${ms}ms\n💓 Latido: ${sl}ms`;

Commands.Other.Stats = {};
Commands.Other.Stats.Servers = "Servidores";
Commands.Other.Stats.UnavailableGuilds = "Servidores no disponibles";
Commands.Other.Stats.Users = "Usuarios en caché";
Commands.Other.Stats.Uptime = "Tiempo Activo";
Commands.Other.Stats.ShardsOnline = "Shards en línea";
Commands.Other.Stats.ShardStatus = "Estado Shard del servidor";
Commands.Other.Stats.Shard = "Shard";
Commands.Other.Stats.GlobalBlacklistLinks = "Enlaces globales en la lista negra";
Commands.Other.Stats.GlobalWhitelistLinks = "Enlaces globales incluidos en la lista blanca";
Commands.Other.Stats.ServerBlacklistLinks = "Enlaces en la lista negra del servidor";
Commands.Other.Stats.ServerWhitelistLinks = "Enlaces incluidos en la lista blanca del servidor";
Commands.Other.Stats.CPUAverage = "Uso de CPU (Promedio)";
Commands.Other.Stats.RamUsage = "Uso de RAM";

Commands.Other.Support = "Si necesitas ayuda no dudes en preguntar aquí: https://discord.gg/F5CZSxh";

Commands.Utility = {};
Commands.Utility.RolePersist = {};
Commands.Utility.RolePersist.Enabled = `¡Ahora registraré los roles de los usuarios y se los devolveré cuando se unan!`;
Commands.Utility.RolePersist.Disable = `¡Ya no registraré los roles de los usuarios y los devolveré cuando se unan!`;
Commands.Utility.RolePersist.AddingUsers = (amount) => `Agregando ${amount} usuarios!`;
Commands.Utility.RolePersist.AddingUsersDone = (amount) => `Agregados ${amount} usuarios!`;

Commands.Utility.RolePersist.Remove = {};
Commands.Utility.RolePersist.Remove.NoPermission = `¡No tengo permiso para administrar roles!`;
Commands.Utility.RolePersist.Remove.UserNotFoundInDB = `¡Lo siento! Ese usuario no se encuentra en nuestra base de datos`;
Commands.Utility.RolePersist.Remove.UserRemoved = `Usuario eliminado de la base de datos`;
Commands.Utility.RolePersist.Remove.cleared = `Eliminado todos los usuarios de db`;
Commands.Utility.RolePersist.Remove.RemovedMulti = (r) => `Se eliminaron ${r} usuarios de la base de datos`;
Commands.Utility.RolePersist.Remove.RemovedNone = `Ningún usuario eliminado`;

Commands.Utility.AutoRole = {};
Commands.Utility.AutoRole.enable = `¡Ahora le daré roles a las personas cuando se unan!`;
Commands.Utility.AutoRole.disable = `¡No le daré roles a las personas cuando se unan!`;
Commands.Utility.AutoRole.roleAdded = `El rol ha sido agregado`;
Commands.Utility.AutoRole.roleRemove = `El rol ha sido eliminado.`;
Commands.Utility.AutoRole.rolesRemove = `El rol o roles han sido eliminados`;

Commands.Logging = {};
Commands.Logging.MissingPermission = `❌ | ¡Me faltan permisos en el canal de logs!\nSi esto es un error, infórmelo escribiendo '&support'`;
Commands.Logging.MissingPermissionEmbedLinks = `❌ | ¡Me faltan los permisos de "insertar enlaces" en el canal de logs!\nSi se trata de un error, infórmelo escribiendo '&support'`;
Commands.Logging.MissingAccess = `❌ | ¡Me falta acceso en el canal de logs! \nSi se trata de un error, repórtelo escribiendo '&support'`;
Commands.Logging.Set = {};
Commands.Logging.Set.ChannelSet = (channel, type) => `${channel.mention} se ha establecido en ${type} logs`;
Commands.Logging.Set.UnknownCategory = (type) => `Lo sentimos, ${type} no es una categoría.\nCategorías disponibles:\n- all\n- mod\n- voice\n- message\n- server`;
Commands.Logging.Set.ImageLogWarn = `Advertencia: para que el logeo de imágenes funcione, el canal de logs debe configurarse como NSFW, esto es para cumplir con el TOS de discord.`;
Commands.Logging.Set.Everything = (channel) => `${channel.mention} se ha configurado para logear todo`;
Commands.Logging.Remove = {};
Commands.Logging.Remove.ChannelRemove = (type) => `No registraré más ${type}`;
Commands.Logging.Override = {};
Commands.Logging.Override.UnknownOverride = (type) => `Lo sentimos, ${type} no es una anulación.\nPara ver las anulaciones disponibles, ejecute el comando \`&logging override list\``;
Commands.Logging.Override.OverrideSet = (channel, type) => `La anulación de ${type} se ha establecido en el canal ${channel.mention}`;
Commands.Logging.Override.OverrideRemove = (type) => `Se ha eliminado la invalidación de ${type}`;
Commands.Logging.Override.NotRemoved = (type) => `Anulación ${type} no existe y no se eliminó`;
Commands.Logging.List = {};
Commands.Logging.List.Title = "Anulaciones disponibles";

Commands.Permissions = {};
Commands.Permissions.PermDoesntExist = (perm) => `Lo siento, el permiso ${perm} no existe`;
Commands.Permissions.Add = {};
Commands.Permissions.Add.AddedPerms = (role) => `Se han añadido permisos a ${role.name}`;
Commands.Permissions.Remove = {};
Commands.Permissions.Remove.NoneRemoved = `No se han eliminado los permisos`;
Commands.Permissions.Remove.RemovedPerms = (role) => `Se han eliminado los permisos de${role.name}`;
Commands.Permissions.Preset = {};
Commands.Permissions.Preset.Title = (preset) => `Permisos para preajuste: ${preset}`;
Commands.Permissions.Preset.Set = (preset, role) => `El rol ${role.name} ahora tiene permisos ${preset.name}`;
Commands.Permissions.Preset.List = {};
Commands.Permissions.Preset.List.Title = "Preajustes";
Commands.Permissions.List = {};
Commands.Permissions.List.Title = "Permisos disponibles";
Commands.Permissions.List.Description = "[Haga clic aquí para ver](https://safetyatlast.net/permissions)";
Commands.Permissions.List.Roles = {};
Commands.Permissions.List.Roles.Title = "Roles";
Commands.Permissions.List.Role = {};
Commands.Permissions.List.Role.Title = (role) => `Permisos para ${role.name}`;
Commands.Permissions.List.Role.Description = (id) => `[Haz clic aquí para ver](https://www.safetyatlast.net/logs/${id})`;
Commands.Permissions.List.Role.NoneFound = (role) => `No se encontraron permisos para ${role.name}`;

Commands.Filter = {};
Commands.Filter.Enable = `¡Ahora escanearé los mensajes!`;
Commands.Filter.Disabled = `¡No escanearé mensajes!`;
Commands.Filter.Setup = {};
Commands.Filter.Setup.Set = (Delay, Delete, Warn, Mute, Kick, Ban, InviteFilter, IPFilter, IPv4, IPv6, ILan, ILH) => `\`\`\`Ajustes de filtro:\n\tRetraso: ${Retraso} segundos\n\tBorrar: ${Borrar} ofensas\n\tAdvertencia: ${Advertencia} ofensas\n\t
Silenciar: ofensas de ${Mute}\n\tKick: ofensas de ${Kick}\n\tBan: ${Ban} ofensas\n\tFiltro de invitación: ${InviteFilter}\n\tFiltro IP: ${IPFilter}\n\tIPv4: ${IPv4}\n\tIPv6: ${IPv6}\n\tIgnorarLan: ${ILan}\n\tIgnorarLocalHost: ${ILH}\`\`\``;
Commands.Filter.Setup.Applying = `¡Comenzaré a proteger este servidor con valores predeterminados!`;
Commands.Filter.Action = {};
Commands.Filter.Action.Set = (action, count) => `¡Ahora ${action} usuarios en ${count} ofensas!`;
Commands.Filter.Action.SetDeleted = (count) => `¡Ahora eliminaré los mensajes en ${count} ofensas!`;
Commands.Filter.Action.SetDelay = (delay) => `¡He establecido el retraso en ${delay} segundos!`;
Commands.Filter.Action.Max = (setting, max) => `${setting} debe ser menor o igual que ${max}`;
Commands.Filter.Action.Min = (setting, min) => `${setting} debe ser mayor o igual que ${min}`;
Commands.Filter.Word = {};
Commands.Filter.Word.Enable = `Ahora escanearé los mensajes en busca de palabras enumeradas`;
Commands.Filter.Word.Disable = `Ya no escanearé los mensajes en busca de palabras en la lista`;
Commands.Filter.Word.Add = {};
Commands.Filter.Word.Add.WordsAdded = `Se han añadido palabras`;
Commands.Filter.Word.Remove = {};
Commands.Filter.Word.Remove.WordsRemoved = `Se han eliminado palabras`;
Commands.Filter.Word.Remove.NothingToRemove = `Sin palabras eliminadas`;
Commands.Filter.Word.Remove.All = {};
Commands.Filter.Word.Remove.All.Cleared = `Se eliminaron todas las palabras y frases del filtro de palabras.`;
Commands.Filter.Word.ListEmbed = {};
Commands.Filter.Word.ListEmbed.Title = `Filtro - Lista de palabras`;
Commands.Filter.Word.ListEmbed.NoWords = `No se agregaron palabras a la lista de palabras`;
Commands.Filter.Word.Mode = {};
Commands.Filter.Word.Mode.Set = (mode) => `Modo de filtro de palabras establecido en ${mode}`;
Commands.Filter.IP = {};
Commands.Filter.IP.Enable = `Ahora escanearé los mensajes en busca de direcciones IP.`;
Commands.Filter.IP.Disable = `Ya no escanearé mensajes en busca de IP`;
Commands.Filter.IP.IPv4 = {};
Commands.Filter.IP.IPv4.Enable = `Ahora detectaré direcciones IPv4`;
Commands.Filter.IP.IPv4.Disable = `Ya no detectaré direcciones IPv4`;
Commands.Filter.IP.IPv6 = {};
Commands.Filter.IP.IPv6.Enable = `Ahora detectaré direcciones IPv6`;
Commands.Filter.IP.IPv6.Disable = `Ya no detectaré direcciones IPv6`;
Commands.Filter.IP.IgnoreLan = {};
Commands.Filter.IP.IgnoreLan.Enable = `Ahora ignoraré las direcciones IP de LAN`;
Commands.Filter.IP.IgnoreLan.Disable = `Ya no ignoraré las direcciones IP de LAN`;
Commands.Filter.IP.IgnoreLocalHost = {};
Commands.Filter.IP.IgnoreLocalHost.Enable = `Ahora ignoraré las direcciones IP de localhost`;
Commands.Filter.IP.IgnoreLocalHost.Enable = `Ya no ignoraré las direcciones IP de localhost`;
Commands.Filter.Invite = {};
Commands.Filter.Invite.Enable = `Ahora escanearé los mensajes en busca de invitaciones.`;
Commands.Filter.Invite.Disable = `Ya no escanearé los mensajes en busca de invitaciones.`;
Commands.Filter.Invite.IgnoreOwn = {};
Commands.Filter.Invite.IgnoreOwn.Enable = `Ahora ignoraré las invitaciones del servidor que pertenecen a este servidor.`;
Commands.Filter.Invite.IgnoreOwn.Disable = `Ya no ignoraré las invitaciones del servidor que pertenecen a este servidor`;
Commands.Filter.Bypass = {};
Commands.Filter.Bypass.Remove = {};
Commands.Filter.Bypass.Remove.NoneRemoved = `Nada eliminado del bypass`;

Commands.EventMessages = {};
Commands.EventMessages.SetChannel = (channel) => `He configurado el canal para ${channel.name}`;
Commands.EventMessages.SetMessage = (content) => `He configurado el mensaje para ${content}`;
Commands.EventMessages.Test = `Pruebas`;
Commands.EventMessages.MessageNotSet = `¡Mensaje no establecido!`;
Commands.EventMessages.Test = `Pruebas`;
Commands.EventMessages.Welcome = {};
Commands.EventMessages.Welcome.Enable = `¡He habilitado los mensajes de bienvenida!`;
Commands.EventMessages.Welcome.Disable = `¡He deshabilitado los mensajes de bienvenida!`;
Commands.EventMessages.Goodbye = {};
Commands.EventMessages.Goodbye.Enable = `¡He habilitado los mensajes de despedida!`;
Commands.EventMessages.Goodbye.Disable = `¡He deshabilitado los mensajes de despedida!`;
Commands.EventMessages.Kick = {};
Commands.EventMessages.Kick.Enable = `¡He habilitado los mensajes de patada!`;
Commands.EventMessages.Kick.Disable = `¡He deshabilitado los mensajes de patada!`;
Commands.EventMessages.Ban = {};
Commands.EventMessages.Ban.Enable = `¡He habilitado los mensajes de baneo!`;
Commands.EventMessages.Ban.Disable = `¡He deshabilitado los mensajes de prohibición!`;

Commands.AutoMod = {};
Commands.AutoMod.Setup = {};
Commands.AutoMod.Setup.Set = (ADDelay, ADDelete, ADWarn, ADMute, ASDelay, ASDelete, ASWarn, ASMute, MMDelete, MRMDelete, MEDelete, AZ, AZDelete) => `\`\`\`Anti Dupe:\n\tDelay:  ${ADDelay} seconds\n\tDelete: ${ADDelete} messages\n\t\n\tWarn:   ${ADWarn} messages\n\tMute:   ${ADMute} messages\n\nAnti Spam:\n\tDelay:  ${ASDelay} seconds\n\tDelete: ${ASDelete} messages\n\tWarn:   ${ASWarn} messages\n\tMute:   ${ASMute} messages\n\nMax Mentions:\n\tDelete: ${MMDelete} mentions\n\nMax Role Mentions:\n\tDelete: ${MRMDelete} role mentions\n\nMax Emojis:\n\tDelete: ${MEDelete} emojis\n\nAntiZalgo: ${AZ}\n\tDelete: ${AZDelete}\`\`\``;
Commands.AutoMod.Setup.Applying = `I will start protecting this server with default values!`;
Commands.AutoMod.Module = {};
Commands.AutoMod.Module.Enable = (module) => `I have enabled ${module} module!`;
Commands.AutoMod.Module.Disable = (module) => `I have disabled ${module} module!`;
Commands.AutoMod.Action = {};
Commands.AutoMod.Action.Set = (action, count, unit) => `I will now ${action} people at ${count} ${unit}!`;
Commands.AutoMod.Action.Max = (setting, max) => `${setting} must be less than or equal to ${max}`;
Commands.AutoMod.Action.Min = (setting, min) => `${setting} must be more than or equal to ${min}`;
Commands.AutoMod.Action.Delete = (count) => `I have set the messages required for deletion to ${count} messages!`;
Commands.AutoMod.Action.Delay = (time) => `I have set the delay to ${time} seconds!`;

Commands.Link = {};
Commands.Link.Setup = {};
Commands.Link.Setup.Set = (Delay, Delete, Warn, Mute, Kick, Ban, VTE, VTD, BLPE) => `\`\`\`Link Settings:\n\tDelay: ${Delay} seconds\n\tDelete: ${Delete} offenses\n\tWarn: ${Warn} offenses\n\tMute: ${Mute} offenses\n\tKick: ${Kick} offenses\n\tBan: ${Ban} offenses\n\n\tScanners:\n\t\tVirusTotal:\n\t\t\tEnabled: ${VTE}\n\t\t\tDetections: ${VTD}\n\t\tBlockListProject:\n\t\t\tEnabled: ${BLPE}\`\`\``;
Commands.Link.Setup.Applying = `I will start protecting this server with default values!`;
Commands.Link.Enabled = 'I have enabled link scanning!';
Commands.Link.Disable = 'I have disable link scanning!';
Commands.Link.Reactions = {};
Commands.Link.Reactions.Enabled = 'I have enabled reactions for link scanning!';
Commands.Link.Reactions.Disable = 'I have disabled reactions for link scanning!';
Commands.Link.Reactions.Keep = {};
Commands.Link.Reactions.Keep.Enable = 'I will now keep reactions instead of deleting them after some time';
Commands.Link.Reactions.Keep.Disable = 'I will no longer keep reactions instead of deleting them after some time';
Commands.Link.Blacklist = {};
Commands.Link.Blacklist.Add = (links) => `${links} added to the server blacklist`;
Commands.Link.Blacklist.Remove = (links) => `${links} removed from the server blacklist`;
Commands.Link.Blacklist.Cleared = `Server blacklist cleared`;
Commands.Link.Blacklist.All = {};
Commands.Link.Blacklist.All.Enabled = 'I will delete all links';
Commands.Link.Blacklist.All.Disable = 'I will no longer delete all links';
Commands.Link.Whitelist = {};
Commands.Link.Whitelist.Add = (links) => `${links} added to the server whitelist`;
Commands.Link.Whitelist.Remove = (links) => `${links} removed from the server whitelist`;
Commands.Link.Whitelist.Cleared = `Server whitelist cleared`;
Commands.Link.Action = {};
Commands.Link.Action.Set = (action, count) => `I will now ${action} people at ${count} offenses!`;
Commands.Link.Action.Max = (setting, max) => `${setting} must be less than or equal to ${max}`;
Commands.Link.Action.Min = (setting, min) => `${setting} must be more than or equal to ${min}`;
Commands.Link.Action.Delete = (count) => `I have set the messages required for deletion to ${count} messages!`;
Commands.Link.Action.Delay = (time) => `I have set the delay to ${time} seconds!`;
Commands.Link.Scanners = {};
Commands.Link.Scanners.VT = {};
Commands.Link.Scanners.VT.Enable = `VirusTotal scanner has been enabled`;
Commands.Link.Scanners.VT.Disable = `VirusTotal scanner has been disabled`;
Commands.Link.Scanners.VT.SetDetections = (num) => `VirusTotal minimum detections has been set to ${num}`;
Commands.Link.Scanners.BLP = {};
Commands.Link.Scanners.BLP.Enable = `BlockListProject database has been enabled`;
Commands.Link.Scanners.BLP.Disable = `BlockListProject database has been disabled`;
Commands.Link.Scanners.BLP.Malware = {};
Commands.Link.Scanners.BLP.Malware.Enable = `BlockListProject malware database has been enabled`;
Commands.Link.Scanners.BLP.Malware.Disable = `BlockListProject malware database has been disabled`;
Commands.Link.Scanners.BLP.Crypto = {};
Commands.Link.Scanners.BLP.Crypto.Enable = `BlockListProject crypto database has been enabled`;
Commands.Link.Scanners.BLP.Crypto.Disable = `BlockListProject crypto database has been disabled`;
Commands.Link.Scanners.BLP.Fraud = {};
Commands.Link.Scanners.BLP.Fraud.Enable = `BlockListProject fraud database has been enabled`;
Commands.Link.Scanners.BLP.Fraud.Disable = `BlockListProject fraud database has been disabled`;
Commands.Link.Scanners.BLP.Scam = {};
Commands.Link.Scanners.BLP.Scam.Enable = `BlockListProject scam database has been enabled`;
Commands.Link.Scanners.BLP.Scam.Disable = `BlockListProject scam database has been disabled`;
Commands.Link.Scanners.BLP.Ransomware = {};
Commands.Link.Scanners.BLP.Ransomware.Enable = `BlockListProject ransomware database has been enabled`;
Commands.Link.Scanners.BLP.Ransomware.Disable = `BlockListProject ransomware database has been disabled`;
Commands.Link.Scanners.BLP.Phishing = {};
Commands.Link.Scanners.BLP.Phishing.Enable = `BlockListProject phishing database has been enabled`;
Commands.Link.Scanners.BLP.Phishing.Disable = `BlockListProject phishing database has been disabled`;
Commands.Link.Scanners.GSB = {};
Commands.Link.Scanners.GSB.Enable = `GoogleSafeBrowsing scanner has been enabled`;
Commands.Link.Scanners.GSB.Disable = `GoogleSafeBrowsing scanner has been disabled`;
Commands.Link.Scanners.GSB.SocialEngineering = {};
Commands.Link.Scanners.GSB.SocialEngineering.Enable = `GoogleSafeBrowsing will now scan for social engineering websites`;
Commands.Link.Scanners.GSB.SocialEngineering.Disable = `GoogleSafeBrowsing will now no longer scan for social engineering websites`;
Commands.Link.Scanners.GSB.UnwantedSoftware = {};
Commands.Link.Scanners.GSB.UnwantedSoftware.Enable = `GoogleSafeBrowsing will now scan for websites with unwanted software`;
Commands.Link.Scanners.GSB.UnwantedSoftware.Disable = `GoogleSafeBrowsing will now no longer scan for websites with unwanted software`;
Commands.Link.Scanners.GSB.PotentiallyHarmful = {};
Commands.Link.Scanners.GSB.PotentiallyHarmful.Enable = `GoogleSafeBrowsing will now scan for websites with potentially harmful applications`;
Commands.Link.Scanners.GSB.PotentiallyHarmful.Disable = `GoogleSafeBrowsing will now no longer scan for websites with potentially harmful applications`;

Commands.Warn = {};
Commands.Warn.WrongPerms = (user) => `The user ${user.username}#${user.discriminator} has not been warned because they are higher or equal rank than you!`;
Commands.Warn.WarnedEmbed = {};
Commands.Warn.WarnedEmbed.Description = (user, reason) => `${user.username}#${user.discriminator} has been warned for the following reason: \n ${reason}`;
Commands.Warn.WarnedEmbed.Footer = (id) => `Warn ID: ${id}`;
Commands.Warn.Clear = {};
Commands.Warn.Clear.Removed = (id) => `Warn #${id} has been removed!`;
Commands.Warn.Clear.NotFound = (id) => `Warn #${id} was not found!`;
Commands.Warn.Clear.All = {};
Commands.Warn.Clear.All.Cleared = (warns) => `${warns} warns cleared!`;
Commands.Warn.Limit = {};
Commands.Warn.Limit.Kick = {};
Commands.Warn.Limit.Kick.Limit = (limit) => `I will now kick users at ${limit} warns!`;
Commands.Warn.Limit.Kick.LimitZero = `I will no longer kick users!`;
Commands.Warn.Limit.Ban = {};
Commands.Warn.Limit.Ban.Limit = (limit) => `I will now ban users at ${limit} warns!`;
Commands.Warn.Limit.Ban.LimitZero = `I will no longer ban users!`;

Commands.Mute = {};
Commands.Mute.WrongPerms = (user) => `The user ${user.username}#${user.discriminator} has not been muted because they are higher or equal rank than you!`;
Commands.Mute.SetRole = {};
Commands.Mute.SetRole.Set = (role) => `Mute role set to ${role.name}`;

Commands.UnMute = {};
Commands.UnMute.WrongPerms = (user) => `The user ${user.username}#${user.discriminator} has not been unmuted because they are higher or equal rank than you!`;

Commands.Purge = {};
Commands.Purge.DeletedMessages = (num) => `Deleted ${num} messages!`;
Commands.Purge.RegexInvalid = `Invalid Regex`;

Commands.Moderation = {};
Commands.Moderation.Limit = {};
Commands.Moderation.Limit.Enable = (mod) => `I have enabled ${mod} module!`;
Commands.Moderation.Limit.Disable = (mod) => `I have disabled ${mod} module!`;
Commands.Moderation.Limit.Delay = {};
Commands.Moderation.Limit.Delay.Set = (time) => `I have set the delay to ${time} seconds!`;
Commands.Moderation.Limit.Add = {};
Commands.Moderation.Limit.Add.SetDelay = (time) => `I have set the delay to ${time} seconds!`;
Commands.Moderation.Limit.Add.SetLimit = (role, limit) => `I have set the limit for ${role} to ${limit}!`;
Commands.Moderation.Limit.Add.LimitChanged = (role, limit) => `I have changed the limit for ${role} to ${limit}!`;
Commands.Moderation.Limit.Remove = {};
Commands.Moderation.Limit.Remove.Removed = (role) => `I have removed the limit for ${role}`;
Commands.Moderation.Limit.Remove.NoneRemoved = (role) => `${role} does not have have a limit set`;

Commands.Ban = {};
Commands.Ban.Banned = (user) => `Member ${user.username}#${user.discriminator} was banned!`;
Commands.Ban.LimitRached = `You have reached your ban limit!`;
Commands.Ban.BannedBy = (reason, user) => `${reason}\nBanned by ${user.username}#${user.discriminator} (ID: ${user.id})`;
Commands.Ban.WrongPerms = (user) => `The user ${user.username}#${user.discriminator} has not been banned because they are higher or equal rank than you!`;
Commands.Ban.Clean = {};
Commands.Ban.Clean.Found = (amount) => `${amount} found, removing! (Warning: Will spam logs)`;
Commands.Ban.Clean.Done = (amount) => `${amount} deleted users remove from ban list`;
Commands.Ban.Clean.NoneFound = `No Deleted Users Found`;
Commands.Ban.Clean.BanReason = (user) => `Deleted User - Cleanup ran by ${user.username}#${user.discriminator}`;

Commands.Kick = {};
Commands.Kick.Kicked = (user) => `Member ${user.username}#${user.discriminator} was kicked!`;
Commands.Kick.LimitRached = `You have reached your kick limit!`;
Commands.Kick.KickedBy = (reason, user) => `${reason}\nKicked by ${user.username}#${user.discriminator} (ID: ${user.id})`;
Commands.Kick.WrongPerms = (user) => `The user ${user.username}#${user.discriminator} has not been kicked because they are higher or equal rank than you!`;

Commands.UnBan = {};
Commands.UnBan.LimitRached = `You have reached your unban limit!`;
Commands.UnBan.UnBannedBy = (reason, user) => `${reason}\nUnBanned by ${user.username}#${user.discriminator} (ID: ${user.id})`;
Commands.UnBan.BanNotFound = (user) => `${user} is not banned`;
Commands.UnBan.UnBanned = (user) => `${user} unbanned`;
Commands.UnBan.UnBannedEmbed = {};
Commands.UnBan.UnBannedEmbed.Title = `----------Ban Info----------`;
Commands.UnBan.UnBannedEmbed.Footer = (user) => `Unbanned By: ${user.username}#${user.discriminator}`;
Commands.UnBan.UnBannedEmbed.Moderator = `Moderator`;
Commands.UnBan.UnBannedEmbed.Reason = `Reason`;
Commands.UnBan.UnBannedEmbed.NoReason = `No Reason Provided`;

Commands.HackBan = {};
Commands.HackBan.HackBannedBy = (reason, user) => `${reason}\nHackBanned By ${user.username}#${user.discriminator} (ID: ${user.id})`;
Commands.HackBan.AlreadyBannedEmbed = {};
Commands.HackBan.AlreadyBannedEmbed.Title = `User Already Banned`;
Commands.HackBan.AlreadyBannedEmbed.User = `User`;
Commands.HackBan.AlreadyBannedEmbed.Reason = `Reason`;
Commands.HackBan.BannedEmbed = {};
Commands.HackBan.BannedEmbed.Title = `User Banned`;
Commands.HackBan.BannedEmbed.NoReason = `***No Reason Provided***`;

Commands.Prefix = {};
Commands.Prefix.changed = (prefix) => `Prefix changed to: ${prefix}`;
Commands.Prefix.notChanged = `Prefix did not change`;

Commands.Localisation = {};
Commands.Localisation.Language = {};
Commands.Localisation.Language.UnknownLanguage = `Sorry, this language does not exist. You can help translate by joining our support server`;
Commands.Localisation.Language.Set = `Language Set to English`;
Commands.Localisation.Timezone = {};
Commands.Localisation.Timezone.UnknownTimezone = `Unknown Timezone`;
Commands.Localisation.Timezone.Set = `Timezone set`;

language.lang.Commands = Commands;

const Warn = {};
Warn.DMMessage                      =                       `❌ | You have been warned!`;
Warn.NoReason                       =                       `___**No reason specified!**___`;
Warn.NoWarnsFound                   =                       `No warns were found for this user!`;
Warn.WrongPerms                     =                       `You lack the required permissions to view others warns!`;
language.lang.Warn = Warn;

const Muted = {};
Muted.notMuted                      =                       `That user is not muted!`;
language.lang.Muted = Muted;

const Link = {};
Link.GlobalBlacklist                = (link) =>             `Link on global blacklist: ${link}`;
Link.GlobalWhiteList                = (link) =>             `Link on global whitelist: ${link}`;
Link.ServerBlacklist                = (link) =>             `Link on server blacklist: ${link}`;
Link.ServerWhiteList                = (link) =>             `Link on server whitelist: ${link}`;
Link.MaliciousLink                  =                       `Posting a malicious link`;
Link.VTBad                          = (positives, link) =>  `Bad Link (Virus Total): ${positives} detections! Link: ${link}`;
/*Link.MessageDelete                  =                       `__***This message contains a blacklisted link or redirect but is server whitelisted! For your safety do not click the links!***__\n`;
Link.MessageDelete2                 =                       `__***This message contains a blacklisted link or redirect! For your safety do not click the links!***__\n`;
Link.MessageDelete3                 =                       `__***This message contains a link or redirect that has been blacklisted by the Admins of the server! For your safety do not click the links!***__\n`;*/
Link.MessageDelete                  =                       `__***This message was deleted by Link Scanner and may contain a malicious link or redirect! For your safety do not click the links!***__\n`;
Link.MessageDeleteBlacklistAll      =                       `__***The server has all links blacklisted! Proceed with caution!***__\n`;
Link.NoLinksFound                   =                       `Sorry, I couldn't find any links!`;
Link.DeleteReason                   =                       `That link was deemed to be malicious and has been removed!`;
Link.ReasonHeader                   =                       `Link Scanner:`;
Link.BlackListAllReason             =                       `\nSever has all links blacklisted`;
Link.VT = {};
Link.VT.Enable = `VirusTotal scanner has been enabled`;
Link.VT.Disable = `VirusTotal scanner has been disabled`;
Link.GSB = {}; // Google Safe Browsing
Link.GSB.Reason = (link, catString) => `Google Safe Browsing: ${link} (Categories: ${catString})`;
Link.GSB.Categories = {
  MALWARE: 'malware',
  SOCIAL_ENGINEERING: 'social engineering',
  UNWANTED_SOFTWARE: 'unwanted software',
  POTENTIALLY_HARMFUL_APPLICATION: 'potentially harmful application'
};
Link.BLP = {}; // BlockListProject
Link.BLP.Reason = (link, catString) => `BlockListProject database: ${link} (Categories: ${catString})`;
Link.BLP.Categories = {
  malware: 'malware',
  crypto: 'crypto',
  fraud: 'fraud',
  scam: 'scam',
  ransomware: 'ransomware',
  phishing: 'phishing'
};
language.lang.Link = Link;

const Help = {};
Help.By = (m) => `SafetyAtLast™ by ${m.username}#${m.discriminator}`;
Help.CommandHelp = {};
Help.CommandHelp.HelpTip = `Run \`&help <section name>\` to view more commands`;
Help.CommandHelp.Commands = `Commands`;
Help.CommandHelp.Usage = `Usage`;
Help.CommandHelp.UnknownCat = `Unknown category`;
language.lang.Help = Help;


let AutoMod = {};
AutoMod.DupeLimitReason                 =                       `Please calm down mate! (Stop spamming the same message!)`;
AutoMod.SpamLimitReason                 =                       `Please calm down mate! (Stop spamming!)`;
AutoMod.mentionsReason                  =                       `Please calm down mate! (Too many mentions!)`;
AutoMod.roleMentionsReason              =                       `Please calm down mate! (Too many role mentions!)`;
AutoMod.emojisReason                    =                       `Please calm down mate! (Too many emojis!)`;
AutoMod.antiZalgoReason                 =                       `Zalgo characters detected (If this is wrong please report it)`;
language.lang.AutoMod = AutoMod;

// Filter
const Filter = {};
Filter.Reason                       = (content) =>          `Server Filter - ${content}`;
Filter.EnabledName                  =                       `I will now scan usernames!`;
Filter.DisabledName                 =                       `I will not scan usernames!`;
Filter.DeleteReason                 =                       `Your message has been deleted by the server filter!`;
language.lang.Filter = Filter;

// Permissions
const Permissions = {};
Permissions.administrator           =                       `You require the 'administrator' discord permission`;
Permissions.dontHavePerm            = (perm) =>             `You require the '${perm}' permission`;
Permissions.NotEnoughPermsAdd       =                       `I do not have enough permissions to add the role to that user!`;
Permissions.NotEnoughPermsRemove    =                       `I do not have enough permissions to remove the role!`;
Permissions.UserNotFoundInDB        =                       `Sorry! That user is not found in our database`;
Permissions.RoleNotFoundInDB        =                       `Sorry! That role is not found in our database`;
Permissions.MissingPermissionsEmbedTitle = `Missing Permissions`;
Permissions.MissingPermissions = (perms) => `I am missing permissions to run this command!, I require these permissions\n${perms}`;
language.lang.Permissions = Permissions;

const DiscordPerms = {};
DiscordPerms.createInstantInvite = "Create Instant Invite";
DiscordPerms.kickMembers = "Kick Members";
DiscordPerms.banMembers = "Ban Members";
DiscordPerms.administrator = "Administrator";
DiscordPerms.manageChannels = "Manage Channels";
DiscordPerms.manageGuild = "Manage Guild";
DiscordPerms.addReactions = "Add Reactions";
DiscordPerms.viewAuditLog = "View Audit Log";
DiscordPerms.voicePrioritySpeaker = "Priority Speaker";
DiscordPerms.voiceStream = "Video";
DiscordPerms.viewChannel = "Read Text Channels & See Voice Channels";
DiscordPerms.sendMessages = "Send Messages";
DiscordPerms.sendTTSMessages = "Send TTS Messages";
DiscordPerms.manageMessages = "Manage Messages";
DiscordPerms.embedLinks = "Embed Links";
DiscordPerms.attachFiles = "Attach Files";
DiscordPerms.readMessageHistory = "Read Message History";
DiscordPerms.mentionEveryone = "Mention @everyone";
DiscordPerms.externalEmojis = "Use External Emojis";
DiscordPerms.viewGuildInsights = "View Guild Insights";
DiscordPerms.voiceConnect = "Connect";
DiscordPerms.voiceSpeak = "Speak";
DiscordPerms.voiceMuteMembers = "Mute Members";
DiscordPerms.voiceDeafenMembers = "Deafen Members";
DiscordPerms.voiceMoveMembers = "Move Members";
DiscordPerms.voiceUseVAD = "Use Voice Activity";
DiscordPerms.changeNickname = "Change Nickname";
DiscordPerms.manageNicknames = "Manage Nicknames";
DiscordPerms.manageRoles = "Manage Roles";
DiscordPerms.manageWebhooks = "Manage Webhooks";
DiscordPerms.manageEmojis = "Manage Emojis";
DiscordPerms.externalEmojis = "Use External Emoji";
language.lang.DiscordPerms = DiscordPerms;

const CommandHandler = {};
CommandHandler.error = `An error has occurred, please report the issue!`;
CommandHandler.noDMPerm = `I do not have permission to DM this user`;
CommandHandler.noPerm = `I do not have permission to do that`;
CommandHandler.discordError = `An error occurred on Discord's servers`;
CommandHandler.invalidArguments = `Invalid Arguments`;
language.lang.CommandHandler = CommandHandler;

const Utility = {};
Utility.InvalidInvite = `This guild doesn't have that invite!`;
language.lang.Utility = Utility;

// Bypasses
const Bypasses = {};
Bypasses.UserBypassed               = (user) =>             `User '${user.username}#${user.discriminator}' bypassed!`;
Bypasses.UserIDBypassed             = (userID) =>           `User '${userID}' bypassed!`;
Bypasses.RoleBypassed               = (role) =>             `Role '${role.name}' bypassed!`;
Bypasses.RoleIDBypassed             = (roleID) =>           `Role '${roleID}' bypassed!`;
Bypasses.UserIDRemove               = (userID) =>           `User '${userID}' bypassed!`;
Bypasses.UserRemove                 = (user) =>             `User '${user.username}#${user.discriminator}' removed!`;
Bypasses.RoleIDRemove               = (roleID) =>           `Role '${roleID}' removed!`;
Bypasses.RoleRemove                 = (role) =>             `Role '${role.name} (${role.id})' removed!`;
Bypasses.ChannelBypassed            = (channel) =>          `Channel '${channel.name} (${channel.id})' bypassed!`;
Bypasses.ChannelIDBypassed          = (channelID) =>        `Channel '${channelID}' bypassed!`;
Bypasses.ChannelRemoved             = (channel) =>          `Channel '${channel.name} (${channel.id})' removed!`;
Bypasses.ChannelIDRemoved           = (channelID) =>        `Channel '${channelID}' removed!`;
Bypasses.MultiAdded                 = (items) =>            `${items} have been added to bypass`;
Bypasses.MultiRemoved               = (items) =>            `${items} have been removed from bypass`;
Bypasses.AllRemoved                 =                       `All bypasses removed!`;
Bypasses.notFound                   =                       `User or Role was not found`;
language.lang.Bypasses = Bypasses;

// Roles
language.lang.CantFindRole         =                       `We could not find that role`;
language.lang.DupeRole             =                       `Duplicate role`;
language.lang.RemoveFail           =                       `Role removal failed`;
language.lang.RoleDoesntExsist     =                       `Role doesn't exist`;
language.lang.Removed              =                       `Role removed`;
language.lang.Added                =                       `Role added`;
language.lang.AddedFail            =                       `Role addition failed`;
language.lang.RolesAdded           =                       `The role or roles have been added`;
language.lang.Requested_By         = (user) =>             `Requested by: ${user.username}`;

const Logging = {};
Logging.Unset = "Unset"
Logging.Responsible = "Responsible Moderator: "
Logging.NoReason = `***No Reason Provided***`;
Logging.Reason = `Reason`;
Logging.DeletedUser = `Deleted User`;
Logging.DeletedChannel = `Deleted Channel`;
Logging.ClickHere = `Click Here`;
Logging.User = `User`;
Logging.Date = `Date`;
Logging.Log = `Online Log`;
Logging.Enabled = `Enabled`;
Logging.Disabled = `Disabled`;
Logging.Channel = {};
Logging.Channel.ChannelName = `Channel Name`;
Logging.Channel.Create = {};
Logging.Channel.Create.Text = `Text Channel Created`;
Logging.Channel.Create.Voice = `Voice Channel Created`;
Logging.Channel.Create.Category = `Category Channel Created`;
Logging.Channel.Create.News = `News Channel Created`;
Logging.Channel.Create.Store = `Store Channel Created`;
Logging.Channel.Create.Stage = `Stage Channel Created`;
Logging.Channel.Create.StageOpen = `Stage Opened`;
Logging.Channel.Create.StageClose = `Stage Closed`;
Logging.Channel.Create.Default = `Channel Created`;
Logging.Channel.Delete = {};
Logging.Channel.Delete.Text = `Text Channel Deleted`;
Logging.Channel.Delete.Voice = `Voice Channel Deleted`;
Logging.Channel.Delete.Category = `Category Channel Deleted`;
Logging.Channel.Delete.News = `News Channel Deleted`;
Logging.Channel.Delete.Store = `Store Channel Deleted`;
Logging.Channel.Delete.Stage = `Stage Channel Deleted`;
Logging.Channel.Delete.Default = `Channel Deleted`;
Logging.Channel.Update = {};
Logging.Channel.Update.Text = `Text Channel Updated`;
Logging.Channel.Update.Voice = `Voice Channel Updated`;
Logging.Channel.Update.Category = `Category Channel Updated`;
Logging.Channel.Update.News = `News Channel Updated`;
Logging.Channel.Update.Store = `Store Channel Updated`;
Logging.Channel.Update.Stage = `Stage Channel Updated`;
Logging.Channel.Update.Default = `Channel Updated`;
Logging.Channel.Update.NewName = `New Channel Name`;
Logging.Channel.Update.OldName = `Old Channel Name`;
Logging.Channel.Update.NewTopic = `New Topic`;
Logging.Channel.Update.OldTopic = `Old Topic`;
Logging.Channel.Update.NSFW = `NSFW`;
Logging.Channel.Update.NSFWTrue = `Set to True`;
Logging.Channel.Update.NSFWFalse = `Set to False`;
Logging.Channel.Update.NewRate = `New Slowmode Time`;
Logging.Channel.Update.OldRate = `Old Slowmode Time`;
Logging.Channel.Update.NewBitRate = `New Bit Rate`;
Logging.Channel.Update.OldBitRate = `Old Bit Rate`;
Logging.Channel.Update.NewCategory = `New Parent Category`;
Logging.Channel.Update.OldCategory = `Old Parent Category`;
Logging.Channel.Update.NoCategory = `In No Category`;
Logging.Channel.Update.DeletedCategory = `Category Deleted`;
Logging.Guild = {};
Logging.Guild.Ban = {};
Logging.Guild.Ban.Add = {};
Logging.Guild.Ban.Add.Title = `Member Banned`;
Logging.Guild.Ban.Remove = {};
Logging.Guild.Ban.Remove.Title = `Member UnBanned`;
Logging.Guild.Member = {};
Logging.Guild.Member.Username = `Username`;
Logging.Guild.Member.Add = {};
Logging.Guild.Member.Add.MemberAdded = `Member Joined`;
Logging.Guild.Member.Add.BotAdded = `Bot Added`;
Logging.Guild.Member.Add.AccountCreation = `Account Creation`;
Logging.Guild.Member.Add.InviteUsed = `Invite Used`;
Logging.Guild.Member.Add.CreatedBy = ` created by `;
Logging.Guild.Member.Remove = {};
Logging.Guild.Member.Remove.MemberRemoved = `Member Left`;
Logging.Guild.Member.Kick = {};
Logging.Guild.Member.Kick.MemberKicked = `Member Kicked`;
Logging.Guild.Member.Update = {};
Logging.Guild.Member.Update.Title = `User Updated`;
Logging.Guild.Member.Update.OldUsername = `Old Username`;
Logging.Guild.Member.Update.NewUsername = `New Username`;
Logging.Guild.Member.Update.OldNick = `Old Nickname`;
Logging.Guild.Member.Update.NewNick = `New Nickname`;
Logging.Guild.Member.Update.GuildAvatar = `Guild Avatar`;
Logging.Guild.Member.Update.GuildAvatarSet = `Avatar Set`;
Logging.Guild.Member.Update.GuildAvatarUpdated = `Avatar Updated`;
Logging.Guild.Member.Update.GuildAvatarRemoved = `Avatar Remove`;
Logging.Guild.Member.Update.OldRoles = `Roles Removed`;
Logging.Guild.Member.Update.NewRoles = `Roles Added`;
Logging.Guild.Member.Update.DeletedRole = `Deleted Role`;
Logging.Guild.Role = {};
Logging.Guild.Role.ClickHere = "Click Here To view the permissions"
Logging.Guild.Role.RoleName = "Role Name"
Logging.Guild.Role.Permissions = "Permissions"
Logging.Guild.Role.Managed = "Managed (Bot Role)"
Logging.Guild.Role.Created = {};
Logging.Guild.Role.Created.Title = `Role Created`;
Logging.Guild.Role.Deleted = {};
Logging.Guild.Role.Deleted.Title = `Role Deleted`;
Logging.Guild.Role.Updated = {};
Logging.Guild.Role.Updated.Title = `Role Updated`;
Logging.Guild.Role.Updated.OldName = `Old Role Name`;
Logging.Guild.Role.Updated.NewName = `New Role Name`;
Logging.Guild.Role.Updated.OldColor = "Old Colour";
Logging.Guild.Role.Updated.NewColor = "New Colour";
Logging.Guild.Role.Updated.OldMention = "Old Mentionable";
Logging.Guild.Role.Updated.NewMention = "New Mentionable";
Logging.Guild.Role.Updated.OldHoist = "Was Users Displayed Separate";
Logging.Guild.Role.Updated.NewHoist = "Now Users Displayed Separate";
Logging.Guild.Role.Updated.OldPerm = "Old Permission";
Logging.Guild.Role.Updated.NewPerm = "New Permission";
Logging.Guild.Update = {};
Logging.Guild.Update.Title = `Guild Updated`;
Logging.Guild.Update.GuildName = `Guild Name`;
Logging.Guild.Update.OldGuildName = `Old Guild Name`;
Logging.Guild.Update.NewGuildName = `New Guild Name`;
Logging.Guild.Update.OldOwner = `Old Owner`;
Logging.Guild.Update.NewOwner = `New Owner`;
Logging.Guild.Update.OldVerification = `Old Verification Level`;
Logging.Guild.Update.NewVerification = `New Verification Level`;
Logging.Guild.Update.VerificationLevel = {
  0: "Unrestricted",
  1: "Verified Email",
  2: "Registered with discord for 5 minutes",
  3: "Wait 10 minutes",
  4: "Verified Phone Number",
};
Logging.Guild.Update.OldMFA = `Old MFA Level`;
Logging.Guild.Update.NewMFA = `New MFA Level`;
Logging.Guild.Update.MFALevel0 = `Admins do not require 2FA`;
Logging.Guild.Update.MFALevel1 = `Admins require 2FA`;
Logging.Guild.Update.OldAFK = `Old Afk Channel`;
Logging.Guild.Update.NewAFK = `New Afk Channel`;
Logging.Guild.Update.OldAFKTime = `Old Afk Timeout`;
Logging.Guild.Update.NewAFKTime = `New Afk Timeout`;
Logging.Guild.Update.PremiumProgressBar = `Premium Progress Bar`;
Logging.Guild.Update.Banner = `Banner Updated`;
Logging.Guild.Update.DiscoverySplash = `Discovery Splash Updated`;
Logging.Message = {};
Logging.Message.NoContent = `No content`;
Logging.Message.UnknownAuthor = `Unknown Author`;
Logging.Message.Jump = `Jump To Message`;
Logging.Message.Delete = {};
Logging.Message.Delete.Message = `Message Deleted`;
Logging.Message.Delete.NotCached = `___**Message Content Unknown, Thanks discord!**___`;
Logging.Message.Delete.Image = `Image Deleted`;
Logging.Message.Delete.Video = `Image Deleted`;
Logging.Message.BulkDelete = {};
Logging.Message.BulkDelete.Title = `Channel Purged`;
Logging.Message.BulkDelete.Count = `Messages Deleted`;
Logging.Message.Update = {};
Logging.Message.Update.Title = `Message Edited`;
Logging.Message.Update.OldContent = `Old Content`;
Logging.Message.Update.NewContent = `New Content`;
Logging.Message.Pinned = {};
Logging.Message.Pinned.Title = `Message Pinned`;
Logging.Message.UnPinned = {};
Logging.Message.UnPinned.Title = `Message UnPinned`;
Logging.Warn = {};
Logging.Warn.ID = `Warn ID`;
Logging.Warn.Warned = {};
Logging.Warn.Warned.Title = `User Warned`;
Logging.Warn.Clear = {};
Logging.Warn.Clear.Title = `Warn Cleared`;
Logging.Warn.Clear.WarnedBy = `Warned By`;
Logging.Warn.MultiClear = {};
Logging.Warn.MultiClear.Title = `Warns Cleared`;
Logging.Warn.MultiClear.Count = `Warn Count`;
Logging.Mute = {};
Logging.Mute.Muted = {};
Logging.Mute.Muted.Title = `User Muted`;
Logging.Mute.UnMuted = {};
Logging.Mute.UnMuted.Title = `User UnMuted`;
Logging.Voice = {};
Logging.Voice.Join = {};
Logging.Voice.Join.Title = `Joined Voice Channel`;
Logging.Voice.Leave = {};
Logging.Voice.Leave.Title = `Left Voice Channel`;
Logging.Voice.Switch = {};
Logging.Voice.Switch.Title = `Switched Channel`;
Logging.Voice.Switch.From = `From`;
Logging.Voice.Switch.To = `To`;
Logging.Voice.State = {};
Logging.Voice.State.Title = `Voice State Updated`;
Logging.Voice.State.OldSelfDeafen = `Old Self Deafen`;
Logging.Voice.State.NewSelfDeafen = `New Self Deafen`;
Logging.Voice.State.Deafened = `Deafened`;
Logging.Voice.State.UnDeafened = `UnDeafened`;
Logging.Voice.State.OldSelfMuted = `Old Self Muted`;
Logging.Voice.State.NewSelfMuted = `New Self Muted`;
Logging.Voice.State.Muted = `Muted`;
Logging.Voice.State.UnMuted = `UnMuted`;
Logging.Voice.State.OldServerDeafen = `Old Server Deafen`;
Logging.Voice.State.NewServerDeafen = `New Server Deafen`;
Logging.Voice.State.ServerDeafened = `Server Deafened`;
Logging.Voice.State.ServerUnDeafened = `Server UnDeafened`;
Logging.Voice.State.OldServerMuted = `Old Server Muted`;
Logging.Voice.State.NewServerMuted = `New Server Muted`;
Logging.Voice.State.ServerMuted = `Server Muted`;
Logging.Voice.State.ServerUnMuted = `Server UnMuted`;
Logging.Invite = {};
Logging.Invite.Code = `Code`;
Logging.Invite.Inviter = `Inviter`;
Logging.Invite.MaxUses = `Max Uses`;
Logging.Invite.MaxAge = `Max Age`;
Logging.Invite.Membership = `Membership`;
Logging.Invite.TempMem = `Temporary`;
Logging.Invite.PermMem = `Permanent`;
Logging.Invite.Created = {};
Logging.Invite.Created.Title = `Invite Created`;
Logging.Invite.Removed = {};
Logging.Invite.Removed.Title = `Invite Deleted`;
Logging.Thread = {};
Logging.Thread.ParentChannel = `Parent Channel`;
Logging.Thread.Name = `Thread Name`;
Logging.Thread.Unlocked = `Anyone can UnArchive`;
Logging.Thread.Locked = `Moderators only can UnArchive`;
Logging.Thread.Create = {};
Logging.Thread.Create.Title = `Thread Created`;
Logging.Thread.Delete = {};
Logging.Thread.Delete.Title = `Thread Deleted`;
Logging.Thread.Update = {};
Logging.Thread.Update.Title = `Thread Updated`;
Logging.Thread.Update.Archived = `Thread Archived`; //title
Logging.Thread.Update.UnArchived = `Thread UnArchived`; //title
Logging.Thread.Update.OldName = `Old Thread Name`;
Logging.Thread.Update.NewName = `New Thread Name`;
Logging.Thread.Update.NewThreadLocked = `New Thread Locked`;
Logging.Thread.Update.OldThreadLocked = `Old Thread Locked`;
Logging.Thread.Update.NewArchiveTime = `New Archive Time`;
Logging.Thread.Update.OldArchiveTime = `Old Archive Time`;

language.lang.Logging = Logging;

module.exports = language;
