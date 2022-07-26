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
Commands.AutoMod.Setup.Set = (ADDelay, ADDelete, ADWarn, ADMute, ASDelay, ASDelete, ASWarn, ASMute, MMDelete, MRMDelete, MEDelete, AZ, AZDelete) => `\`\`\`Anti Dupe:\n\tRetraso: ${ADDelay} segundos\n\tEliminar: ${ADDelete} mensajes\n\t\n\tAdvertencia: ${ADWarn} mensajes\n\tMute: ${ADMute} mensajes\n\nAnti Spam:\n\tRetraso: ${ASDelay} segundos\n\tEliminar: ${ASDelete} mensajes\n\tAdvertencia: ${ASWarn} mensajes\n\tMute: ${ASMute} mensajes \n\nMáximo de menciones:\n\tEliminar: ${MMDelete} menciones\n\nMáximo de menciones de roles:\n\tEliminar: ${MRMDelete} menciones de roles\n\nMáximo de emojis:\n\tEliminar: ${MEDelete} emojis \n\nAntiZalgo: ${AZ}\n\tEliminar: ${AZDelete}\`\`\``;
Commands.AutoMod.Setup.Applying = `¡Comenzaré a proteger este servidor con valores predeterminados!`;
Commands.AutoMod.Module = {};
Commands.AutoMod.Module.Enable = (module) => `¡He habilitado el módulo ${module}!`;
Commands.AutoMod.Module.Disable = (module) => `¡He deshabilitado el módulo ${module}!`;
Commands.AutoMod.Action = {};
Commands.AutoMod.Action.Set = (action, count, unit) => `¡Ahora haré ${action} personas en ${count} ${unit}!`;
Commands.AutoMod.Action.Max = (setting, max) => `${setting} debe ser menor o igual que ${max}`;
Commands.AutoMod.Action.Min = (setting, min) => `${setting} debe ser mayor o igual que ${min}`;
Commands.AutoMod.Action.Delete = (count) => `¡He configurado los mensajes necesarios para la eliminación en ${count} mensajes!`;
Commands.AutoMod.Action.Delay = (time) => `¡He establecido el retraso en ${time} segundos!`;

Commands.Link = {};
Commands.Link.Setup = {};
Commands.Link.Setup.Set = (Delay, Delete, Warn, Mute, Kick, Ban, VTE, VTD, BLPE) => `\`\`\`Configuración de enlace:\n\tRetraso: ${Delay} segundos\n\tEliminar: ${Delete} ofensas\n\tAdvertencia: ${Advertencia} ofensas\n\tMute: ${Mute} ofensas \n\tExpulsar: ${Expulsar} infracciones\n\tWarns: ${Warn} infracciones\n\n\tEscáneres:\n\t\tVirusTotal:\n\t\t\tHabilitado: ${VTE}\n\ t\t\tDetecciones: ${VTD}\n\t\tBlockListProject:\n\t\t\tHabilitado: ${BLPE}\`\`\``;
Commands.Link.Setup.Applying = `¡Comenzaré a proteger este servidor con valores predeterminados!`;
Commands.Link.Enabled = '¡He habilitado el escaneo de enlaces!';
Commands.Link.Disable = '¡He deshabilitado el escaneo de enlaces!';
Commands.Link.Reactions = {};
Commands.Link.Reactions.Enabled = '¡He habilitado las reacciones para escanear enlaces!';
Commands.Link.Reactions.Disable = '¡He deshabilitado las reacciones para escanear enlaces!';
Commands.Link.Reactions.Keep = {};
Commands.Link.Reactions.Keep.Enable = 'Ahora mantendré las reacciones en lugar de eliminarlas después de un tiempo.';
Commands.Link.Reactions.Keep.Disable = 'Ya no guardaré las reacciones en lugar de eliminarlas después de un tiempo.';
Commands.Link.Blacklist = {};
Commands.Link.Blacklist.Add = (links) => `${links} añadido a la lista negra del servidor`;
Commands.Link.Blacklist.Remove = (links) => `${links} eliminado de la lista negra del servidor`;
Commands.Link.Blacklist.Cleared = `Lista negra del servidor borrada`;
Commands.Link.Blacklist.All = {};
Commands.Link.Blacklist.All.Enabled = 'Borraré todos los enlaces';
Commands.Link.Blacklist.All.Disable = 'Ya no eliminaré todos los enlaces.';
Commands.Link.Whitelist = {};
Commands.Link.Whitelist.Add = (links) => `${links} Añadido a la lista blanca del servidor`;
Commands.Link.Whitelist.Remove = (links) => `${links} eliminado de la lista blanca del servidor`;
Commands.Link.Whitelist.Cleared = `Lista blanca del servidor borrada`;
Commands.Link.Action = {};
Commands.Link.Action.Set = (action, count) => `¡Ahora haré ${action} personas en ${count} ofensas!`;
Commands.Link.Action.Max = (setting, max) => `${setting} debe ser menor o igual que ${max}`;
Commands.Link.Action.Min = (setting, min) => `${setting} debe ser mayor o igual que ${min}`;
Commands.Link.Action.Delete = (count) => `¡He configurado los mensajes necesarios para la eliminación en ${count} mensajes!`;
Commands.Link.Action.Delay = (time) => `¡He establecido el retraso en ${time} segundos!`;
Commands.Link.Scanners = {};
Commands.Link.Scanners.VT = {};
Commands.Link.Scanners.VT.Enable = `Se ha habilitado el escáner VirusTotal`;
Commands.Link.Scanners.VT.Disable = `El escáner VirusTotal ha sido deshabilitado`;
Commands.Link.Scanners.VT.SetDetections = (num) => `Las detecciones mínimas de VirusTotal se han establecido en ${num}`;
Commands.Link.Scanners.BLP = {};
Commands.Link.Scanners.BLP.Enable = `La base de datos BlockListProject ha sido habilitada`;
Commands.Link.Scanners.BLP.Disable = `La base de datos BlockListProject ha sido deshabilitada`;
Commands.Link.Scanners.BLP.Malware = {};
Commands.Link.Scanners.BLP.Malware.Enable = `Se ha habilitado la base de datos de malware BlockListProject`;
Commands.Link.Scanners.BLP.Malware.Disable = `La base de datos de malware BlockListProject ha sido deshabilitada`;
Commands.Link.Scanners.BLP.Crypto = {};
Commands.Link.Scanners.BLP.Crypto.Enable = `Se ha habilitado la base de datos criptográfica BlockListProject`;
Commands.Link.Scanners.BLP.Crypto.Disable = `La base de datos criptográfica BlockListProject ha sido deshabilitada`;
Commands.Link.Scanners.BLP.Fraud = {};
Commands.Link.Scanners.BLP.Fraud.Enable = `Se ha habilitado la base de datos de fraude BlockListProject`;
Commands.Link.Scanners.BLP.Fraud.Disable = `La base de datos de fraude de BlockListProject ha sido deshabilitada`;
Commands.Link.Scanners.BLP.Scam = {};
Commands.Link.Scanners.BLP.Scam.Enable = `Se ha habilitado la base de datos de estafa BlockListProject`;
Commands.Link.Scanners.BLP.Scam.Disable = `La base de datos de estafa BlockListProject ha sido deshabilitada`;
Commands.Link.Scanners.BLP.Ransomware = {};
Commands.Link.Scanners.BLP.Ransomware.Enable = `Se ha habilitado la base de datos de ransomware BlockListProject`;
Commands.Link.Scanners.BLP.Ransomware.Disable = `La base de datos del ransomware BlockListProject se ha desactivado`;
Commands.Link.Scanners.BLP.Phishing = {};
Commands.Link.Scanners.BLP.Phishing.Enable = `Se ha habilitado la base de datos de phishing BlockListProject`;
Commands.Link.Scanners.BLP.Phishing.Disable = `La base de datos de phishing BlockListProject ha sido deshabilitada`;
Commands.Link.Scanners.GSB = {};
Commands.Link.Scanners.GSB.Enable = `Se ha habilitado el escáner GoogleSafeBrowsing`;
Commands.Link.Scanners.GSB.Disable = `Se inhabilitó el escáner GoogleSafeBrowsing`;
Commands.Link.Scanners.GSB.SocialEngineering = {};
Commands.Link.Scanners.GSB.SocialEngineering.Enable = `GoogleSafeBrowsing ahora buscará sitios web de ingeniería social`;
Commands.Link.Scanners.GSB.SocialEngineering.Disable = `GoogleSafeBrowsing ya no buscará sitios web de ingeniería social`;
Commands.Link.Scanners.GSB.UnwantedSoftware = {};
Commands.Link.Scanners.GSB.UnwantedSoftware.Enable = `GoogleSafeBrowsing ahora buscará sitios web con software no deseado`;
Commands.Link.Scanners.GSB.UnwantedSoftware.Disable = `GoogleSafeBrowsing ya no buscará sitios web con software no deseado`;
Commands.Link.Scanners.GSB.PotentiallyHarmful = {};
Commands.Link.Scanners.GSB.PotentiallyHarmful.Enable = `GoogleSafeBrowsing ahora buscará sitios web con aplicaciones potencialmente dañinas`;
Commands.Link.Scanners.GSB.PotentiallyHarmful.Disable = `GoogleSafeBrowsing ya no buscará sitios web con aplicaciones potencialmente dañinas`;

Commands.Warn = {};
Commands.Warn.WrongPerms = (user) => `¡El usuario ${user.username}#${user.discriminator} no ha sido anunciado porque tiene un rango superior o igual al tuyo!`;
Commands.Warn.WarnedEmbed = {};
Commands.Warn.WarnedEmbed.Description = (user, reason) => `Se ha advertido a ${user.username}#${user.discriminator} por el siguiente motivo: \n ${reason}`;
Commands.Warn.WarnedEmbed.Footer = (id) => `ID de advertencia: ${id}`;
Commands.Warn.Clear = {};
Commands.Warn.Clear.Removed = (id) => `¡Advertencia #${id} ha sido eliminada!`;
Commands.Warn.Clear.NotFound = (id) => `¡Advertencia #${id} no fue encontrada!`;
Commands.Warn.Clear.All = {};
Commands.Warn.Clear.All.Cleared = (warns) => `${warns} advertencias eliminadas!`;
Commands.Warn.Limit = {};
Commands.Warn.Limit.Kick = {};
Commands.Warn.Limit.Kick.Limit = (limit) => `¡Ahora expulsaré a los usuarios con ${limit} advertencias!`;
Commands.Warn.Limit.Kick.LimitZero = `¡Ya no expulsaré a los usuarios!`;
Commands.Warn.Limit.Ban = {};
Commands.Warn.Limit.Ban.Limit = (limit) => `¡Ahora prohibiré a los usuarios en ${limit} advierte!`;
Commands.Warn.Limit.Ban.LimitZero = `¡Ya no prohibiré a los usuarios!`;

Commands.Mute = {};
Commands.Mute.WrongPerms = (user) => `¡El usuario ${user.username}#${user.discriminator} no ha sido silenciado porque tiene un rango superior o igual al tuyo!`;
Commands.Mute.SetRole = {};
Commands.Mute.SetRole.Set = (role) => `Rol de silenciamiento establecido en ${role.name}`;

Commands.UnMute = {};
Commands.UnMute.WrongPerms = (user) => `¡El usuario ${user.username}#${user.discriminator} no ha sido silenciado porque tiene un rango superior o igual al tuyo!`;

Commands.Purge = {};
Commands.Purge.DeletedMessages = (num) => `¡${num} mensajes eliminados!`;
Commands.Purge.RegexInvalid = `Regex no válido`;

Commands.Moderation = {};
Commands.Moderation.Limit = {};
Commands.Moderation.Limit.Enable = (mod) => `¡He habilitado el módulo ${mod}!`;
Commands.Moderation.Limit.Disable = (mod) => `¡He deshabilitado el módulo ${mod}!`;
Commands.Moderation.Limit.Delay = {};
Commands.Moderation.Limit.Delay.Set = (time) => `¡He establecido el retraso en ${time} segundos!`;
Commands.Moderation.Limit.Add = {};
Commands.Moderation.Limit.Add.SetDelay = (time) => `¡He establecido el retraso en ${time} segundos!`;
Commands.Moderation.Limit.Add.SetLimit = (role, limit) => `¡He establecido el límite para ${role} en ${limit}!`;
Commands.Moderation.Limit.Add.LimitChanged = (role, limit) => `¡He cambiado el límite de ${role} a ${limit}!`;
Commands.Moderation.Limit.Remove = {};
Commands.Moderation.Limit.Remove.Removed = (role) => `He eliminado el límite de ${role}`;
Commands.Moderation.Limit.Remove.NoneRemoved = (role) => `${role} no tiene establecido un límite`;

Commands.Ban = {};
Commands.Ban.Banned = (user) => `¡El miembro ${user.username}#${user.discriminator} fue baneado!`;
Commands.Ban.LimitRached = `¡Has alcanzado tu límite de baneos!`;
Commands.Ban.BannedBy = (reason, user) => `${reason}\nProhibido por ${user.username}#${user.discriminator} (ID: ${user.id})`;
Commands.Ban.WrongPerms = (user) => `¡El usuario ${user.username}#${user.discriminator} no ha sido prohibido porque tiene un rango superior o igual al tuyo!`;
Commands.Ban.Clean = {};
Commands.Ban.Clean.Found = (amount) => `${amount} encontrado, eliminando! (Advertencia: se enviarán registros de spam)`;
Commands.Ban.Clean.Done = (amount) => `${amount} usuarios eliminados eliminar de la lista de prohibición`;
Commands.Ban.Clean.NoneFound = `No se encontraron usuarios eliminados`;
Commands.Ban.Clean.BanReason = (user) => `Usuario eliminado - La limpieza ocurrio por ${user.username}#${user.discriminator}`;

Commands.Kick = {};
Commands.Kick.Kicked = (user) => `¡El miembro ${user.username}#${user.discriminator} fue expulsado!`;
Commands.Kick.LimitRached = `¡Has alcanzado tu límite de expulsion!`;
Commands.Kick.KickedBy = (reason, user) => `${reason}\nExpulsado por ${user.username}#${user.discriminator} (ID: ${user.id})`;
Commands.Kick.WrongPerms = (user) => `¡El usuario ${user.username}#${user.discriminator} no ha sido expulsado porque tiene un rango superior o igual al tuyo!`;

Commands.UnBan = {};
Commands.UnBan.LimitRached = `¡Has alcanzado tu límite de unbaneos!`;
Commands.UnBan.UnBannedBy = (reason, user) => `${reason}\nUnbaneado por ${user.username}#${user.discriminator} (ID: ${user.id})`;
Commands.UnBan.BanNotFound = (user) => `${user} no esta baneado`;
Commands.UnBan.UnBanned = (user) => `${user} unbaneado`;
Commands.UnBan.UnBannedEmbed = {};
Commands.UnBan.UnBannedEmbed.Title = `----------Ban Info----------`;
Commands.UnBan.UnBannedEmbed.Footer = (user) => `Unbaneado por: ${user.username}#${user.discriminator}`;
Commands.UnBan.UnBannedEmbed.Moderator = `Moderador`;
Commands.UnBan.UnBannedEmbed.Reason = `Razón`;
Commands.UnBan.UnBannedEmbed.NoReason = `Sin motivo proporcionado`;

Commands.HackBan = {};
Commands.HackBan.HackBannedBy = (reason, user) => `${reason}\nHackBan por ${user.username}#${user.discriminator} (ID: ${user.id})`;
Commands.HackBan.AlreadyBannedEmbed = {};
Commands.HackBan.AlreadyBannedEmbed.Title = `Usuario ya baneado`;
Commands.HackBan.AlreadyBannedEmbed.User = `Usuario`;
Commands.HackBan.AlreadyBannedEmbed.Reason = `Razón`;
Commands.HackBan.BannedEmbed = {};
Commands.HackBan.BannedEmbed.Title = `Usuario Baneado`;
Commands.HackBan.BannedEmbed.NoReason = `***Sin motivo proporcionado***`;

Commands.Prefix = {};
Commands.Prefix.changed = (prefix) => `Prefijo cambiado a: ${prefix}`;
Commands.Prefix.notChanged = `El prefijo no cambió`;

Commands.Localisation = {};
Commands.Localisation.Language = {};
Commands.Localisation.Language.UnknownLanguage = `Lo sentimos, este idioma no existe. Puedes ayudar a traducir uniéndote a nuestro servidor de soporte`;
Commands.Localisation.Language.Set = `Idioma establecido en inglés`;
Commands.Localisation.Timezone = {};
Commands.Localisation.Timezone.UnknownTimezone = `Zona horaria desconocida`;
Commands.Localisation.Timezone.Set = `Zona horaria establecida`;

language.lang.Commands = Commands;

const Warn = {};
Warn.DMMessage                      =                       `❌ | ¡Usted ha sido advertido!`;
Warn.NoReason                       =                       `___**¡Ninguna razón especificada!**___`;
Warn.NoWarnsFound                   =                       `No se encontraron advertencias para este usuario!`;
Warn.WrongPerms                     =                       `¡No tiene los permisos necesarios para ver las advertencias de otros!`;
language.lang.Warn = Warn;

const Muted = {};
Muted.notMuted                      =                       `¡Ese usuario no está silenciado!`;
language.lang.Muted = Muted;

const Link = {};
Link.GlobalBlacklist                = (link) =>             `Enlace en la lista negra global: ${link}`;
Link.GlobalWhiteList                = (link) =>             `Enlace en la lista blanca global: ${link}`;
Link.ServerBlacklist                = (link) =>             `Enlace en la lista negra del servidor: ${link}`;
Link.ServerWhiteList                = (link) =>             `Enlace en la lista blanca del servidor: ${link}`;
Link.MaliciousLink                  =                       `Publicar un enlace malicioso`;
Link.VTBad                          = (positives, link) =>  `Enlace incorrecto (total de virus): ${positives} detecciones. Enlace: ${link}`;
/*Link.MessageDelete                  =                       `__***This message contains a blacklisted link or redirect but is server whitelisted! For your safety do not click the links!***__\n`;
Link.MessageDelete2                 =                       `__***This message contains a blacklisted link or redirect! For your safety do not click the links!***__\n`;
Link.MessageDelete3                 =                       `__***This message contains a link or redirect that has been blacklisted by the Admins of the server! For your safety do not click the links!***__\n`;*/
Link.MessageDelete                  =                       `__***¡Este mensaje fue eliminado por Link Scanner y puede contener un enlace malicioso o una redirección! ¡Por su seguridad, no haga clic en los enlaces!***__\n`;
Link.MessageDeleteBlacklistAll      =                       `__***¡El servidor tiene todos los enlaces en la lista negra! ¡Proceda con precaución!***__\n`;
Link.NoLinksFound                   =                       `¡Lo siento, no pude encontrar ningún enlace!`;
Link.DeleteReason                   =                       `¡Ese enlace se consideró malicioso y se eliminó!`;
Link.ReasonHeader                   =                       `Escáner de enlaces:`;
Link.BlackListAllReason             =                       `\nEl servidor tiene todos los enlaces en la lista negra`;
Link.VT = {};
Link.VT.Enable = `Se ha habilitado el escáner VirusTotal`;
Link.VT.Disable = `El escáner VirusTotal ha sido deshabilitado`;
Link.GSB = {}; // Google Safe Browsing
Link.GSB.Reason = (link, catString) => `Google Safe Browsing: ${link} (Categorías: ${catString})`;
Link.GSB.Categories = {
  MALWARE: 'malware',
  SOCIAL_ENGINEERING: 'ingeniería social',
  UNWANTED_SOFTWARE: 'software no deseado',
  POTENTIALLY_HARMFUL_APPLICATION: 'aplicación potencialmente dañina'
};
Link.BLP = {}; // BlockListProject
Link.BLP.Reason = (link, catString) => `BlockListProject database: ${link} (Categorías: ${catString})`;
Link.BLP.Categories = {
  malware: 'malware',
  crypto: 'cripto',
  fraud: 'fraude',
  scam: 'scam',
  ransomware: 'ransomware',
  phishing: 'phishing'
};
language.lang.Link = Link;

const Help = {};
Help.By = (m) => `SafetyAtLast™ Por ${m.username}#${m.discriminator}`;
Help.CommandHelp = {};
Help.CommandHelp.HelpTip = `Ejecute \`&help <categoría>\` para ver más comandos`;
Help.CommandHelp.Commands = `Comandos`;
Help.CommandHelp.Usage = `Uso`;
Help.CommandHelp.UnknownCat = `Categoría desconocida`;
language.lang.Help = Help;


let AutoMod = {};
AutoMod.DupeLimitReason                 =                       `¡Por favor, cálmate! (¡Deja de enviar spam con el mismo mensaje!)`;
AutoMod.SpamLimitReason                 =                       `¡Por favor, cálmate! (¡Deja de mandar spam!)`;
AutoMod.mentionsReason                  =                       `¡Por favor, cálmate! (¡Demasiadas menciones!)`;
AutoMod.roleMentionsReason              =                       `¡Por favor, cálmate! (¡Demasiadas menciones de roles!)`;
AutoMod.emojisReason                    =                       `¡Por favor, cálmate! (¡Demasiados emojis!)`;
AutoMod.antiZalgoReason                 =                       `Caracteres de Zalgo detectados (si esto es incorrecto, repórtelo)`;
language.lang.AutoMod = AutoMod;

// Filter
const Filter = {};
Filter.Reason                       = (content) =>          `Filtro de servidor - ${content}`;
Filter.EnabledName                  =                       `¡Ahora escanearé los nombres de usuario!`;
Filter.DisabledName                 =                       `¡No escanearé nombres de usuario!`;
Filter.DeleteReason                 =                       `¡Tu mensaje ha sido eliminado por el filtro del servidor!`;
language.lang.Filter = Filter;

// Permissions
const Permissions = {};
Permissions.administrator           =                       `Necesitas el permiso de 'administrador'`;
Permissions.dontHavePerm            = (perm) =>             `Necesitas el permiso '${perm}'`;
Permissions.NotEnoughPermsAdd       =                       `¡No tengo suficientes permisos para agregar el rol a ese usuario!`;
Permissions.NotEnoughPermsRemove    =                       `¡No tengo suficientes permisos para eliminar el rol!`;
Permissions.UserNotFoundInDB        =                       `¡Lo siento! Ese usuario no se encuentra en nuestra base de datos`;
Permissions.RoleNotFoundInDB        =                       `¡Lo siento! Ese rol no se encuentra en nuestra base de datos.`;
Permissions.MissingPermissionsEmbedTitle = `Permisos faltantes`;
Permissions.MissingPermissions = (perms) => `¡Me faltan permisos para ejecutar este comando! Necesito estos permisos\n${perms}`;
language.lang.Permissions = Permissions;

const DiscordPerms = {};
DiscordPerms.createInstantInvite = "Crear invitación instantánea";
DiscordPerms.kickMembers = "Expulsar miembros";
DiscordPerms.banMembers = "Banear miembros";
DiscordPerms.administrator = "Administrador";
DiscordPerms.manageChannels = "Gestionar Canales";
DiscordPerms.manageGuild = "Gestionar servidor";
DiscordPerms.addReactions = "Añadir reacciones";
DiscordPerms.viewAuditLog = "Ver el registro de auditoria";
DiscordPerms.voicePrioritySpeaker = "Prioridad de palabra";
DiscordPerms.voiceStream = "Video";
DiscordPerms.viewChannel = "Leer canales de texto y ver canales de voz";
DiscordPerms.sendMessages = "Enviar mensajes";
DiscordPerms.sendTTSMessages = "Enviar mensajes de texto a voz";
DiscordPerms.manageMessages = "Gestionar mensajes";
DiscordPerms.embedLinks = "Insertar enlaces";
DiscordPerms.attachFiles = "Adjuntar archivos";
DiscordPerms.readMessageHistory = "Leer el historial de mensajes";
DiscordPerms.mentionEveryone = "Mencionar @everyone";
DiscordPerms.externalEmojis = "Usar emojis externos";
DiscordPerms.viewGuildInsights = "Ver información del server";
DiscordPerms.voiceConnect = "Conectar";
DiscordPerms.voiceSpeak = "Hablar";
DiscordPerms.voiceMuteMembers = "Silenciar miembros";
DiscordPerms.voiceDeafenMembers = "Ensordecer miembros";
DiscordPerms.voiceMoveMembers = "Mover miembros";
DiscordPerms.voiceUseVAD = "Usar Actividad de voz";
DiscordPerms.changeNickname = "Cambiar apodo";
DiscordPerms.manageNicknames = "Gestionar apodos";
DiscordPerms.manageRoles = "Gestionar roles";
DiscordPerms.manageWebhooks = "Gestionar webhooks";
DiscordPerms.manageEmojis = "Gestionar emojis";
DiscordPerms.externalEmojis = "Usar emojis externos";
language.lang.DiscordPerms = DiscordPerms;

const CommandHandler = {};
CommandHandler.error = `¡Ha ocurrido un error inesperado, por favor reporte el error!`;
CommandHandler.noDMPerm = `No tengo permiso para DM este usuario`;
CommandHandler.noPerm = `No tengo permiso para hacer eso`;
CommandHandler.discordError = `Ocurrió un error en los servidores de Discord`;
CommandHandler.invalidArguments = `Argumentos inválidos`;
language.lang.CommandHandler = CommandHandler;

const Utility = {};
Utility.InvalidInvite = `¡Este servidor no tiene esa invitación!`;
language.lang.Utility = Utility;

// Bypasses
const Bypasses = {};
Bypasses.UserBypassed               = (user) =>             `Usuario '${user.username}#${user.discriminator}' bypaseado!`;
Bypasses.UserIDBypassed             = (userID) =>           `Usuario '${userID}' bypaseado!`;
Bypasses.RoleBypassed               = (role) =>             `Rol '${role.name}' bypaseado!`;
Bypasses.RoleIDBypassed             = (roleID) =>           `Rol '${roleID}' bypaseado!`;
Bypasses.UserIDRemove               = (userID) =>           `Usuario '${userID}' bypaseado!`;
Bypasses.UserRemove                 = (user) =>             `Usuario '${user.username}#${user.discriminator}' removido!`;
Bypasses.RoleIDRemove               = (roleID) =>           `Rol '${roleID}' removido!`;
Bypasses.RoleRemove                 = (role) =>             `Rol '${role.name} (${role.id})' removido!`;
Bypasses.ChannelBypassed            = (channel) =>          `Canal '${channel.name} (${channel.id})' bypaseado!`;
Bypasses.ChannelIDBypassed          = (channelID) =>        `Canal '${channelID}' bypaseado!`;
Bypasses.ChannelRemoved             = (channel) =>          `Canal '${channel.name} (${channel.id})' removido!`;
Bypasses.ChannelIDRemoved           = (channelID) =>        `Canal '${channelID}' removido!`;
Bypasses.MultiAdded                 = (items) =>            `${items} se han agregado para bypasear`;
Bypasses.MultiRemoved               = (items) =>            `${items} se han removido para bypasear`;
Bypasses.AllRemoved                 =                       `Todos los bypaseos removidos!`;
Bypasses.notFound                   =                       `Usuario o Rol no encontrado`;
language.lang.Bypasses = Bypasses;

// Roles
language.lang.CantFindRole         =                       `No pudimos encontrar ese rol`;
language.lang.DupeRole             =                       `Rol duplicado`;
language.lang.RemoveFail           =                       `No se ha podido eliminar el rol`;
language.lang.RoleDoesntExsist     =                       `El rol no existe`;
language.lang.Removed              =                       `Rol eliminado`;
language.lang.Added                =                       `Rol agregado`;
language.lang.AddedFail            =                       `No se pudo agregar el rol`;
language.lang.RolesAdded           =                       `El rol o roles han sido agregados`;
language.lang.Requested_By         = (user) =>             `Solicitado por: ${user.username}`;

const Logging = {};
Logging.Unset = "Desactivar"
Logging.Responsible = "Moderador responsable: "
Logging.NoReason = `***Sin motivo proporcionado***`;
Logging.Reason = `Razón`;
Logging.DeletedUser = `Usuario eliminado`;
Logging.DeletedChannel = `Canal eliminado`;
Logging.ClickHere = `Haga clic aquí`;
Logging.User = `Usuario`;
Logging.Date = `Fecha`;
Logging.Log = `Registro en línea`;
Logging.Enabled = `Activado`;
Logging.Disabled = `Desactivado`;
Logging.Channel = {};
Logging.Channel.ChannelName = `Nombre del Canal`;
Logging.Channel.Create = {};
Logging.Channel.Create.Text = `Canal de texto creado`;
Logging.Channel.Create.Voice = `Canal de voz creado`;
Logging.Channel.Create.Category = `Categoría Canal creado`;
Logging.Channel.Create.News = `Canal de noticias creado`;
Logging.Channel.Create.Store = `Canal de tienda creado`;
Logging.Channel.Create.Stage = `Canal de escenario creado`;
Logging.Channel.Create.StageOpen = `Escenario abierto`;
Logging.Channel.Create.StageClose = `Escenario cerrado`;
Logging.Channel.Create.Default = `Canal creado`;
Logging.Channel.Delete = {};
Logging.Channel.Delete.Text = `Canal de texto eliminado`;
Logging.Channel.Delete.Voice = `Canal de voz eliminado`;
Logging.Channel.Delete.Category = `Categoría Canal Eliminado`;
Logging.Channel.Delete.News = `Canal de noticias eliminado`;
Logging.Channel.Delete.Store = `Canal de tienda eliminado`;
Logging.Channel.Delete.Stage = `Canal de escenario eliminado`;
Logging.Channel.Delete.Default = `Canal eliminado`;
Logging.Channel.Update = {};
Logging.Channel.Update.Text = `Canal de texto actualizado`;
Logging.Channel.Update.Voice = `Canal de voz actualizado`;
Logging.Channel.Update.Category = `Categoría Canal actualizado`;
Logging.Channel.Update.News = `Canal de noticias actualizado`;
Logging.Channel.Update.Store = `Canal de tienda actualizado`;
Logging.Channel.Update.Stage = `Canal de escenario actualizado`;
Logging.Channel.Update.Default = `Canal actualizado`;
Logging.Channel.Update.NewName = `Nombre del nuevo canal`;
Logging.Channel.Update.OldName = `Nombre de canal anterior`;
Logging.Channel.Update.NewTopic = `Nuevo tema`;
Logging.Channel.Update.OldTopic = `Tema anterior`;
Logging.Channel.Update.NSFW = `NSFW`;
Logging.Channel.Update.NSFWTrue = `Establecer en verdadero`;
Logging.Channel.Update.NSFWFalse = `Establecer en falso`;
Logging.Channel.Update.NewRate = `Nuevo tiempo de modo lento`;
Logging.Channel.Update.OldRate = `Tiempo anterior en modo lento`;
Logging.Channel.Update.NewBitRate = `Nueva tasa de bits`;
Logging.Channel.Update.OldBitRate = `Tasa de bits anterior`;
Logging.Channel.Update.NewCategory = `Nueva categoría principal`;
Logging.Channel.Update.OldCategory = `Categoría principal anterior`;
Logging.Channel.Update.NoCategory = `En ninguna categoría`;
Logging.Channel.Update.DeletedCategory = `Categoría eliminada`;
Logging.Guild = {};
Logging.Guild.Ban = {};
Logging.Guild.Ban.Add = {};
Logging.Guild.Ban.Add.Title = `Miembro Baneado`;
Logging.Guild.Ban.Remove = {};
Logging.Guild.Ban.Remove.Title = `Miembro Unbaneado`;
Logging.Guild.Member = {};
Logging.Guild.Member.Username = `Usuario`;
Logging.Guild.Member.Add = {};
Logging.Guild.Member.Add.MemberAdded = `Miembro unido`;
Logging.Guild.Member.Add.BotAdded = `Bot agregado`;
Logging.Guild.Member.Add.AccountCreation = `Creación de cuenta`;
Logging.Guild.Member.Add.InviteUsed = `Invitación usada`;
Logging.Guild.Member.Add.CreatedBy = `Creado por`;
Logging.Guild.Member.Remove = {};
Logging.Guild.Member.Remove.MemberRemoved = `Miembro Eliminado`;
Logging.Guild.Member.Kick = {};
Logging.Guild.Member.Kick.MemberKicked = `Miembro Kickeado`;
Logging.Guild.Member.Update = {};
Logging.Guild.Member.Update.Title = `Usuario actualizado`;
Logging.Guild.Member.Update.OldUsername = `Nombre de usuario anterior`;
Logging.Guild.Member.Update.NewUsername = `Nuevo nombre de usuario`;
Logging.Guild.Member.Update.OldNick = `Apodo anterior`;
Logging.Guild.Member.Update.NewNick = `Nuevo apodo`;
Logging.Guild.Member.Update.GuildAvatar = `Avatar del servidor`;
Logging.Guild.Member.Update.GuildAvatarSet = `Avatar Establecido`;
Logging.Guild.Member.Update.GuildAvatarUpdated = `Avatar actualizado`;
Logging.Guild.Member.Update.GuildAvatarRemoved = `Avatar removido`;
Logging.Guild.Member.Update.OldRoles = `Roles eliminados`;
Logging.Guild.Member.Update.NewRoles = `Roles añadidos`;
Logging.Guild.Member.Update.DeletedRole = `Rol eliminado`;
Logging.Guild.Role = {};
Logging.Guild.Role.ClickHere = "Haga clic aquí para ver los permisos"
Logging.Guild.Role.RoleName = "Nombre de rol"
Logging.Guild.Role.Permissions = "Permisos"
Logging.Guild.Role.Managed = "Gestionado (rol de bot)"
Logging.Guild.Role.Created = {};
Logging.Guild.Role.Created.Title = `Rol creado`;
Logging.Guild.Role.Deleted = {};
Logging.Guild.Role.Deleted.Title = `Rol eliminado`;
Logging.Guild.Role.Updated = {};
Logging.Guild.Role.Updated.Title = `Rol actualizado`;
Logging.Guild.Role.Updated.OldName = `Nombre de función anterior`;
Logging.Guild.Role.Updated.NewName = `Nuevo nombre de rol`;
Logging.Guild.Role.Updated.OldColor = "Color anterior";
Logging.Guild.Role.Updated.NewColor = "Nuevo color";
Logging.Guild.Role.Updated.OldMention = "Mencionable Anterior";
Logging.Guild.Role.Updated.NewMention = "Nuevo mencionable";
Logging.Guild.Role.Updated.OldHoist = "¿Se mostraron los usuarios por separado?";
Logging.Guild.Role.Updated.NewHoist = "Ahora los usuarios se muestran separados";
Logging.Guild.Role.Updated.OldPerm = "Permiso anterior";
Logging.Guild.Role.Updated.NewPerm = "Nuevo permiso";
Logging.Guild.Update = {};
Logging.Guild.Update.Title = `Servidor actualizado`;
Logging.Guild.Update.GuildName = `Nombre del servidor`;
Logging.Guild.Update.OldGuildName = `Nombre anterior del servidor`;
Logging.Guild.Update.NewGuildName = `Nuevo nombre del servidor`;
Logging.Guild.Update.OldOwner = `Owner anterior del servidor`;
Logging.Guild.Update.NewOwner = `Nuevo owner del servidor`;
Logging.Guild.Update.OldVerification = `Nivel de verificación anterior`;
Logging.Guild.Update.NewVerification = `Nuevo nivel de verificación`;
Logging.Guild.Update.VerificationLevel = {
  0: "Irrestricto",
  1: "Correo electrónico verificado",
  2: "Registrado en discord por 5 minutos",
  3: "Esperar 10 minutos",
  4: "Número de teléfono verificado",
};
Logging.Guild.Update.OldMFA = `Anterior nivel de MFA`;
Logging.Guild.Update.NewMFA = `Nuevo nivel de MFA`;
Logging.Guild.Update.MFALevel0 = `Admins no requieren 2FA`;
Logging.Guild.Update.MFALevel1 = `Admins requieren 2FA`;
Logging.Guild.Update.OldAFK = `Anterior Canal AFK`;
Logging.Guild.Update.NewAFK = `Nuevo Canal AFK`;
Logging.Guild.Update.OldAFKTime = `Tiempo de espera de Afk anterior`;
Logging.Guild.Update.NewAFKTime = `Nuevo tiempo de espera de Afk`;
Logging.Guild.Update.PremiumProgressBar = `Barra de progreso premium`;
Logging.Guild.Update.Banner = `Banner actualizado`;
Logging.Guild.Update.DiscoverySplash = `Descubrimiento Splash actualizado`;
Logging.Message = {};
Logging.Message.NoContent = `Sin contenido`;
Logging.Message.UnknownAuthor = `Autor desconocido`;
Logging.Message.Jump = `Saltar al mensaje`;
Logging.Message.Delete = {};
Logging.Message.Delete.Message = `Mensaje borrado`;
Logging.Message.Delete.NotCached = `___**Contenido del mensaje desconocido, ¡Gracias Discord!**___`;
Logging.Message.Delete.Image = `Imagen eliminada`;
Logging.Message.Delete.Video = `Video eliminado`;
Logging.Message.BulkDelete = {};
Logging.Message.BulkDelete.Title = `Canal purgado`;
Logging.Message.BulkDelete.Count = `Mensajes eliminados`;
Logging.Message.Update = {};
Logging.Message.Update.Title = `Mensaje editado`;
Logging.Message.Update.OldContent = `Anterior Contenido`;
Logging.Message.Update.NewContent = `Nuevo Contenido`;
Logging.Message.Pinned = {};
Logging.Message.Pinned.Title = `Mensaje fijado`;
Logging.Message.UnPinned = {};
Logging.Message.UnPinned.Title = `Mensaje no fijado`;
Logging.Warn = {};
Logging.Warn.ID = `ID de advertencia`;
Logging.Warn.Warned = {};
Logging.Warn.Warned.Title = `Usuario advertido`;
Logging.Warn.Clear = {};
Logging.Warn.Clear.Title = `Advertencia Borrada`;
Logging.Warn.Clear.WarnedBy = `Advertido por`;
Logging.Warn.MultiClear = {};
Logging.Warn.MultiClear.Title = `Advertencias borradas`;
Logging.Warn.MultiClear.Count = `Conteo de advertencias`;
Logging.Mute = {};
Logging.Mute.Muted = {};
Logging.Mute.Muted.Title = `Usuario silenciado`;
Logging.Mute.UnMuted = {};
Logging.Mute.UnMuted.Title = `Usuario no silenciado`;
Logging.Voice = {};
Logging.Voice.Join = {};
Logging.Voice.Join.Title = `Canal de voz unido`;
Logging.Voice.Leave = {};
Logging.Voice.Leave.Title = `Canal de voz abandonado`;
Logging.Voice.Switch = {};
Logging.Voice.Switch.Title = `Canal Cambiado`;
Logging.Voice.Switch.From = `Desde`;
Logging.Voice.Switch.To = `Para`;
Logging.Voice.State = {};
Logging.Voice.State.Title = `Estado de voz actualizado`;
Logging.Voice.State.OldSelfDeafen = `Anterior Auto Ensordecer`;
Logging.Voice.State.NewSelfDeafen = `Nuevo Auto Ensordecer`;
Logging.Voice.State.Deafened = `Ensordecido`;
Logging.Voice.State.UnDeafened = `Desensordecido`;
Logging.Voice.State.OldSelfMuted = `Anterior Auto Muteo`;
Logging.Voice.State.NewSelfMuted = `Nuevo Auto Muteo`;
Logging.Voice.State.Muted = `Muteado`;
Logging.Voice.State.UnMuted = `Desmuteado`;
Logging.Voice.State.OldServerDeafen = `Anterior Ensordecimiento`;
Logging.Voice.State.NewServerDeafen = `Nuevo Ensordecimiento`;
Logging.Voice.State.ServerDeafened = `Ensordecimiento Servidor`;
Logging.Voice.State.ServerUnDeafened = `Desensordecido Servidor`;
Logging.Voice.State.OldServerMuted = `Anterior Muteo Servidor`;
Logging.Voice.State.NewServerMuted = `Nuevo Muteo Servidor`;
Logging.Voice.State.ServerMuted = `Servidor silenciado`;
Logging.Voice.State.ServerUnMuted = `Servidor no silenciado`;
Logging.Invite = {};
Logging.Invite.Code = `Código`;
Logging.Invite.Inviter = `Invitador`;
Logging.Invite.MaxUses = `Usos máximos`;
Logging.Invite.MaxAge = `Edad máxima`;
Logging.Invite.Membership = `Afiliación`;
Logging.Invite.TempMem = `Temporaria`;
Logging.Invite.PermMem = `Permanente`;
Logging.Invite.Created = {};
Logging.Invite.Created.Title = `Invitación creada`;
Logging.Invite.Removed = {};
Logging.Invite.Removed.Title = `Invitación eliminada`;
Logging.Thread = {};
Logging.Thread.ParentChannel = `Canal principal`;
Logging.Thread.Name = `Nombre del hilo`;
Logging.Thread.Unlocked = `Cualquiera puede Desarchivar`;
Logging.Thread.Locked = `Los moderadores solo pueden desarchivar`;
Logging.Thread.Create = {};
Logging.Thread.Create.Title = `Hilo creado`;
Logging.Thread.Delete = {};
Logging.Thread.Delete.Title = `Hilo eliminado`;
Logging.Thread.Update = {};
Logging.Thread.Update.Title = `Hilo actualizado`;
Logging.Thread.Update.Archived = `Hilo archivado`; //title
Logging.Thread.Update.UnArchived = `Hilo no archivado`; //title
Logging.Thread.Update.OldName = `Nombre Anterior de Hilo`;
Logging.Thread.Update.NewName = `Nuevo Nombre de Hilo`;
Logging.Thread.Update.NewThreadLocked = `Nuevo Hilo Bloqueado`;
Logging.Thread.Update.OldThreadLocked = `Anterior Hilo Bloqueado`;
Logging.Thread.Update.NewArchiveTime = `Nuevo tiempo de archivo`;
Logging.Thread.Update.OldArchiveTime = `Tiempo de archivo antiguo`;

language.lang.Logging = Logging;

module.exports = language;
