const language = {
  code: "en", // https://www.science.co.il/language/Locale-codes.php
  lang: {}
}

language.lang.BotName                  =                       `SafetyAtlast™`;
language.lang.BotNameBy                = (moto) =>             `SafetyAtlast™ By ${moto.username}#${moto.discriminator}`;
language.lang.Owner                    =                       `Moto#9138 \nThanks to GRIMM_\\_\\_\\_#6413 for ideas, logo & hosting the bot!`;
language.lang.ThanksToGrimm            =                       `Thanks to GRIMM_\\_\\_\\_#6413 for ideas, logo & hosting the bot!`;
language.lang.Cooldown_Message         =                       `Calm down! 3 seconds remaining! The timer wont reset until you stop!`;
language.lang.CantFindMember           =                       `Sorry I can't find that member`;
language.lang.Success                  =                       `✅ | Success!`;
language.lang.Nope                     =                       `❌ | Nope!`;
language.lang.ErrorOccured             =                       `An error occurred!`;
language.lang.MentionAndNameAndDiscrim = (user) =>             `${user.mention} (${user.username}#${user.discriminator})`;
language.lang.NameAndDiscrim           = (user) =>             `${user.username}#${user.discriminator}`;
language.lang.NameAndDiscrimAndID      = (user) =>             `${user.username}#${user.discriminator} (ID: ${user.id})`;
language.lang.ChannelMentionAndName    = (channel) =>          `${channel.mention} (#${channel.name})`;
language.lang.ChannelName              = (channel) =>          `#${channel.name}`;
language.lang.ClickHere = `Click Here`

const Embeds = {};

Embeds.Titles = {};
Embeds.Titles.MemberInfo = "Member Info";
Embeds.Titles.UserInfo = "User Info";
Embeds.Titles.InviteInfo = "Invite Info";
Embeds.Titles.GuildInfo = "Guild Info";

Embeds.SubTitles = {};
Embeds.SubTitles.Username = "Username";
Embeds.SubTitles.UserID = "UserID";
Embeds.SubTitles.JoinedGuild = "Joined Guild";
Embeds.SubTitles.AccountCreation = "Account Creation";
Embeds.SubTitles.Nickname = "Nickname";
Embeds.SubTitles.CurrentVoiceChannel = "Current Voice Channel";
Embeds.SubTitles.HighestRole = "Highest Role";
Embeds.SubTitles.Code = "Code";
Embeds.SubTitles.Created = "Created";
Embeds.SubTitles.Creator = "Creator";
Embeds.SubTitles.MaxAge = "Max Age (Time Left)";
Embeds.SubTitles.MaxUses = "Max Uses";
Embeds.SubTitles.Temporary = "Temporary";
Embeds.SubTitles.Uses = "Uses";
Embeds.SubTitles.Owner = "Owner";
Embeds.SubTitles.MFALevel = "MFA Level";
Embeds.SubTitles.ExplicitContentFilter = "Explicit Content Filter";
Embeds.SubTitles.DefaultNotifications = "Default Notifications";
Embeds.SubTitles.Region = "Region";
Embeds.SubTitles.VerificationLevel = "Verification Level";
Embeds.SubTitles.Categories = "Categories";
Embeds.SubTitles.TextChannels = "Text Channels";
Embeds.SubTitles.VoiceChannels = "Voice Channels";
Embeds.SubTitles.Roles = "Roles";
Embeds.SubTitles.Emojis = "Emojis";
Embeds.SubTitles.Members = "Members";
Embeds.SubTitles.OnlineTotal = "Online / Total";
Embeds.SubTitles.Bots = "Bots";

Embeds.Values = {};
Embeds.Values.Require2FA = "Admins require 2FA";
Embeds.Values.DontRequire2FA = "Admins don't require 2FA";
Embeds.Values.DontScanMessages = "Don't scan any messages";
Embeds.Values.ScanMessagesNoRole = "Scan messages from members without a role";
Embeds.Values.ScanMessagesAll = "Scan messages sent by all members";
Embeds.Values.AllMessages = "All Messages";
Embeds.Values.OnlyMentions = "Only @mentions";
Embeds.Values.None = "None";
Embeds.Values.Low = "Low";
Embeds.Values.Medium = "Medium";
Embeds.Values.TableFlip = "(╯°□°）╯︵ ┻━┻";
Embeds.Values.DoubleTableFlip = "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻";

language.lang.Embeds = Embeds;

const Commands = {};

Commands.Other = {};
Commands.Other.Credits = {}
Commands.Other.Credits.Title = "Credits";
Commands.Other.Credits.Description = (moto, grimm) => `**${language.lang.NameAndDiscrim(moto)}** - The Programmer\n**${language.lang.NameAndDiscrim(grimm)}** - Creating the logo & hosting the bot!`;
Commands.Other.Credits.BetaTestingCritiquing = "For Beta Testing and Critiquing"

Commands.Other.Invite = "Invite me with this link! <https://www.safetyatlast.net/invite>";

Commands.Other.Ping = {};
Commands.Other.Ping.Ping = "Ping"
Commands.Other.Ping.Pong = "Pong"
Commands.Other.Ping.Pending = (n, sl) => `🏓 ${n}: pending result\n💓 Heartbeat: ${sl}ms`;
Commands.Other.Ping.Result = (n, ms, sl) => `🏓 ${n}: ${ms}ms\n💓 Heartbeat: ${sl}ms`;

Commands.Other.Stats = {};
Commands.Other.Stats.Servers = "Servers";
Commands.Other.Stats.UnavailableGuilds = "unavailable guilds";
Commands.Other.Stats.Users = "Cached Users";
Commands.Other.Stats.Uptime = "Uptime";
Commands.Other.Stats.ShardsOnline = "Shards Online";
Commands.Other.Stats.ShardStatus = "Server Shard Status";
Commands.Other.Stats.Shard = "Shard";
Commands.Other.Stats.GlobalBlacklistLinks = "Global Blacklisted Links";
Commands.Other.Stats.GlobalWhitelistLinks = "Global Whitelisted Links";
Commands.Other.Stats.ServerBlacklistLinks = "Server Blacklisted Links";
Commands.Other.Stats.ServerWhitelistLinks = "Server Whitelisted Links";
Commands.Other.Stats.CPUAverage = "Cpu Usage (Avg)";
Commands.Other.Stats.RamUsage = "Ram Usage";

Commands.Other.Support = "If you need help feel free to ask here: https://discord.gg/F5CZSxh";

Commands.Utility = {};
Commands.Utility.RolePersist = {};
Commands.Utility.RolePersist.Enabled = `I will now record users roles and give them back when they join!`;
Commands.Utility.RolePersist.Disable = `I will no longer record users roles and give them back when they join!`;
Commands.Utility.RolePersist.AddingUsers = (amount) => `Adding ${amount} users!`;
Commands.Utility.RolePersist.AddingUsersDone = (amount) => `Added ${amount} users!`;

Commands.Utility.RolePersist.Remove = {};
Commands.Utility.RolePersist.Remove.NoPermission = `I don't have permission to manage roles!`;
Commands.Utility.RolePersist.Remove.UserNotFoundInDB = `Sorry! That user is not found in our database`;
Commands.Utility.RolePersist.Remove.UserRemoved = `Removed user from database`;
Commands.Utility.RolePersist.Remove.cleared = `Removed all users from db`;
Commands.Utility.RolePersist.Remove.RemovedMulti = (r) => `Removed ${r} users from db`;
Commands.Utility.RolePersist.Remove.RemovedNone = `No users removed`;

Commands.Utility.AutoRole = {};
Commands.Utility.AutoRole.enable = `I will now give people roles when they join!`;
Commands.Utility.AutoRole.disable = `I wont give people roles when they join!`;
Commands.Utility.AutoRole.roleAdded = `The role has been added`;
Commands.Utility.AutoRole.roleRemove = `The role has been removed`;
Commands.Utility.AutoRole.rolesRemove = `The role or roles have been removed`;

Commands.Logging = {};
Commands.Logging.MissingPermission = `❌ | I'm missing permissions in the log channel!\nIf this is a bug please report it by typing '&support'`;
Commands.Logging.MissingPermissionEmbedLinks = `❌ | I'm missing "embed links" permissions in the log channel!\nIf this is a bug please report it by typing '&support'`;
Commands.Logging.MissingAccess = `❌ | I'm missing access in the log channel! \nIf this is a bug please report it by typing '&support'`;
Commands.Logging.Set = {};
Commands.Logging.Set.ChannelSet = (channel, type) => `${channel.mention} has been set to ${type} logs`;
Commands.Logging.Set.UnknownCategory = (type) => `Sorry, ${type} is not a category!\nCategories available:\n- all\n- mod\n- voice\n- message\n- server`;
Commands.Logging.Set.ImageLogWarn = `Warning: For image logging to work the logging channel must be set as NSFW, this is to comply with discord TOS.`;
Commands.Logging.Set.Everything = (channel) => `${channel.mention} has been set to log everything`;
Commands.Logging.Remove = {};
Commands.Logging.Remove.ChannelRemove = (type) => `I will not log ${type} anymore`;
Commands.Logging.Override = {};
Commands.Logging.Override.UnknownOverride = (type) => `Sorry, ${type} is not a override!\nTo view overrides available run the command \`&logging override list\``;
Commands.Logging.Override.OverrideSet = (channel, type) => `Override ${type} has been set to channel ${channel.mention}`;
Commands.Logging.Override.OverrideRemove = (type) => `Override ${type} has been removed`;
Commands.Logging.Override.NotRemoved = (type) => `Override ${type} does not exist and was not removed`;
Commands.Logging.List = {};
Commands.Logging.List.Title = "Available Overrides";

Commands.Permissions = {};
Commands.Permissions.PermDoesntExist = (perm) => `Sorry the perm ${perm} doesn't exist`;
Commands.Permissions.Add = {};
Commands.Permissions.Add.AddedPerms = (role) => `Permissions have been added to ${role.name}`;
Commands.Permissions.Remove = {};
Commands.Permissions.Remove.NoneRemoved = `No perms removed`;
Commands.Permissions.Remove.RemovedPerms = (role) => `Permissions have been removed from ${role.name}`;
Commands.Permissions.Preset = {};
Commands.Permissions.Preset.Title = (preset) => `Permissions for Preset: ${preset}`;
Commands.Permissions.Preset.Set = (preset, role) => `The role ${role.name} now has ${preset.name} permissions`;
Commands.Permissions.Preset.List = {};
Commands.Permissions.Preset.List.Title = "Presets";
Commands.Permissions.List = {};
Commands.Permissions.List.Title = "Available Permissions";
Commands.Permissions.List.Description = "[Click Here To View](https://safetyatlast.net/permissions)";
Commands.Permissions.List.Roles = {};
Commands.Permissions.List.Roles.Title = "Roles";
Commands.Permissions.List.Role = {};
Commands.Permissions.List.Role.Title = (role) => `Permissions for ${role.name}`;
Commands.Permissions.List.Role.Description = (id) => `Click Here To View](https://www.safetyatlast.net/logs/${id})`;
Commands.Permissions.List.Role.NoneFound = (role) => `No permissions were found for ${role.name}`;

Commands.Filter = {};
Commands.Filter.Enable = `I will now scan messages!`;
Commands.Filter.Disabled = `I will not scan messages!`;
Commands.Filter.Setup = {};
Commands.Filter.Setup.Set = (Delay, Delete, Warn, Mute, Kick, Ban, InviteFilter, IPFilter, IPv4, IPv6, ILan, ILH) => `\`\`\`Filter Settings:\n\tDelay: ${Delay} seconds\n\tDelete: ${Delete} offenses\n\tWarn: ${Warn} offenses\n\tMute: ${Mute} offenses\n\tKick: ${Kick} offenses\n\tBan: ${Ban} offenses\n\tInvite Filter: ${InviteFilter}\n\tIP Filter: ${IPFilter}\n\tIPv4: ${IPv4}\n\tIPv6: ${IPv6}\n\tIgnoreLan: ${ILan}\n\tIgnoreLocalHost: ${ILH}\`\`\``;
Commands.Filter.Setup.Applying = `I will start protecting this server with default values!`;
Commands.Filter.Action = {};
Commands.Filter.Action.Set = (action, count) => `I will now ${action} users at ${count} offenses!`;
Commands.Filter.Action.SetDeleted = (count) => `I will now delete messages at ${count} offenses!`;
Commands.Filter.Action.SetDelay = (delay) => `I have set the delay to ${delay} seconds!`;
Commands.Filter.Action.Max = (setting, max) => `${setting} must be less than or equal to ${max}`;
Commands.Filter.Action.Min = (setting, min) => `${setting} must be more than or equal to ${min}`;
Commands.Filter.Word = {};
Commands.Filter.Word.Enable = `I will now scan messages for listed words`;
Commands.Filter.Word.Disable = `I will no longer scan messages for listed words`;
Commands.Filter.Word.Add = {};
Commands.Filter.Word.Add.WordsAdded = `Words have been added`;
Commands.Filter.Word.Remove = {};
Commands.Filter.Word.Remove.WordsRemoved = `Words have been removed`;
Commands.Filter.Word.Remove.NothingToRemove = `No words removed`;
Commands.Filter.Word.Remove.All = {};
Commands.Filter.Word.Remove.All.Cleared = `Removed all words and phrases from word filter`;
Commands.Filter.Word.ListEmbed = {};
Commands.Filter.Word.ListEmbed.Title = `Filter - Word List`;
Commands.Filter.Word.ListEmbed.NoWords = `No words added to word list`;
Commands.Filter.Word.Mode = {};
Commands.Filter.Word.Mode.Set = (mode) => `Word filter mode set to ${mode}`;
Commands.Filter.IP = {};
Commands.Filter.IP.Enable = `I will now scan messages for IPs`;
Commands.Filter.IP.Disable = `I will no longer scan messages for IPs`;
Commands.Filter.IP.IPv4 = {};
Commands.Filter.IP.IPv4.Enable = `I will now detect IPv4 addresses`;
Commands.Filter.IP.IPv4.Disable = `I will no longer detect IPv4 addresses`;
Commands.Filter.IP.IPv6 = {};
Commands.Filter.IP.IPv6.Enable = `I will now detect IPv6 addresses`;
Commands.Filter.IP.IPv6.Disable = `I will no longer detect IPv6 addresses`;
Commands.Filter.IP.IgnoreLan = {};
Commands.Filter.IP.IgnoreLan.Enable = `I will now ignore lan IP addresses`;
Commands.Filter.IP.IgnoreLan.Disable = `I will no longer ignore lan IP addresses`;
Commands.Filter.IP.IgnoreLocalHost = {};
Commands.Filter.IP.IgnoreLocalHost.Enable = `I will now ignore localhost IP addresses`;
Commands.Filter.IP.IgnoreLocalHost.Enable = `I will no longer ignore localhost IP addresses`;
Commands.Filter.Invite = {};
Commands.Filter.Invite.Enable = `I will now scan messages for invites`;
Commands.Filter.Invite.Disable = `I will no longer scan messages for invites`;
Commands.Filter.Invite.IgnoreOwn = {};
Commands.Filter.Invite.IgnoreOwn.Enable = `I will now ignore server invites belonging to this server`;
Commands.Filter.Invite.IgnoreOwn.Disable = `I will no longer ignore server invites belonging to this server`;
Commands.Filter.Bypass = {};
Commands.Filter.Bypass.Remove = {};
Commands.Filter.Bypass.Remove.NoneRemoved = `Nothing removed from bypass`;

Commands.EventMessages = {};
Commands.EventMessages.SetChannel = (channel) => `I have set the channel to ${channel.name}`;
Commands.EventMessages.SetMessage = (content) => `I have set the message to ${content}`;
Commands.EventMessages.Test = `Testing`;
Commands.EventMessages.MessageNotSet = `Message not set!`;
Commands.EventMessages.Test = `Testing`;
Commands.EventMessages.Welcome = {};
Commands.EventMessages.Welcome.Enable = `I have enabled welcome messages!`;
Commands.EventMessages.Welcome.Disable = `I have disable welcome messages!`;
Commands.EventMessages.Goodbye = {};
Commands.EventMessages.Goodbye.Enable = `I have enabled goodbye messages!`;
Commands.EventMessages.Goodbye.Disable = `I have disable goodbye messages!`;
Commands.EventMessages.Kick = {};
Commands.EventMessages.Kick.Enable = `I have enabled kick messages!`;
Commands.EventMessages.Kick.Disable = `I have disable kick messages!`;
Commands.EventMessages.Ban = {};
Commands.EventMessages.Ban.Enable = `I have enabled ban messages!`;
Commands.EventMessages.Ban.Disable = `I have disable ban messages!`;

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
Commands.Link.Blacklist.NotInBlacklist = `This link isn't in the blacklist`;
Commands.Link.Blacklist.AlreadyInBlacklist = `This link is in the blacklist already`;
Commands.Link.Blacklist.Cleared = `Server blacklist cleared`;
Commands.Link.Blacklist.All = {};
Commands.Link.Blacklist.All.Enabled = 'I will delete all links';
Commands.Link.Blacklist.All.Disable = 'I will no longer delete all links';
Commands.Link.Whitelist = {};
Commands.Link.Whitelist.Add = (links) => `${links} added to the server whitelist`;
Commands.Link.Whitelist.Remove = (links) => `${links} removed from the server whitelist`;
Commands.Link.Whitelist.AlreadyInWhitelist = `This link is in the whitelist already`;
Commands.Link.Whitelist.NotInWhitelist = `This link isn't in the whitelist`;
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
Commands.Link.Scanners.VT.MinDetections = `Detections must be above 0`;
Commands.Link.Scanners.VT.MaxDetections = `Detections must be less than or equal to 100`;
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
Commands.Warn.WarnBot = `You cannot warn a bot`;
Commands.Warn.WarnSelf = `You cannot warn your self`;
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
Commands.Mute.AlreadyMuted = `This user is already muted`;
Commands.Mute.MuteSelf = `You can't mute yourself`;
Commands.Mute.MuteBot = `You can't mute a bot`;
Commands.Mute.MuteMe = `You can't mute me`;
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
DiscordPerms.useExternalEmojis = "Use External Emojis";
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
DiscordPerms.manageEmojisAndStickers = "Manage Emojis & Stickers";
DiscordPerms.useApplicationCommands = "Use Application Commands";
DiscordPerms.voiceRequestToSpeak = "Request to Speak";
DiscordPerms.manageEvents = "Manage Events";
DiscordPerms.manageThreads = "Manage Threads";
DiscordPerms.createPublicThreads = "Create Public Threads";
DiscordPerms.createPrivateThreads = "Create Private Threads";
DiscordPerms.useExternalStickers = "Use External Stickers";
DiscordPerms.sendMessagesInThreads = "Send Messages In Threads";
DiscordPerms.startEmbeddedActivities = "Start Embedded Activities";
DiscordPerms.moderateMembers = "Moderate Members";
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
Logging.Guild.Member.Timeout = {};
Logging.Guild.Member.Timeout.TimedOut = `Member Timed Out`;
Logging.Guild.Member.Timeout.TimedOutRemoved = `Member Timed Out Removed`;
Logging.Guild.Member.Timeout.Until = `Timed Out Until`;
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