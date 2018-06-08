module.exports.EnableOptions    = ["true", "on", "enable", "yep", "ye", "yeah", "yes", "y", "t", "1"]; // MUST BE LOWERCASE
module.exports.DisableOptions   = ["false", "off", "disable", "nope", "na", "nah", "no", "n", "f", "0"]; // MUST BE LOWERCASE

module.exports.Owner                =                       `𝓜𝓸𝓽𝓸#0306 \nThanks to GRIMM_\\_\\_\\_#6413 for ideas, logo & hosting the bot!`;
module.exports.Cooldown_Message     =                       `Calm down! 3 seconds remaining! The timer wont reset until you STAP!`;
module.exports.CantFindMember       =                       `Sorry I can't find that member`;
module.exports.Success              =                       `✅ | Success!`;
module.exports.ErrorOccured         =                       `An error occurred!`;
module.exports.NotAModOrHigher      =                       `You are not a mod or higher!`;
module.exports.CantFindThatUser     =                       `Sorry I can't find that member!`;
module.exports.ChangedTo            = (setting, data) =>    `${setting} Changed to: ${data}`;

// Bypasses
let bypasses = {};
bypasses.UserBypassed               = (user) =>             `User '${user.username}#${user.discriminator}' bypassed!`;
bypasses.RoleBypassed               = (role) =>             `Role '${role.name}' bypassed!`;
bypasses.RoleIDBypassed             = (roleID) =>           `Role '${roleID}' bypassed!`;
bypasses.AllRemoved                 =                       `All bypasses Removed!`;

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
module.exports.Logging = Logging;

module.exports.Requested_By         = (user) =>             `Requested by: ${user.username}`;

// Permissions
let Permissions = {};
Permissions.administrator           =                       `You require 'administrator' permission`;
Permissions.NotEnoughPermsAdd       =                       `I do not have enough permissions to add the role to that user!`;
Permissions.NotEnoughPermsRemove    =                       `I do not have enough permissions to remove the role!`;
module.exports.Permissions = Permissions;

// Link
let Link = {};
Link.GlobalBlacklist                =                       `Link on global blacklist`;
Link.MaliciousLink                  =                       `Posting a malicious link`;
Link.GSBBad                         = (value) =>            `Bad Link (Google Safe Browsing): ${value}`;
Link.VTBad                          = (da) =>               `Bad Link (Virus Total): ${da.positives} detections!`;
Link.ModOrHigher                    =                       `You are not a mod or higher!`;
module.exports.Link = Link;

// Warn
let Warn = {};
Warn.DMMessage                      =                       `❌ | You have been warned!`;
Warn.NoReason                       =                       `___**No reason specified!**___`;
Warn.Removed                        = (id) =>               `Warn #${id} has been removed!`;
Warn.NoWarnsFound                   =                       `No warns were found for this user!`;
Warn.WrongPerms                     =                       `You lack the required permissions to view others warns!`;
Warn.ChatMessage                    = (user, reason) =>     `${user.username}#${user.discriminator} has been warned for the following reason: \n ${reason}`;
Warn.WrongPerms2                    = (user) =>             `The user ${user.username} has not been Warned because they are higher or equal rank than you!`;
Warn.WarnsCleared                   = (warns) =>            `${warns} warns were cleared!`;
module.exports.Warn = Warn;

// Muted
let Muted = {};
Muted.notMuted                      =                       `That user is not muted!`;
Muted.WrongPerms2                   = (user) =>             `The user ${user.username} has not been Muted because they are higher or equal rank than you!`;
module.exports.Muted = Muted;

// Purge
let Purge = {};
Purge.DeletedMessages               = (num) =>              `Deleted ${num} messages!`;
module.exports.Purge = Purge;

// Prefix
let Prefix = {};
Prefix.changed                      = (prefix) =>   `Prefix changed to: ${prefix}`;
Prefix.notChanged                   =               `Prefix did not change`;
module.exports.Prefix = Prefix;
