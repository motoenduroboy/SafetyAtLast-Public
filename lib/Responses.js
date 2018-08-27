module.exports.EnableOptions    = ["true", "on", "enable", "yep", "ye", "yeah", "yes", "y", "t", "1"]; // MUST BE LOWERCASE
module.exports.DisableOptions   = ["false", "off", "disable", "nope", "na", "nah", "no", "n", "f", "0"]; // MUST BE LOWERCASE

module.exports.Owner                    =                       `𝓜𝓸𝓽𝓸#0306 \nThanks to GRIMM_\\_\\_\\_#6413 for ideas, logo & hosting the bot!`;
module.exports.Cooldown_Message         =                       `Calm down! 3 seconds remaining! The timer wont reset until you STAP!`;
module.exports.CantFindMember           =                       `Sorry I can't find that member`;
module.exports.Success                  =                       `✅ | Success!`;
module.exports.Nope                     =                       `❌ | Nope!`;
module.exports.ErrorOccured             =                       `An error occurred!`;
module.exports.NotAModOrHigher          =                       `You are not a mod or higher!`;
module.exports.CantFindThatUser         =                       `Sorry I can't find that member!`;
module.exports.ChangedTo                = (setting, data) =>    `${setting} changed to: ${data}`;
module.exports.MentionAndNameAndDiscrim = (user) =>             `${user.mention} (${user.username}#${user.discriminator})`;
module.exports.NameAndDiscrim           = (user) =>             `${user.username}#${user.discriminator}`;
module.exports.NameAndDiscrimAndID      = (user) =>             `${user.username}#${user.discriminator} (ID: ${user.id})`;
module.exports.ChannelMentionAndname    = (channel) =>          `${channel.mention} (#${channel.name})`;

// Moderation
let Moderation = {};
Moderation.BanWrongPerms2               = (user) =>             `The user ${user.username}#${user.discriminator} has not been banned because they are higher or equal rank than you!`;
Moderation.KickWrongPerms2              = (user) =>             `The user ${user.username}#${user.discriminator} has not been kicked because they are higher or equal rank than you!`;
Moderation.Kicked                       = (user) =>             `Member ${user.username}#${user.discriminator} was kicked!`;
Moderation.Banned                       = (user) =>             `Member ${user.username}#${user.discriminator} was banned!`;
Moderation.KickedBy                     = (reason, user) =>     `${reason} \nKicked by ${user.username}#${user.discriminator} (ID: ${user.id})`;
Moderation.BannedBy                     = (reason, user) =>     `${reason} \nBanned by ${user.username}#${user.discriminator} (ID: ${user.id})`;
Moderation.UnBannedBy                   = (user) =>             `UnBanned By ${user.username}#${user.discriminator} (ID: ${user.id})`;
Moderation.HackBannedBy                 = (reason, user) =>     `${reason} \nHackBanned By ${user.username}#${user.discriminator} (ID: ${user.id})`;
module.exports.Moderation = Moderation;

let AutoMod = {};
AutoMod.DupeLimitReason                 =                       `Please calm down mate! (Stop spamming the same message!)`;
AutoMod.SpamLimitReason                 =                       `Please calm down mate! (Stop spamming!)`;
AutoMod.mentionsReason                  =                       `Please calm down mate! (Too many mentions!)`;
AutoMod.roleMentionsReason              =                       `Please calm down mate! (Too many role mentions!)`;
AutoMod.emojisReason                    =                       `Please calm down mate! (Too many emojis!)`;
AutoMod.antiZalgoReason                 =                       `Zalgo characters detected (If this is wrong please report it)`;
AutoMod.AntiDupeEnable                  =                       `I have enabled AntiDupe module!`;
AutoMod.AntiDupeDisable                 =                       `I have disabled AntiDupe module!`;
AutoMod.AntiDupeDelay                   = (time) =>             `I have set the delay to ${time} seconds!`;
AutoMod.AntiDupeDelete                  = (msgs) =>             `I have set the messages required for deletion to ${msgs} messages!`;
AutoMod.AntiDupeWarn                    = (msgs) =>             `I will now warn people at ${msgs} messages!`;
AutoMod.AntiDupeMute                    = (msgs) =>             `I will now mute people at ${msgs} messages!`;
AutoMod.AntiDupeKick                    = (msgs) =>             `I will now kick people at ${msgs} messages!`;
AutoMod.AntiDupeBan                     = (msgs) =>             `I will now ban people at ${msgs} messages!`;
AutoMod.AntiSpamEnable                  =                       `I have enabled AntiSpam module!`;
AutoMod.AntiSpamDisable                 =                       `I have disabled AntiSpam module!`;
AutoMod.AntiSpamDelay                   = (time) =>             `I have set the delay to ${time} seconds!`;
AutoMod.AntiSpamDelete                  = (msgs) =>             `I have set the messages required for deletion to ${msgs} messages!`;
AutoMod.AntiSpamWarn                    = (msgs) =>             `I will now warn people at ${msgs} messages!`;
AutoMod.AntiSpamMute                    = (msgs) =>             `I will now mute people at ${msgs} messages!`;
AutoMod.AntiSpamKick                    = (msgs) =>             `I will now kick people at ${msgs} messages!`;
AutoMod.AntiSpamBan                     = (msgs) =>             `I will now ban people at ${msgs} messages!`;
AutoMod.AntiModMaxMentionsEnable        =                       `I have will now scan messages for mentions!`;
AutoMod.AntiModMaxMentionsDisable       =                       `I have will not scan messages for mentions!`;
AutoMod.AntiModMaxMentions              = (num) =>              `I have set the mex mentions to ${num} mentions!`;
AutoMod.AntiModMaxMentionWarn           = (msgs) =>             `I will now warn people at ${msgs} messages!`;
AutoMod.AntiModMaxMentionMute           = (msgs) =>             `I will now mute people at ${msgs} messages!`;
AutoMod.AntiModMaxMentionKick           = (msgs) =>             `I will now kick people at ${msgs} messages!`;
AutoMod.AntiModMaxMentionBan            = (msgs) =>             `I will now ban people at ${msgs} messages!`;
AutoMod.AntiModMaxMentionsDelay         = (time) =>             `I have set the delay to ${time} seconds!`;
AutoMod.AntiModMaxRoleMentionsEnable    =                       `I have will now scan messages for rolementions!`;
AutoMod.AntiModMaxRoleMentionsDisable   =                       `I have will not scan messages for rolementions!`;
AutoMod.AntiModMaxRoleMentions          = (num) =>              `I have set the mex role mentions to ${num} role mentions!`;
AutoMod.AntiModMaxRoleMentionWarn       = (msgs) =>             `I will now warn people at ${msgs} messages!`;
AutoMod.AntiModMaxRoleMentionMute       = (msgs) =>             `I will now mute people at ${msgs} messages!`;
AutoMod.AntiModMaxRoleMentionKick       = (msgs) =>             `I will now kick people at ${msgs} messages!`;
AutoMod.AntiModMaxRoleMentionBan        = (msgs) =>             `I will now ban people at ${msgs} messages!`;
AutoMod.AntiModMaxRoleMentionsDelay     = (time) =>             `I have set the delay to ${time} seconds!`;
AutoMod.AntiModMaxEmojisEnable          =                       `I have will now scan messages for emojis!`;
AutoMod.AntiModMaxEmojisDisable         =                       `I have will not scan messages for emojis!`;
AutoMod.AntiModMaxEmojis                = (num) =>              `I have set the mex role mentions to ${num} emojis!`;
AutoMod.AntiModMaxEmojisWarn            = (msgs) =>             `I will now warn people at ${msgs} messages!`;
AutoMod.AntiModMaxEmojisMute            = (msgs) =>             `I will now mute people at ${msgs} messages!`;
AutoMod.AntiModMaxEmojisKick            = (msgs) =>             `I will now kick people at ${msgs} messages!`;
AutoMod.AntiModMaxEmojisBan             = (msgs) =>             `I will now ban people at ${msgs} messages!`;
AutoMod.AntiModMaxEmojisDelay           = (time) =>             `I have set the delay to ${time} seconds!`;
AutoMod.AntiModAntiZalgoEnable          =                       `I have will now scan messages for zalgo!`;
AutoMod.AntiModAntiZalgoDisable         =                       `I have will not scan messages for zalgo!`;
module.exports.AutoMod = AutoMod;

// Bypasses
let Bypasses = {};
Bypasses.UserBypassed               = (user) =>             `User '${user.username}#${user.discriminator}' bypassed!`;
Bypasses.UserIDBypassed             = (userID) =>           `User '${userID}' bypassed!`;
Bypasses.RoleBypassed               = (role) =>             `Role '${role.name}' bypassed!`;
Bypasses.RoleIDBypassed             = (roleID) =>           `Role '${roleID}' bypassed!`;
Bypasses.UserIDRemove               = (userID) =>           `User '${userID}' bypassed!`;
Bypasses.UserRemove                 = (user) =>             `User '${user.username}#${user.discriminator}' removed!`;
Bypasses.RoleIDRemove               = (roleID) =>           `Role '${roleID}' removed!`;
Bypasses.RoleRemove                 = (role) =>             `Role '${role.name} (${role.id})' removed!`;
Bypasses.AllRemoved                 =                       `All bypasses removed!`;
Bypasses.notFound                   =                       `User or Role was not found`;
module.exports.Bypasses = Bypasses;

// Roles
module.exports.CantFindRole         =                       `We could not find that role`;
module.exports.DupeRole             =                       `Duplicate role`;
module.exports.RemoveFail           =                       `Role removal failed`;
module.exports.RoleDoesntExsist     =                       `Role doesn't exist`;
module.exports.Removed              =                       `Role removed`;
module.exports.Added                =                       `Role added`;
module.exports.AddedFail            =                       `Role addition failed`;
module.exports.RolesAdded           =                       `The role or roles have been added`;

// Logging
let Logging = {};
Logging.MissingPermission           =                       `❌ | I'm missing permissions in the log channel! \nIf this is a bug please report it by typing '&support'`;
Logging.MissingAccess               =                       `❌ | I'm missing access in the log channel! \nIf this is a bug please report it by typing '&support'`;
Logging.UnkownCategory              = (type) =>             `Sorry, ${type} is not a category!\nCategories available:\n- all\n- mod\n- voice\n- message\n- server`;
Logging.UnkownOverride              = (type) =>             `Sorry, ${type} is not a override!\nTo view overrides available run the command \`&logging override list\``;
Logging.ChannelSet                  = (channel, type) =>    `${channel.mention} has been set to ${type} logs`;
Logging.OverrideSet                 = (channel, type) =>    `Override ${type} has been set to channel ${channel.mention}`;
Logging.OverrideRemove              = (type) =>             `Override ${type} has been removed`;
Logging.Everything                  = (channel) =>          `${channel.mention} has been set to log everything`;
module.exports.Logging = Logging;

module.exports.Requested_By         = (user) =>             `Requested by: ${user.username}`;

// Permissions
let Permissions = {};
Permissions.administrator           =                       `You require 'administrator' permission`;
Permissions.NotEnoughPermsAdd       =                       `I do not have enough permissions to add the role to that user!`;
Permissions.NotEnoughPermsRemove    =                       `I do not have enough permissions to remove the role!`;
Permissions.UserNotFoundInDB        =                       `Sorry! That user is not found in our database`;
Permissions.RemovedPerm             = (perm, role) =>       `Removed ${perm} from ${role}!`;
Permissions.AddedPerm               = (perm, role) =>       `Added ${perm} to ${role}!`;
Permissions.PermDoesntExist         = (perm) =>             `Sorry the perm ${perm} doesn't exist`;
Permissions.PermAlreadyExsit        = (perm, role) =>       `The role ${role} already has the perm ${perm}`;
Permissions.PresetSet               = (preset, role) =>     `The role ${role.name} now has ${preset.name} permissions`;
Permissions.NoneFound               = (role) =>             `No permissions where found for ${role.name}`;
module.exports.Permissions = Permissions;

// Link
let Link = {};
Link.GlobalBlacklist                =                       `Link on global blacklist`;
Link.MaliciousLink                  =                       `Posting a malicious link`;
Link.GSBBad                         = (value) =>            `Bad Link (Google Safe Browsing): ${value}`;
Link.VTBad                          = (da) =>               `Bad Link (Virus Total): ${da.positives} detections!`;
Link.ModOrHigher                    =                       `You are not a mod or higher!`;
Link.LinkEnable                     =                       `I have enabled link scanning!`;
Link.LinkDisable                    =                       `I have disabled link scanning!`;
Link.LinkReactionsEnable            =                       `I have enabled reactions for link scanning!`;
Link.LinkReactionsDisable           =                       `I have disabled reactions for link scanning!`;
Link.LinkAutoWarnEnable             =                       `I will now warn people for posting malicious links`;
Link.LinkAutoWarnDisable            =                       `I will not warn people for posting malicious links`;
Link.LinkAutoMuteEnable             =                       `I will now mute people for posting malicious links`;
Link.LinkAutoMuteDisable            =                       `I will not mute people for posting malicious links`;
Link.Blacklistall                   =                       `I will delete all links`;
Link.BlacklistallDisable            =                       `I will no longer delete all links`;
Link.Blacklist                      =                       `I will now delete that link!`;
Link.BlacklistRemove                =                       `Link removed`;
Link.Exsist                         =                       `That link already exsits`;
Link.DoesntExsist                   =                       `That link doesn't exsits`;
Link.Whitelist                      =                       `I will no longer scan that link!`;
Link.WhitelistRemove                =                       `Link removed`;
Link.MessageDelete                  =                       `__***This message contains a blacklisted link or redirect but is server whitelisted! For your safety do not click the links!***__\n`;
Link.MessageDelete2                 =                       `__***This message contains a blacklisted link or redirect! For your safety do not click the links!***__\n`;
module.exports.Link = Link;

// Warn
let Warn = {};
Warn.DMMessage                      =                       `❌ | You have been warned!`;
Warn.NoReason                       =                       `___**No reason specified!**___`;
Warn.Removed                        = (id) =>               `Warn #${id} has been removed!`;
Warn.RemoveNotFound                 = (id) =>               `Warn #${id} was not found!`;
Warn.NoWarnsFound                   =                       `No warns were found for this user!`;
Warn.WrongPerms                     =                       `You lack the required permissions to view others warns!`;
Warn.ChatMessage                    = (user, reason) =>     `${user.username}#${user.discriminator} has been warned for the following reason: \n ${reason}`;
Warn.WrongPerms2                    = (user) =>             `The user ${user.username}#${user.discriminator} has not been warned because they are higher or equal rank than you!`;
Warn.WarnsCleared                   = (warns) =>            `${warns} warns were cleared!`;
Warn.kickLimit                      = (limit) =>            `I will now kick users at ${limit} warns!`;
Warn.kickLimitZero                  =                       `I will no longer kick users!`;
Warn.banLimit                       = (limit) =>            `I will now ban users at ${limit} warns!`;
Warn.banLimitZero                   =                       `I will no longer ban users!`;
module.exports.Warn = Warn;

// Muted
let Muted = {};
Muted.notMuted                      =                       `That user is not muted!`;
Muted.WrongPerms2                   = (user) =>             `The user ${user.username}#${user.discriminator} has not been muted because they are higher or equal rank than you!`;
Muted.UnMutedWrongPerms2            = (user) =>             `The user ${user.username}#${user.discriminator} has not been unmuted because they are higher or equal rank than you!`;
module.exports.Muted = Muted;

// Role Persist
let RolePersist = {};
RolePersist.Enabled                 =                       `I will now record users roles and give them back when they join!`;
RolePersist.Disable                 =                       `I will no longer record users roles and give them back when they join!`;
RolePersist.AddingUsers             = (amount) =>           `Adding ${amount} users!`;
RolePersist.AddingUsersDone         = (amount) =>           `Added ${amount} users!`;
RolePersist.UserNotFoundInDB        =                       `Sorry! That user is not found in our database`;
RolePersist.UserRemoved             =                       `Removed user from database`;
RolePersist.cleared                 =                       `Removed all users from db`;
RolePersist.ClearedMulti            = (r) =>                `Removed ${r} users from db`;
module.exports.RolePersist = RolePersist;

// Purge
let Purge = {};
Purge.DeletedMessages               = (num) =>              `Deleted ${num} messages!`;
Purge.RegexInvalid                  =                       `Invalid Regex`;
module.exports.Purge = Purge;

// Prefix
let Prefix = {};
Prefix.changed                      = (prefix) =>           `Prefix changed to: ${prefix}`;
Prefix.notChanged                   =                       `Prefix did not change`;
module.exports.Prefix = Prefix;

// DBans
let DBans = {};
DBans.reason                        = (report) =>           `User on DBans (https://bans.discordlist.net/)\nDBan Info:\nBan ID: ${report.case_id}\nReason: ${report.reason}\nProof: [Click me](${report.proof})`;
DBans.down                          =                       `OH NO! DBans might be down!`;
DBans.NoneOnDBans                   = (number) =>           `No users on dbans (Total Scanned ${number})`;
DBans.ScanResult                    = (s, b, e, res) =>     `${s} Members Scanned\nUsers on DBans: ${b}\nErrors: ${e}\nTo view all Members on DBans click here => <https://www.safetyatlast.net/logs/${res.logId}>`;
DBans.disabled                      =                       `DBans is disabled on this server`;
DBans.enable                        =                       `I will now check users on dbans.discordlist.net`;
DBans.disable                       =                       `I will no longer check users on dbans.discordlist.net`;
DBans.ActionSet                     = (action) =>           `I will now ${action} users`;
DBans.ActionSetNone                 =                       `I will do nothing`;
DBans.Scanning                      = (amount) =>           `Scanning ${amount} Members`;
module.exports.DBans = DBans;

// Filter
let Filter = {};
Filter.wordsAdded                   =                       `Words have been added`;
Filter.wordsRemoved                 =                       `Words have been removed`;
Filter.nothingToRemove              =                       `There is nothing to remove`;
Filter.Reason                       = (content) =>          `Server Filter - ${content}`;
Filter.Enabled                      =                       `I will now scan messages!`;
Filter.Disabled                     =                       `I will not scan messages!`;
Filter.ActionSet                    = (action) =>           `I will now ${action} users`;
Filter.ActionSetNone                =                       `I will do nothing`;
Filter.EnabledInvite                =                       `I will now scan messages for invites`;
Filter.EnabledIP                    =                       `I will now scan messages for ips`;
Filter.Enabledword                  =                       `I will now scan messages for listed words`;
module.exports.Filter = Filter;

// Autorole
let AutoRole = {};
AutoRole.enable                     =                       `I will now give people roles when they join!`;
AutoRole.disable                    =                       `I wont give people roles when they join!`;
AutoRole.roleAdded                  =                       `The role has been added`;
AutoRole.roleRemove                 =                       `The role has been removed`;
AutoRole.rolesRemove                =                       `The role or roles have been removed`;
module.exports.AutoRole = AutoRole;
