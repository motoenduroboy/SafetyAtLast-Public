module.exports.EnableOptions    = ["true", "on", "enable", "yep", "ye", "yeah", "yes", "y", "t", "1"]; // MUST BE LOWERCASE
module.exports.DisableOptions   = ["false", "off", "disable", "nope", "na", "nah", "no", "n", "f", "0"]; // MUST BE LOWERCASE

module.exports.Owner                =               `𝓜𝓸𝓽𝓸#0306 \nThanks to GRIMM_\\_\\_\\_#6413 for ideas, logo & hosting the bot!`;
module.exports.Cooldown_Message     =               `Calm down! 3 seconds remaining! The timer wont reset until you STAP!`;
module.exports.CantFindMember       =               `Sorry I can't find that member`;
module.exports.Success              =               `✅ | Success!`;
module.exports.ErrorOccured         =               `An error occurred!`;
module.exports.NotAModOrHigher      =               `You are not a mod or higher!`;
module.exports.CantFindThatUser     =               `Sorry I can't find that member!`;

// Roles
module.exports.CantFindRole         =               `We could not find that role`;
module.exports.DupeRole             =               `Duplicate role`;
module.exports.RemoveFail           =               `Role removal failed`;
module.exports.RoleDoesntExsist     =               `Role doesn't exist`;
module.exports.Removed              =               `Role removed`;
module.exports.Added                =               `Role added`;
module.exports.AddedFail            =               `Role addition failed`;
module.exports.RolesAdded           =               `The role or roles have been added`;

// Logging
let Logging = {};
Logging.MissingPermission           =               `❌ | I'm missing permissions in the log channel! \nIf this is a bug please report it by typing '&support'`;
Logging.MissingAccess               =               `❌ | I'm missing access in the log channel! \nIf this is a bug please report it by typing '&support'`;
module.exports.Logging = Logging;

module.exports.Requested_By         = (user) =>     `Requested by: ${user.username}`;

// Permissions
let Permissions = {};
Permissions.administrator           =               `You require 'administrator' permission`;
Permissions.NotEnoughPermsAdd       =               `I do not have enough permissions to add the role to that user!`;
Permissions.NotEnoughPermsRemove    =               `I do not have enough permissions to remove the role!`;
module.exports.Permissions = Permissions;

// Link
let Link = {};
Link.GlobalBlacklist                =               `Link on global blacklist`;
Link.MaliciousLink                  =               `Posting a malicious link`;
Link.ModOrHigher                    =               `You are not a mod or higher!`;
module.exports.Link = Link;

// Warn
let Warn = {};
Warn.DMMessage                      =                `❌ | You have been warned!`;
Warn.NoReason                       =                `___**No reason specified!**___`;
Warn.Removed                        = (id) =>        `Warn #${id} has been removed!`;
Warn.NoWarnsFound                   =                `No warns were found for this user!`;
Warn.WrongPerms                     =                `You lack the required permissions to view others warns!`;
module.exports.Warn = Warn;

// Muted
let Muted = {};
Muted.notMuted                      =                `That user is not muted!`;
module.exports.Muted = Muted;

// Purge
let Purge = {};
Purge.DeletedMessages               = (num) =>      `Deleted ${num} messages!`;
module.exports.Purge = Purge;

// Prefix
let Prefix = {};
Prefix.changed                      = (prefix) =>   `Prefix changed to: ${prefix}`;
Prefix.notChanged                   =               `Prefix did not change`;
module.exports.Prefix = Prefix;
